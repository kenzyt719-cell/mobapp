import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

import PersonalStart from "./PersonalStart";
import SubjectsStart from "./SubjectsStart";
import StressStart from "./StressStart";
import LearningStart from "./LearningStart";
import GoalsStart from "./GoalsStart";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [rowId, setRowId] = useState(null);

  const navigate = useNavigate(); 


  const createUser = async (data) => {
    const { data: res, error } = await supabase
      .from("users_selection_app")
      .insert([data])
      .select()
      .single();

    if (error) return alert(error.message);

    setRowId(res.id);
    setStep(2);
  };

  
  const updateData = async (fields, nextStep) => {
    if (!rowId) return alert("Missing user ID");

    const { error } = await supabase
      .from("users_selection_app")
      .update(fields)
      .eq("id", rowId);

    if (error) return alert(error.message);

    setStep(nextStep);
  };


  const finishOnboarding = async (value) => {
    if (!rowId) return alert("Missing user ID");

    const { error } = await supabase
      .from("users_selection_app")
      .update({
        study_per_day: value.study_per_day,
        biggest_challenge: value.biggest_challenge,
      })
      .eq("id", rowId);

    if (error) return alert(error.message);


    navigate("/");
  };

  return (
    <>
      {step === 1 && (
        <PersonalStart onNext={createUser} />
      )}

      {step === 2 && (
        <SubjectsStart
          onNext={(subjects) =>
            updateData(
              { subject: subjects.join(", ") },
              3
            )
          }
        />
      )}

      {step === 3 && (
        <StressStart
          onNext={(value) =>
            updateData({ your_feeling: value }, 4)
          }
        />
      )}

      {step === 4 && (
        <LearningStart
          onNext={(value) =>
            updateData({ learn_best: value }, 5)
          }
        />
      )}

      {step === 5 && (
        <GoalsStart onSubmit={finishOnboarding} />
      )}
    </>
  );
}