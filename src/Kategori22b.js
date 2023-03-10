import React from "react";
import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const Kategori22b = () => {
  // State variables for showing/hiding results and empty result message
  const [showResults, setShowResults] = useState("");
  const [showEmptyResult, setShowEmptyResult] = useState("");

  // Define functions to handle clicks on info tooltip
  const [info, setInfo] = useState("");
  // Handler for showing info tooltip
  const onClickInfo = () => {
    setInfo(true);
  };
  // Handler for closing info tooltip
  const onClickClose = () => {
    setInfo(false);
  };

  // State variables for handling input fields and validation errors
  const [energikj, setEnergikj] = useState(false);
  const [energikcal, setEnergikcal] = useState(false);

  const [mettede, setMettede] = useState(false);
  const [fett, setFett] = useState(false);
  const [fettNull, setFettNull] = useState(false);
  const [protein, setProtein] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [karbohydratNull, setKarbohydratNull] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [salt, setSalt] = useState(false);
  const [saltNull, setSaltNull] = useState(false);

  // State variable for storing nutrition information entered by user
  const [nutrition, setNutrition] = useState({
    energikj: "",
    energikcal: "",
    mettede: "",
    fett: "",
    protein: "",
    karbohydrat: "",
    hvoravSukkerarter: "",
    kostfiber: "",
    salt: "",
  });

  // Handler for updating nutrition state based on input field changes
  const changeHandle = (event) => {
    console.log("changeHandle ===", event.target, event.target.value);
    setNutrition({
      ...nutrition,
      [event.target.name]: event.target.value,
    });
  };

  // Handler for submitting the form
  const onClick = () => {
    console.log("onclick ===", selectsPart, nutrition);
    // Check if all required fields are filled out and within valid ranges
    if (
      nutrition.mettede !== "" &&
      nutrition.fett !== "" &&
      nutrition.fett <= 10 &&
      nutrition.protein !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.karbohydrat <= 5 &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.salt !== "" &&
      nutrition.salt <= 2.5
    ) {
      // Sets the state to show the nutrition results
      setShowResults(true);
      // Hides the empty result message
      setShowEmptyResult(false);

      // Check if the user selected "energikj" and if nutrition input lable of "energikj" is not empty
      if (selectsPart === "energikj" && nutrition.energikj !== "") {
        setEnergikj(false);
      }

      // Check if the user selected "energikcal" and if nutrition input lable of "energikcal" is not empty
      if (selectsPart === "energikcal" && nutrition.energikcal !== "") {
        setEnergikcal(false);
      }
      // reset all nutrition input validation errors
      setMettede(false);
      setFett(false);
      setFettNull(false);
      setProtein(false);
      setKarbohydrat(false);
      setKarbohydratNull(false);
      setHvoravSukkerarter(false);
      setKostfiber(false);
      setSalt(false);
      setSaltNull(false);
      // If the user has not selected any nutrients, set errors accordingly
      // Check each nutrition value to see if it is missing or negative
      // show input validation errors if any input is missing or negative.
    } else {
      if (selectsPart === "energikj") {
        console.log("energikj ===", selectsPart, nutrition.energikj);
        if (nutrition.energikj === "" || nutrition.energikj < 0) {
          console.log("energikj ===", selectsPart, nutrition.energikj);
          setEnergikj(true);
          setShowResults(false);
          setShowEmptyResult(true);
        } else {
          setEnergikj(false);
        }
      }

      if (selectsPart === "energikcal") {
        console.log("energikcal ===", selectsPart, nutrition.energikcal);
        if (nutrition.energikcal === "" || nutrition.energikcal < 0) {
          console.log("energikcal ===", selectsPart, nutrition.energikcal);
          setEnergikcal(true);
          setShowResults(false);
          setShowEmptyResult(true);
        } else {
          setEnergikcal(false);
        }
      }

      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettede(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettede(false);
      }

      if (nutrition.fett === "" || nutrition.fett < 0) {
        setFettNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setFettNull(false);
      }
      if (nutrition.fett > 10) {
        setFett(true);
        setShowResults(false);
      } else {
        setFett(false);
      }

      if (nutrition.protein === "" || nutrition.protein < 0) {
        setProtein(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setProtein(false);
      }

      if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
        setKarbohydratNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydratNull(false);
      }
      if (nutrition.karbohydrat > 5) {
        setKarbohydrat(true);
        setShowResults(false);
      } else {
        setKarbohydrat(false);
      }

      if (
        nutrition.hvoravSukkerarter === "" ||
        nutrition.hvoravSukkerarter < 0
      ) {
        setHvoravSukkerarter(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setHvoravSukkerarter(false);
      }

      if (nutrition.kostfiber === "" || nutrition.kostfiber < 0) {
        setKostfiber(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiber(false);
      }

      if (nutrition.salt === "" || nutrition.salt < 0) {
        setSaltNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSaltNull(false);
      }
      if (nutrition.salt > 2.5) {
        setSalt(true);
        setShowResults(false);
      } else {
        setSalt(false);
      }
    }
  };

  // create an array of energy units to select from
  const selectUnit = [
    {
      value: "energikj",
      label: "(kj)",
    },
    {
      value: "energikcal",
      label: "(kcal)",
    },
  ];

  // Declare a state variable for the select dropdown.
  const [selectsPart, setSelectPart] = useState("");

  // A function to handle changes to the selected energy unit
  const handlerPart = (event) => {
    const inputVal = document.getElementsByName(event.value);
    console.log("handlerPart ===", event, nutrition, inputVal);
    setSelectPart(event.value);
  };

  return (
    <div className="row">
      <h5>Porsjon (gram) 100</h5>

      {/* This div creates a column layout for the left side of the table */}
      <div className="col-md-6">
        {/* This div adds a light background color to the table */}
        <div className="bg-light">
          {/* This table shows the nutritional information */}
          <table className="table table-striped">
            {/* The table header */}
            <thead>
              <tr>
                <th scope="col" className="table-font">
                  Energi eller n??ringsstoff
                </th>
                <th scope="col" className="table-font">
                  Mengde
                </th>
              </tr>
            </thead>

            {/* The table body */}
            <tbody>
              {/* A row for selecting the energy unit */}
              <tr className={(energikj, energikcal ? "alert-box" : null)}>
                <th scope="row" className="table-font">
                  {/* An icon with a tooltip to indicate missing values in energy parameters */}
                  {energikj && energikcal ? (
                    <Tooltip
                      title="Mangler verdi i energi (kJ/Kcal) parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  {/* This div displays the energy label and unit */}
                  <div className="row">
                    <div className="col-md-3">
                      <label for="energiunit" class="form-label">
                        Energi
                      </label>
                    </div>
                    {/* A dropdown menu for selecting the energy unit */}
                    <div className="col-md-6">
                      <Select
                        placeholder={<div>Velg enhet</div>}
                        className="form-select-md mb-3"
                        options={selectUnit}
                        onChange={(e) => handlerPart(e)}
                      />
                    </div>
                  </div>
                </th>
                {/* An input field for entering the energy value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name={selectsPart}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* Additional rows for other nutrient selections */}
              <tr className={mettede ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {fett ? (
                    <Tooltip
                      title="Mangler verdi i mettede fettsyrer parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Mettede fettsyrer (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="mettede"
                    value={nutrition.mettede}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr
                className={
                  fett ? "alert-box" : null || fettNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {fett ? (
                    <Tooltip
                      title="Produktet innfrir ikke N??kkelhullet p?? grunn av mengden fett. Mengden p?? fett m?? v??re lavere enn eller lik 10 g / 100 g for ?? m??te kravene for N??kkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {fettNull ? (
                    <Tooltip
                      title="Mangler verdi i fett parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Fett (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="fett"
                    value={nutrition.fett}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={protein ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {protein ? (
                    <Tooltip
                      title="Mangler verdi i protein parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Protein (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="protein"
                    value={nutrition.protein}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr
                className={
                  karbohydrat
                    ? "alert-box"
                    : null || karbohydratNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {karbohydrat ? (
                    <Tooltip
                      title="Produktet innfrir ikke N??kkelhullet p?? grunn av mengden sukkerarter. Mengden p?? sukkerarter m?? v??re lavere enn eller lik 5 g / 100 g for ?? m??te kravene for N??kkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {karbohydratNull ? (
                    <Tooltip
                      title="Mangler verdi i karbohydrat parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Karbohydrat (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="karbohydrat"
                    value={nutrition.karbohydrat}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={hvoravSukkerarter ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {hvoravSukkerarter ? (
                    <Tooltip
                      title="Mangler verdi i hvorav sukkerarter parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  ??? Hvorav tilsatte sukkerarter (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="hvoravSukkerarter"
                    value={nutrition.hvoravSukkerarter}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={kostfiber ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {kostfiber ? (
                    <Tooltip
                      title="Mangler verdi i kostfiber parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  ??? Kostfiber (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="kostfiber"
                    value={nutrition.kostfiber}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr
                className={
                  salt ? "alert-box" : null || saltNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {salt ? (
                    <Tooltip
                      title="Produktet innfrir ikke N??kkelhullet p?? grunn av mengden salt. Mengden p?? salt m?? v??re lavere enn eller lik 2.5 g / 100 g for ?? m??te kravene for N??kkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {saltNull ? (
                    <Tooltip
                      title="Mangler verdi i salt parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Salt (g)
                </th>
                <td colSpan="2">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="salt"
                    value={nutrition.salt}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Button that submits the form and calls the onClick function */}
        <div className="col-12 button-div">
          <button
            type="submit"
            className="btn btn-primary btn-lg button-search"
            onClick={onClick}
          >
            S??k
          </button>
        </div>
      </div>

      <div className="col-md-6">
        {/* If showResults is true, display the container with class "n??kkelhullet-food-result-container" */}
        {showResults ? (
          <div className="container n??kkelhullet-food-result-container">
            <img
              src={keyholeLgog}
              className="keyhole-logo img-fluid"
              alt="keyhole logo"
            />
            <h5>N??kkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir N??kkelhullet. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon
                  className="info-button"
                  icon={faCircleInfo}
                  onClick={onClickInfo}
                />
              </div>
            </div>
            {info ? (
              <div className="container info-div row">
                <div className="col-md-10">
                  {/* A paragraph with a link to Lovdata's "Forskrift om frivillig merking a n??ringsmidler med Nokkellhullet" */}
                  <p>
                    Les mer om hvilke krav det stilles for merking av
                    Nokkellhullet p?? Lovdatas "Forskrift om frivillig merking a
                    n??ringsmidler med Nokkellhullet":
                    <a
                      href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lovdata.no
                    </a>
                  </p>
                </div>
                <div className="col-md-2">
                  {/* An icon button with class "x-button" that triggers the onClickClose function when clicked */}
                  <FontAwesomeIcon
                    className="x-button"
                    icon={faXmarkCircle}
                    onClick={onClickClose}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        {/* If showResults is false, display the container with class "n??kkelhullet-food-negResult-container" */}
        {showResults === false && (
          <div className="container n??kkelhullet-food-negResult-container">
            <h5>N??kkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke N??kkelhullet.</p>
                {showEmptyResult ? (
                  <p>** Obligatoriske n??ringsverdier kan ikke v??re tomme.</p>
                ) : null}

                {fett ? (
                  <p>
                    ** Annet fett enn fiskefett verdien kan v??re h??yst 10 g/100
                    g.
                  </p>
                ) : null}

                {karbohydrat ? (
                  <p>** Sukkerarter verdien kan v??re h??yst 5 g/100 g.</p>
                ) : null}
                {salt ? (
                  <p>** Salt verdien kan v??re h??yst 2.5 g/100 g.</p>
                ) : null}
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon
                  className="info-button"
                  icon={faCircleInfo}
                  onClick={onClickInfo}
                />
              </div>
            </div>
            {info ? (
              <div className="container info-div row">
                <div className="col-md-10">
                  <p>
                    Les mer om hvordan oppn?? kriteriene p?? Lovdata???s Forskrift
                    om frivillig merking av n??ringsmidler med N??kkelhullet:
                    <a
                      href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lovdata.no
                    </a>
                  </p>
                </div>
                <div className="col-md-2">
                  <FontAwesomeIcon
                    className="x-button"
                    icon={faXmarkCircle}
                    onClick={onClickClose}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Spacer */}
        <div style={{ padding: "5px" }}></div>

        {/* Display results for ern??ringsp??stander if showResults is true */}
        {showResults ? (
          <div
            className="container ern??ringsp??stander-food-result-container"
            style={{ background: "#f2f0b5" }}
          >
            <h5>Ern??ringsp??stander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        ) : null}

        {/* Display results for ern??ringsp??stander if showResults is false */}
        {showResults === false && (
          <div className="container ern??ringsp??stander-food-negResult-container">
            <h5>Ern??ringsp??stander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        )}

        {/* Spacer */}
        <div style={{ padding: "5px" }}></div>

        {/* Display results for helsep??stander if showResults is true */}
        {showResults ? (
          <div
            className="container helsep??stander-food-result-container"
            style={{ background: "#f2f0b5" }}
          >
            <h5>Helsep??stander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        ) : null}

        {/* Display results for helsep??stander if showResults is false */}
        {showResults === false && (
          <div className="container helsep??stander-food-negResult-container">
            <h5>Helsep??stander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kategori22b;
