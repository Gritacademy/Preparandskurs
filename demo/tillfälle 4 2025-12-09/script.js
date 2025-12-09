        while (true) {
            console.log("loop");
            break;
        }

        let array = ["Alrik", "Linnea"];

        for (const key in array) {
            // key
            console.log(key);
            break;
        }

        for (const value of array) {
            //value
            console.log(value);
            break;
        }

        let calle = "hej";
        //sanningsvärde
        if (true) {
            console.log("YESSS");
        }
        console.log(calle);

        //6)  functions
        //deklarera
        let foo = 5; //skapar en variabel
        //let bar = 9999; // utanför bar

        // anropa/kalla/invokera   , call/invoke
        addition(); // kör alla koder i funktionen

        Math.round(0.5);
        Math.random();

        let paragraf = "hello world";
        paragraf.slice(3, 7); // "lo w"
        //string i js är array av characters

        //definera funktionen addition
        // inom parentessen kallar en parameter
        // parameter har ej let
        function addition(x, y, z) {
            //skapar en funktion

            console.log(x + y + z);
            return "hejsan";
        }

        function filtreraUtSiffror(text) {
            for (let i = 0; i < text.length; i++) {
                // console.log(text[i]);
                // console.log(parseInt(text[i]) );

                if (!isNaN(parseInt(text[i])))
                    //console.log("DEN är NaN!!!");
                    //else
                    return parseInt(text[i]);
            }
            return "hittade ej en siffra :) ";
        }

        function findFirstLetterInText(text) {
            return text[0];
        }

        // akta!!! för loopar
        //kallar på förmånga funktioner
        //stackoverflow
        function beyond() {
            infinity();
        }
        function infinity() {
            beyond();
        }

        // console.log(bar);

        //7)   object

        let h = 1000000;
        h = 2000000

        // index     0         1           2       3        
        let hus = [1000000, "yxgatan 5b", true, "Martin", "Robin", 52, "villa"];
        hus[0] = 2000000

        // properties   består av  key:value    
        let house = {
            price: 1000000,
            adress: "yxgatan 5b",
            sold: true,
            owner: "Martin",
            buyer: "Robin",
            kvm: 52,
            type: "villa",
            sell: sell
        }

        let h1 = {
            color:"red",
            font_size: 40,
        }

        function sell() {
            console.log(house.owner + " sold a " +  house.type +" to " + house.buyer 
                + " for " + house.price  +"kr !!");
        }


        house.price = 2000000   //primära sättet
        house["price"] = 2000000 // sekundärt
      //  house {price} = 2000000    

    console.log(hus);
    console.log(house);

    // function()
    //alert()

    // object   .    function() 

    // 
   // document.getElementById()
    console.log()
    Math.random()
    Math.PI


