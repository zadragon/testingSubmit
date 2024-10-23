import { Link, Outlet, useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  const books = [{ name: "book1" }, { name: "book2" }];
  return (
    <>
      <h1>Here are {nameOfMyUser}의 followers</h1>
      <ul>
        {books.map((item) => {
          return (
            <li>
              <Link to={item.name}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}
export default Followers;
