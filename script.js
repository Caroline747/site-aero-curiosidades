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
        { nome: "Boeing 747", curiosidade: "Conhecido como 'Rainha dos Céus', foi o primeiro avião de fuselagem larga do mundo.", img: "https://images.unsplash.com/photo-1610171489366-069debe57b3d?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { nome: "Concorde", curiosidade: "Atingia o dobro da velocidade do som e fazia Londres–Nova York em menos de 3 horas.", img: "https://simonde.com.br/wp-content/uploads/2019/03/concorde-3.jpg.webp" },
        { nome: "Airbus A380", curiosidade: "Maior avião de passageiros do mundo, com dois andares completos.", img: "https://images.unsplash.com/photo-1543903905-cee4ab46985c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYnVzJTIwYTM4MHxlbnwwfHwwfHx8MA%3D%3D" },
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