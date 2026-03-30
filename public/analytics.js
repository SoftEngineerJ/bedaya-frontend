// Bedaya Analytics Tracker
class BedayaAnalytics {
  constructor(config = {}) {
    this.apiBaseUrl =
      config.apiBaseUrl ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:8080";
    this.sessionId = this.getOrCreateSessionId();
    this.isTracking = false;
    this.currentPageStartTime = Date.now();
    this.lastPageUrl = window.location.pathname;

    // Initialize tracking
    this.init();
  }

  // Get or create session ID from cookies/localStorage
  getOrCreateSessionId() {
    let sessionId = this.getCookie("bedaya_session_id");

    if (!sessionId) {
      sessionId =
        "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      this.setCookie("bedaya_session_id", sessionId, 30); // 30 days
    }

    return sessionId;
  }

  // Cookie helpers
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  // Initialize tracking
  init() {
    // Track initial page view
    this.trackPageView();

    // Track page changes (for SPA routing)
    this.trackPageChanges();

    // Track page unload for time on page
    this.trackPageUnload();

    // Track visibility changes (tab focus/blur)
    this.trackVisibilityChanges();

    this.isTracking = true;
  }

  // Track page view
  trackPageView() {
    const pageData = this.getPageData();

    // Send to backend
    this.sendTrackingData(pageData);
  }

  // Get current page data
  getPageData() {
    return {
      sessionId: this.sessionId,
      pageUrl: window.location.pathname,
      pageTitle: document.title,
      userAgent: navigator.userAgent,
      ipAddress: null, // Will be filled by backend from request
      referrer: document.referrer || "",
      language: navigator.language,
      timeOnPage: Date.now() - this.currentPageStartTime,
      isExitPage: false, // Will be updated on page unload
      timestamp: Date.now(),
    };
  }

  // Send tracking data to backend
  async sendTrackingData(data) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/api/analytics/track`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.warn("Analytics tracking failed:", response.statusText);
      }
    } catch (error) {
      console.warn("Analytics tracking error:", error);
    }
  }

  // Track page changes for SPAs
  trackPageChanges() {
    // Track URL changes for Next.js/React Router
    let lastUrl = window.location.pathname;

    const checkUrlChange = () => {
      if (window.location.pathname !== lastUrl) {
        // Track time on previous page
        this.trackPageUnload();

        // Update for new page
        lastUrl = window.location.pathname;
        this.currentPageStartTime = Date.now();
        this.lastPageUrl = lastUrl;

        // Track new page
        setTimeout(() => this.trackPageView(), 100);
      }
    };

    // Check URL changes every second
    setInterval(checkUrlChange, 1000);

    // Also check on popstate (browser back/forward)
    window.addEventListener("popstate", checkUrlChange);
  }

  // Track page unload for time on page
  trackPageUnload() {
    const pageData = this.getPageData();
    pageData.timeOnPage = Date.now() - this.currentPageStartTime;
    pageData.isExitPage = true;

    // Use sendBeacon for reliable tracking on page unload
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(pageData)], {
        type: "application/json",
      });
      navigator.sendBeacon(`${this.apiBaseUrl}/api/analytics/track`, blob);
    } else {
      // Fallback for older browsers
      this.sendTrackingData(pageData);
    }
  }

  // Track visibility changes (tab focus/blur)
  trackVisibilityChanges() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        // Tab is hidden, track time on page
        this.trackPageUnload();
      } else {
        // Tab is visible again, reset start time
        this.currentPageStartTime = Date.now();
      }
    });
  }

  // Public method to manually track events
  track(eventName, properties = {}) {
    const eventData = {
      sessionId: this.sessionId,
      eventName,
      properties,
      pageUrl: window.location.pathname,
      timestamp: Date.now(),
    };

    this.sendEventData(eventData);
  }

  // Send custom event data
  async sendEventData(data) {
    try {
      await fetch(`${this.apiBaseUrl}/api/analytics/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.warn("Event tracking failed:", error);
    }
  }

  // Stop tracking
  stop() {
    this.isTracking = false;
    this.trackPageUnload();
  }
}

// Initialize tracker automatically
let bedayaAnalytics;

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    bedayaAnalytics = new BedayaAnalytics();
  });
} else {
  bedayaAnalytics = new BedayaAnalytics();
}

// Make available globally
window.BedayaAnalytics = BedayaAnalytics;
window.bedayaAnalytics = bedayaAnalytics;

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = BedayaAnalytics;
}
