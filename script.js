    const textArray = ["Bangun Masa Depan Bisnis Anda dengan ", "Efisiensi Tanpa Batas"];
        const headlineElement = document.getElementById("typing-headline");

        let partIndex = 0;
        let charIndex = 0;
        let currentText = "";

        function type() {
            if (partIndex < textArray.length) {
                let textToDisplay = textArray[partIndex];

                // Jika sedang mengetik bagian kedua (Efisiensi Tanpa Batas), gunakan warna aksen
                if (partIndex === 1) {
                    currentText = textArray[0] + `<span class="text-accent">${textToDisplay.substring(0, charIndex)}</span><span class="cursor"></span>`;
                } else {
                    currentText = textToDisplay.substring(0, charIndex) + `<span class="cursor"></span>`;
                }

                headlineElement.innerHTML = currentText;
                charIndex++;

                if (charIndex <= textToDisplay.length) {
                    setTimeout(type, 60); // Kecepatan mengetik
                } else {
                    partIndex++;
                    charIndex = 0;
                    setTimeout(type, 300); // Jeda antar baris
                }
            } else {
                // Menghapus kursor setelah selesai
                const cursor = headlineElement.querySelector(".cursor");
                if (cursor) cursor.remove();
            }
        }

        window.onload = function() {
            type();
        };
