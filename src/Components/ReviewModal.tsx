import { useReviewContext } from "Context/useReviewContext";
import { useUserContext } from "Context/userContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Styles/reviewModal.css";
import "./Styles/input.css";
import StarRating from "./StarRating";
import SubmitBtn from "./SubmitBtn";
import url from "constant";

type ReviewModalProps = {
  handleModal: (param: boolean) => void;
  modal: boolean;
  id: string;
};
type FormData = {
  punctuation: number;
  comments: string;
};

const ReviewModal: React.FC<ReviewModalProps> = ({
  handleModal,
  modal,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleSubmit, register } = useForm<FormData>();
  const { dataFetch } = useReviewContext();
  const { token } = useUserContext();

  const [rating, setRating] = useState(0);
  const handleSetRating = (param: number) => {
    setRating(param);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);

      const bodyReq = {
        punctuation: rating,
        comments: data.comments,
      };

      const res = await fetch(url + "/ratings/" + id, {
        body: JSON.stringify(bodyReq),
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const value = await res.json();
      if (!res.ok) setError(value);
      setLoading(false);
      handleModal(!modal);
      dataFetch();
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  });

  return (
    <div className="modal">
      <div onClick={() => handleModal(!modal)} className="modal_window" />
      <div className="modal_content">
        <h1 className="title">Your review</h1>

        <form onSubmit={onSubmit} className="review_form">
          {/* // */}
          <label className="input_text">
            <StarRating rating={rating} handleSetRating={handleSetRating} />
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
export default ReviewModal;
