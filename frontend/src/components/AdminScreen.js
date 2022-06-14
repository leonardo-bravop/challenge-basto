// import "./FormScreen.css";

const AdminScreen = ({ title, children }) => {
  return (
    <div className="admin-screen">
      <div className="page">
        {title && (
          <>
            <h1 className="heading">{title}</h1>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default AdminScreen;
