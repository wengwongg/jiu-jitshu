"use client";

import { Formik, Form } from "formik";
import SessionFormFields from "./SessionFormFields";

export interface FormValues {
  sessionTitle: string;
  sessionDuration: number;
  sessionTime: string;
  trainingCategory: trainingCategory;
  techniqueName: string;
  techniqueType: techniqueType;
}

const initialValues = {
  sessionTitle: "",
  sessionDuration: 0,
  sessionTime: "00:00",
  trainingCategory: "",
  techniqueName: "",
  techniqueType: "",
};

export default function SessionForm() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col gap-5">
          <SessionFormFields />
        </Form>
      </Formik>
    </div>
  );
}
