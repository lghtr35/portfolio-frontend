import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../helpers/conf";

export const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const projects = [];
    const projectsJSX = projects.map((value, index) => {});
  }, [dispatch]);
  return (
    <div>
      <div className="App"></div>
    </div>
  );
};
