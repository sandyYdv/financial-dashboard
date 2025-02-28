const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow-md flex items-center px-6 justify-between">
      <h1 className="text-lg font-semibold">Setting</h1>
      <input
        type="text"
        placeholder="Search for something"
        className="border p-2 rounded-md"
      />
    </div>
  );
};

export default Navbar;
