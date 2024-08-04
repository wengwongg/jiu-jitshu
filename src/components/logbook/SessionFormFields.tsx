"use client";

import { Field, useFormikContext } from "formik";
import { useState } from "react";
import { FormValues } from "./SessionForm";

export default function SessionFormFields() {
  const { values }: { values: FormValues } = useFormikContext();
  const [techniques, setTechniques] = useState<string[]>([]);

  return (
    <>
      <Field name="sessionTitle" placeholder="Session title" />
      <Field name="sessionDuration" placeholder="00:00 hrs" />
      <Field type="time" name="sessionTime" value="00:00" />
      <Field as="select" name="trainingCategory">
        <option value="" disabled selected>
          Training category
        </option>
        <option value="no-gi">No Gi</option>
        <option value="gi">Gi</option>
        <option value="no-gi-comp">No Gi (Comp)</option>
        <option value="gi">Gi (Comp)</option>
        <option value="open-mat">Open mat</option>
      </Field>
      <Field name="techniqueName" placeholder="Name" />
      <Field as="select" name="techniqueType">
        <option value="" disabled selected>
          Type
        </option>
        <option value="throw">Throw</option>
        <option value="takedown">Takedown</option>
        <option value="choke">Choke</option>
        <option value="joint-lock">Joint lock</option>
        <option value="sweep">Sweep</option>
        <option value="position">Position</option>
      </Field>
      <button
        onClick={() => setTechniques([values.techniqueName, ...techniques])}
      >
        Add
      </button>
      {techniques.map((technique) => (
        <p key={technique}>{technique}</p>
      ))}
    </>
  );
}
