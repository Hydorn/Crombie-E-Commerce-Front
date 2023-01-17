import "./Styles/reviewModal.css";
import "./Styles/input.css";
import SubmitBtn from "./SubmitBtn";
import { useState } from "react";
import { useForm } from "react-hook-form";
import url from "constant";
import { useUserContext } from "Context/userContext";
import { useParams } from "react-router-dom";

type ReviewModalProps = {
  handleModal: (param: boolean) => void;
  modal: boolean;
};
type FormData = {
  punctuation: number;
  comments: string;
};

const NewReviewModal: React.FC<ReviewModalProps> = ({ handleModal, modal }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id: idUser } = useUserContext();
  const { id: idProyect } = useParams();

  const { handleSubmit, register } = useForm<FormData>();
  const { token } = useUserContext();

  const onSubmit = handleSubmit(async (data: FormData) => {
    const bodyReq = {
      ...data,
      idProyect,
      idUser,
    };

    try {
      setLoading(true);

      const res = await fetch(url + "/ratings", {
        body: JSON.stringify(bodyReq),
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const value = await res.json();

      if (!res.ok) {
        setError(value);
        setLoading(false);
        return;
      }
      setLoading(false);
      handleModal(!modal);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  });

  return (
    <div className="modal">
      <div onClick={() => handleModal(!modal)} className="modal_window" />
      <div className="modal_content">
        <h1 className="title">New review</h1>

        <form onSubmit={onSubmit} className="review_form">
          {/* // */}
          <label className="input_text">
            <input
              type="number"
              className="input"
              placeholder=" "
              {...register("punctuation")}
              min={1}
              max={5}
            />
            <span className="label">Punctuation</span>
            <span className="input_error">&#9888; Out of range</span>
          </label>
          {/* // */}
          <label className="input_text">
            <textarea
              className="input text_area"
              placeholder=" "
              {...register("comments")}
            />
            <span className="label">Comments</span>
            <span className="input_error">&#9888; This field is required</span>
          </label>
          <div className="error_cont">
            {error ? <span className="error">&#9888; {error}</span> : null}
            <SubmitBtn loading={loading} value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewReviewModal;
