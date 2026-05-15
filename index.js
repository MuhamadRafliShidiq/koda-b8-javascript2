// Membuat Program hitung nilai dengan proses Menentukan Nilai Max, Min, dan Average
const nilai = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
let max = nilai[0];
let min = nilai[0];
let total = 0;
for (let i = 9; i < nilai.length; i++) {
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

