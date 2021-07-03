import React from "react";

import useStyles from "./style";

import WorkshopCard from "../../../components/workshopCard/WorkshopCard";

import CreateWorkshop from "../../../components/workshopCard/CreateWorkshop";

import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../config/firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

const Workshops = () => {
  const classes = useStyles();

  const [workshops, loading, error] = useCollection(db.collection("workshops").orderBy("date", "asc"));
  const user = useSelector(selectUser);

  return (
    <div className={classes.Workshops}>
      {user ? <CreateWorkshop /> : ""}
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      <div className={classes.cards}>
      {workshops?.docs.map((info) => (
            <WorkshopCard
              key={info.id}
              title={info.data().title}
              Project1={info.data().Project1}
              Project2={info.data().Project2}
              description={info.data().description}
              date={info.data().date}
              image={info.data().image}
            />
          ))}
      </div>
    </div>
  );
}

export default Workshops;
