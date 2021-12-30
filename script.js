let weight = document.querySelector(".weight"); //miejsce gdzie użytkownik wpisuje wagę
let height = document.querySelector(".height"); //miejsce gdzie użytkownik wpisuje wzrost
let errorInfo = document.querySelector(".warning"); //info o konieczności wpisania tekstu
let btn = document.querySelector(".btn"); //przycisk Oblicz
let result = document.querySelector(".result"); //pole wyniku BMI
let resultDescription = document.querySelector(".result-description"); //opis wyniku BMI

const countBmi = () => {
  errorInfo.innerHTML = "";
  result.textContent = "";
  resultDescription.textContent = "";
  if (weight.value === "" || height.value === "") {
    errorInfo.innerHTML = "Proszę uzupełnić pola: Waga i Wzrost";
  } else if (isNaN(+weight.value) || isNaN(+height.value)) {
    errorInfo.innerHTML = "Proszę wpisać wartości liczbowe";
  } else {
    const bmi = weight.value / (((height.value / 100) * height.value) / 100);
    result.textContent = "Twoje BMI wynosi " + bmi.toFixed(2);
    if (bmi < 16) {
      resultDescription.textContent =
        "Wygłodzenie. Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.";
    } else if (bmi >= 16 && bmi < 17) {
      resultDescription.textContent =
        "Wychudzenie. Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznychi/lub modyfikację diety.";
    } else if (bmi >= 17 && bmi < 18.5) {
      resultDescription.textContent =
        "Niedowaga. Masa ciała jest zbyt niska. Rozważ konsultację lekarską i wzbogać dietę w zdrowe tłuszcze roślinne, białko oraz węglowodany złożone.";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultDescription.textContent =
        "Waga prawidłowa. Masa ciała jest prawidłowa. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę.";
    } else if (bmi >= 25 && bmi < 30) {
      resultDescription.textContent =
        "Nadwaga. Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.";
    } else if (bmi >= 30 && bmi < 35) {
      resultDescription.textContent =
        "Otyłość I stopnia. Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość I stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.";
    } else if (bmi >= 35 && bmi < 40) {
      resultDescription.textContent =
        "Otyłość II stopnia. Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość II stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.";
    } else if (bmi >= 40) {
      resultDescription.textContent =
        "Otyłość III stopnia. Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość III stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Być może konieczne będzie wprowadzenie leczenia farmakologicznego. Wdrażając zmiany i przestrzegając zaleceń lekarza, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.";
    }
  }
  weight.value = "";
  height.value = "";
};

// funkcja dodawanie zadania za pomocą klawisza ENTER
const enterKey = (e) => {
  if (e.key === "Enter") {
    countBmi();
  }
};

btn.addEventListener("click", countBmi);
weight.addEventListener("keyup", enterKey);
height.addEventListener("keyup", enterKey);
