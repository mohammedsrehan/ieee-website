import React from "react";
import CompetitionCard from "../../../components/competitionCard/CompetitionCard";

import useStyles from "./style";

import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../../../config/firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import CreateCompetition from "../../../components/competitionCard/CreateCompetition";


const Competitions = () => {
  const classes = useStyles();

  const [competitions, loading, error] = useCollection(db.collection('competitions'))
  const user = useSelector(selectUser);

  return (
    <div className={classes.Competitions}>
        { user ?
          <CreateCompetition /> : ''
        }
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
      <div className={classes.Competitions__cards}>
          {
            competitions?.docs.map((competition) => (
              <CompetitionCard 
                key={competition.id}
                title={competition.data().title}
                subTitle={competition.data().subTitle}
                Details1={competition.data().Details1}
                Details2={competition.data().Details2}
                Details3={competition.data().Details3}
                date={competition.data().date}
                image={competition.data().image}
              />
            ))
          }
      </div>
    </div>
  );
};

export default Competitions;
