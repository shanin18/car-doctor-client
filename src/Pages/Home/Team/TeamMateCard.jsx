

const TeamMateCard = ({teamMate}) => {
    const {img, title, category} = teamMate;
    return (
        <div className="border rounded-lg p-6">
        <div>
          <div>
            <img
              src={img}
              className="w-full rounded-lg"
              alt="image"
            />
          </div>
          <div className="text-center space-y-3">
            <h2 className="mt-5 text-[#444444] font-bold text-2xl">{title}</h2>
            <p className="text-[#737373] font-semibold text-xl">{category}</p>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeamMateCard;