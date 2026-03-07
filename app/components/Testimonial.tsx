interface TestimonialProps {
  name: string;
  country: string;
  content: string;
  rating?: number;
  image?: string;
}

const Testimonial = ({
  name,
  country,
  content,
  rating = 5,
  image,
}: TestimonialProps) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? "text-blue-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg ml-3">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{country}</p>
        </div>
      </div>

      <div className="mb-3">{renderStars(rating)}</div>

      <p className="text-gray-700 leading-relaxed italic">"{content}"</p>
    </div>
  );
};

export default Testimonial;
