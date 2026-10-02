function convert() {
    const price = Number(document.getElementById("coin").value);
    const amount = Number(document.getElementById("amount").value);

    const total = price * amount;

    document.getElementById("result").textContent =
        "$" + total.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}

convert();
function resetConverter() {
    document.getElementById("coin").value = "95200";
    document.getElementById("amount").value = "1";

    convert();
}
