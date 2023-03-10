// Import statements for React and other modules/components
import React from "react";
import { useState } from "react"; // import the useState hook
import Select from "react-select"; // import Select component
import "./App.css";

// Importing all the different components used in the website
import HeaderCalculator from "./HeaderCalculator";
import Kategori0 from "./Kategori0";

import Kategori1 from "./Kategori1";
import Kategori2 from "./Kategori2";
import Kategori3 from "./Kategori3";
import Kategori4 from "./Kategori4";
import Kategori5 from "./Kategori5";
import Kategori6 from "./Kategori6";
import Kategori7 from "./Kategori7";
import Kategori8a from "./Kategori8a";
import Kategori8b from "./Kategori8b";
import Kategori9 from "./Kategori9";
import Kategori10 from "./Kategori10";
import Melk11a from "./Melk11a";
import Melk11b from "./Melk11b";
import Melk12a from "./Melk12a";
import Melk12b from "./Melk12b";
import Melk13a from "./Melk13a";
import Melk13b from "./Melk13b";
import Melk14a from "./Melk14a";
import Melk14b from "./Melk14b";
import Melk15a from "./Melk15a";
import Melk15b from "./Melk15b";
import Kategori16 from "./Kategori16";
import Kategori17 from "./Kategori17";
import Kategori18 from "./Kategori18";
import Kategori19 from "./Kategori19";
import Kategori20 from "./Kategori20";
import Kategori21 from "./Kategori21";
import Kategori22a from "./Kategori22a";
import Kategori22b from "./Kategori22b";
import Kategori22c from "./Kategori22c";
import Kategori22d from "./Kategori22d";
import Kategori23 from "./Kategori23";
import Kategori24a1 from "./Kategori24a1";
import Kategori24a2 from "./Kategori24a2";
import Kategori24b1 from "./Kategori24b1";
import Kategori24b2 from "./Kategori24b2";
import Kategori24b3 from "./Kategori24b3";
import Kategori24b4 from "./Kategori24b4";
import Kategori24c1 from "./Kategori24c1";
import Kategori24c2 from "./Kategori24c2";

import Kategori25a from "./Kategori25a";
import Kategori25b from "./Kategori25b";
import Kategori26 from "./Kategori26";
import Kategori27 from "./Kategori27";
import Kategori28 from "./Kategori28";
import Kategori29 from "./Kategori29";
import Kategori30 from "./Kategori30";
import Kategori31 from "./Kategori31";
import Kategori32 from "./Kategori32";

// This code defines the options for four selectors, one for food groups and one for food categories within those groups and one for the sub foodcategories within those categories and the same logic for the last selector.

const Calculator = () => {
  // The first selector is for food groups (matvaregruppe).
  const selectOption = [
    {
      value: "gr??nnsaker, frukt, b??r og n??tter",
      label: "Gr??nnsaker, frukt, b??r og n??tter",
    },
    {
      value: "mel, gryn og ris",
      label: "Mel, gryn og ris",
    },
    { value: "gr??t, br??d og pasta", label: "Gr??t, br??d og pasta" },
    {
      value: "melk kategori",
      label: "Melk, syrnede melkeprodukter og vegetabilske alternativer",
    },
    {
      value: "ost og vegetabilske alternativer",
      label: "Ost og vegetabilske alternativer",
    },
    {
      value: "matfett og oljer",
      label: "Matfett og oljer",
    },
    {
      value: "fiskerivarer og produkter av fiskerivarer",
      label: "Fiskerivarer og produkter av fiskerivarer",
    },
    {
      value: "kj??tt og produkter som inneholder kj??tt",
      label: "Kj??tt og produkter som inneholder kj??tt",
    },
    {
      value: "helt eller delvis vegetabilske produkter",
      label: "Helt eller delvis vegetabilske produkter",
    },
    {
      value: "ferdigretter",
      label: "Ferdigretter",
    },
    {
      value: "dressinger og sauser",
      label: "Dressinger og sauser",
    },
  ];

  // The second selector is for food categories (matkategori).

  const selectGr??nnsaker = [
    {
      value: "kategori 1",
      label:
        "1. Gr??nnsaker, rotfrukter, belgvekster (unntatt pean??tter) og poteter. Produktene kan v??re foredlet. Uforedlede krydderurter omfattes ogs??.",
    },
    {
      value: "kategori 2",
      label:
        "2. Frukt og b??r som er uforedlet. Produktene kan likevel v??re varmebehandlet.",
    },
    {
      value: "kategori 3",
      label:
        "3. N??tter og pean??tter som er uforedlet. Produktene kan likevel v??re varmebehandlet.",
    },
  ];

  const selectMel = [
    {
      value: "kategori 4",
      label:
        "4. Mel, gryn og flak av korn som inneholder 100 % fullkorn av korndelens t??rrstoffinnhold. Kli og kim er unntatt fra kravet til fullkorn. Fullkornet kan helt eller delvis erstattes med gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) og rotfrukter for samme anvendelsesomr??de.",
    },
    {
      value: "kategori 5",
      label:
        "5. Ris som inneholder 100 % fullkorn av produktets t??rrstoffinnhold.",
    },
    {
      value: "kategori 6",
      label:
        "6. Kornblandinger og frokostblandinger som inneholder minst 55 % fullkorn av produktets t??rrstoffinnhold. Inneholder produktet gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter, medregnes ikke den andelen av produktet som utgj??res av disse ved beregningen av fullkornsmengden. Glutenfrie kornblandinger og frokostkorn skal inneholde minst 20 % fullkorn av produktets t??rrstoffinnhold.",
    },
  ];

  const selectGr??t = [
    {
      value: "kategori 7",
      label:
        "7. Gr??t og gr??tpulver (tilberedt if??lge produsentens anvisning) som inneholder minst 55 % fullkorn av produktets t??rrstoffinnhold.Inneholder produktet gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter, medregnes ikke den andelen av produktet som utgj??res av disse, ved beregningen av fullkornsmengden. Vilk??rene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 8a",
      label:
        "8. a) Br??d og br??dmikser hvor bare v??ske og eventuelt gj??r skal tilsettes, og som inneholder minst 30 % fullkorn av produktets t??rrstoffinnhold. Inneholder produktet gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter, medregnes ikke den andelen av produktet som utgj??res av disse, ved beregningen av fullkornsmengden. Produkter i gruppe 8 b) omfattes ikke. Glutenfrie br??d og br??dmikser skal inneholde minst 10 % fullkorn av produktets t??rrstoffinnhold. Vilk??rene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 8b",
      label:
        "8. b) Rugbr??d og andre rugbaserte produkter samt br??dmikser hvor bare v??ske og eventuelt gj??r skal tilsettes, som inneholder minst 35 % fullkorn av produktets t??rrstoffinnhold. I produktene skal minst 30 % av kornsortene v??re rug.Inneholder produktet gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter, medregnes ikke den andelen av produktet som utgj??res av disse, ved beregningen av fullkornsmengden. Vilk??rene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 9",
      label:
        "9. Knekkebr??d, skonroker og melmikser til slike produkter, hvor bare v??ske og eventuelt gj??r skal tilsettes. Produktet skal inneholde minst 50 % fullkorn av produktets t??rrstoffinnhold. Inneholder produktet gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter, medregnes ikke den andelen av produktet som utgj??res av disse, ved beregningen av fullkornsmengden. Tilsvarende glutenfrie produkter skal inneholde minst 15 % fullkorn av produktets t??rrstoffinnhold. Vilk??rene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 10",
      label:
        "10. Pasta (ikke fylt) Produktet skal inneholde minst 50 % fullkorn av produktets t??rrstoffinnhold. Inneholder produktet gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter, medregnes ikke den andelen av produktet som utgj??res av disse, ved beregningen av fullkornsmengden. Glutenfri pasta (ikke fylt) har ikke krav til fullkorn. Vilk??rene gjelder for produktets t??rrstoffinnhold.",
    },
  ];
  const selectSyrnede = [
    {
      value: "melk 11a",
      label:
        "11. a) Melk og syrnede melkeprodukter som er beregnet til ?? drikke, uten tilsatt smak. Tilsvarende laktosefrie produkter og laktosefrie melkedrikker omfattes ogs??.",
    },
    {
      value: "melk 11b",
      label:
        "11. b) Vegetabilske produkter med samme bruksomr??de som produkter i gruppe 11 a), uten tilsatt smak.",
    },
    {
      value: "melk 12a",
      label:
        "12. a) Syrnede melkeprodukter som ikke er beregnet til ?? drikke, uten tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
    {
      value: "melk 12b",
      label:
        "12. b) Vegetabilske produkter med samme bruksomr??de som produkter i gruppe 12 a), uten tilsatt smak.",
    },
    {
      value: "melk 13a",
      label:
        "13. a) (Ikke vegetabilske) Syrnede melkeprodukter som ikke er beregnet til ?? drikke, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
    {
      value: "melk 13b",
      label:
        "13. b) (Vegetabilske) Syrnede melkeprodukter som ikke er beregnet til ?? drikke, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
    {
      value: "melk 14a",
      label:
        "14. a) (Ikke vegetabilske) Produkter som best??r av en blanding av melk og fl??te med samme bruksomr??de som fl??te og tilsvarende syrnede produkter, uten tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
    {
      value: "melk 14b",
      label:
        "14. b) (Helt eller delvis vegetabilske) Produkter som best??r av en blanding av melk og fl??te med samme bruksomr??de som fl??te og tilsvarende syrnede produkter, uten tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
    {
      value: "melk 15a",
      label:
        "15. a) (Ikke vegetabilske) Produkter som best??r av en blanding av melk og fl??te med samme bruksomr??de som fl??te og tilsvarende syrnede produkter, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
    {
      value: "melk 15b",
      label:
        "15. b) (Helt eller delvis vegetabilske) Produkter som best??r av en blanding av melk og fl??te med samme bruksomr??de som fl??te og tilsvarende syrnede produkter, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes ogs??.",
    },
  ];

  const selectOst = [
    {
      value: "kategori 16",
      label:
        " 16. (Ikke vegetabilske) Oster, unntatt ferskoster og tilsvarende produkter. Produktene kan v??re tilsatt smak.",
    },
    {
      value: "kategori 17",
      label:
        "17. (Helt eller delvis vegetabilske) Oster, unntatt ferskoster og tilsvarende produkter. Produktene kan v??re tilsatt smak.",
    },
    {
      value: "kategori 18",
      label:
        "18. Ferskoster og tilsvarende produkter. Produktene kan v??re tilsatt smak.",
    },
  ];

  const selectMatfett = [
    {
      value: "kategori 19",
      label:
        "19. Matfett og matfettblandinger. Produktene kan v??re tilsatt smak.",
    },
    {
      value: "kategori 20",
      label:
        "20. Matoljer, flytende matfett og flytende matfettblandinger. Produktene kan v??re tilsatt smak.",
    },
  ];

  const selectFiskerivarer = [
    {
      value: "kategori 21",
      label:
        "21. Fiskerivarer og levende muslinger. Produktene kan v??re bearbeidede.",
    },
    {
      value: "kategori 22",
      label:
        "22. Produkter framstilt av minst 50 % foredlede fiskerivarer. Produktet kan inneholde saus eller lake. Prosentandelen og vilk??rene gjelder for den delen av produktet som er beregnet til ?? spise. Produktet kan v??re panert, hvis tilberedningen if??lge produsentens anvisning, ikke tilf??rer produktet fett.",
    },
  ];

  const selectKj??tt = [
    {
      value: "kategori 23",
      label: "23. Kj??tt som er uforedlet.",
    },
    {
      value: "kategori 24",
      label:
        "24. Kj??tt og produkter som inneholder kj??tt. Minst 50 % av produktet skal v??re framstilt av kj??tt, korn (100 % fullkorn), gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter) eller rotfrukter. Innholdet av kj??tt skal likevel v??re minst 20 % av produktet. Dette gjelder ikke for leverpostei som skal inneholde minst 35 % kj??tt. Produktet kan inneholde saus eller lake. Prosentandelen og vilk??rene gjelder for den delen av produktet som er beregnet til ?? spise. Produktet kan v??re panert, hvis tilberedningen if??lge produsentens anvisning, ikke tilf??rer produktet fett.",
    },
  ];

  const selectVegetabliske = [
    {
      value: "kategori 25",
      label:
        "25. Helt eller delvis vegetabilske produkter med samme anvendelsesomr??de som fiske- og kj??ttprodukter i gruppene 22 og 24. Produktet skal best?? av minst 50 % korn (100 % fullkorn), gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter eller ikke-animalsk protein. Produktet skal ikke inneholde kj??tt eller fiskerivarer. Produktet kan inneholde saus eller lake. Prosentandelen og vilk??rene gjelder for den delen av produktet som er beregnet til ?? spise. Produktet kan v??re panert, hvis tilberedningen if??lge produsentens anvisning, ikke tilf??rer produktet fett.",
    },
  ];

  const selectFerdig = [
    {
      value: "kategori 26",
      label:
        "26. Ferdigretter med gr??nnsaker, en proteindel og en karbohydratdel. Produkter med: ??? minst 28 g gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter eller frukt og b??r per 100 g produkt, ??? en proteindel, og ??? en karbohydratdel, og som ikke er omfattet av gruppene 27, 28, 29, eller 30. Hvis rettens karbohydratdel inneholder korn, skal denne delen oppfylle kravet til fullkorn som er gitt i den relevante n??ringsmiddelgruppen. Hvis glutenfri pasta inng??r i retten, gjelder kravet til kostfiber i gruppe 10.",
    },
    {
      value: "kategori 27",
      label:
        "27. Ferdigretter med gr??nnsaker og eventuelt en proteindel eller en karbohydratdel. Produkter med: ??? minst 50 g gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter eller frukt og b??r per 100 g produkt, og eventuelt ??? en proteindel, eller ??? en karbohydratdel. Hvis retten inneholder en korndel, skal denne oppfylle kravet til fullkorn som er gitt i den relevante n??ringsmiddelgruppen. Hvis glutenfri pasta inng??r, gjelder kravet til kostfiber i gruppe 10.",
    },
    {
      value: "kategori 28",
      label:
        "28. Piroger, pizzaer, v??rruller, andre paier enn dessertpaier og lignende produkter. Produktet skal inneholde minst 28 g gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter, eller frukt og b??r per 100 g produkt. Inneholder produktet en korndel, skal denne inneholde minst 30 % fullkorn beregnet ut fra korndelens t??rrstoffinnhold. Inneholder produktet minst 50 % gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter, eller frukt og b??r per 100 g produkt, skal produktets eventuelle korndel inneholde minst 15 % fullkorn beregnet ut fra korndelens t??rrstoffinnhold. Er korndelen glutenfri, skal den inneholde minst 10 % fullkorn, beregnet ut fra korndelens t??rrstoffinnhold.",
    },
    {
      value: "kategori 29",
      label:
        "29. Sm??rbr??d, bagetter, wraps og lignende produkter. Produktet skal inneholde minst 25 g gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter eller frukt og b??r per 100 g produkt. Inneholder produktet en korndel, skal denne inneholde minst 30 % fullkorn, beregnet ut fra korndelens t??rrstoffinnhold. Inneholder produktet minst 50 % gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter eller frukt og b??r per 100 g produkt, skal produktets eventuelle korndel inneholde minst 15 % fullkorn beregnet ut fra korndelens t??rrstoffinnhold. Er korndelen glutenfri, skal den inneholde minst 10 % fullkorn, beregnet ut fra korndelens t??rrstoffinnhold.",
    },
    {
      value: "kategori 30",
      label:
        "30. Supper. Produktet skal inneholde minst 35 g gr??nnsaker (unntatt poteter), belgvekster (unntatt pean??tter), rotfrukter eller frukt og b??r per 100 g suppe. Inneholder produktet en korndel, skal denne oppfylle kravet til fullkorn som er gitt i den relevante n??ringsmiddelgruppen. Hvis glutenfri pasta inng??r, gjelder kravet til kostfiber i gruppe 10.",
    },
  ];

  const selectDressinger = [
    {
      value: "kategori 31",
      label:
        "31. Dressinger av olje og eddik. Produktene kan v??re tilsatt smak.",
    },
    {
      value: "kategori 32",
      label:
        "32. Sauser til middagsretter (ferdige produkter og produkter tilberedt if??lge produsentens anvisning).",
    },
  ];

  const SelectSub22 = [
    {
      value: "kategori 22 a",
      label:
        "22. a) Produkter som verken omfattes som p??leggsprodukter, skivet, r??kt eller gravet fisk, eller kaviar og andre halvkonserver av fisk.",
    },
    {
      value: "kategori 22 b",
      label: "22. b) P??leggsprodukter, skivet.",
    },
    {
      value: "kategori 22 c",
      label: "22. c) R??kt eller gravet fisk.",
    },
    {
      value: "kategori 22 d",
      label: "22. d) Kaviar og andre halvkonserver av fisk.",
    },
  ];

  const SelectSub24 = [
    {
      value: "kategori 24 a",
      label:
        "24. a) R?? produkter av hele eller utsk??rne kj??ttstykker som er overflatemarinert eller krydret.",
    },
    {
      value: "kategori 24 b",
      label:
        "24. b) R?? eller spiseklare produkter som inneholder kvernet kj??tt.",
    },

    {
      value: "kategori 24 c",
      label:
        "24. c) Spiseklare eller r??kte produkter som inneholder helt eller utsk??ret kj??tt, og som ikke omfattes som r?? produkter av hele eller utsk??rne kj??ttstykker som er overflatemarinert eller krydret.",
    },
  ];

  const SelectSub25 = [
    {
      value: "kategori 25 a",
      label: "25. a) Skivede p??leggsprodukter",
    },
    {
      value: "kategori 25 b",
      label: "25. b) For ??vrige produkter ",
    },
  ];

  const SelectFragment24a = [
    {
      value: "kategori 24 a 2",
      label: "- for stikksaltede produkter likevel",
    },
    {
      value: "kategori 24 a 1",
      label: "- for ??vrige produkter",
    },
  ];

  const SelectFragment24b = [
    {
      value: "kategori 24 b 2",
      label: "- for p??lser likevel",
    },
    {
      value: "kategori 24 b 3",
      label: "- for p??leggsp??lser likevel",
    },
    {
      value: "kategori 24 b 4",
      label: "- for karbonadedeig likevel",
    },
    {
      value: "kategori 24 b 1",
      label: "-for ??vrige produkter",
    },
  ];

  const SelectFragment24c = [
    {
      value: "kategori 24 c 2",
      label: "- for p??leggsprodukter likevel",
    },
    {
      value: "kategori 24 c 1",
      label: "- for ??vrige produkter.",
    },
  ];

  // Define state variables for the dropdown selectors
  const [selectsGroup, setSelectGroups] = useState(""); // for the "Group" selector

  const [selectsProduct, setSelectProduct] = useState(""); // for the "Product" selector

  const [selectsFragment, setSelectFragment] = useState(""); // for the "Fragment" selector
  const [selectsRation, setSelectRation] = useState(""); // for the "Ration" selector

  // Define event handlers for when a selection is made in each dropdown
  const handlerGroup = (event) => {
    setSelectGroups(event.value); // update state variable for "Group" selector
  };

  const handlerProduct = (event) => {
    setSelectProduct(event.value); // update state variable for "Product" selector
  };

  const handlerFragment = (event) => {
    setSelectFragment(event.value); // update state variable for "Fragment" selector
  };

  const handlerRation = (event) => {
    setSelectRation(event.value); // update state variable for "Ration" selector
  };

  // This component returns a form that allows users to input nutritional data for a food item.
  // It includes various fields for selecting the food name, food group, and food category.
  // The options for the fields change based on the selected food group.
  return (
    // Use Bootstrap classes to style the form.
    <div className="vstack gap-3 container">
      <HeaderCalculator />

      <div className="row">
        <div className="col-md-6">
          <h3>Legg inn n??ringsinnhold</h3>
          {/* Add a label for the food name input */}
          <label for="matnavn" class="form-label">
            <strong>Matvarenavn</strong>
          </label>

          {/* use Bootstrap classes to style the food name input */}
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-describedby="matnavn"
            />
          </div>

          {/* Add a label for the food group select input */}
          <label for="matgruppe" class="form-label">
            <strong>Matvaregruppe</strong>
          </label>

          {/* Use the react-select component to style the food group select input and provide options */}
          <Select
            placeholder={<div>Velg matvaregruppe</div>}
            className="form-select-md mb-3"
            onChange={handlerGroup}
            options={selectOption}
          />

          {/* Use conditional rendering to show the food category select input based on the selected food group */}
          {selectsGroup === "gr??nnsaker, frukt, b??r og n??tter" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>

              {/* Use the react-select component to style the food category select input and provide options for the selected food group */}
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectGr??nnsaker}
              />
            </div>
          )}

          {/* Repeat the above conditional rendering for each food group, showing the relevant food category select input based on the selected food group */}
          {selectsGroup === "mel, gryn og ris" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectMel}
              />
            </div>
          )}
          {selectsGroup === "gr??t, br??d og pasta" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectGr??t}
              />
            </div>
          )}
          {selectsGroup === "melk kategori" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectSyrnede}
              />
            </div>
          )}
          {selectsGroup === "ost og vegetabilske alternativer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectOst}
              />
            </div>
          )}
          {selectsGroup === "matfett og oljer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectMatfett}
              />
            </div>
          )}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectFiskerivarer}
              />
            </div>
          )}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectKj??tt}
              />
            </div>
          )}
          {selectsGroup === "helt eller delvis vegetabilske produkter" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectVegetabliske}
              />
            </div>
          )}
          {selectsGroup === "ferdigretter" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectFerdig}
              />
            </div>
          )}
          {selectsGroup === "dressinger og sauser" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectDressinger}
              />
            </div>
          )}
          {selectsProduct === "kategori 22" && (
            <div>
              <label for="matdivision" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerFragment}
                options={SelectSub22}
              />
            </div>
          )}
          {selectsProduct === "kategori 24" && (
            <div>
              <label for="matdivision" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerFragment}
                options={SelectSub24}
              />
            </div>
          )}
          {selectsProduct === "kategori 25" && (
            <div>
              <label for="matdivision" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerFragment}
                options={SelectSub25}
              />
            </div>
          )}
          {selectsFragment === "kategori 24 a" && (
            <div>
              <label for="matration" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerRation}
                options={SelectFragment24a}
              />
            </div>
          )}
          {selectsFragment === "kategori 24 b" && (
            <div>
              <label for="matration" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerRation}
                options={SelectFragment24b}
              />
            </div>
          )}
          {selectsFragment === "kategori 24 c" && (
            <div>
              <label for="matration" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerRation}
                options={SelectFragment24c}
              />
            </div>
          )}
        </div>

        <div className="col-md-6">
          {/* Heading for the column */}
          <h3>Mulige ern??rings- og helsep??stander</h3>

          {/* Description of what the user should do */}
          <p>
            Trykk p?? "s??k"-knappen for ?? se resultatet. F??rst m?? du sette
            ern??ringsverdiene inne i ern??ringskolonnen. Resultatet vises p??
            h??yre side. Hvis en "feil" oppst??r, hold musepekeren over feilikonet
            i venstre kolonne for ?? se detaljene om den spesifikke feilen.
          </p>
        </div>

        {/* Conditional rendering based on user selection */}
        <div>
          {/* Display default component if no group is selected */}
          {selectsGroup === "" && <Kategori0 />}
          {/* Display default component if group is selected but no product is selected */}
          {selectsGroup === "gr??nnsaker, frukt, b??r og n??tter" &&
            selectsProduct === "" && <Kategori0 />}
          {/* Display component for Kategori1 if group is selected as gr??nnsaker, frukt, b??r og n??tter and Kategori1 is selected as product */}
          {selectsGroup === "gr??nnsaker, frukt, b??r og n??tter" &&
            selectsProduct === "kategori 1" && <Kategori1 />}
          {/* Display component for Kategori2 if group is selected as gr??nnsaker, frukt, b??r og n??tter and Kategori2 is selected as product */}
          {selectsGroup === "gr??nnsaker, frukt, b??r og n??tter" &&
            selectsProduct === "kategori 2" && <Kategori2 />}

          {/* Display component for Kategori3 if group is selected as gr??nnsaker, frukt, b??r og n??tter and Kategori3 is selected as product */}
          {selectsGroup === "gr??nnsaker, frukt, b??r og n??tter" &&
            selectsProduct === "kategori 3" && <Kategori3 />}

          {/* Display default component if group is selected as mel, gryn og ris but no product is selected */}
          {selectsGroup === "mel, gryn og ris" && selectsProduct === "" && (
            <Kategori0 />
          )}
          {/* Display component for Kategori4 if group is selected as mel, gryn og ris and Kategori4 is selected as product */}
          {selectsGroup === "mel, gryn og ris" &&
            selectsProduct === "kategori 4" && <Kategori4 />}
          {/* Display component for Kategori5 if group is selected as mel, gryn og ris and Kategori5 is selected as product */}
          {selectsGroup === "mel, gryn og ris" &&
            selectsProduct === "kategori 5" && <Kategori5 />}
          {/* Display component for Kategori6 if group is selected as mel, gryn og ris and Kategori6 is selected as product */}
          {selectsGroup === "mel, gryn og ris" &&
            selectsProduct === "kategori 6" && <Kategori6 />}

          {/* Display default component if group is selected as gr??t, br??d og pasta but no product is selected */}
          {selectsGroup === "gr??t, br??d og pasta" && selectsProduct === "" && (
            <Kategori0 />
          )}
          {/* Display component for kategori 7 if group is selected as gr??t, br??d og pasta and product is kategori 7 */}
          {selectsGroup === "gr??t, br??d og pasta" &&
            selectsProduct === "kategori 7" && <Kategori7 />}
          {/* Display component for kategori 8a if group is selected as gr??t, br??d og pasta and product is kategori 8a */}
          {selectsGroup === "gr??t, br??d og pasta" &&
            selectsProduct === "kategori 8a" && <Kategori8a />}
          {/* Display component for kategori 8b if group is selected as gr??t, br??d og pasta and product is kategori 8b */}
          {selectsGroup === "gr??t, br??d og pasta" &&
            selectsProduct === "kategori 8b" && <Kategori8b />}
          {/* Display component for kategori 9 if group is selected as gr??t, br??d og pasta and product is kategori 9 */}
          {selectsGroup === "gr??t, br??d og pasta" &&
            selectsProduct === "kategori 9" && <Kategori9 />}
          {/* Display component for kategori 10 if group is selected as gr??t, br??d og pasta and product is kategori 10 */}
          {selectsGroup === "gr??t, br??d og pasta" &&
            selectsProduct === "kategori 10" && <Kategori10 />}

          {/* Display default component if group is selected as melk kategori but no product is selected */}
          {selectsGroup === "melk kategori" && selectsProduct === "" && (
            <Kategori0 />
          )}
          {/* Display component for melk 11a if group is selected as melk kategori and product is melk 11a */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 11a" && <Melk11a />}
          {/* Display component for melk 11b if group is selected as melk kategori and product is melk 11b */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 11b" && <Melk11b />}
          {/* Display component for melk 12a if group is selected as melk kategori and product is melk 12a */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 12a" && <Melk12a />}
          {/* Display component for melk 12b if group is selected as melk kategori and product is melk 12b */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 12b" && <Melk12b />}
          {/* Display component for melk 13a if group is selected as melk kategori and product is melk 13a */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 13a" && <Melk13a />}
          {/* Display component for melk 13b if group is selected as melk kategori and product is melk 13b */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 13b" && <Melk13b />}
          {/* Display component for melk 14a if group is selected as melk kategori and product is melk 14a */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 14a" && <Melk14a />}
          {/* Display component for melk 14b if group is selected as melk kategori and product is melk 14b */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 14b" && <Melk14b />}
          {/* Display component for melk 15a if group is selected as melk kategori and product is melk 15a */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 15a" && <Melk15a />}
          {/* Display component for melk 15b if group is selected as melk kategori and product is melk 15b */}
          {selectsGroup === "melk kategori" &&
            selectsProduct === "melk 15b" && <Melk15b />}

          {/* Repeat the above conditional rendering code that renders a different component based on the user's selection of product category, group, and subcategory.  */}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "" && <Kategori0 />}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "kategori 16" && <Kategori16 />}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "kategori 17" && <Kategori17 />}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "kategori 18" && <Kategori18 />}

          {selectsGroup === "matfett og oljer" && selectsProduct === "" && (
            <Kategori0 />
          )}
          {selectsGroup === "matfett og oljer" &&
            selectsProduct === "kategori 19" && <Kategori19 />}
          {selectsGroup === "matfett og oljer" &&
            selectsProduct === "kategori 20" && <Kategori20 />}

          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "" && <Kategori0 />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 21" && <Kategori21 />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22" &&
            selectsFragment === "" && <Kategori0 />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22" &&
            selectsFragment === "kategori 22 a" && <Kategori22a />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22" &&
            selectsFragment === "kategori 22 b" && <Kategori22b />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22" &&
            selectsFragment === "kategori 22 c" && <Kategori22c />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22" &&
            selectsFragment === "kategori 22 d" && <Kategori22d />}

          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "" && <Kategori0 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 23" && <Kategori23 />}

          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "" && <Kategori0 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a" &&
            selectsRation === "" && <Kategori0 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a" &&
            selectsRation === "kategori 24 a 1" && <Kategori24a1 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a" &&
            selectsRation === "kategori 24 a 2" && <Kategori24a2 />}

          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "" && <Kategori0 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 1" && <Kategori24b1 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 2" && <Kategori24b2 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 3" && <Kategori24b3 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 4" && <Kategori24b4 />}

          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c" &&
            selectsRation === "" && <Kategori0 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c" &&
            selectsRation === "kategori 24 c 1" && <Kategori24c1 />}
          {selectsGroup === "kj??tt og produkter som inneholder kj??tt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c" &&
            selectsRation === "kategori 24 c 2" && <Kategori24c2 />}

          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "" && <Kategori0 />}
          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "kategori 25" &&
            selectsFragment === "" && <Kategori0 />}
          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "kategori 25" &&
            selectsFragment === "kategori 25 a" && <Kategori25a />}
          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "kategori 25" &&
            selectsFragment === "kategori 25 b" && <Kategori25b />}

          {selectsGroup === "ferdigretter" && selectsProduct === "" && (
            <Kategori0 />
          )}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 26" && <Kategori26 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 27" && <Kategori27 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 28" && <Kategori28 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 29" && <Kategori29 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 30" && <Kategori30 />}

          {selectsGroup === "dressinger og sauser" && selectsProduct === "" && (
            <Kategori0 />
          )}
          {selectsGroup === "dressinger og sauser" &&
            selectsProduct === "kategori 31" && <Kategori31 />}
          {selectsGroup === "dressinger og sauser" &&
            selectsProduct === "kategori 32" && <Kategori32 />}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
