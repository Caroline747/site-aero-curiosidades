// ===== API SpaceX =====
    fetch("https://api.spacexdata.com/v4/launches/latest")
        .then(res => res.json())
        .then(data => {
            document.getElementById("launch-name").textContent = data.name;
            document.getElementById("launch-date").textContent = new Date(data.date_utc).toLocaleDateString();
            document.getElementById("launch-details").textContent = data.details || "Sem detalhes disponíveis.";
            
            if (data.links && data.links.patch && data.links.patch.small) {
                document.getElementById("launch-img").src = data.links.patch.small;
            }

            gsap.from(".launch-card", { opacity: 0, scale: 0.8, duration: 1 });
        })
        .catch(err => console.error("Erro ao carregar dados da SpaceX:", err));

    // ===== Lista de Aeronaves =====
    const aircrafts = [
        { nome: "Boeing 747", curiosidade: "Conhecido como 'Rainha dos Céus', foi o primeiro avião de fuselagem larga do mundo.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Boeing_747-8.jpg" },
        { nome: "Concorde", curiosidade: "Atingia o dobro da velocidade do som e fazia Londres–Nova York em menos de 3 horas.", img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Concorde_front_view.jpg" },
        { nome: "Airbus A380", curiosidade: "Maior avião de passageiros do mundo, com dois andares completos.", img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Airbus_A380_blue_sky.jpg" }
    ];

    const listContainer = document.getElementById("aircraft-list");

    aircrafts.forEach((a, index) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="aircraft-card shadow-lg text-center p-3">
                <img src="${a.img}" class="img-fluid aircraft-img mb-3" alt="${a.nome}">
                <h4 class="fw-bold">${a.nome}</h4>
                <p>${a.curiosidade}</p>
            </div>
        `;
        listContainer.appendChild(col);
    });

    gsap.from(".aircraft-card", { opacity: 0, y: 50, duration: 1, stagger: 0.3, delay: 0.5 });