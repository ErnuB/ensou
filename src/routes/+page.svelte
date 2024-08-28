<script>
    import GotoTop from "./GotoTop.svelte";
    import Footer from "./Footer.svelte";
    import Modal from './Modal.svelte';
    import Navbar from './Navbar.svelte';
    import Paralax from "./Paralax.svelte";

    let isModalOpen = false;
    let selectedImageUrl = '';
    let selectedNombrePlatillo = '';

    function openModal(imageUrl, nombrePlatillo) {
        selectedImageUrl = imageUrl;
        selectedNombrePlatillo = nombrePlatillo;
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }

    function filterPlatillos(categoria) {
        return platillos.filter(platillo => platillo.categoria === categoria);
    }


    let parallaxImages = [
        { src: '/img/acordion.png', alt: 'Acordión', speed: 1 },
        { src: '/img/tololoche.png', alt: 'Tololoche', speed: 2 },
        { src: '/img/tambor.png', alt: 'Tambor', speed: 3 },
        { src: '/img/trompeta.png', alt: 'Trompetas', speed: 3 },
    ];

    let seccion = [
        {id: "entradas", nombre: "Entradas"},
        {id: "barra-fria", nombre: "Barra Fría"},
        {id: "arroces", nombre: "Arroces"},
        {id: "naturales", nombre: "Naturales"},
        {id: "empanizados", nombre: "Empanizados"},
        {id: "veggie", nombre: "Veggie"},
        {id: "horneados", nombre: "Horneados"},
        {id: "charolas", nombre: "Charolas"},
        {id: "especiales", nombre: "Especiales"},
        {id: "casa", nombre: "De la Casa"},
        {id: "postres", nombre: "Postres"},
        {id: "bebidas", nombre: "Bebidas"},
        {id: "cocteleria", nombre: "Coctelería"},
        {id: "extras", nombre: "Extras"},
    ]
    
    let platillos = [
        {categoria: "entradas", nombre: "Brochetas", descripcion: "", precio: "$95", imagen: "", multi:""},
        {categoria: "entradas", nombre: "Queso", descripcion: "", precio: "", imagen: "/img/brocheta-queso.jpg", multi:"si"},
        {categoria: "entradas", nombre: "Pollo", descripcion: "", precio: "", imagen: "/img/brocherta-pollo.jpg", multi:"si"},
        {categoria: "entradas", nombre: "Camarón", descripcion: "2 Brochetas empanizadas, acompañadas de zanahoria rallada, col morada y arroz blanco.", precio: "", imagen: "/img/brocherta-camaron.jpg", multi:"si"},
        {categoria: "entradas", nombre: "Chiles rellenos mixtos", descripcion: "Orden de 2 chiles caribe empanizados, rellenos de tampoco, res, pollo, philadelphia. Rayados con aderezo Ensou y aderezo chipotle.", precio: "$125", imagen: "/img/chiles-rellenos.jpg", multi:""},
        {categoria: "entradas", nombre: "Papas a la francesa", descripcion: "", precio: "$60", imagen: "/img/papas.jpg", multi:""},
        {categoria: "entradas", nombre: "Papas a la francesa especiales", descripcion: "Papas francesas gratinadas con queso y tocino.", precio: "$90", imagen: "/img/papas-gratinadas.jpg", multi:""},
        {categoria: "entradas", nombre: "Rollo primavera", descripcion: "2 Rollos primavera, rellenos de camarón, philadelphia, zanahoria, jícama y surimi. Acompañados de zanahoria rallada, col morada y aderezo a elegir.", precio: "$99", imagen: "/img/rollo-primavera.jpg", multi:""},
        {categoria: "entradas", nombre: "Taquitos de atún", descripcion: "2 Taquitos wonton de atún macerado, pepino, con aderezo Ensou y aderezo chipotle.", precio: "$95", imagen: "/img/taco-atun.jpg", multi:""}, 
        {categoria: "entradas", nombre: "Concha horneada", descripcion: "Mezcla de pulpo, camarón, philadelphia, queso Chihuahua y aderezo chipotle horneado, acompañado de tostadas wonton.", precio: "$135", imagen: "/img/concha-horneada.jpg", multi:""},
        {categoria: "entradas", nombre: "Camarones Roca", descripcion: "Camarones capeados roca, bañados en aderezo spicy.", precio: "$150", imagen: "/img/camaron-roca.jpg", multi:""},
        {categoria: "entradas", nombre: "Boneless", descripcion: "Boneless con papas a la francesa bañados con salsa BBQ o BÚFALO a elegir.", precio: "$145", imagen: "/img/boneless.jpg", multi:""},
        {categoria: "barra-fria", nombre: "Ceviche Sinaloense", descripcion: "", precio: "", imagen: "", multi:""},
        {categoria: "barra-fria", nombre: "Camarón cocido", descripcion: "", precio: "$99", imagen: "/img/ceviche-camaron-cocido.jpg", multi:"si"},
        {categoria: "barra-fria", nombre: "Camarón crudo", descripcion: "", precio: "$99", imagen: "/img/ceviche-camaron-crudo.jpg", multi:"si"},
        {categoria: "barra-fria", nombre: "Camarón Mixto", descripcion: "", precio: "$110", imagen: "/img/ceviche-camaron-cocido-crudo.jpg", multi:"si"},
        {categoria: "barra-fria", nombre: "Camarón cocido y pulpo", descripcion: "Nuestra versión tradicional de ceviche, con pepino, cebolla, acompañados de tostadas wonton. Coronado con láminas de aguacate, cebollín y bañado en clamato especial de la casa.", precio: "$120", imagen: "/img/ceviche-camaron-crudo-cocido-pulpo.jpg", multi:"si"},
        {categoria: "barra-fria", nombre: "Tostada de atún", descripcion: "Atún macerado, pepino en tiras, aguacate, coronado con poro frito, cebollín, chile serrano. Acompañada de clamato especial de la casa.", precio: "$85", imagen: "/img/tostada-atun.jpg", multi:""},
        {categoria: "barra-fria", nombre: "Sopa de fideos", descripcion: "", precio: "", imagen: "", multi:""},
        {categoria: "barra-fria", nombre: "Camarón", descripcion: "", precio: "$120", imagen: "/img/fideos-camaron.jpg", multi:"si"},
        {categoria: "barra-fria", nombre: "Pollo", descripcion: "", precio: "$120", imagen: "/img/fideos-pollo.jpg", multi:"si"},
        {categoria: "barra-fria", nombre: "Mixta", descripcion: "Sopa de fideos y verduras; zanahoria, calabaza, cebolla y apio.", precio: "$130", imagen: "/img/fideos-mixta.jpg", multi:"si"},
        {categoria: "arroces", nombre: "Gohan", descripcion: "Arroz blanco, tampico, res, pollo, aguacate, philadelphia, furikake y cebollín.", precio: "$120", imagen: "/img/gohan.jpg", multi:""},
        {categoria: "arroces", nombre: "Yakimeshi", descripcion: "Arroz frito guisado con calabaza, zanahoria, apio, cebollín, res y pollo, coronado con tampico, philadelphia, aguacate y poro frito.", precio: "$125", imagen: "/img/yakimechi.jpg", multi:""},
        {categoria: "arroces", nombre: "Yakimeshi Ensou", descripcion: "Arroz frito guisado con calabaza, zanahoria, apio, cebollín, res y pollo, coronado con tampico, philadelphia, poro frito, aguacate y boneless BBQ o BÚFALO a elegir.", precio: "$160", imagen: "/img/yakimeshi-ensou.jpg", multi:""},
        {categoria: "arroces", nombre: "Pollo en Ostión Ensou", descripcion: "Pollo en salsa de ostión con verduras; Cebolla blanca, apio, zanahoria y calabaza, acompañado de arroz blanco.", precio: "$170", imagen: "", multi:""},
        {categoria: "naturales", nombre: "Guamuchilito", descripcion: "Por dentro: Philadelphia, pepino, aguacate, kanikama y camarón. Por fuera: coronado con tampico y aguacate. Rayado con salsa de anguila", precio: "$125", imagen: "/img/guamuchilito.jpg", multi:""},
        {categoria: "naturales", nombre: "Cucum", descripcion: "Rollo de pepino, relleno de tampico, philadelphia, camarón, aguacate y kanikama. Por fuera: Cebollín y mix de ajonjolí.", precio: "$125", imagen: "/img/kukum.jpg", multi:""},
        {categoria: "naturales", nombre: "Avocado", descripcion: "Por dentro: Philadelphia, pepino, aguacate, kanikama forrado de aguacate. Por fuera: Mix de ajonjolí", precio: "$130", imagen: "/img/aguaca.jpg", multi:""},
        {categoria: "naturales", nombre: "Zanka-Cha", descripcion: "Por dentro: Philadelphia, pepino, aguacate, kanikama. Por fuera: Forrado de aguacate, con topping de kanikama, coronado con camarón empanizado, salsa durazno chili y furikake.", precio: "$170", imagen: "/img/zanka-cha.jpg", multi:""},
        {categoria: "empanizados", nombre: "Akōdion", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res y camarón. Por fuera: Coronado de tampico y gratinado con mezcla de quesos.", precio: "$140", imagen: "/img/akodion.jpg", multi:""},
        {categoria: "empanizados", nombre: "Chiri-Chiri", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res y pollo. Por fuera: Gratinado con mezcla de quesos, tocino, chile serrano y chile caribe.", precio: "$150", imagen: "/img/chiri.jpg", multi:""},
        {categoria: "empanizados", nombre: "Bēsou", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res, camarón y pollo. Por fuera: Topping de ensalada kanikama, coronado con pollo crunchy, cebollín y aderezo durazno chili.", precio: "$160", imagen: "/img/besou.jpg", multi:""},
        {categoria: "empanizados", nombre: "Sou queso", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res y camarón. Por fuera: Gratinado con mezcla de quesos (philadelphia, queso chihuahua y queso americano). Furikake y aderezos sésamo.", precio: "$145", imagen: "/img/souqueso.jpg", multi:""},
        {categoria: "empanizados", nombre: "Mar y tierra", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res y camarón.", precio: "$110", imagen: "/img/mar-tierra.jpg", multi:""},
        {categoria: "empanizados", nombre: "Mar y tierra Ensou", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res y camarón. Por fuera: Coronado con pollo crunchy, cebollín, mix de ajonjolí. Rayado con aderezo Ensou.", precio: "$130", imagen: "/img/ensou.jpg", multi:""},
        {categoria: "empanizados", nombre: "Cordon blue", descripcion: "Por dentro: Philadelphia, pepino, aguacate, pollo y tocino.", precio: "$115", imagen: "/img/cordon-bleu.jpg", multi:""},
        {categoria: "empanizados", nombre: "Camarón blue", descripcion: "Por dentro: Philadelphia, pepino, aguacate camarón y tocino.", precio: "$115", imagen: "/img/camaron-bleu.jpg", multi:""},
        {categoria: "empanizados", nombre: "Karibukai", descripcion: "Por dentro: Philadelphia, pepino, aguacate, camarón y tocino. Por fuera: Topping de chile caribe, soya y togarashi, aderezo Ensou, aderezo sésamo .", precio: "$130", imagen: "/img/karibukai.jpg", multi:""},
        {categoria: "empanizados", nombre: "Ensou especial", descripcion: "Por dentro: Philadelphia, pepino, aguacate, res y pollo. Por fuera: Gratinado con queso, coronado con camarón empanizado, chile serrano, poro frito, furikake. Rayado con salsa durazno chili.", precio: "$160", imagen: "/img/ensou-especial.jpg", multi:""},
        {categoria: "veggie", nombre: "Raito", descripcion: "Rollo natural, por dentro philadelphia, pepino, aguacate y zanahoria. Por fuera: topping de zanahoria spicy, coronado con aguacate, cebollín, mix de ajonjolí y un ligero toque de sriracha.", precio: "$130", imagen: "/img/raito.jpg", multi:""},
        {categoria: "veggie", nombre: "Yasahī", descripcion: "Rollo natural, por dentro philadelphia, pepino, aguacate y zanahoria. Por fuera: Coronado con tampico y cebolla asada ,chile caribe, mix de ajonjolí y un ligero toque de salsa chile cacahuate.", precio: "$130", imagen: "", multi:""},
        {categoria: "veggie", nombre: "Unagi", descripcion: "Rollo natural, por dentro philadelphia, pepino, aguacate, camarón. Por fuera: Topping de tampico, anguila de río, mix de ajonjolí. Rayado con mermelada de frutos rojos.", precio: "$160", imagen: "", multi:""},
        {categoria: "horneados", nombre: "Chūba", descripcion: "Rollo natural, por dentro: Philadelphia, pepino, aguacate y camarón. Por fuera: Forrado con salmón, con topping de camarón, mezcla de quesos y aderezo spicy. Rayado con aderezo Ensou y un toque de salsa chile cacahuate.", precio: "$175", imagen: "/img/chuba.jpg", multi:""},
        {categoria: "horneados", nombre: "Daburu", descripcion: "Por dentro: Philadelphia, pepino, aguacate y camarón. Por fuera: Forrado de aguacate, con topping de camarón, mezcla de quesos y aderezo spicy. Rayado en salsa de anguila y toque de aderezo Ensou.", precio: "$175", imagen: "/img/daburu.jpg", multi:""},
        {categoria: "horneados", nombre: "Turan", descripcion: "Empanizado, por dentro: Philadelphia, pepino, aguacate, pollo y chile caribe. Por fuera: Topping de camarón, mezcla de quesos y aderezo spicy. Rayado con salsa de anguila, coronado con mix de ajonjolí y cebollín.", precio: "$170", imagen: "/img/turon.jpg", multi:""},
        {categoria: "horneados", nombre: "Furūtu", descripcion: "Por dentro: Philadelphia, pepino y aguacate, Por fuera: Forrado de camarón con topping de kanikama, pulpo y aderezo masago. Encima adereazo de cilantro, cebollín, salsa de anguila y un ligero toque de salsa chile cacahuate.", precio: "$170", imagen: "/img/furutu.jpg", multi:""},
        {categoria: "horneados", nombre: "Pākass", descripcion: "Por dentro: Philadelphia, pepino y aguacate. Por fuera: Forrado con camarón y salmón, con topping kanikama.", precio: "$160", imagen: "", multi:""},
        {categoria: "horneados", nombre: "Chāp", descripcion: "Por dentro: Philadelphia, pepino, aguacate y camarón. Por fuera: Forrado de salmón, con topping de atún, aderezo spicy, salsa de chile y cacahuate. Coronado con poro frito y mix de ajonjolí.", precio: "$175", imagen: "/img/chap.jpg", multi:""},
        {categoria: "horneados", nombre: "Fiduru", descripcion: "Rollo capeado, envuelto en alga, relleno con tampico, pepino, philadelphia, aguacate y camarón. Por fuera: Forrado con mezcla de quesos y salmón, coronado con cebolla capeada y chile serrano. Rayado con salsa de anguila y mermelada de frutos rojos.", precio: "$170", imagen: "/img/fiduru.jpg", multi:""},
        {categoria: "horneados", nombre: "Crush roll", descripcion: "Rollo capeado, envuelto en algarelleno de philadelphia, pepino, aguacate y salmón. Por fuera: Topping de kanikama y aderezo chipotle. Rayado con salsa de durazno chili y un ligero toque de sriracha.", precio: "$150", imagen: "", multi:""},
        {categoria: "charolas", nombre: "Tomadachi", descripcion: "Mar y Tierra, Camarón Bleu, Chiri - Chiri, Guamuchilito y Daramu.", precio: "$625", imagen: "", multi:""},
        {categoria: "charolas", nombre: "Kuidaore", descripcion: "Cordon Bleu, Avocado, Mar y Tierra Ensou, Biura y Raito.", precio: "$635", imagen: "", multi:""},
        {categoria: "charolas", nombre: "Torai", descripcion: "Daburu, Chiri - Chiri, Furutu, Turan y Bombō", precio: "$810", imagen: "", multi:""},
        {categoria: "especiales", nombre: "Bombō", descripcion: "Camarón empanizado, relleno de philadelphia, pepino, aguacate y camarón. Por fuera: coronado de camarón empanizado. Rayado de aderezo masago, salsa de anguila y aderezo de sésamo,", precio: "$145", imagen: "/img/bombo.jpg", multi:""},
        {categoria: "especiales", nombre: "Gitā", descripcion: "Rollo natural, por dentro: Philadelphia, pepino, aguacate y camarón. Por fuera: Topping de kanikama y camarón empanizado, coronado de chile serrano. Rayado con salsa de anguila y un toque de sriracha", precio: "$160", imagen: "/img/gita.jpg", multi:""},
        {categoria: "especiales", nombre: "Doramu", descripcion: "Por dentro: Philadelphia, pepino y aguacate. Por fuera: Forrado de masago, con topping de camarón empanizado con aderezo spicy. Rayado con aderezo cilantro.", precio: "$125", imagen: "/img/duramu.jpg", multi:""},
        {categoria: "casa", nombre: "Montūn", descripcion: "Por dentro: Philadelphia, pepino, aguacate y kanikama. Por fuera: Forrado de mix ajonjolí, topping de atún, salmón y aderezo spicy,", precio: "$160", imagen: "", multi:""},
        {categoria: "casa", nombre: "Taribarin", descripcion: "Empanizado, por dentro: Philadelphia, pepino, aguacate y kanikama. Por fuera: con topping de atún, pulpo, kanikama y aderezo spicy. Encima furikake, cebollín y salsa de anguila.", precio: "$165", imagen: "", multi:""},
        {categoria: "casa", nombre: "Kibūdo", descripcion: "Por dentro: Philadelphia, pepino y aguacate. Por fuera: Forrado de aguacate, coronado de camarón frito, tocino, poro frito, aderezo chipotle y aderezo Ensou.", precio: "$160", imagen: "/img/kibudo.jpg", multi:""},
        {categoria: "casa", nombre: "Biura", descripcion: "Por dentro: Philadelphia, pepino, aguacate y tocino. Por fuera: Gratinado con queso Chihuahua, tocino y res. Encima aderezo chipotle, aderezo cilantro cebollín y ajonjolí.", precio: "$130", imagen: "", multi:""},
        {categoria: "casa", nombre: "Kyoku", descripcion: "Por dentro: Philadelphia, pepino, aguacate y camarón. Por fuera: Forrado de anguila de río. Rayado con salsa de anguila y aderezo Ensou.", precio: "$180", imagen: "/img/kyoku.jpg", multi:""},
        {categoria: "casa", nombre: "Merodī", descripcion: "Por dentro: Philadelphia, pepino, aguacate y anguila de río. Por fuera: forrado de atún, masago, furikake, ajonjolí y aderezo cilantro.", precio: "$160", imagen: "/img/merodi.jpg", multi:""},
        {categoria: "casa", nombre: "Bijine", descripcion: "Empanizado, por dentro: Philadelphia, pepino, aguacate y camarón empanizado. Por fuera: gratinado de queso Chihuahua, res y aderezo spicy. Rayado de aderezo cilantro, aderezo chipotle y coronado con cebollín y furikake.", precio: "$140", imagen: "", multi:""},
        {categoria: "casa", nombre: "Aguachile roll", descripcion: "Por dentro: Philadelphia, pepino y aguacate. Por fuera: Coronado de camarón crudo, bañado en clamato preparado y cebollín.", precio: "$150", imagen: "/img/aguachile.jpg", multi:""},
        {categoria: "postres", nombre: "Nieve de vainilla", descripcion: "", precio: "$95", imagen: "/img/nieve.jpg", multi:"no"},
        {categoria: "postres", nombre: "Pastel de chocolate", descripcion: "", precio: "$135", imagen: "/img/pastel.jpg", multi:"no"},
        {categoria: "bebidas", nombre: "Té helado (refill)", descripcion: "", precio: "$38", imagen: "", multi:"no"},
        {categoria: "bebidas", nombre: "Limonada", descripcion: "", precio: "$35", imagen: "", multi:"no"},
        {categoria: "bebidas", nombre: "Limonada mineral", descripcion: "", precio: "$40", imagen: "", multi:"no"},
        {categoria: "bebidas", nombre: "Refrescos", descripcion: "", precio: "$35", imagen: "", multi:"no"},
        {categoria: "bebidas", nombre: "Agua natural 500 ml", descripcion: "", precio: "$25", imagen: "", multi:"no"},
        {categoria: "bebidas", nombre: "Agua mineral 355 ml", descripcion: "", precio: "$35", imagen: "", multi:"no"},
        {categoria: "bebidas", nombre: "Frappe de mango", descripcion: "(chamoyada de mango) Mango, jugo de limón y chamoy, decorado con dulces enchilosos.", precio: "$80", imagen: "/img/frappe-mango.jpg", multi:""},
        {categoria: "bebidas", nombre: "Frappe de frutos rojos", descripcion: "(chamoyada de frutos rojos) Frutos rojos, jugo de limón y chamoy, decorado con dulces enchilosos.", precio: "$85", imagen: "/img/frappe-frutos.jpg", multi:""},
        {categoria: "bebidas", nombre: "Boba tea con tapioca", descripcion: "", precio: "", imagen: "", multi:""},
        {categoria: "bebidas", nombre: "Frappé a las rocas:", descripcion: "", precio: "$80", imagen: "", multi:"si"},
        {categoria: "bebidas", nombre: "Frappeado:", descripcion: "", precio: "$85", imagen: "", multi:"si"},
        {categoria: "bebidas", nombre: "", descripcion: "VAINILLA", precio: "", imagen: "/img/boba-vainilla.jpg", multi:""},
        {categoria: "bebidas", nombre: "", descripcion: "ALGODÓN DE AZÚCAR", precio: "", imagen: "/img/boba-algodon.jpg", multi:""},
        {categoria: "bebidas", nombre: "", descripcion: "TIRAMIZÚ", precio: "", imagen: "/img/boba-tiramisu.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Sangre de cristo", descripcion: "Clamato preparado y salsas negras.", precio: "$45", imagen: "/img/sangre.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Michelada Ensou", descripcion: "Clamato preparado con caldo de camarón y salsas negras. Acompañado de camarón cocido, tarugo, pulparindo, y apio.", precio: "$55", imagen: "/img/michelada-ensou.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Paloma", descripcion: "Tequila, jugo de limón, jugo de naranja y agua mineral.", precio: "$80", imagen: "/img/paloma.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Orenji", descripcion: "Ron, jugo de piña, jugo de naranja y agua mineral.", precio: "$95", imagen: "/img/orenji.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Mesokaru", descripcion: "Tequila o mezcal, mango y jugo de limón.", precio: "$95", imagen: "/img/mezocaru.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Kadamunu", descripcion: "Tequila o mezcal, Maracuyá, frutos rojos y agua mineral.", precio: "$110", imagen: "/img/kadamunu.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Kokun", descripcion: "Tequila, crema de coco y jugo de piña.", precio: "$95", imagen: "", multi:""},
        {categoria: "cocteleria", nombre: "Mohīto", descripcion: "Ron, jugo de limón y menta.", precio: "$95", imagen: "/img/mojito.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Berī", descripcion: "Tequila, jugo de limón, frutos rojos, menta y agua mineral.", precio: "$110", imagen: "/img/beri.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Kyūri", descripcion: "Tequila, jugo de limón, pepino, agua tónica y agua mineral.", precio: "$95", imagen: "", multi:""},
        // {categoria: "cocteleria", nombre: "Jarrito tropi", descripcion: "Tequila, jugo de piña, jugo de limón y agua mineral.", precio: "$0", imagen: "", multi:""},
        {categoria: "cocteleria", nombre: "Jarrito", descripcion: "Tequila, jugo de naranja, jugo de limón y agua mineral.", precio: "$95", imagen: "/img/jarrito.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Jamaka", descripcion: "Tequila, jamaica, chamoy, jugo de limón y agua mineral.", precio: "$95", imagen: "/img/jamaka.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Jamazcal", descripcion: "Mezcal, jamaica, jugo de limón, agua mineral y agua tónica.", precio: "$95", imagen: "/img/jamazcal.jpg", multi:""},
        // {categoria: "cocteleria", nombre: "Chacha", descripcion: "Tequila, maracuyá y agua mineral.", precio: "$0", imagen: "", multi:""},
        {categoria: "cocteleria", nombre: "Carajillo", descripcion: "Licor 43 y expreso de café.", precio: "$120", imagen: "/img/carajillo.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Carajillo de mazapán", descripcion: "Licor 43, expreso de café y mazapán.", precio: "$130", imagen: "/img/carajillo-mazapan.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Sangría", descripcion: "Vino tinto, jugo de limón, frutos rojos y agua mineral.", precio: "$110", imagen: "/img/sangria.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Aka Mango", descripcion: "Chamoyada, tequila, mango, jugo de limón y chamoy, decorado con dulces enchilosos.", precio: "$120", imagen: "/img/aka-mango.jpg", multi:""},
        {categoria: "cocteleria", nombre: "Aka Roja", descripcion: "Chamoyada, tequila, frutos rojos, jugo de limón y chamoy, decorado con dulces enchilosos.", precio: "$120", imagen: "", multi:""},
        {categoria: "extras", nombre: "Camarón", descripcion: "", precio: "$25", imagen: "", multi:""},
        {categoria: "extras", nombre: "Pulpo", descripcion: "", precio: "$35", imagen: "", multi:""},
        {categoria: "extras", nombre: "Atún", descripcion: "", precio: "$25", imagen: "", multi:""},
        {categoria: "extras", nombre: "Salmón", descripcion: "", precio: "$39", imagen: "", multi:""},
        {categoria: "extras", nombre: "Kanikama", descripcion: "", precio: "$25", imagen: "", multi:""},
        {categoria: "extras", nombre: "Hoja wonton", descripcion: "", precio: "$10", imagen: "", multi:""},
        {categoria: "extras", nombre: "Salsa Soya", descripcion: "", precio: "$15", imagen: "", multi:""},
        {categoria: "extras", nombre: "Salsa de Anguila", descripcion: "", precio: "$10", imagen: "", multi:""},
        {categoria: "extras", nombre: "Aderezo", descripcion: "", precio: "$15", imagen: "", multi:""},
        {categoria: "extras", nombre: "Tampico", descripcion: "", precio: "$25", imagen: "", multi:""},
        {categoria: "extras", nombre: "Philadelphia", descripcion: "", precio: "$15", imagen: "", multi:""},
        {categoria: "extras", nombre: "Gratinado", descripcion: "", precio: "$25", imagen: "", multi:""},
    ];

</script>

<style>
    main {
        position: relative;
        z-index: 1;
    }
</style>

<div class="p-1 bg-verde-ensou relative z-10">
    <img src="/img/bg.jpg" alt="Ensou Sushi" class="">
</div>
<Navbar />
<main>
<Paralax images={parallaxImages} />
{#each seccion as lot}
{#if lot.id === "extras"}
<section id="{lot.id}" class="mx-1 py-3 text-xl">
    <div>
        <p class="text-naranja-ensou py-3 text-4xl uppercase">{lot.nombre}</p>
    </div>
    <div class="grid grid-cols-2 gap-3 mr-2">
        {#each filterPlatillos(lot.id) as platillo}
        <div class="flex">
            <span class="text-pretty text-rojo-ensou mx-2 font-rampiro">{platillo.nombre}</span>
            <span class="grow"></span>
            <span class="font-rampiro text-xl text-naranja-ensou">{platillo.precio}</span>
        </div>
        {/each}
    </div>
</section>
{:else}
<section id="{lot.id}" class="mx-1 py-3 text-xl scroll-mt-6">
    <div>
        <p class="text-naranja-ensou font-acello py-3 underline text-5xl uppercase">{lot.nombre}</p>
    </div>
    {#each filterPlatillos(lot.id) as platillo}
        {#if platillo.imagen === ""}
        {#if platillo.multi === "si"}
        <span class="text-naranja-ensou text-2xl uppercase font-rampiro mx-2">{platillo.nombre}</span>
        <span class="font-rampiro text-xl text-naranja-ensou">{platillo.precio}</span>
        <p class="text-pretty text-rojo-ensou mx-2 font-rampiro">{platillo.descripcion}</p>
        {:else if platillo.multi === "no"}
        <div>
            <span class="text-rojo-ensou text-2xl uppercase font-rampiro mx-2">{platillo.nombre}</span>
            <span class="font-rampiro text-xl text-naranja-ensou">{platillo.precio}</span>
        </div>
        {:else}
        <div class="mx-1 flex mt-6">
            <span class="text-verde-ensou uppercase -tracking-[0.75rem] text-6xl font-medium font-singa">{platillo.nombre}
            <span class="font-rampiro text-xl text-naranja-ensou tracking-normal">{platillo.precio}</span>
            </span>
        </div>
        <p class="text-pretty text-rojo-ensou mx-2 font-rampiro">{platillo.descripcion}</p>
        {/if}
        {:else}
        {#if platillo.multi === "si"}
        <button on:click={() => openModal(platillo.imagen, platillo.nombre)}  class="text-naranja-ensou text-2xl uppercase font-rampiro mx-2">{platillo.nombre}&thinsp;<span class="material-symbols-outlined text-verde-ensou">
            photo_camera
            </span></button>
        <span class="font-rampiro text-xl text-naranja-ensou">{platillo.precio}</span>
        <p class="text-pretty text-rojo-ensou mx-2 font-rampiro">{platillo.descripcion}</p>
        {:else}
        <div class="ml-1 flex mt-6 text-pretty w-full">
            <button on:click={() => openModal(platillo.imagen, platillo.nombre)} class="text-verde-ensou text-left uppercase -tracking-[0.75rem] text-6xl font-medium font-singa">{platillo.nombre} &thinsp;<span class="material-symbols-outlined text-verde-ensou">
                photo_camera
                </span>
            <span class="font-rampiro text-xl text-naranja-ensou tracking-normal">{platillo.precio}</span>
            </button>
        </div>
        <p class="text-pretty text-rojo-ensou mx-2 font-rampiro">{platillo.descripcion}</p>
        {/if}
        {/if}
    {/each}
</section>
{/if}
{/each}
<div class="my-20">.</div>
<Footer />
</main>
<GotoTop />
{#if isModalOpen}
    <Modal imageUrl={selectedImageUrl} nombrePlatillo={selectedNombrePlatillo} closeModal={closeModal} />
{/if}