import LoadingSpiner from "Components/LoadingSpiner";
import NavBar from "Components/NavBar";
import SubmitBtn from "Components/SubmitBtn";
import UserPropery from "Components/UserProperty";
import url from "constant";
import { useUserContext } from "Context/userContext";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { FetchedProyect } from "Utilities/types";
/* eslint-disable */

const EditProyect = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [proyectData, setProyectData] = useState<FetchedProyect>();

  useEffect(() => {
    fetch(url + "/proyects/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProyectData(data);
      });
    console.log(proyectData);
  }, [id]);

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      setLoading(true);
      const res = await fetch(url + "/proyects/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const fetched = await res.json();

      setLoading(false);
      if (res.ok) return navigate("/administration");
      setError(fetched);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  });

  return (
    <>
      <NavBar />
      {proyectData ? (
        <div className="settings">
          <h1 className="settings_title">Edit Proyect</h1>
          <div className="settings_container">
            <FormProvider {...methods}>
              <form className="settings_form" onSubmit={onSubmit}>
                <UserPropery
                  name="Proyect Name: "
                  keyName="name"
                  value={proyectData.name}
                />
                <UserPropery
                  name="Description: "
                  keyName="description"
                  value={proyectData.description}
                />
                <UserPropery
                  name="Contact Email: "
                  keyName="contactEmail"
                  value={proyectData.contactEmail}
                />
                {error ? <span className="error">&#9888; {error}</span> : null}
                <div className="user_btn_container">
                  <SubmitBtn value={"Submit"} loading={loading} />
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      ) : (
        <LoadingSpiner size="big " />
      )}
    </>
  );
};
export default EditProyect;
