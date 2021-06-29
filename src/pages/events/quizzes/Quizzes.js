import React from "react";
import QuizCard from "../../../components/quizCard/quizCard";
import useStyles from "./style";
import CreateQuiz from "../../../components/quizCard/CreateQuiz";

import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../config/firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";


const Quizzes = () => {
  const classes = useStyles();

  const [quiz, loading, error] = useCollection(db.collection("quiz"));
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <CreateQuiz /> : ""}
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}

      <div className={classes.cards}>
        {quiz?.docs.map((info) => (
          <QuizCard
            key={info.id}
            title={info.data().title}
            description={info.data().description}
            date={info.data().date}
            image={info.data().image}
          />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
