function hitungNilai(nilai) {
    // Validasi apakah array
    if (!Array.isArray(nilai)) {
        console.log("Input harus berupa array");
        return;
    }
    let max = nilai[0];
    let min = nilai[0];
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {

        if (nilai[i] > max) {
            max = nilai[i];
        }
        if (nilai[i] < min) {
            min = nilai[i];
        }
        total += nilai[i];
    }
    const average = total / nilai.length;
    console.log(`Nilai Max: ${max}`);
    console.log(`Nilai Min: ${min}`);
    console.log(`Nilai Average: ${average}`);
}
const nilai = [100, 80, 30, 20, 10]
hitungNilai(nilai);


