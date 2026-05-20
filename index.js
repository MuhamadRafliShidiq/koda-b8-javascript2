function hitungNilai(nilai) {
    // Validasi apakah array
    if (!Array.isArray(nilai)) {
        throw new Error("Input harus berupa array");
    }
    // Validasi apakah array kosong
    if (nilai.length === 0) {
        throw new Error("Array tidak boleh kosong");
    }
    let max = nilai[0];
    let min = nilai[0];
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {
        // Validasi array harus berisi angka
        if (typeof nilai[i] !== "number") {
            throw new Error("Semua elemen array harus berupa angka");
        }
        if (nilai[i] > max) {
            max = nilai[i];
        }
        if (nilai[i] < min) {
            min = nilai[i];
        }
        total += nilai[i];
    }
    const average = total / nilai.length;
    return { max, min, average };
}

try {
    const nilai = [80, 70, 60, 50, 40];
    const hasil = hitungNilai(nilai);
    hitungNilai(nilai);
    console.log(`Nilai Max: ${hasil.max}`);
    console.log(`Nilai Min: ${hasil.min}`);
    console.log(`Nilai Average: ${hasil.average}`)
} catch (error) {
    console.error(error.message);
    return;
}




