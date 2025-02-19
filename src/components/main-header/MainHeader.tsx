import "./MainHeader.scss";

export const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header__image-container">
        <img
          src={`${import.meta.env.BASE_URL}/labs-react.png`}
          alt="Labs React logo"
          title="Labs React logo"
        />
      </div>
    </header>
  );
};
