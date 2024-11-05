const recipes = [
    {                   // ŚNIADANIA
        title: "Jajecznica",
        category: "sniadanie",
        required: ["jajka", "masło"],
        optional: ["pieprz", "sól"],
        image: "assets/images/sniadania/jajecznica.jpg",
        quantities: ["3 jajka", "10 g masła"],
        instructions: "Rozpuść masło na patelni. Dodaj rozbite jajka i smaż, mieszając, aż będą gotowe."
    },
    {
        title: "Omlet",
        category: "sniadanie",
        required: ["jajka", "masło"],
        optional: ["pieprz", "sól","woda","mleko"],
        image: "assets/images/sniadania/omlet.jpg",
        quantities: ["2 jajka","10 g masła","10 ml mleka"],
        instructions: "Rozbij jajka, dodaj wodę lub mleko. Suchą patelnię postaw na małym ogniu, rozpuść masło, wlej masę jajeczną. Smaż bez przykrycia na dużym ogniu, aż brzegi omletu się zetną. Delikatnie odwróć na drugą stronę, chwilę podsmaż."
    },

    {
        title: "Tost w jajku",
        category: "sniadanie",
        required: ["jajka", "masło", "ser żółty", "chleb tostowy"],
        optional: ["sól", "szynka", "mleko"],
        image: "assets/images/sniadania/tost_w_jajku.jpg",
        quantities: ["3 jajka","20 g masła","60 g sera żółtego","4 tosty","2 plasterki szynki"],
        instructions: "Rozłożyć tosty na desce, na każdym ułożyć tarty ser. Na dwóch tostach położyć plasterek szynki. Podtrzymując szynkę palcami odwrócić tosty z szynką i ułożyć na tostach z samym serem. Lekko docisnąć. W głębokim talerzu roztrzepać widelcem 1 jajko z dodatkiem mleka oraz szczypty soli. Maczać w tym tosty i kłaść na patelnię z podgrzanym masłem (najlepiej klarowanym). Smażyć na umiarkowanym ogniu z dwóch stron na złoty kolor, po ok. 1,5 minuty z każdej strony. Oddzielnie usmażyć 2 jajka sadzone. Tosty przełożyć na talerze i przykryć jajkiem sadzonym."
    },

    {
        title: "Tost francuski",
        category: "sniadanie",
        required: ["bułka paryska","jajka","mleko","cukier","masło"],
        optional: ["banan","granat","truskawki","sok z cytryny","syrop klonowy","cukier puder"],
        image: "assets/images/sniadania/tost_francuski.jpg",
        quantities: ["1 bułka paryska","2 jajka","100 ml mleka","2 łyżki cukru","3 łyżki masła"],
        instructions: "Bułkę pokroić na plastry. W głębokim talerzu widelcem roztrzepać jajka (jak na omlet) z dodatkiem mleka i cukru. Rozgrzać patelnię. Bułkę wymoczyć w jajku z mlekiem. Na patelnię włożyć minimum 3 łyżki masła, rozprowadzić po całej patelni. Gdy zacznie skwierczeć włożyć 4 - 5 plastrów bułki i smażyć przez ok. 2 minuty, przewrócić na drugą stronę i powtórzyć smażenie. Bułeczka ma być ładnie zrumieniona ale nie spalona, dlatego ogień pod patelnią nie może być zbyt duży. Odkładać na talerz wyłożony ręcznikami papierowymi. Patelnię umyć lub wytrzeć ręcznikiem papierowym i powtórzyć smażenie z reszty bułki. Tosty podawać ze świeżymi owocami skropionymi sokiem z cytryny. Można polać syropem klonowym lub posypać cukrem pudrem."
    },

    {
        title: "Szakszuka",
        category: "sniadanie",
        required: ["pomidor","jajka","oliwa","czosnek"],
        optional: ["sól","pieprz","oregano","chili","kmin rzymski","bazylia","bagietka"],
        image: "assets/images/sniadania/szakszuka.jpg",
        quantities: ["2 pomidory","1/2 łyżki oliwy","1/2 ząbka czosnku","2 jajka","1/2 bagietki"],
        instructions: "Przygotować pomidory: sparzyć, obrać ze skórki, pokroić na ćwiartki, wykroić szypułki, miąższ pokroić w kosteczkę. Na niedużą patelnię (około 20 cm średnicy) włożyć masło lub wlać oliwę oraz starty czosnek, chwilę podsmażyć. Pomidory włożyć na patelnię, doprawić solą, pieprzem i przyprawami. Wymieszać i intensywnie smażyć na większym ogniu przez około 4 minuty, już bez mieszania (wówczas pomidory odparują i zachowają swoją strukturę, jeśli będziemy mieszać zrobi się przecier). Do podsmażonych pomidorów wbić jajka, doprawić solą. Przykryć i gotować przez około 3 minuty lub do czasu aż białka jajek będą ścięte. Podawać ze świeżą bazylią i bagietką."
    },

    {
        title: "Kanapki z pastą rybną",
        category: "sniadanie",
        required: ["majonez","makrela","jajka"],
        optional: ["ogórek konserwowy","pestki słonecznika","szczypior","chili","papryka mielona","cytryna"],
        image: "assets/images/sniadania/kanapki_pasta_rybna.jpg",
        quantities: ["3 łyżki majonezu","200 g makreli","2 jajka","2 ogórki konserwowe","2 łyżki pestek słonecznika","1/2 pęczka szczypioru","1/2 cytryny","1/2 łyżeczki papryki mielonej"],
        instructions: "Jaja ugotuj na twardo obierz zetrzyj na drobnej tarce, ogórki pokrój w kosteczkę lub też zetrzyj na tarce na grubych oczkach, drobno pokrój szczypior. Pestki słonecznika upraż na patelni. Makrelę oczyść ze skóry i ości , przełóż do miski dodaj majonez, wyciśnij trochę soku z połówki cytryny. Makrelę ugnieć na pastę dodaj jajka ogórka szczypior, pestki słonecznika, dokładnie wymieszaj. Pastę dopraw do smaku papryką i o ile zachodzi taka potrzeba szczyptą soli. Pastę z makreli podawaj z chlebem razowym."
    },

    {
        title: "Kanapka BLT z mozzarellą",
        category: "sniadanie",
        required: ["chleb tostowy","mozzarella biała","bekon","pomidor","sałata"],
        optional: ["sól morska","pieprz","rukola","majonez","ketchup","masło"],
        image: "assets/images/sniadania/kanapka_blt.jpg",
        quantities: ["2 kromki pieczywa tostowego, zrumienionego w tosterze","2 plasterki mozzarelli białej","4 plasterki bekonu","2 plasterki pomidora","kilka listków rukoli lub młodych liści sałaty"],
        instructions: "Kromki pieczywa posmarować masłem lub mieszanką majonezu i ketchupu. Na jednej kromce ułożyć plasterki sera, przykryć pomidorem, doprawić go solą i pieprzem, położyć bekon i rukolę. Położyć drugą kromkę pieczywa, lekko docisnąć i przekroić na pół. Podawać z resztą majonezu/ketchupu."
    },

    {
        title: "Jajka po benedyktyńsku",
        category: "sniadanie",
        required: ["jajka", "ocet"],
        optional: ["sos holenderski","bułka","szynka","bekon","boczek","szczypior","sól","pieprz"],
        image: "assets/images/sniadania/jajka_benedykt.jpg",
        quantities: ["2 jajka","łyżka octu","4 plasterki szynki","2 bułki"],
        instructions: "Ugotować jajka w koszulce: zagotować wodę w garnku (ok. 10 cm) z dodatkiem 1 łyżki octu i szczypty soli, zrobić w niej wir (zamieszać łyżką). Jajka wbić do oddzielnych miseczek. Delikatnie wlać pierwsze jajko do gotującej się wody i gotować przez kilka minut aż całe białko będzie ścięte, żółtko pozostanie płynne. Powtórzyć z resztą jajek. Szynkę lub boczek lub bekon podsmażyć na patelni. Bułki przekroić na pół, opiec w tosterze, na dolnej części położyć plasterek szynki, na wierzchu położyć jajko i polać sosem holenderkim. Posypać szczypiorkiem, doprawić solą i pieprzem."
    },

    {
        title: "Kanapki z pastą jajeczną",
        category: "sniadanie",
        required: ["jajka","majonez","bagietka"],
        optional: ["sól","pieprz","rzeżucha","szczypior","suszone pomidory"],
        image: "assets/images/sniadania/kanapka_pasta_jajeczna.jpg",
        quantities: ["4 jajka ugotowane na twardo","2 łyżki majonezu","1/2 bagietki","3 - 4 kawałki suszonych pomidorów"],
        instructions: "Jajka pokroić w kosteczkę lub rozgnieść w misce widelcem, ostudzić, przyprawić solą i pieprzem, wymieszać z majonezem. Dodać łyżkę posiekanego szczypiorku lub łyżkę listków rzeżuchy. Kromki bagietki lekko opiec w tosterze i przestudzić (można je też posmarować masłem). Pastę jajeczną ułożyć na grzankach, dodać posiekane suszone pomidory."
    },

    {
        title: "Naleśniki amerykańskie",
        category: "sniadanie",
        required: ["mąka","jajka","maślanka","cukier puder","proszek do pieczenia","soda","olej rzepakowy"],
        optional: ["sól"],
        image: "assets/images/sniadania/pancakes.webp",
        quantities: ["1 i 1/4 szklanki mąki","1 jajko","1 i 1/4 szklanki maślanki","1/4 szklanki cukru pudru","1 czubata łyżeczka proszku do pieczenia","1 łyżeczka sody","1/4 szklanki oleju roślinnego","szczypta soli"],
        instructions: "W blenderze zmiksować wszystkie składniki na gładką masę o konsystencji gęstej śmietany. Rozgrzać patelnię i na średnim ogniu smażyć pancakes z dwóch stron. Podawać z syropem klonowym, masłem lub cukrem."
    },

    {
        title: "Panini z salami i boczkiem",
        category: "sniadanie",
        required: ["chleb panini", "salami", "boczek", "ser żółty", "masło"],
        optional: ["pomidor", "rukola", "oliwa", "sól", "pieprz"],
        image: "assets/images/sniadania/panini.jpg",
        quantities: ["2 sztuki chleba panini", "4 plasterki salami", "4 plasterki boczku", "4 plasterki sera żółtego", "masło do smarowania"],
        instructions: "Przekroić chleb panini na pół i posmarować masłem obie połówki. Na dolnej części ułożyć plasterki salami, boczku i sera, a jeśli chcesz, również plasterki pomidora i kilka listków rukoli. Doprawić solą i pieprzem według uznania, przykryć górną częścią chleba. Rozgrzać grill elektryczny lub patelnię grillową i grillować panini przez 5-7 minut, aż ser się roztopi, a chleb stanie się chrupiący. Podawać na ciepło."
    },

    {
        title: "Wrap śniadaniowy z rukolą",
        category: "sniadanie",
        required: ["tortilla", "jajka", "rukola", "ser żółty", "szynka", "masło"],
        optional: ["pomidorki koktajlowe", "sól", "pieprz", "szczypior"],
        image: "assets/images/sniadania/wrap_sniadaniowy.jpg",
        quantities: ["1 tortilla pszenna", "1 jajko", "garść rukoli", "1 plasterek sera żółtego", "1 plasterek szynki", "masło do smażenia"],
        instructions: "Na rozgrzanej patelni rozpuścić niewielką ilość masła, a następnie usmażyć jajko sadzone, doprawiając solą i pieprzem. Tortillę rozłożyć na desce i ułożyć na niej plasterek szynki, ser żółty, rukolę oraz usmażone jajko. Można również dodać pokrojone na połówki pomidorki koktajlowe i posypać posiekanym szczypiorkiem. Zawinąć wrap, składając boki do środka, a następnie zwinąć całość w rulon. Podawać na ciepło lub zimno."
    },

    {
        title: "Śniadanie angielskie",
        category: "sniadanie",
        required: ["jajka", "bekon", "kiełbasa", "pieczarki", "pomidor", "fasola biała", "sos pomidorowy", "chleb tostowy"],
        optional: ["cebula", "czosnek", "sól", "pieprz", "masło"],
        image: "assets/images/sniadania/sniadanie_angielskie.jpg",
        quantities: ["2 jajka", "2 plastry bekonu", "2 kiełbaski śniadaniowe", "4 pieczarki", "1 pomidor", "1/2 szklanki fasoli białej (namoczonej przez noc)", "1/2 szklanki sosu pomidorowego", "1/2 małej cebuli", "1 ząbek czosnku", "2 kromki chleba tostowego"],
        instructions: "Fasolę gotować w lekko osolonej wodzie, aż będzie miękka (ok. 1 godziny), a następnie odcedzić. Na małej patelni zeszklić posiekaną cebulę i czosnek na odrobinie masła, dodać ugotowaną fasolę oraz sos pomidorowy. Doprawić solą i pieprzem, dusić przez 10 minut na małym ogniu. Na dużej patelni usmażyć bekon i kiełbaski na złoty kolor, a następnie odłożyć na talerz. Na tej samej patelni podsmażyć przekrojone na pół pieczarki i plastry pomidora, aż będą miękkie. W oddzielnej, lekko natłuszczonej patelni smażyć jajka na średnim ogniu, doprawiając solą i pieprzem według uznania. W międzyczasie opiec chleb tostowy na złoty kolor. Wszystkie składniki podawać razem na talerzu, z fasolką przygotowaną na ciepło w sosie pomidorowym."
    },

    {
        title: "Owsianka",
        category: "sniadanie",
        required: ["płatki owsiane", "mleko", "sól"],
        optional: ["miód", "cynamon", "orzechy włoskie", "masło orzechowe", "nasiona chia"],
        image: "assets/images/sniadania/owsianka.jpg",
        quantities: ["1 szklanka płatków owsianych", "2 szklanki mleka lub wody", "szczypta soli", "1 łyżeczka miodu", "szczypta cynamonu", "garść owoców sezonowych", "1 łyżeczka masła orzechowego"],
        instructions: "Płatki owsiane wsypać do garnka, zalać mlekiem lub wodą, dodać szczyptę soli i doprowadzić do wrzenia. Zmniejszyć ogień i gotować na małym ogniu przez 5-7 minut, często mieszając, aż płatki zmiękną i uzyskają kremową konsystencję. Po zdjęciu z ognia dodać miód, cynamon, owoce sezonowe, masło orzechowe lub inne ulubione dodatki według uznania. Przełożyć do miseczki i podawać ciepłe."
    },

    {
        title: "Placki twarogowe",
        category: "sniadanie",
        required: ["ser twarogowy", "jajka", "mąka", "sól","olej rzepakowy"],
        optional: ["cukier", "wanilia", "śmietana"],
        image: "assets/images/sniadania/placuszki.jpg",
        quantities: ["250 g twarogu", "2 jajka", "1/2 szklanki mąki", "szczypta soli", "2 łyżki cukru", "1 łyżeczka cukru wanilinowego", "olej do smażenia"],
        instructions: "Twaróg dokładnie rozgnieść widelcem lub zmiksować, dodać jajka, mąkę, sól, cukier oraz cukier waniliowy. Całość dokładnie wymieszać, aż uzyskamy jednolitą masę. Na rozgrzanej patelni z olejem smażyć placki na złoty kolor z obu stron, po około 2-3 minuty z każdej strony. Podawać ciepłe, najlepiej z dodatkiem śmietany lub świeżych owoców."
    },

    {
        title: "Bajgiel z łososiem",
        category: "sniadanie",
        required: ["bajgiel", "łosoś", "serek śmietankowy", "szczypior"],
        optional: ["rukola", "ogórek", "cytryna", "sól", "pieprz"],
        image: "assets/images/sniadania/bajgiel_z_lososiem.jpg",
        quantities: ["1 bajgiel", "100 g wędzonego łososia", "50 g serka śmietankowego", "2 łyżki posiekanego szczypiorku", "szczypta soli i pieprzu"],
        instructions: "Bajgiel przeciąć na pół i lekko podgrzać na patelni lub w tosterze. Serek śmietankowy wymieszać z posiekanym szczypiorkiem, solą i pieprzem. Na dolnej części bajgla rozsmarować serek, ułożyć plastry wędzonego łososia, a opcjonalnie dodać rukolę oraz plasterki ogórka. Przykryć górną częścią bajgla, ewentualnie skropić sokiem z cytryny przed podaniem."
    },

    {
        title: "Grzanki czosnkowe",
        category: "sniadanie",
        required: ["chleb", "masło", "czosnek"],
        optional: ["sól", "pieprz", "natka pietruszki", "ser żółty"],
        image: "assets/images/sniadania/grzanki_czosnkowe.jpg",
        quantities: ["4 kromki chleba", "50 g masła", "2 ząbki czosnku", "sól i pieprz do smaku", "1 łyżka posiekanej natki pietruszki (opcjonalnie)", "50 g sera (opcjonalnie)"],
        instructions: "Masło rozpuścić w małym garnku i dodać przeciśnięty przez praskę czosnek, chwilę podsmażyć na małym ogniu, aby nie zbrązowiał. Kromki chleba posmarować czosnkowym masłem z obu stron. Rozgrzać patelnię lub piekarnik i zrumienić grzanki z obu stron na złoty kolor. Można je również posypać startym serem przed włożeniem do piekarnika. Po upieczeniu przyprawić solą i pieprzem, a dla smaku dodać posiekaną natkę pietruszki. Podawać ciepłe jako przekąskę."
    },

    {
        title: "Placki czekoladowe",
        category: "sniadanie",
        required: ["mąka", "jajka", "mleko", "kakao", "cukier", "proszek do pieczenia"],
        optional: ["sól", "wanilia", "czekolada mleczna"],
        image: "assets/images/sniadania/placuszki_czekoladowe.jpg",
        quantities: ["1 szklanka mąki", "2 jajka", "1 szklanka mleka", "1/3 szklanki kakao", "1/4 szklanki cukru", "1 łyżeczka proszku do pieczenia", "szczypta soli", "1 łyżeczka ekstraktu waniliowego (opcjonalnie)", "100 g czekolady (opcjonalnie)"],
        instructions: "W dużej misce wymieszać wszystkie suche składniki: mąkę, kakao, cukier, proszek do pieczenia i sól. W osobnej misce połączyć jajka, mleko i wanilię. Wlać mokre składniki do suchych i dokładnie wymieszać, aż powstanie gładkie ciasto. Jeśli używasz, pokruszoną czekoladę dodać na końcu. Rozgrzać patelnię i smażyć placki na złoty kolor z obu stron, około 2-3 minuty na każdą stronę. Podawać z ulubionymi dodatkami, takimi jak syrop klonowy, bita śmietana lub świeże owoce."
    },

    {
        title: "Shake bananowy",
        category: "sniadanie",
        required: ["banan", "mleko", "miód", "lód"],
        optional: ["wanilia", "cynamon", "jogurt", "orzechy włoskie"],
        image: "assets/images/sniadania/shake_bananowy.jpg",
        quantities: ["1 dojrzały banan", "1 szklanka mleka", "1 łyżka miodu", "1/2 szklanki lodu", "1/2 łyżeczki ekstraktu waniliowego (opcjonalnie)", "szczypta cynamonu (opcjonalnie)", "2 łyżki jogurtu (opcjonalnie)", "orzechy do posypania (opcjonalnie)"],
        instructions: "W blenderze umieścić banana, mleko, miód, lód oraz opcjonalnie ekstrakt waniliowy i cynamon. Blendować do uzyskania gładkiej konsystencji. Jeśli chcesz, możesz dodać jogurt dla kremowej tekstury. Przelać do szklanki i posypać orzechami, jeśli używasz. Podawać od razu."
    },
    
    //OBIADY

    {
        title: "Makaron w sosie orzechowym",
        category: "obiad",
        required: ["masło orzechowe","sos sojowy","miód","makaron spaghetti","sezam"],
        optional: ["orzeszki ziemne","olej sezamowy","ocet ryżowy,ogórek","sól"],
        image: "assets/images/obiady/makaron_orzechowy.webp",
        quantities: ["1 łyżka masła orzechowego","3 łyżki sosu sojowego","2 łyżki oleju sezamowego","2 łyżki octu ryżowego","1 łyżeczka miodu","300 g makaronu","1 pokrojony ogórek","3 łyżki sezamu"],
        instructions: "Wymieszaj masło orzechowe i sos sojowy. Dodaj olej sezamowy, ocet ryżowy, miód i sól. Ugotuj makaron w posolonej wodzie. Zachowaj 1/2 szklanki wody po gotowaniu. Makaron przełóż do dużej miski wraz z przygotowanym sosem orzechowym i ¼ szklanki zachowanej wody. Mieszaj, aż każda kluska obtoczy się w sosie. Dodaj więcej wody, jeśli trzeba rozluźnić jeszcze sos – powinien być dość płynny, po wyłożeniu na talerze zacznie szybko gęstnieć. Podawaj z ogórkiem i sezamem."
    },

    {
        title: "Spaghetti alla carbonara",
        category: "obiad",
        required: ["jajka","boczek","czosnek","makaron spaghetti","parmezan"],
        optional: ["natka pietruszki","ser grana padano","pieprz","sól"],
        image: "assets/images/obiady/carbonara.jpg",
        quantities: ["2 jajka","100 g boczku (wędzonego lub suszonego - pancetty)","150 g makaronu spaghetti","2 ząbki czosnku","2 łyżki drobno posiekanej natki pietruszki","30 g sera Parmezanu lub Grana Padano"],
        instructions: "Makaron ugotować al dente w osolonej wodzie. Jajka sparzyć wrzątkiem, wbić do głębokiego talerza, doprawić solą i roztrzepać widelcem. Na patelnię włożyć pokrojony w kosteczkę boczek i podsmażyć na małym ogniu przez kilka minut aż się lekko zrumieni. Dodać starty czosnek oraz posiekaną natkę pietruszki i smażyć jeszcze przez kilkanaście sekund. Trzymając patelnię na małym ogniu dodać makaron i wymieszać. Odstawić z ognia, dodać połowę sera i doprawić świeżo zmielonym pieprzem. Makaron polać roztrzepanymi jajkami i wymieszać. Jajka nie mogą całkowicie się ściąć, mają utworzyć kremowy sos i tylko trochę zgęstnieć od gorącego makaronu. Wyłożyć na talerze i posypać pozostałym serem."
    },

    {
        title: "Spaghetti Bolognese",
        category: "obiad",
        required: ["mięso mielone wołowe", "makaron spaghetti", "cebula", "czosnek", "marchewka", "seler naciowy", "pomidor", "bulion wołowy", "oliwa"],
        optional: ["parmezan", "natka pietruszki", "sól", "pieprz", "cukier", "oregano", "bazylia", "wino czerwone"],
        image: "assets/images/obiady/spaghetti_bolognese.webp",
        quantities: [
            "400 g mięsa mielonego wołowego",
            "300 g makaronu spaghetti",
            "1 cebula, drobno posiekana",
            "2 ząbki czosnku, posiekane",
            "1 marchew, starta",
            "1 łodyga selera naciowego, posiekana",
            "1 puszka (400 g) pomidorów krojonych",
            "200 ml bulionu wołowego",
            "2 łyżki oliwy z oliwek",
            "1/2 szklanki czerwonego wina (opcjonalnie)",
            "1 łyżeczka cukru",
            "1/2 łyżeczki suszonego oregano",
            "1/2 łyżeczki suszonej bazylii",
            "sól i pieprz do smaku",
            "starty parmezan i natka pietruszki do podania"
        ],
        instructions: "Rozgrzej oliwę z oliwek na dużej patelni. Dodaj posiekaną cebulę i smaż na średnim ogniu, aż się zeszkli. Następnie dodaj czosnek, startą marchew i seler naciowy, smaż przez około 5 minut, aż warzywa zmiękną. Dodaj mięso mielone i smaż, rozdrabniając, aż nabierze złocistego koloru. Jeśli używasz wina, wlej je na patelnię i gotuj, aż część płynu odparuje. Dodaj pomidory z puszki, bulion, cukier oraz zioła: oregano i bazylię. Dopraw solą i pieprzem do smaku. Gotuj na małym ogniu przez około 30-40 minut, aż sos zgęstnieje, mieszając od czasu do czasu. W międzyczasie ugotuj makaron al dente w osolonej wodzie, odcedź. Wymieszaj makaron z sosem, podawaj na talerzach, posypując startym parmezanem i świeżą natką pietruszki."
    },

    {
        title: "Schabowy z ziemniakami i buraczkami",
        category: "obiad",
        required: ["schab wieprzowy", "ziemniaki", "buraki", "bułka tarta", "jajka", "mąka","olej rzepakowy"],
        optional: ["sól", "pieprz", "masło", "koperek"],
        image: "assets/images/obiady/schabowy.jpg",
        quantities: ["2 plastry schabu (ok. 150g każdy)", "4 ziemniaki", "2 średnie buraki", "1 jajko", "3 łyżki mąki", "3 łyżki bułki tartej", "1 łyżka masła", "olej do smażenia", "szczypta soli i pieprzu"],
        instructions: "Schab rozbić tłuczkiem, posolić i popieprzyć z obu stron. Przygotować trzy miseczki: jedną z mąką, drugą z roztrzepanym jajkiem, trzecią z bułką tartą. Plastry schabu obtoczyć kolejno w mące, jajku i bułce tartej. Na patelni rozgrzać olej i smażyć schabowe po 3-4 minuty z każdej strony, aż będą złociste i chrupiące. Ziemniaki obrać, pokroić i gotować w osolonej wodzie do miękkości, następnie odcedzić i dodać masło oraz posiekany koperek. Buraki obrać, ugotować do miękkości, a po ostudzeniu zetrzeć na tarce o grubych oczkach. Doprawić solą, pieprzem i odrobiną oleju."
    },

    {
        title: "Kotlety mielone z ziemniakami i surówką",
        category: "obiad",
        required: ["mięso mielone wieprzowe", "bułka", "jajka", "ziemniaki", "cebula","olej rzepakowy"],
        optional: ["sól", "pieprz", "bułka tarta", "masło", "koperek", "ogórek kiszony", "kapusta", "marchewka"],
        image: "assets/images/obiady/mielone.jpg",
        quantities: ["400g mięsa mielonego (wieprzowo-wołowe)", "1 czerstwa bułka", "1 jajko", "4 ziemniaki", "1 mała cebula", "2 łyżki bułki tartej", "sól i pieprz do smaku", "olej do smażenia", "1 łyżka masła", "koperek", "1 ogórek kiszony", "1/4 główki kapusty", "1 marchewka"],
        instructions: "Bułkę namoczyć w wodzie, następnie odcisnąć. Cebulę drobno posiekać i zeszklić na małej ilości oleju. W misce połączyć mięso mielone, namoczoną bułkę, jajko, podsmażoną cebulę, sól, pieprz i bułkę tartą. Wyrabiać masę na jednolitą konsystencję. Z masy formować kotlety i smażyć na rozgrzanym oleju z obu stron na złoty kolor. Ziemniaki obrać, pokroić i gotować w osolonej wodzie do miękkości, odcedzić i dodać masło oraz koperek. Surówka: kapustę drobno poszatkować, marchewkę zetrzeć, ogórek pokroić w kostkę. Wszystko wymieszać, doprawić solą i pieprzem."
    },

    {
        title: "Pieczony łosoś z ryżem i brokułami",
        category: "obiad",
        required: ["łosoś", "ryż", "brokuł", "cytryna"],
        optional: ["sól", "pieprz", "oliwa", "czosnek", "koperek", "masło"],
        image: "assets/images/obiady/pieczony_losos.jpg",
        quantities: ["2 filety z łososia", "1 szklanka ryżu", "1 brokuł", "1 cytryna", "2 łyżki oliwy", "sól i pieprz do smaku", "1 ząbek czosnku", "1 łyżka posiekanego koperku", "1 łyżka masła"],
        instructions: "Łososia oprószyć solą i pieprzem, skropić sokiem z cytryny, natrzeć oliwą i posiekanym czosnkiem, a następnie odstawić na kilka minut do zamarynowania. W tym czasie przygotować brokuły, dzieląc je na różyczki, a ryż ugotować według instrukcji na opakowaniu, dodając łyżkę masła, by nabrał delikatnego smaku. Łososia ułożyć na blaszce wyłożonej papierem do pieczenia i piec w piekarniku rozgrzanym do 180°C przez około 15-20 minut, aż będzie soczysty i lekko zarumieniony. Pod koniec pieczenia brokuły zblanszować przez 3-4 minuty w osolonej, gotującej wodzie, a następnie odcedzić. Na talerzu ułożyć porcję ryżu, obok pieczonego łososia i blanszowanych brokułów, całość posypać koperkiem i podać z plasterkami cytryny do smaku."
    },

    {
        title: "Udka kurczaka po koreańsku",
        category: "obiad",
        required: ["udko kurczaka", "sos sojowy", "czosnek", "imbir", "miód"],
        optional: ["olej sezamowy", "pasta gochujang", "szczypior", "sezam", "pieprz"],
        image: "assets/images/obiady/udka_koreanskie.jpg",
        quantities: ["4 udka kurczaka", "1/4 szklanki sosu sojowego", "2 ząbki czosnku", "1 łyżeczka świeżego startego imbiru", "1 łyżka miodu", "1 łyżeczka oleju sezamowego", "1 łyżka pasty gochujang", "szczypiorek i sezam do posypania"],
        instructions: "Udka kurczaka opłukać i osuszyć papierowym ręcznikiem. W misce przygotować marynatę: wymieszać sos sojowy, starty czosnek i imbir, miód, olej sezamowy i pastę gochujang, aż składniki się połączą. Udka włożyć do miski z marynatą, dokładnie obtoczyć i odstawić do lodówki na co najmniej 30 minut, aby przeszły smakiem. Po zamarynowaniu, ułożyć udka na blaszce wyłożonej papierem do pieczenia i piec w piekarniku nagrzanym do 200°C przez około 35-40 minut, aż skórka będzie rumiana i chrupiąca. Pod koniec pieczenia, posmarować udka pozostałą marynatą dla dodatkowego smaku. Gotowe udka podawać posypane posiekanym szczypiorkiem i sezamem. Świetnie smakują z ryżem jaśminowym lub warzywami."
    },

    {
        title: "Zupa ogórkowa",
        category: "obiad",
        required: ["ogórek kiszony", "ziemniaki", "marchewka", "cebula", "bulion drobiowy"],
        optional: ["koperek", "śmietana", "sól", "pieprz"],
        image: "assets/images/obiady/ogorkowa.jpg",
        quantities: ["3 średnie ogórki kiszone", "3 ziemniaki", "1 marchew", "1 cebula", "1 litr bulionu", "1 łyżka śmietany", "sól i pieprz do smaku", "koperek do dekoracji"],
        instructions: "W garnku podsmażyć na odrobinie oleju drobno posiekaną cebulę aż będzie złocista. Dodać pokrojone w kostkę ziemniaki i marchew, chwilę podsmażyć, a następnie zalać bulionem i gotować do miękkości warzyw. W międzyczasie zetrzeć ogórki kiszone na tarce o grubych oczkach, dodać do zupy i gotować przez kilka minut. Doprawić solą i pieprzem, a na końcu dodać śmietanę, mieszając zupę. Podawać gorącą, posypaną świeżym koperkiem."
    },


    {
        title: "Rosół",
        category: "obiad",
        required: ["udko kurczaka", "marchewka", "seler", "pietruszka", "cebula", "liść laurowy", "ziele angielskie"],
        optional: ["makaron nitki", "natka pietruszki", "sól", "pieprz"],
        image: "assets/images/obiady/rosol.jpg",
        quantities: ["1 kg mięsa na rosół (np. kurczak, wołowina)", "2 marchewki", "1 korzeń selera", "1 pietruszka", "1 cebula", "1 łyżka przypraw (np. liść laurowy, ziele angielskie, sól, pieprz)"],
        instructions: "Mięso dokładnie umyć, włożyć do garnka i zalać zimną wodą. Dodać pokrojone w kostkę marchewki, selera i pietruszkę oraz cebulę (można ją opalić na ogniu dla lepszego smaku). Całość doprawić przyprawami, zagotować, a następnie zmniejszyć ogień i gotować na wolnym ogniu przez około 1,5 do 2 godzin. W trakcie gotowania zbierać szumowiny. Na koniec doprawić solą i pieprzem do smaku. Podawać z ugotowanym makaronem oraz posypane natką pietruszki."
    },

    {
        title: "Zupa pomidorowa",
        category: "obiad",
        required: ["pomidor", "bulion drobiowy", "ryż", "cebula"],
        optional: ["śmietana", "bazylia", "sól", "pieprz", "marchewka", "natka pietruszki"],
        image: "assets/images/obiady/pomidorowa.webp",
        quantities: ["800 g pomidorów (świeżych lub z puszki)", "1 l bulionu", "1/2 szklanki ryżu", "1 cebula", "2 łyżki oliwy"],
        instructions: "Na oliwie zeszklić posiekaną cebulę, dodać pokrojone pomidory (jeśli używasz świeżych, możesz je najpierw sparzyć i obrać ze skórki) oraz ewentualnie startą marchew. Smażyć przez kilka minut, a następnie zalać bulionem. Dodać ryż i gotować na małym ogniu, aż ryż będzie miękki. Na koniec zupę zmiksować do uzyskania gładkiej konsystencji, doprawić solą i pieprzem do smaku oraz podać ze śmietaną i posypaną świeżą bazylią lub natką pietruszki."
    },

    {
        title: "Gulasz wołowy z papryką i kaszą gryczaną",
        category: "obiad",
        required: ["łopatka wołowa", "cebula", "czosnek", "papryka", "kasza gryczana", "bulion wołowy", "koncentrat pomidorowy", "olej rzepakowy"],
        optional: ["marchewka", "liść laurowy", "ziele angielskie", "majeranek", "sól", "pieprz", "papryka mielona"],
        image: "assets/images/obiady/gulasz.jpg",
        quantities: ["500 g wołowiny (np. łopatka)", "1 duża cebula", "2 ząbki czosnku", "1 papryka czerwona", "200 g kaszy gryczanej", "750 ml bulionu", "2 łyżki koncentratu pomidorowego", "2 marchewki", "2 liście laurowe", "3 kulki ziela angielskiego", "sól i pieprz do smaku", "1 łyżeczka majeranku", "1 łyżeczka papryki wędzonej", "olej do smażenia"],
        instructions: "Pokroić mięso w kostkę, oprószyć solą i pieprzem. Rozgrzać olej na dużej patelni, zrumienić mięso z każdej strony, a następnie odłożyć je na bok. Na tej samej patelni zeszklić pokrojoną w kostkę cebulę i czosnek, dodać pokrojoną w paski paprykę i pokrojoną w plasterki marchewkę, smażyć przez kilka minut. Do warzyw dodać koncentrat pomidorowy i smażyć przez chwilę. Wlać bulion, dodać liście laurowe, ziele angielskie oraz podsmażone mięso. Doprowadzić do wrzenia, zmniejszyć ogień, przykryć i gotować przez około godzinę, aż mięso zmięknie. W międzyczasie ugotować kaszę gryczaną według instrukcji na opakowaniu. Gulasz doprawić do smaku solą, pieprzem, majerankiem i wędzoną papryką. Podawać gulasz na ciepło z kaszą gryczaną, całość można posypać posiekaną natką pietruszki."
    },
      
    {
        title: "Lasagne z sosem bolońskim",
        category: "obiad",
        required: ["makaron lasagne", "mięso mielone wołowe", "cebula", "czosnek", "passata pomidorowa", "sos beszamelowy", "mozzarella żółta", "parmezan", "olej rzepakowy"],
        optional: ["marchewka", "seler naciowy", "bazylia", "oregano", "sól", "pieprz", "liść laurowy"],
        image: "assets/images/obiady/lasagne.jpg",
        quantities: ["12 płatów makaronu lasagne", "500 g mięsa mielonego wołowego", "1 duża cebula", "2 ząbki czosnku", "500 ml passaty pomidorowej", "500 ml sosu beszamelowego", "200 g sera mozzarella", "50 g sera parmezan", "1 marchewka", "1 łodyga selera naciowego", "1 łyżeczka bazylii", "1 łyżeczka oregano", "sól i pieprz do smaku", "olej do smażenia"],
        instructions: "Cebulę, marchewkę i seler drobno pokroić, czosnek posiekać. Na dużej patelni rozgrzać olej, zeszklić cebulę i czosnek, dodać marchewkę, seler oraz mięso mielone. Smażyć do zarumienienia, następnie dodać passatę pomidorową, liść laurowy, bazylię, oregano, sól i pieprz do smaku. Dusić na małym ogniu około 30 minut, aż sos zgęstnieje. W międzyczasie przygotować sos beszamelowy. Na dno formy do zapiekania rozsmarować cienką warstwę sosu bolońskiego, położyć warstwę makaronu lasagne, polać sosem beszamelowym, posypać serem mozzarella i wyłożyć kolejną warstwę sosu bolońskiego. Powtórzyć układanie warstw aż do wyczerpania składników, kończąc na sosie beszamelowym i warstwie sera mozzarella oraz parmezanu. Piec w piekarniku nagrzanym do 180°C przez około 40 minut, aż lasagne będzie złocista i lekko zapieczona na wierzchu. Przed krojeniem odczekać kilka minut, aby lasagne się ustabilizowała."
    },

    {
        title: "Placek po zbójnicku",
        category: "obiad",
        required: ["ziemniaki", "mięso mielone wołowe", "cebula", "czosnek", "mąka", "jajka", "śmietana", "bulion wołowy", "olej rzepakowy"],
        optional: ["marchewka", "papryka", "pieczarki", "papryka mielona", "majeranek", "liść laurowy", "ziele angielskie", "sól", "pieprz"],
        image: "assets/images/obiady/placek_po_zbojnicku.jpg",
        quantities: ["1 kg ziemniaków", "300 g mięsa mielonego wołowego", "1 duża cebula", "2 ząbki czosnku", "2 łyżki mąki", "1 jajko", "200 ml śmietany 18%", "500 ml bulionu", "1 marchewka", "1 papryka", "100 g pieczarek", "1 łyżeczka papryki słodkiej", "1/2 łyżeczki majeranku", "2 liście laurowe", "3 kulki ziela angielskiego", "sól i pieprz do smaku", "olej do smażenia"],
        instructions: "Ziemniaki obrać, zetrzeć na tarce o drobnych oczkach, dodać jajko, mąkę, sól i pieprz, dokładnie wymieszać. Z tak przygotowanej masy formować placki i smażyć na rozgrzanym oleju na złoty kolor z obu stron. Na drugiej patelni rozgrzać odrobinę oleju, podsmażyć posiekaną cebulę i czosnek, dodać mięso mielone i smażyć, aż się zrumieni. Dodać startą marchewkę, pokrojoną paprykę, pieczarki oraz przyprawy: liście laurowe, ziele angielskie, paprykę słodką, majeranek, sól i pieprz. Zalać bulionem i dusić około 20-30 minut, aż warzywa zmiękną, a sos zgęstnieje. Na koniec dodać śmietanę i dokładnie wymieszać. Na talerzu układać placki ziemniaczane, na wierzchu porcję mięsnego farszu, opcjonalnie posypać natką pietruszki. Podawać gorące."
    },

    {
        title: "Kurczak z brokułami w sosie śmietanowym",
        category: "obiad",
        required: ["pierś z kurczaka", "brokuł", "śmietana", "czosnek", "olej rzepakowy"],
        optional: ["ryż", "parmezan", "natka pietruszki", "sól", "pieprz", "papryka mielona", "pieprz ziołowy"],
        image: "assets/images/obiady/kurczak_brokuly.webp",
        quantities: ["2 piersi z kurczaka", "1 średni brokuł", "200 ml śmietany 18%", "2 ząbki czosnku", "olej do smażenia", "sól i pieprz do smaku", "1/2 łyżeczki papryki słodkiej", "opcjonalnie starty parmezan do posypania"],
        instructions: "Pierś z kurczaka pokroić w kostkę, oprószyć solą, pieprzem i papryką słodką. Rozgrzać olej na patelni i podsmażyć kurczaka na złoty kolor. W międzyczasie brokuł podzielić na różyczki i zblanszować we wrzącej osolonej wodzie przez około 3-4 minuty, a następnie odcedzić. Do kurczaka dodać przeciśnięty przez praskę czosnek, chwilę podsmażyć, następnie wlać śmietanę, wymieszać i doprawić do smaku solą i pieprzem. Na koniec dodać brokuły i dusić całość jeszcze przez kilka minut, aż sos zgęstnieje, a brokuły przejdą aromatem sosu. Podawać z ryżem, posypane parmezanem i natką pietruszki."
    },

    {
        title: "Gołąbki w sosie pomidorowym",
        category: "obiad",
        required: ["kapusta", "mięso mielone wieprzowe", "ryż", "cebula", "czosnek", "jajka", "sos pomidorowy", "bulion warzywny"],
        optional: ["majeranek", "liść laurowy", "ziele angielskie", "sól", "pieprz", "cukier"],
        image: "assets/images/obiady/golabki.jpg",
        quantities: ["1 średnia główka kapusty", "500 g mięsa mielonego (wieprzowe lub mieszane)", "100 g ryżu", "1 duża cebula", "2 ząbki czosnku", "1 jajko", "500 ml sosu pomidorowego", "250 ml bulionu", "sól i pieprz do smaku", "1 łyżeczka majeranku", "2 liście laurowe", "3 kulki ziela angielskiego"],
        instructions: "W dużym garnku zagotować wodę i włożyć do niej całą główkę kapusty. Gotować przez kilka minut, aż liście staną się miękkie i można je będzie łatwo oddzielić. Ryż ugotować na półtwardo i odstawić. Na patelni zeszklić pokrojoną w kostkę cebulę i posiekany czosnek. Do dużej miski przełożyć mięso mielone, ugotowany ryż, zeszkloną cebulę z czosnkiem, jajko, majeranek oraz sól i pieprz. Dokładnie wymieszać. Z kapusty ostrożnie oddzielić liście, na każdym z nich umieścić porcję farszu i zawinąć, tworząc gołąbki. Na dno dużego garnka ułożyć kilka liści kapusty, na nich ciasno poukładać gołąbki. Dodać liście laurowe i ziele angielskie, wlać bulion i gotować pod przykryciem na małym ogniu przez około 45 minut. Po tym czasie dodać sos pomidorowy i doprawić do smaku solą, pieprzem oraz odrobiną cukru, jeśli sos jest kwaśny. Gotować jeszcze przez 15 minut. Gołąbki najlepiej podawać polane sosem pomidorowym."
    },

    {
        title: "Makaron ze szpinakiem i czosnkiem",
        category: "obiad",
        required: ["makaron penne", "szpinak", "czosnek", "śmietana kremówka", "parmezan", "masło"],
        optional: ["cebula", "sól", "pieprz", "gałka muszkatołowa", "sok z cytryny"],
        image: "assets/images/obiady/makaron_szpinak.jpg",
        quantities: ["250 g makaronu (np. tagliatelle lub penne)", "200 g świeżego szpinaku", "2 ząbki czosnku", "200 ml śmietany kremówki", "50 g parmezanu", "1 łyżka masła", "sól i pieprz do smaku", "szczypta gałki muszkatołowej", "odrobina soku z cytryny"],
        instructions: "Makaron ugotować al dente według instrukcji na opakowaniu i odcedzić, zachowując trochę wody z gotowania. Na dużej patelni rozgrzać masło, dodać przeciśnięty przez praskę czosnek i zeszklić przez chwilę, aż uwolni aromat. Dodać świeży szpinak i smażyć, aż zwiędnie. Wlać śmietanę kremówkę, doprawić solą, pieprzem i szczyptą gałki muszkatołowej, a następnie gotować, aż sos lekko zgęstnieje. Dodać odcedzony makaron oraz starty parmezan, wszystko dokładnie wymieszać. Jeśli sos jest za gęsty, dodać trochę wody z gotowania makaronu. Na koniec dodać kilka kropel soku z cytryny do smaku. Makaron podawać gorący, posypany dodatkowym parmezanem."
    },

    {
        title: "Szwedzkie kulki mięsne",
        category: "obiad",
        required: ["mięso mielone wieprzowo-wołowe", "cebula", "bułka tarta", "jajka", "mleko", "masło", "bulion wołowy", "śmietana kremówka"],
        optional: ["sól", "pieprz", "gałka muszkatołowa", "żurawina", "ziemniaki", "mąka"],
        image: "assets/images/obiady/kulki_szwedzkie.jpg",
        quantities: ["500 g mięsa mielonego (wieprzowo-wołowego)", "1 średnia cebula", "1/2 szklanki bułki tartej", "1 jajko", "1/4 szklanki mleka", "1 łyżka masła", "1/2 szklanki bulionu wołowego", "1/2 szklanki śmietany kremówki", "sól i pieprz do smaku", "szczypta gałki muszkatołowej", "ugotowane ziemniaki lub puree, żurawina do podania"],
        instructions: "Bułkę tartą zalać mlekiem i odstawić na kilka minut, aby nasiąkła. W międzyczasie cebulę drobno posiekać i zeszklić na patelni na maśle. W misce wymieszać mięso mielone, przestudzoną cebulę, jajko oraz namoczoną bułkę tartą. Doprawić solą, pieprzem i gałką muszkatołową, po czym dobrze wyrobić masę. Formować małe kulki i smażyć na rozgrzanym maśle z każdej strony, aż będą złociste. Usmażone kulki odłożyć na talerz, a na tej samej patelni przygotować sos: dodać bulion, wymieszać z pozostałościami po smażeniu i zagotować. Dodać śmietanę kremówkę i chwilę gotować, aż sos lekko zgęstnieje. Do sosu włożyć usmażone kulki, chwilę podgrzać i podawać z ziemniakami lub puree oraz żurawiną."
    },

    {
        title: "Zupa pieczarkowa",
        category: "obiad",
        required: ["pieczarki", "marchewka", "cebula", "ziemniaki", "bulion warzywny", "śmietana", "masło"],
        optional: ["natka pietruszki", "liść laurowy", "ziele angielskie", "sól", "pieprz"],
        image: "assets/images/obiady/pieczarkowa.jpg",
        quantities: ["500 g pieczarek", "1 marchewka", "1 cebula", "3 ziemniaki", "1 litr bulionu warzywnego", "100 ml śmietany 18%", "1 łyżka masła", "2 liście laurowe", "3 ziela angielskie", "sól i pieprz do smaku", "natka pietruszki do posypania"],
        instructions: "Pieczarki oczyścić i pokroić w plasterki. Cebulę posiekać, a marchewkę zetrzeć na tarce. W garnku rozgrzać masło, zeszklić cebulę, dodać marchewkę i pieczarki, chwilę smażyć, aż pieczarki zmiękną. Ziemniaki obrać, pokroić w kostkę i dodać do garnka razem z bulionem, liściem laurowym oraz zielem angielskim. Gotować około 20 minut, aż ziemniaki będą miękkie. Na koniec wyjąć liście laurowe i ziele angielskie, dodać śmietanę, dokładnie wymieszać i doprawić solą oraz pieprzem do smaku. Przed podaniem posypać świeżą natką pietruszki."
    },

    {
        title: "Barszcz biały",
        category: "obiad",
        required: ["zakwas na barszcz", "cebula", "kiełbasa", "ziemniaki", "czosnek", "sól", "pieprz"],
        optional: ["majeranek", "śmietana", "liść laurowy", "ziele angielskie", "jajka"],
        image: "assets/images/obiady/barszcz_bialy.jpg",
        quantities: ["1 litr zakwasu na barszcz", "1 cebula", "200 g kiełbasy", "3 ziemniaki", "2 ząbki czosnku", "sól i pieprz do smaku", "1 łyżeczka majeranku", "2 liście laurowe", "3 kulki ziela angielskiego", "100 ml śmietany (opcjonalnie)", "2 jajka na twardo (opcjonalnie)"],
        instructions: "Cebulę obrać i pokroić w kostkę, kiełbasę pokroić w plastry, a ziemniaki w kostkę. W dużym garnku wrzucić cebulę, kiełbasę, ziemniaki, czosnek (można go pokroić lub pozostawić w całości), liście laurowe oraz ziele angielskie. Dodać 1 litr wody i gotować, aż ziemniaki będą miękkie. Następnie dodać zakwas na barszcz, doprowadzić do wrzenia i gotować przez kilka minut. Na koniec doprawić do smaku solą, pieprzem i majerankiem. Jeżeli lubisz, możesz dodać śmietanę i podawać z pokrojonymi na ćwiartki jajkami na twardo."
    },

    {
        title: "Barszcz czerwony",
        category: "obiad",
        required: ["buraki", "cebula", "marchewka", "seler", "czosnek", "liść laurowy", "ziele angielskie", "sól", "pieprz"],
        optional: ["zakwas na barszcz", "śmietana", "jajka", "koperek", "majeranek"],
        image: "assets/images/obiady/barszcz_czerwony.jpg",
        quantities: ["4 buraki", "1 cebula", "1 marchewka", "1/2 selera", "2 ząbki czosnku", "2 liście laurowe", "5 kulek ziela angielskiego", "sól i pieprz do smaku", "1 litr zakwasu na barszcz (opcjonalnie)", "100 ml śmietany (opcjonalnie)", "2 jajka na twardo (opcjonalnie)", "koperek do dekoracji (opcjonalnie)"],
        instructions: "Buraki obrać i zetrzeć na tarce, cebulę pokroić w kostkę, marchewkę i seler pokroić w plastry. W dużym garnku wrzucić buraki, cebulę, marchewkę, seler, czosnek (można go zmiażdżyć), liście laurowe oraz ziele angielskie. Zalać całość wodą, gotować na małym ogniu przez około 1-1,5 godziny, aż buraki będą miękkie. Na koniec doprawić do smaku solą i pieprzem. Jeżeli używasz zakwasu na barszcz, dodaj go na końcu gotowania, a następnie zagotuj jeszcze raz. Przed podaniem zupę można zabielić śmietaną i podawać z pokrojonymi na ćwiartki jajkami na twardo oraz posypać świeżym koperkiem."
    },

    {
        title: "Schab w sosie własnym",
        category: "obiad",
        required: ["schab wieprzowy", "cebula", "czosnek", "bulion wieprzowy", "olej rzepakowy", "sól", "pieprz"],
        optional: ["majeranek", "papryka mielona", "śmietana"],
        image: "assets/images/obiady/schab_w_sosie.jpg",
        quantities: ["500 g schabu wieprzowego", "1 duża cebula", "2 ząbki czosnku", "300 ml bulionu", "2 łyżki oleju", "sól i pieprz do smaku", "1 łyżeczka majeranku (opcjonalnie)", "1 łyżeczka papryki mielonej (opcjonalnie)", "100 ml śmietany (opcjonalnie)"],
        instructions: "Schab pokroić na plastry i oprószyć solą oraz pieprzem. Na dużej patelni rozgrzać olej i obsmażyć schab z obu stron na złoty kolor, następnie przełożyć go na talerz. Na tej samej patelni zeszklić pokrojoną w kostkę cebulę oraz zmiażdżony czosnek, a następnie dodać bulion oraz obsmażony schab. Gotować na małym ogniu przez około 30 minut, aż mięso będzie miękkie. W razie potrzeby dodać przyprawy: majeranek i paprykę mieloną. Jeżeli chcesz, można dodać śmietanę do sosu, aby go zabielić. Przed podaniem schab można polać sosem i podawać z ulubionymi dodatkami, na przykład z ziemniakami lub kaszą."
    },

    {
        title: "Zupa z dyni",
        category: "obiad",
        required: ["dynia", "cebula", "czosnek", "bulion warzywny", "olej rzepakowy", "sól", "pieprz"],
        optional: ["śmietana", "imbir", "gałka muszkatołowa", "pietruszka", "pestki dyni"],
        image: "assets/images/obiady/zupa_dyniowa.jpg",
        quantities: ["1 kg dyni", "1 duża cebula", "2 ząbki czosnku", "750 ml bulionu warzywnego", "2 łyżki oleju", "sól i pieprz do smaku", "1 łyżeczka świeżego imbiru (opcjonalnie)", "1/4 łyżeczki gałki muszkatołowej (opcjonalnie)", "śmietana do podania (opcjonalnie)", "natka pietruszki do dekoracji (opcjonalnie)", "pestki dyni do dekoracji (opcjonalnie)"],
        instructions: "Dynię obrać, usunąć nasiona i pokroić w kostkę. Na dużym garnku rozgrzać olej, dodać pokrojoną w kostkę cebulę i zeszklić, następnie dodać posiekany czosnek oraz pokrojoną dynię, smażyć przez kilka minut. Wlać bulion warzywny i gotować na małym ogniu przez około 20-30 minut, aż dynia będzie miękka. Zupę zmiksować na gładki krem, dodać sól, pieprz oraz opcjonalnie imbir i gałkę muszkatołową do smaku. Podawać na gorąco, przybrane łyżką śmietany, posypane natką pietruszki i pestkami dyni."
    },

    {
        title: "Łazanki z kapustą i kiełbasą",
        category: "obiad",
        required: ["makaron łazanki", "kapusta", "kiełbasa", "cebula", "czosnek", "olej rzepakowy"],
        optional: ["sól", "pieprz", "majeranek", "śmietana"],
        image: "assets/images/obiady/lazanki.jpg",
        quantities: ["300 g makaronu łazanki", "400 g kapusty (świeżej lub kiszonej)", "200 g kiełbasy", "1 duża cebula", "2 ząbki czosnku", "2 łyżki oleju", "sól i pieprz do smaku", "1 łyżeczka majeranku (opcjonalnie)", "śmietana do podania (opcjonalnie)"],
        instructions: "Makaron ugotować al dente według instrukcji na opakowaniu. Na dużej patelni rozgrzać olej, dodać pokrojoną w kostkę cebulę i zeszklić. Następnie dodać posiekany czosnek oraz pokrojoną w plastry kiełbasę i smażyć, aż kiełbasa się zrumieni. Dodać posiekaną kapustę i smażyć przez kilka minut, aż zmięknie. Doprawić solą, pieprzem oraz majerankiem do smaku. Ugotowany makaron dodać do patelni z kapustą i kiełbasą, dokładnie wymieszać. Podawać na ciepło, opcjonalnie z łyżką śmietany."
    },

    {
        title: "Żeberka pieczone w miodzie i musztardzie",
        category: "obiad",
        required: ["żeberka wieprzowe", "miód", "musztarda", "czosnek", "sól", "pieprz"],
        optional: ["papryka mielona", "tymianek", "owoc jałowca", "oliwa", "ziemniaki"],
        image: "assets/images/obiady/zeberka.jpg",
        quantities: ["1 kg żeber wieprzowych", "3 łyżki miodu", "3 łyżki musztardy", "4 ząbki czosnku", "sól i pieprz do smaku", "1 łyżeczka papryki mielonej (opcjonalnie)", "1 łyżeczka tymianku (opcjonalnie)", "oliwa z oliwek do smarowania"],
        instructions: "Żeberka umyć, osuszyć i pokroić na kawałki. W miseczce wymieszać miód, musztardę, posiekany czosnek, sól, pieprz oraz ewentualnie paprykę i tymianek. Marynatą dokładnie natrzeć żeberka i odstawić na co najmniej 1 godzinę (najlepiej na całą noc do lodówki). Rozgrzać piekarnik do 180°C. Żeberka ułożyć na blaszce wyłożonej papierem do pieczenia, skropić oliwą i piec przez około 1,5 godziny, co jakiś czas smarując pozostałą marynatą. Podawać z pieczonymi ziemniakami."
    },

    {
        title: "Devolay z serem żółtym",
        category: "obiad",
        required: ["pierś z kurczaka", "ser żółty", "masło", "czosnek", "bułka tarta", "jajka", "mąka", "sól", "pieprz", "olej rzepakowy"],
        optional: ["natka pietruszki"],
        image: "assets/images/obiady/devolay.jpg",
        quantities: ["2 piersi z kurczaka", "100 g sera żółtego", "100 g masła", "2 ząbki czosnku", "1/2 szklanki bułki tartej", "1 jajko", "1/4 szklanki mąki", "sól i pieprz do smaku", "olej do smażenia"],
        instructions: "Masło rozpuścić w małym garnku, dodać drobno posiekany czosnek i chwilę podsmażyć, a następnie odstawić do ostygnięcia. Piersi z kurczaka rozbić na cienkie kotlety, doprawić solą i pieprzem, a następnie na środek każdego z nich nałożyć łyżkę masła czosnkowego oraz plaster sera żółtego. Zawinąć kurczaka, formując kotlet, i zlepić boki. Obtaczać najpierw w mące, następnie w rozkłóconym jajku, a na końcu w bułce tartej. Rozgrzać olej na patelni i smażyć kotlety na złoty kolor z obu stron. Podawać gorące, najlepiej z ziemniakami i ulubioną surówką."
    },

    {
        title: "Pulpety w sosie pomidorowym",
        category: "obiad",
        required: ["mięso mielone wieprzowe", "cebula", "czosnek", "ryż", "bulion wieprzowy", "pomidory z puszki", "olej rzepakowy"],
        optional: ["sól", "pieprz", "natka pietruszki"],
        image: "assets/images/obiady/pulpety.webp",
        quantities: ["500 g mięsa mielonego wieprzowe", "1 duża cebula", "2 ząbki czosnku", "1/2 szklanki ryżu", "750 ml bulionu", "400 g pomidorów w puszce", "olej do smażenia", "sól i pieprz do smaku"],
        instructions: "Cebulę i czosnek drobno posiekać i zeszklić na rozgrzanym oleju. W misce wymieszać mięso mielone, ugotowany ryż, podsmażoną cebulę, czosnek oraz przyprawy, formować pulpety. Na rozgrzanym oleju obsmażyć pulpety z każdej strony, następnie dodać pomidory w puszce oraz bulion, doprowadzić do wrzenia, a następnie zmniejszyć ogień i gotować pod przykryciem przez około 30 minut. Doprawić do smaku solą i pieprzem. Pulpety podawać z ulubionymi dodatkami, np. z puree ziemniaczanym lub makaronem."
    },

    {
        title: "Risotto z grzybami",
        category: "obiad",
        required: ["ryż arborio", "bulion warzywny", "borowiki","pieczarki", "cebula", "czosnek", "parmezan", "masło", "olej rzepakowy"],
        optional: ["sól", "pieprz", "natka pietruszki", "wino białe"],
        image: "assets/images/obiady/risotto.webp",
        quantities: ["300 g ryżu arborio", "1 l bulionu warzywnego", "300 g grzybów (np. pieczarki)", "1 cebula", "2 ząbki czosnku", "100 g parmezanu", "50 g masła", "olej do smażenia", "sól i pieprz do smaku"],
        instructions: "Na patelni rozgrzać olej i dodać drobno posiekaną cebulę oraz czosnek, smażyć, aż będą miękkie. Dodać pokrojone grzyby i smażyć przez kilka minut. Następnie dodać ryż i smażyć przez 2-3 minuty, aż stanie się przezroczysty. Dolać 150 ml białego wina (opcjonalnie) i gotować, aż wino odparuje. Stopniowo dodawać gorący bulion, mieszając, aż ryż wchłonie płyn. Gotować przez około 18-20 minut, aż ryż będzie miękki, ale al dente. Na koniec dodać masło i starty parmezan, wymieszać, doprawić solą i pieprzem do smaku. Podawać gorące, posypane natką pietruszki."
    },

    {
        title: "Rice Bowl z warzywami i kurczakiem",
        category: "obiad",
        required: ["ryż", "pierś z kurczaka", "papryka", "cukinia", "marchewka", "sos sojowy", "czosnek", "olej rzepakowy"],
        optional: ["szczypior", "sezam", "sól", "pieprz"],
        image: "assets/images/obiady/rice_bowl.jpg",
        quantities: ["1 szklanka ryżu", "2 piersi z kurczaka", "1 papryka czerwona", "1 mała cukinia", "1 marchew", "3 łyżki sosu sojowego", "2 ząbki czosnku", "2 łyżki oleju rzepakowego", "sól i pieprz do smaku"],
        instructions: "Ryż ugotować według instrukcji na opakowaniu. W międzyczasie piersi z kurczaka pokroić w kostkę, doprawić solą i pieprzem, a następnie podsmażyć na rozgrzanym oleju do zrumienienia. Dodać pokrojoną w paski paprykę, cukinię i marchew pokrojoną w słupki oraz przeciśnięty przez praskę czosnek. Smażyć przez kilka minut, aż warzywa będą lekko miękkie. Dodać sos sojowy i smażyć jeszcze przez chwilę. Ugotowany ryż podzielić na miski, na wierzch nałożyć mieszankę z kurczakiem i warzywami. Posypać szczypiorkiem i sezamem."
    },

    {
        title: "Zapiekanka makaronowa z mięsem mielonym",
        category: "obiad",
        required: ["makaron penne", "mięso mielone wieprzowo-wołowe", "cebula", "czosnek", "ser żółty", "sos pomidorowy"],
        optional: ["papryka", "cukinia", "oliwa", "sól", "pieprz", "oregano", "bazylia"],
        image: "assets/images/obiady/zapiekanka_makaronowa.jpg",
        quantities: ["300 g makaronu", "500 g mięsa mielonego wieprzowo-wołowego", "1 cebula", "2 ząbki czosnku", "200 g sera żółtego", "400 ml sosu pomidorowego", "sól i pieprz do smaku", "1 łyżeczka oregano", "1 łyżeczka bazylii"],
        instructions: "Makaron ugotować według instrukcji na opakowaniu, odcedzić i odstawić. Na patelni rozgrzać oliwę, zeszklić posiekaną cebulę i czosnek, dodać mięso mielone, smażyć aż się zrumieni. Dodać sos pomidorowy, przyprawy, chwilę gotować. W dużej misce wymieszać ugotowany makaron z mięsnym sosem, przełożyć do naczynia żaroodpornego. Na wierzchu posypać startym serem. Zapiekać w piekarniku nagrzanym do 180°C przez około 25-30 minut, aż ser się rozpuści i lekko zrumieni."
    },

    {
        title: "Zupa szczawiowa",
        category: "obiad",
        required: ["szczaw", "bulion warzywny", "ziemniaki", "śmietana", "cebula", "czosnek"],
        optional: ["sól", "pieprz", "jajka", "koperek", "masło"],
        image: "assets/images/obiady/szczawiowa.jpg",
        quantities: ["300 g szczawiu", "1 litr bulionu", "3 średnie ziemniaki", "200 ml śmietany 18%", "1 cebula", "2 ząbki czosnku", "sól i pieprz do smaku", "1 łyżka masła"],
        instructions: "Cebulę posiekać i zeszklić na maśle w dużym garnku, dodać pokrojone w kostkę ziemniaki i smażyć przez chwilę. Następnie dodać bulion i gotować, aż ziemniaki będą miękkie. W międzyczasie umyć szczaw i posiekać. Gdy ziemniaki będą gotowe, dodać szczaw do garnka i gotować przez około 5-7 minut. Na koniec dodać śmietanę, przyprawić solą i pieprzem do smaku. Zupę podawać gorącą, opcjonalnie z ugotowanym na twardo jajkiem i posypaną koperkiem."
    },

    {
        title: "Barszcz ukraiński",
        category: "obiad",
        required: ["buraki", "kapusta", "ziemniaki", "marchewka", "cebula", "czosnek", "bulion warzywny", "fasola biała"],
        optional: ["sól", "pieprz", "koperek", "śmietana", "sok z cytryny"],
        image: "assets/images/obiady/barszcz_ukrainski.jpg",
        quantities: ["3 średnie buraki", "200 g kapusty", "3 ziemniaki", "1 marchewka", "1 cebula", "2 ząbki czosnku", "1 litr bulionu", "1 szklanka ugotowanej fasoli", "sól i pieprz do smaku", "śmietana do podania", "koperek do dekoracji", "2 łyżki soku z cytryny"],
        instructions: "Buraki obrać i zetrzeć na tarce, a następnie w garnku zeszklić posiekaną cebulę i czosnek na odrobinie oleju. Dodać startą marchewkę oraz buraki, chwilę smażyć, a następnie wlać bulion i dodać pokrojone w kostkę ziemniaki. Gotować przez około 15 minut, następnie dodać posiekaną kapustę oraz ugotowaną fasolę i gotować jeszcze przez 10-15 minut, aż wszystkie warzywa będą miękkie. Na koniec doprawić solą, pieprzem i sokiem z cytryny. Zupę podawać gorącą, opcjonalnie z łyżką śmietany i posypaną świeżym koperkiem."
    },

    {
        title: "Zupa jarzynowa",
        category: "obiad",
        required: ["marchewka", "ziemniaki", "seler", "pietruszka", "cebula", "bulion warzywny", "olej rzepakowy"],
        optional: ["sól", "pieprz", "śmietana", "natka pietruszki"],
        image: "assets/images/obiady/jarzynowa.jpg",
        quantities: ["2 marchewki", "3 ziemniaki", "1/2 selera", "1 pietruszka", "1 cebula", "1 litr bulionu", "2 łyżki oleju", "sól i pieprz do smaku", "śmietana do podania", "natka pietruszki do dekoracji"],
        instructions: "Na oleju zeszklić pokrojoną cebulę, następnie dodać pokrojone w kostkę marchewkę, seler, pietruszkę i ziemniaki. Smażyć przez kilka minut, a następnie wlać bulion i gotować na średnim ogniu do miękkości warzyw, około 20-25 minut. Doprawić do smaku solą i pieprzem. Zupę podawać gorącą, opcjonalnie z łyżką śmietany i posypaną natką pietruszki."
    },

    {
        title: "Zupa meksykańska",
        category: "obiad",
        required: ["pierś z kurczaka", "fasola czerwona", "pomidory z puszki", "cebula", "papryka", "bulion drobiowy", "czosnek"],
        optional: ["sól", "pieprz", "śmietana", "natka pietruszki", "awokado", "ser żółty"],
        image: "assets/images/obiady/meksykanska.jpg",
        quantities: ["300 g piersi z kurczaka", "1 puszka czerwonej fasoli", "1 puszka pomidorów", "1 cebula", "1 czerwona papryka", "1 litr bulionu", "2 ząbki czosnku", "2 łyżeczki przypraw meksykańskich", "sól i pieprz do smaku", "śmietana do podania", "natka pietruszki do dekoracji"],
        instructions: "Na oleju podsmażyć pokrojoną cebulę i czosnek, a następnie dodać pokrojoną w kostkę pierś z kurczaka. Smażyć, aż kurczak będzie złocisty, następnie dodać pokrojoną paprykę, pomidory w puszce oraz czerwoną fasolę. Wlać bulion, dodać przyprawy meksykańskie, sól i pieprz. Gotować na średnim ogniu przez około 20-25 minut, aż wszystkie składniki będą miękkie. Podawać gorącą zupę z łyżką śmietany, posypaną natką pietruszki i opcjonalnie z awokado oraz serem żółtym."
    },

    //PRZEKĄSKI I FAST FOOD

    {
        title: "Hot-dog",
        category: "przekaska",
        required: ["parówki", "bułka do hot-doga", "musztarda", "ketchup"],
        optional: ["cebula", "ogórek konserwowy", "majonez", "papryka", "ser żółty", "salsa"],
        image: "assets/images/przekaski/hot_dog.jpg",
        quantities: ["2 parówki", "2 bułki do hot-doga", "2 łyżki musztardy", "2 łyżki ketchupu", "1 cebula (opcjonalnie)", "2 ogórki konserwowe (opcjonalnie)", "2 łyżki majonezu (opcjonalnie)", "plasterki papryki (opcjonalnie)", "plasterki sera żółtego (opcjonalnie)", "salsa (opcjonalnie)"],
        instructions: "Parówki ugotować lub usmażyć na patelni, a następnie umieścić je w bułkach. Na gorące parówki nałożyć musztardę i ketchup według własnego uznania. Dodatkowo można dodać pokrojoną cebulę, ogórki konserwowe, plasterki papryki, ser żółty oraz majonez lub salsę. Podawać na ciepło jako szybką przekąskę."
    },

    {
        title: "Zapiekanka",
        category: "przekaska",
        required: ["bagietka", "pieczarki", "ser żółty", "szynka", "masło"],
        optional: ["cebula", "papryka", "sól", "pieprz"],
        image: "assets/images/przekaski/zapiekanka.webp",
        quantities: ["1 bagietka", "200 g pieczarek", "150 g sera żółtego", "100 g szynki", "30 g masła", "1 cebula (opcjonalnie)", "1 papryka (opcjonalnie)", "sól i pieprz do smaku"],
        instructions: "Bagietkę przekroić wzdłuż na pół. Pieczarki i cebulę pokroić w kostkę, a następnie podsmażyć na maśle na złoty kolor. Dodać pokrojoną w kostkę szynkę oraz przyprawić solą i pieprzem. Na połówkach bagietki ułożyć przygotowane składniki, a na wierzchu posypać startym serem żółtym. Zapiekanki ułożyć na blaszce i włożyć do piekarnika nagrzanego do 200°C. Piec przez około 10-15 minut, aż ser się rozpuści i lekko zrumieni. Podawać na ciepło jako smaczną przekąskę."
    },

    {
        title: "Placki ziemniaczane",
        category: "przekaska",
        required: ["ziemniaki", "cebula", "jajka", "mąka", "sól", "pieprz", "olej rzepakowy"],
        optional: ["śmietana", "szczypior", "czosnek w proszku"],
        image: "assets/images/przekaski/placki_ziemniaczane.jpg",
        quantities: ["1 kg ziemniaków", "1 cebula", "1 jajko", "3-4 łyżki mąki", "sól i pieprz do smaku", "olej do smażenia"],
        instructions: "Ziemniaki obrać i zetrzeć na tarce o grubych oczkach, odcisnąć nadmiar soku. Cebulę drobno posiekać i dodać do ziemniaków. W misce wymieszać starte ziemniaki z cebulą, jajkiem, mąką oraz przyprawami. Na patelni rozgrzać olej, nakładać łyżką porcje masy ziemniaczanej i smażyć na złoty kolor z obu stron. Po usmażeniu odsączyć placki na papierowym ręczniku, a następnie podawać z ulubioną śmietaną lub sosem."
    },

    {
        title: "Sałatka Cezar",
        category: "przekaska",
        required: ["sałata rzymska", "pierś z kurczaka", "grzanki", "parmezan", "sos cezar"],
        optional: ["papryka", "awokado", "ogórek", "sól", "pieprz"],
        image: "assets/images/przekaski/salatka_cezar.jpg",
        quantities: ["1 główka sałaty rzymskiej", "300 g piersi z kurczaka", "1 szklanka grzanek", "50 g parmezanu", "3-4 łyżki sosu Cezar"],
        instructions: "Piersi z kurczaka przyprawić solą i pieprzem, a następnie usmażyć na patelni do złotego koloru, pokroić w paski. Sałatę rzymską umyć, osuszyć i porwać na mniejsze kawałki. W dużej misce połączyć sałatę, pokrojonego kurczaka, grzanki oraz starty parmezan. Dodać sos Cezar i delikatnie wymieszać. Sałatkę podawać od razu po przygotowaniu."
    },

    {
        title: "Burger wołowy",
        category: "przekaska",
        required: ["mięso mielone wołowe", "bułka", "ser żółty", "sałata", "pomidor", "ogórek", "cebula", "majonez", "ketchup"],
        optional: ["sól", "pieprz", "musztarda", "ogórek konserwowy", "bekon"],
        image: "assets/images/przekaski/burger.jpg",
        quantities: ["500 g mięsa mielonego wołowego", "4 bułki hamburgerowe", "4 plastry sera żółtego", "4 liście sałaty", "1 pomidor", "1 ogórek", "1 cebula", "4 łyżki majonezu", "4 łyżki ketchupu", "sól i pieprz do smaku"],
        instructions: "Mięso mielone przyprawić solą i pieprzem, formować kotlety i smażyć na patelni lub grillować przez kilka minut z każdej strony, aż będą dobrze wysmażone. W ostatnich minutach smażenia położyć na każdym kotlecie plaster sera, aby się roztopił. Bułki przekroić i lekko opiec. Na dolnej części bułki ułożyć liść sałaty, następnie kotlet z serem, plasterki pomidora, ogórka i cebuli, dodać majonez i ketchup, a następnie przykryć górną częścią bułki. Podawać z frytkami lub ulubionymi dodatkami."
    },

    {
        title: "Bułeczki Bao Bao",
        category: "przekaska",
        required: ["mąka", "woda", "drożdże", "cukier", "sól", "łopatka wołowa", "sos sojowy", "imbir", "czosnek", "cebula"],
        optional: ["sos hoisin", "kolendra", "ogórek"],
        image: "assets/images/przekaski/bao_bao.jpg",
        quantities: ["2 szklanki mąki pszennej", "3/4 szklanki wody", "2 łyżeczki drożdży instant", "1 łyżka cukru", "1/2 łyżeczki soli", "300 g łopatki wołowej", "3 łyżki sosu sojowego", "1 łyżka startego imbiru", "2 ząbki czosnku", "1 mała cebula"],
        instructions: "W misce wymieszać mąkę, drożdże, cukier i sól. Stopniowo dodawać wodę, wyrabiać ciasto przez około 10 minut, aż będzie gładkie. Przykryć i odstawić na 1 godzinę do wyrośnięcia. W międzyczasie mięso pokroić w drobną kostkę, podsmażyć na patelni z cebulą, czosnkiem i imbirem, dodać sos sojowy i smażyć do momentu, aż mięso będzie dobrze ugotowane. Po wyrośnięciu ciasta podzielić je na małe kawałki, każdy rozwałkować, a następnie umieścić na środku łyżkę farszu i zlepić. Bao bao gotować na parze przez około 15-20 minut. Podawać gorące z sosem sojowym lub innym ulubionym sosem."
    },

    {
        title: "Kebab z wołowiną",
        category: "przekaska",
        required: ["łopatka wołowa", "pita", "sałata", "pomidor", "ogórek", "cebula", "sos czosnkowy"],
        optional: ["papryka", "szczypior", "tortilla", "sól", "pieprz","kmin rzymski","papryka mielona"],
        image: "assets/images/przekaski/kebab.jpg",
        quantities: ["500 g mięsa wołowego (np. łopatka)", "4 bułki pita", "1 mała sałata", "2 pomidory", "1 ogórek", "1 cebula", "4 łyżki sosu czosnkowego", "sól i pieprz do smaku", "1 łyżeczka kminu rzymskiego", "1 łyżeczka papryki słodkiej", "1 łyżeczka ostrej papryki"],
        instructions: "Wołowinę pokroić w cienkie paski, wymieszać z solą, pieprzem, kminem rzymskim oraz papryką. Podsmażyć na patelni z odrobiną oleju, aż mięso będzie dobrze usmażone. W międzyczasie pokroić pomidory, ogórki i cebulę w drobną kostkę. Bułki pita podgrzać w piekarniku lub na patelni. Na każdą bułkę nakładać świeżą sałatę, usmażoną wołowinę, pokrojone warzywa oraz polać sosem czosnkowym. Zwinąć kebab i podać na ciepło."
    },

    {
        title: "Pizza domowa",
        category: "przekaska",
        required: ["mąka", "drożdże", "woda", "sól", "cukier", "oliwa", "sos pomidorowy", "mozzarella żółta"],
        optional: ["szynka", "pieczarki", "oliwki", "papryka", "cebula", "bazylia", "oregano", "czosnek", "salami"],
        image: "assets/images/przekaski/pizza.jpg",
        quantities: ["500 g mąki", "25 g świeżych drożdży", "250 ml ciepłej wody", "1 łyżeczka soli", "1/2 łyżeczki cukru", "2 łyżki oliwy", "150 ml sosu pomidorowego", "200 g mozzarelli"],
        instructions: "Drożdże rozpuścić w ciepłej wodzie z dodatkiem cukru i odstawić na kilka minut, aż zaczną się pienić. W dużej misce połączyć mąkę z solą, dodać drożdże oraz oliwę i wyrabiać ciasto, aż będzie elastyczne. Przykryć i odstawić w ciepłe miejsce na około godzinę, aby podwoiło objętość. Następnie rozwałkować ciasto na okrągły placek, posmarować sosem pomidorowym, posypać startą mozzarellą i dodać wybrane dodatki, jak szynka, pieczarki, oliwki czy papryka. Pizzę piec w rozgrzanym do 220°C piekarniku przez 12-15 minut, aż brzegi będą rumiane, a ser roztopiony. Podawać gorącą, posypaną świeżą bazylią."
    },

    {
        title: "Stripsy z kurczaka",
        category: "przekaska",
        required: ["pierś z kurczaka", "bułka tarta", "jajka", "mąka", "sól", "pieprz", "czosnek w proszku", "olej rzepakowy"],
        optional: ["papryka mielona", "parmezan"],
        image: "assets/images/przekaski/stripsy.jpg",
        quantities: ["2 piersi z kurczaka", "1 szklanka bułki tartej", "2 jajka", "1/2 szklanki mąki", "sól i pieprz do smaku", "1 łyżeczka czosnku w proszku", "olej do smażenia"],
        instructions: "Kurczaka pokroić na kawałki wielkości kęsa, oprószyć solą, pieprzem oraz czosnkiem granulowanym, a dla ostrości można dodać odrobinę ostrej papryki. Przygotować trzy miski: jedną z mąką, drugą z rozkłóconymi jajkami, a trzecią z bułką tartą (opcjonalnie z dodatkiem parmezanu). Kawałki kurczaka najpierw obtaczać w mące, następnie w jajku i na końcu w bułce tartej. Na rozgrzanej patelni z olejem smażyć nuggetsy po około 3-4 minuty z każdej strony, aż będą złociste i chrupiące. Odsączyć z nadmiaru tłuszczu na ręczniku papierowym i podawać z ulubionym sosem."
    },

    {
        title: "Skrzydełka z kurczaka",
        category: "przekaska",
        required: ["skrzydełka z kurczaka", "olej rzepakowy", "sól", "pieprz", "papryka mielona", "czosnek w proszku", "miód", "sos sojowy"],
        optional: ["kolendra", "imbir"],
        image: "assets/images/przekaski/skrzydelka.jpg",
        quantities: ["1 kg skrzydełek z kurczaka", "2 łyżki oleju", "1 łyżeczka soli", "1/2 łyżeczki pieprzu", "1 łyżka papryki słodkiej", "1 łyżeczka czosnku granulowanego", "2 łyżki miodu", "3 łyżki sosu sojowego"],
        instructions: "Skrzydełka umyć, osuszyć i przełożyć do miski. Przygotować marynatę, mieszając olej, sól, pieprz, słodką paprykę, czosnek w proszku, miód oraz sos sojowy. Można dodać również ostrą paprykę lub pieprz cayenne dla intensywniejszego smaku. Dokładnie obtoczyć skrzydełka w marynacie i odstawić do lodówki na minimum 30 minut, aby smaki się przegryzły. Po zamarynowaniu ułożyć skrzydełka na blaszce wyłożonej papierem do pieczenia. Piec w piekarniku rozgrzanym do 200°C przez około 30-40 minut, aż będą złociste i chrupiące. Podawać z ulubionym sosem, na przykład czosnkowym lub BBQ."
    },

    {
        title: "Onion Rings",
        category: "przekaska",
        required: ["cebula", "mąka", "bułka tarta", "jajka", "mleko", "sól", "pieprz", "papryka mielona", "olej rzepakowy"],
        optional: ["czosnek w proszku", "proszek do pieczenia"],
        image: "assets/images/przekaski/onion_rings.jpg",
        quantities: ["2 duże cebule", "1 szklanka mąki", "1 szklanka bułki tartej", "2 jajka", "1/2 szklanki mleka", "1 łyżeczka soli", "1/2 łyżeczki pieprzu", "1 łyżeczka słodkiej papryki", "olej do smażenia"],
        instructions: "Cebule pokroić w grube krążki i rozdzielić pierścienie. W jednej misce wymieszać mąkę, sól, pieprz i paprykę słodką (opcjonalnie dodać ostrą paprykę lub czosnek granulowany). W drugiej misce rozkłócić jajka z mlekiem. Każdy pierścień cebuli obtoczyć najpierw w mące, potem w jajku, a na końcu w bułce tartej. Rozgrzać olej na patelni lub we frytkownicy do 180°C, smażyć krążki cebuli na złoty kolor przez 2-3 minuty z każdej strony. Po usmażeniu odsączyć na papierowym ręczniku. Podawać gorące z ulubionymi sosami."
    },


    {
        title: "Burrito",
        category: "przekaska",
        required: ["tortilla", "mięso mielone wołowe", "ryż", "fasola czerwona", "pomidor", "cebula", "czosnek", "salsa", "ser żółty", "olej rzepakowy", "sól", "pieprz"],
        optional: ["papryka", "kolendra", "śmietana", "guacamole", "papryka mielona", "kmin rzymski"],
        image: "assets/images/przekaski/burrito.webp",
        quantities: ["4 tortille", "400 g mielonej wołowiny", "1 szklanka ugotowanego ryżu", "1 szklanka czerwonej fasoli z puszki", "1 pomidor", "1 cebula", "2 ząbki czosnku", "1/2 szklanki salsy", "1/2 szklanki startego sera", "olej do smażenia", "sól i pieprz do smaku"],
        instructions: "Na patelni rozgrzać olej, zeszklić drobno posiekaną cebulę, dodać przeciśnięty przez praskę czosnek i mieloną wołowinę. Smażyć, aż mięso będzie złociste, doprawić solą, pieprzem, wędzoną papryką i kminem rzymskim według uznania. Do podsmażonego mięsa dodać pokrojonego pomidora, fasolę oraz salsę, gotować chwilę aż smaki się połączą. Tortille podgrzać na patelni, na każdej rozłożyć porcję ugotowanego ryżu, mięsa, startego sera i kolendry. Zawinąć brzegi tortilli, formując burrito, a następnie opiec z każdej strony na suchej patelni, by uzyskać chrupiącą skorupkę. Podawać z kwaśną śmietaną i guacamole."
    },

    {
        title: "Krewetki w tempurze",
        category: "przekaska",
        required: ["krewetki", "mąka", "mąka ziemniaczana", "jajka", "woda gazowana", "olej rzepakowy", "sól"],
        optional: ["sos sojowy", "sok z cytryny", "imbir", "pieprz"],
        image: "assets/images/przekaski/krewetki_tempura.jpg",
        quantities: ["300 g krewetek (obranych i oczyszczonych)", "1/2 szklanki mąki pszennej", "1/4 szklanki mąki ziemniaczanej", "1 jajko", "3/4 szklanki bardzo zimnej wody gazowanej", "olej do smażenia", "szczypta soli"],
        instructions: "Krewetki umyć, osuszyć i oprószyć solą oraz pieprzem. W misce wymieszać mąkę pszenną i ziemniaczaną, dodać jajko i bardzo zimną wodę gazowaną, mieszając delikatnie, aby uzyskać rzadkie ciasto (nie przejmować się grudkami). W głębokiej patelni rozgrzać olej do temperatury około 170°C. Każdą krewetkę zanurzyć w cieście tempura, a następnie smażyć w gorącym oleju przez 2-3 minuty, aż będą złociste i chrupiące. Odsączyć na papierowym ręczniku. Podawać z sosem sojowym lub sosem słodko-kwaśnym."
    },

    {
        title: "Panzerotti",
        category: "przekaska",
        required: ["mąka", "drożdże", "cukier", "sól", "oliwa", "woda", "mozzarella żółta", "sos pomidorowy", "olej rzepakowy"],
        optional: ["bazylia", "oregano", "szynka", "pieprz", "czosnek"],
        image: "assets/images/przekaski/panzerotti.jpg",
        quantities: ["2 szklanki mąki pszennej", "1/2 łyżeczki drożdży instant", "1/2 łyżeczki cukru", "1/2 łyżeczki soli", "1 łyżka oliwy z oliwek", "3/4 szklanki ciepłej wody", "100 g sera mozzarella (pokrojonego w kostkę)", "1/2 szklanki sosu pomidorowego", "olej do smażenia"],
        instructions: "W dużej misce wymieszać mąkę, drożdże, cukier i sól. Dodać oliwę i ciepłą wodę, wyrabiać ciasto, aż będzie gładkie i elastyczne, a następnie przykryć ściereczką i odstawić na około godzinę, aż podwoi objętość. Wyrośnięte ciasto podzielić na małe kulki i każdą z nich rozwałkować na okrągły placek o grubości kilku milimetrów. Na połowie każdego placka ułożyć kawałki mozzarelli i łyżkę sosu pomidorowego, a następnie złożyć ciasto na pół, dociskając brzegi, aby dokładnie się zlepiły. W głębokiej patelni rozgrzać olej i smażyć panzerotti na średnim ogniu, aż będą złociste z obu stron. Przed podaniem odsączyć na papierowym ręczniku i podawać gorące."
    },

    {
        title: "Mac and Cheese",
        category: "przekaska",
        required: ["makaron kolanka", "mleko", "masło", "mąka", "ser cheddar", "mozzarella żółta", "sól", "pieprz"],
        optional: ["musztarda", "bułka tarta", "parmezan", "papryka mielona", "czosnek w proszku"],
        image: "assets/images/przekaski/mac_and_cheese.webp",
        quantities: ["250 g makaronu kolanka", "2 szklanki mleka", "3 łyżki masła", "3 łyżki mąki", "200 g sera cheddar (starty)", "100 g sera mozzarella (starty)", "sól i pieprz do smaku"],
        instructions: "Ugotować makaron al dente w osolonej wodzie, odcedzić i odstawić. W rondlu roztopić masło na średnim ogniu, dodać mąkę i ciągle mieszając, podsmażać przez około minutę. Powoli wlać mleko, mieszając, aż sos zgęstnieje. Dodać starty ser cheddar i mozzarellę, a także sól i pieprz do smaku, i mieszać, aż sery się rozpuszczą i powstanie gładki sos. Wymieszać sos z ugotowanym makaronem i przełożyć do naczynia żaroodpornego. Na wierzch posypać bułką tartą i ewentualnie parmezanem. Piec w piekarniku rozgrzanym do 180°C przez około 20 minut, aż wierzch będzie złocisty."
    },

    {
        title: "Cebularz Lubelski",
        category: "przekaska",
        required: ["mąka", "drożdże", "mleko", "cebula", "mak", "cukier", "sól", "olej rzepakowy"],
        optional: ["masło", "pieprz", "jajka"],
        image: "assets/images/przekaski/cebularz.jpg",
        quantities: ["500 g mąki pszennej", "25 g świeżych drożdży", "250 ml mleka", "2 duże cebule", "2 łyżki maku", "1 łyżeczka cukru", "1/2 łyżeczki soli", "3 łyżki oleju"],
        instructions: "Drożdże rozpuścić w ciepłym mleku z dodatkiem cukru i odstawić na 10 minut. W dużej misce wymieszać mąkę, sól, zaczyn drożdżowy i olej, a następnie wyrobić ciasto aż będzie elastyczne. Odstawić na 1 godzinę do wyrośnięcia. W międzyczasie cebulę pokroić w cienkie plasterki i podsmażyć na maśle lub oleju do zeszklenia. Ciasto podzielić na kulki, rozwałkować na małe placki i ułożyć na blaszce. Na wierzch każdego nałożyć cebulę, posypać makiem, solą i pieprzem. Piec w piekarniku rozgrzanym do 200°C przez około 15-20 minut, aż cebularze będą złociste."
    },

    {
        title: "Nachos z serem i salsą",
        category: "przekaska",
        required: ["tortilla", "ser cheddar", "salsa", "oliwki", "papryczki jalapeño"],
        optional: ["śmietana", "guacamole", "czosnek w proszku", "papryka mielona"],
        image: "assets/images/przekaski/nachos.jpg",
        quantities: ["200 g tortilli", "150 g sera cheddar", "100 g salsy", "50 g oliwek", "50 g jalapeños"],
        instructions: "Yortille pokroić w trójkąty. Rozgrzać piekarnik do 180°C. Na blaszce ułożyć chipsy tortilla w jednej warstwie, posypać startym serem cheddar oraz pokrojonymi oliwkami i jalapeños. Wstawić do piekarnika na 10-15 minut, aż ser się roztopi i zacznie lekko bulgotać. Wyjąć nachos z piekarnika i podawać na ciepło z salsą oraz opcjonalnie z dodatkiem śmietany i guacamole."
    },

    {
        title: "Chili con carne",
        category: "przekaska",
        required: ["mięso mielone wołowe", "fasola czerwona", "cebula", "czosnek", "papryka", "pomidory z puszki", "chili"],
        optional: ["kukurydza", "liść laurowy", "ziele angielskie", "sól", "pieprz", "kolendra"],
        image: "assets/images/przekaski/chili_con_carne.jpg",
        quantities: ["500 g mięsa mielonego wołowego", "400 g fasoli czerwonej (z puszki)", "1 duża cebula", "2 ząbki czosnku", "1 czerwona papryka", "400 g pomidorów w puszce", "1 łyżka przyprawy chili", "1 łyżeczka soli", "1 łyżeczka pieprzu"],
        instructions: "Na dużej patelni lub w garnku rozgrzać odrobinę oleju, dodać pokrojoną w kostkę cebulę i czosnek, a następnie smażyć, aż cebula stanie się przezroczysta. Dodać mięso mielone i smażyć, aż będzie dobrze zrumienione. Dodać pokrojoną w kostkę paprykę oraz pomidory z puszki, a następnie dodać przyprawę chili, sól i pieprz. Dusić na małym ogniu przez około 30 minut, dodając fasolę i ewentualnie kukurydzę na ostatnie 10 minut gotowania. Przed podaniem posypać świeżą kolendrą."
    },

    {
        title: "Gyros",
        category: "przekaska",
        required: ["łopatka wieprzowa", "przyprawa gyros", "czosnek", "cebula", "pomidor", "ogórek", "sałata", "pita"],
        optional: ["sól", "pieprz"],
        image: "assets/images/przekaski/gyros.webp",
        quantities: ["500 g mięsa np. łopatka wieprzowa", "1 łyżka przyprawy gyros", "2 ząbki czosnku", "1 duża cebula", "1 pomidor", "1 ogórek", "1/2 główki sałaty", "pita"],
        instructions: "Mięso pokroić w cienkie paski, wymieszać z przyprawą gyros oraz przeciśniętym czosnkiem, odstawić na co najmniej 30 minut. Na patelni rozgrzać odrobinę oleju, dodać pokrojoną cebulę i smażyć przez chwilę, następnie dodać zamarynowane mięso i smażyć do zarumienienia. Pity podgrzać, a następnie nałożyć na nie usmażone mięso, pokrojone w kostkę pomidory, ogórki i sałatę."
    },

    {
        title: "Fish and Chips",
        category: "przekaska",
        required: ["mintaj", "mąka", "jajka", "piwo", "ziemniaki", "sól", "pieprz","olej rzepakowy"],
        optional: ["cytryna"],
        image: "assets/images/przekaski/fish_and_chips.jpg",
        quantities: ["500 g filetu rybnego (np. mintaj)", "1 szklanka mąki", "1 jajko", "1 szklanka piwa", "4 ziemniaki", "sól i pieprz do smaku", "olej do smażenia"],
        instructions: "Ziemniaki obrać, pokroić w grube frytki i wrzucić do wrzącej wody na około 5 minut, a następnie odcedzić i osuszyć. W misce wymieszać mąkę, jajko, piwo, sól i pieprz, aby uzyskać ciasto na rybę. Rybę pokroić na kawałki, obtaczać w cieście i smażyć na rozgrzanym oleju na złoty kolor. Frytki smażyć osobno w tym samym oleju, aż będą chrupiące i złociste. Podawać gorące z rybą, skropione sokiem z cytryny."
    },

    {
        title: "Placki z jabłkami",
        category: "przekaska",
        required: ["jabłko", "mąka", "cukier", "jajka", "mleko", "sól", "proszek do pieczenia"],
        optional: ["cynamon", "wanilia", "cukier puder"],
        image: "assets/images/przekaski/placki_z_jablkami.jpg",
        quantities: ["3 jabłka", "1 szklanka mąki", "1/4 szklanki cukru", "2 jajka", "1 szklanka mleka", "szczypta soli", "1 łyżeczka proszku do pieczenia"],
        instructions: "Jabłka obrać, usunąć gniazda nasienne i pokroić w cienkie plasterki. W misce wymieszać mąkę, cukier, sól i proszek do pieczenia. W osobnym naczyniu połączyć jajka z mlekiem, a następnie dodać do suchych składników i dokładnie wymieszać. Dodać pokrojone jabłka i delikatnie wymieszać. Na rozgrzanej patelni smażyć placki na złoty kolor z obu stron, aż będą rumiane. Podawać na ciepło, posypane cukrem pudrem lub z ulubionymi dodatkami, takimi jak jogurt czy bita śmietana."
    },

    //SŁODKOŚCI

    {
        title: "Cynamonki",
        category: "slodkosc",
        required: ["mąka", "mleko", "drożdże", "cukier", "jajka", "masło", "cynamon", "cukier brązowy"],
        optional: ["cukier wanilinowy", "cukier puder", "woda"],
        image: "assets/images/slodkosci/cynamonki.jpg",
        quantities: ["3 szklanki mąki", "1 szklanka ciepłego mleka", "30 g świeżych drożdży", "1/3 szklanki cukru", "1 jajko", "80 g masła", "2 łyżki cynamonu", "1/3 szklanki cukru brązowego na nadzienie"],
        instructions: "Drożdże rozpuścić w ciepłym mleku z łyżką cukru i odstawić na kilka minut, aż zaczną się pienić. W dużej misce wymieszać mąkę, pozostały cukier, rozczyn drożdżowy, jajko oraz roztopione masło. Wyrobić elastyczne ciasto, przykryć ściereczką i odstawić na godzinę do wyrośnięcia. Wyrośnięte ciasto rozwałkować na prostokąt, posmarować roztopionym masłem i posypać mieszanką cukru brązowego oraz cynamonu. Zwinąć w rulon, pokroić na plastry o grubości około 2 cm, ułożyć na blasze wyłożonej papierem do pieczenia. Piec w nagrzanym do 180°C piekarniku przez około 20–25 minut, aż cynamonki będą złociste. Po upieczeniu można polać lukrem."
    },

    {
        title: "Ciasteczka maślane",
        category: "slodkosc",
        required: ["mąka", "masło", "cukier", "jajka", "sól", "cukier wanilinowy"],
        optional: ["cukier puder"],
        image: "assets/images/slodkosci/ciasteczka_maslane.jpg",
        quantities: ["2 szklanki mąki", "200 g masła", "1/2 szklanki cukru", "1 jajko", "1 łyżeczka cukru wanilinowego", "szczypta soli"],
        instructions: "Masło utrzeć z cukrem i cukrem wanilinowym na puszystą masę. Dodać jajko i szczyptę soli, a następnie stopniowo dodawać mąkę, mieszając do uzyskania gładkiego ciasta. Z ciasta formować kulki, lekko spłaszczać i układać na blaszce wyłożonej papierem do pieczenia. Piec w nagrzanym do 180°C piekarniku przez około 10-12 minut, aż brzegi ciasteczek lekko się zarumienią. Po upieczeniu ostudzić i przechowywać w szczelnym pojemniku."
    },

    {
        title: "Ciasteczka czekoladowe",
        category: "slodkosc",
        required: ["mąka", "masło", "cukier", "jajka", "kakao", "czekolada gorzka", "proszek do pieczenia", "sól"],
        optional: ["cukier wanilinowy"],
        image: "assets/images/slodkosci/ciasteczka_czekoladowe.jpg",
        quantities: ["1 i 1/2 szklanki mąki", "120 g masła", "3/4 szklanki cukru", "1 jajko", "1/3 szklanki kakao", "100 g czekolady gorzkiej", "1/2 łyżeczki proszku do pieczenia", "szczypta soli"],
        instructions: "Masło utrzeć z cukrem i cukrem wanilinowym na puszystą masę. Dodać jajko i dokładnie wymieszać. W osobnej misce połączyć mąkę, kakao, proszek do pieczenia i sól, a następnie stopniowo dodawać do masy maślanej, mieszając do uzyskania jednolitego ciasta. Czekoladę drobno posiekać i wmieszać do ciasta. Z masy formować kulki, lekko spłaszczyć i układać na blaszce wyłożonej papierem do pieczenia. Piec w nagrzanym do 180°C piekarniku przez około 10-12 minut, aż brzegi ciasteczek lekko się zarumienią. Po upieczeniu ostudzić na kratce."
    },

    {
        title: "Szarlotka",
        category: "slodkosc",
        required: ["mąka", "masło", "cukier", "jajka", "jabłko", "cynamon", "cukier wanilinowy", "proszek do pieczenia"],
        optional: ["bułka tarta", "cukier puder"],
        image: "assets/images/slodkosci/szarlotka.jpg",
        quantities: ["2 i 1/2 szklanki mąki", "200 g masła", "3/4 szklanki cukru", "3 żółtka", "1 kg jabłek", "1 łyżeczka cynamonu", "1 łyżeczka cukru wanilinowego", "1 łyżeczka proszku do pieczenia"],
        instructions: "Masło posiekać z mąką, cukrem, cukrem waniliowym i proszkiem do pieczenia, a następnie dodać żółtka i zagnieść ciasto. Podzielić na dwie części – jedną schłodzić w lodówce, a drugą wyłożyć na dno blaszki wyłożonej papierem do pieczenia. Jabłka obrać, zetrzeć na tarce i wymieszać z cynamonem (można dodać bułkę tartą, aby wchłonęła nadmiar soku). Jabłka równomiernie rozłożyć na cieście w blaszce. Drugą część ciasta zetrzeć na tarce i równomiernie rozłożyć na wierzchu jabłek. Piec w nagrzanym do 180°C piekarniku przez około 45 minut, aż wierzch się zarumieni. Przed podaniem można posypać cukrem pudrem."
    },

    {
        title: "Pączki",
        category: "slodkosc",
        required: ["mąka", "drożdże", "mleko", "cukier", "masło", "jajka", "sól", "dżem", "olej rzepakowy"],
        optional: ["cukier puder", "pomarańcza"],
        image: "assets/images/slodkosci/paczki.jpg",
        quantities: ["500 g mąki", "30 g świeżych drożdży", "1 szklanka mleka", "3 łyżki cukru", "50 g masła", "4 żółtka", "1 jajko", "szczypta soli", "dżem do nadzienia", "olej do smażenia"],
        instructions: "Drożdże rozpuścić w ciepłym mleku z łyżką cukru i odczekać, aż zaczną się pienić. Mąkę przesiać do miski, dodać pozostały cukier, sól, żółtka, jajko, rozczyn drożdżowy oraz roztopione, przestudzone masło. Wszystko dokładnie wyrobić na gładkie ciasto i odstawić na godzinę do wyrośnięcia w ciepłym miejscu. Po tym czasie ciasto rozwałkować na grubość około 1 cm, wycinać krążki i na środku każdego nakładać odrobinę dżemu. Skleić brzegi, formując kulki. Smażyć pączki na rozgrzanym oleju, obracając, aż będą złotobrązowe z każdej strony. Po odsączeniu z nadmiaru tłuszczu posypać cukrem pudrem lub udekorować skórką pomarańczową."
    },

    {
        title: "Ciasto Marchewkowe",
        category: "slodkosc",
        required: ["marchewka", "mąka", "cukier", "olej rzepakowy", "jajka", "proszek do pieczenia", "cynamon", "soda"],
        optional: ["orzechy włoskie", "rodzynki", "pomarańcza","cukier puder", "serek śmietankowy"],
        image: "assets/images/slodkosci/ciasto_marchewkowe.jpg",
        quantities: ["2 szklanki startej marchewki", "1 i 1/2 szklanki mąki", "1 szklanka cukru", "3/4 szklanki oleju", "3 jajka", "1 łyżeczka proszku do pieczenia", "1 łyżeczka cynamonu", "1/2 łyżeczki sody oczyszczonej", "1/2 szklanki orzechów włoskich"],
        instructions: "W misce połączyć mąkę, proszek do pieczenia, cynamon i sodę oczyszczoną. W osobnej misce utrzeć jajka z cukrem na puszystą masę, następnie stopniowo dodawać olej, ciągle mieszając. Dodać starte marchewki i wymieszać. Połączyć suche składniki z mokrymi, dodając posiekane orzechy i ewentualnie rodzynki. Przełożyć ciasto do wyłożonej papierem do pieczenia formy. Piec w temperaturze 180°C przez około 45-50 minut, do suchego patyczka. Po wystudzeniu można posmarować wierzch lukrem lub kremem z serka śmietankowego."
    },

    {
        title: "Murzynek",
        category: "slodkosc",
        required: ["mąka", "masło", "cukier", "jajka", "kakao", "proszek do pieczenia", "mleko"],
        optional: ["czekolada mleczna"],
        image: "assets/images/slodkosci/murzynek.jpg",
        quantities: ["2 szklanki mąki", "200 g masła", "1 szklanka cukru", "3 jajka", "4 łyżki kakao", "2 łyżeczki proszku do pieczenia", "1/2 szklanki mleka"],
        instructions: "W rondelku rozpuścić masło, cukier, kakao oraz mleko, podgrzewać do połączenia, ale nie gotować. Odlać 1/2 szklanki masy na polewę, a resztę przestudzić. Do wystudzonej masy dodać żółtka oraz przesianą mąkę wymieszaną z proszkiem do pieczenia, wszystko dokładnie wymieszać. Ubić białka na sztywną pianę i delikatnie połączyć z ciastem. Przełożyć ciasto do wysmarowanej tłuszczem formy i piec w 180°C przez około 40-45 minut, do suchego patyczka. Po upieczeniu polać odlaną wcześniej polewą lub roztopioną czekoladą."
    },

    {
        title: "Churros",
        category: "slodkosc",
        required: ["mąka", "masło", "woda", "jajka", "sól", "olej rzepakowy"],
        optional: ["cukier", "cukier cynamonowy", "czekolada mleczna"],
        image: "assets/images/slodkosci/churros.jpg",
        quantities: ["1 szklanka mąki", "50 g masła", "1 szklanka wody", "2 jajka", "szczypta soli", "olej do smażenia", "cukier i cynamon do obtoczenia", "100 g czekolady do sosu"],
        instructions: "W rondelku zagotować wodę z masłem i szczyptą soli. Gdy masło się rozpuści, wsypać mąkę i energicznie mieszać, aż ciasto zacznie odchodzić od ścianek garnka. Zdjąć z ognia i lekko przestudzić, a następnie dodawać po jednym jajku, mieszając, aż masa będzie gładka i elastyczna. Rozgrzać olej do głębokiego smażenia. Ciasto przełożyć do rękawa cukierniczego z końcówką w kształcie gwiazdki i wyciskać kawałki ciasta bezpośrednio na gorący olej, smażąc na złoty kolor. Po wyjęciu z oleju osuszyć na papierowym ręczniku, a następnie obtoczyć w cukrze z cynamonem. Churrosy podawać z roztopioną czekoladą jako dipem."
    },

    {
        title: "Muffiny z borówkami",
        category: "slodkosc",
        required: ["mąka", "cukier", "jajka", "mleko", "masło", "proszek do pieczenia", "borówki"],
        optional: ["cukier wanilinowy", "sól"],
        image: "assets/images/slodkosci/muffiny_z_borowkami.webp",
        quantities: ["2 szklanki mąki", "1 szklanka cukru", "2 jajka", "1 szklanka mleka", "1/2 szklanki masła", "2 łyżeczki proszku do pieczenia", "1 łyżeczka cukru wanilinowego", "1 szklanka borówek"],
        instructions: "W dużej misce połączyć mąkę, cukier, proszek do pieczenia i cukier wanilinowy. W osobnym naczyniu wymieszać jajka, mleko i roztopione masło. Połączyć składniki mokre z suchymi, mieszając tylko do połączenia. Delikatnie dodać borówki, mieszając ostrożnie, aby nie zgnieść owoców. Ciasto przełożyć do foremek na muffiny, napełniając je do 2/3 wysokości. Piec w nagrzanym piekarniku do 180°C przez około 20-25 minut, aż muffiny będą złote i suche w dotyku. Po upieczeniu wystudzić na kratce."
    },

    {
        title: "Ciastka owsiane",
        category: "slodkosc",
        required: ["płatki owsiane", "masło", "cukier", "jajka", "mąka", "proszek do pieczenia", "sól"],
        optional: ["rodzynki", "czekolada mleczna"],
        image: "assets/images/slodkosci/ciastka_owsiane.jpg",
        quantities: ["2 szklanki płatków owsianych", "100 g masła", "3/4 szklanki cukru", "1 jajko", "1 szklanka mąki", "1 łyżeczka proszku do pieczenia", "szczypta soli", "opcjonalnie: 1/2 szklanki rodzynek lub kawałków czekolady"],
        instructions: "W misce roztopić masło, dodać cukier i wymieszać. Następnie dodać jajko i dokładnie wymieszać. W osobnej misce połączyć płatki owsiane, mąkę, proszek do pieczenia oraz sól. Połączyć składniki suche z mokrymi, a jeśli używamy, dodać rodzynki lub kawałki czekolady. Formować małe kulki ciasta i układać je na blaszce wyłożonej papierem do pieczenia. Lekko spłaszczyć ciasteczka. Piec w nagrzanym piekarniku do 180°C przez 10-12 minut, aż będą lekko złote. Po upieczeniu wystudzić na kratce."
    },

    {
        title: "Brownie",
        category: "slodkosc",
        required: ["czekolada gorzka", "masło", "cukier", "jajka", "mąka", "sól"],
        optional: ["czekolada mleczna", "wanilia"],
        image: "assets/images/slodkosci/brownie.jpg",
        quantities: ["200 g gorzkiej czekolady", "100 g masła", "1 szklanka cukru", "3 jajka", "1/2 szklanki mąki", "szczypta soli", "opcjonalnie: 1/2 szklanki orzechów lub kawałków czekolady"],
        instructions: "Czekoladę i masło roztopić w kąpieli wodnej lub mikrofalówce, a następnie odstawić do ostygnięcia. W misce wymieszać cukier z jajkami, a następnie dodać roztopioną czekoladę z masłem. Dobrze wymieszać, a następnie dodać mąkę i sól, mieszając do uzyskania gładkiej masy. Jeśli używamy, dodać kawałki czekolady. Przelać ciasto do formy wyłożonej papierem do pieczenia. Piec w nagrzanym piekarniku do 180°C przez 25-30 minut, aż wierzch będzie sprężysty, a patyczek włożony do środka wyjdzie lekko wilgotny. Po ostudzeniu pokroić na kawałki."
    },

    {
        title: "Sernik",
        category: "slodkosc",
        required: ["ser twarogowy", "cukier", "jajka", "masło", "mąka", "wanilia"],
        optional: ["rodzynki", "bita śmietana"],
        image: "assets/images/slodkosci/sernik.jpg",
        quantities: ["500 g sera twarogowego", "1 szklanka cukru", "3 jajka", "100 g masła", "1/2 szklanki mąki", "1 łyżeczka ekstraktu waniliowego", "opcjonalnie: 1/2 szklanki rodzynek"],
        instructions: "W misce dokładnie zmiksować ser twarogowy z cukrem i jajkami, aż masa będzie gładka. Roztopić masło i dodać do masy serowej wraz z mąką i wanilią, a jeśli używamy, to także rodzynki. Całość wymieszać do uzyskania jednolitej konsystencji. Przelać masę do formy wyłożonej papierem do pieczenia i piec w nagrzanym piekarniku do 180°C przez 45-50 minut, aż wierzch będzie lekko złocisty, a środek się zetnie. Po upieczeniu sernik ostudzić, a następnie wstawić do lodówki na kilka godzin przed podaniem."
    },

    {
        title: "Tiramisu",
        category: "slodkosc",
        required: ["mascarpone", "jajka", "cukier", "kawa", "biszkopty", "kakao"],
        optional: ["bita śmietana", "czekolada gorzka"],
        image: "assets/images/slodkosci/tiramisu.jpg",
        quantities: ["500 g mascarpone", "4 jajka", "1 szklanka cukru", "1 szklanka mocnego espresso", "200 g biszkoptów", "2 łyżki kakao"],
        instructions: "W misce ubić żółtka z cukrem, aż masa będzie jasna i puszysta, a następnie dodać mascarpone i wymieszać do uzyskania gładkiej konsystencji. W osobnej misce ubić białka na sztywną pianę i delikatnie połączyć z masą mascarpone. W espresso (można dodać amaretto) moczyć biszkopty przez kilka sekund, układać je w formie na przemian z warstwami masy serowej. Powtarzać warstwy, aż skończą się składniki, a wierzch posypać kakao. Wstawić do lodówki na minimum 4 godziny, aby ciasto stężało i smaki się przegryzły. Przed podaniem można udekorować bitą śmietaną lub startą czekoladą."
    },

    {
        title: "Panna Cotta",
        category: "slodkosc",
        required: ["śmietana kremówka", "cukier", "żelatyna", "wanilia", "truskawki"],
        optional: ["mięta"],
        image: "assets/images/slodkosci/panna_cotta.jpg",
        quantities: ["500 ml śmietany kremówki", "100 g cukru", "2 łyżeczki żelatyny", "1 laska wanilii lub 1 łyżeczka ekstraktu waniliowego", "200 g świeżych truskawek"],
        instructions: "W małym garnku podgrzać śmietanę z cukrem i wanilią, aż cukier się rozpuści. W osobnej miseczce zalać żelatynę niewielką ilością zimnej wody i odstawić na kilka minut, aż napęcznieje. Gdy śmietana jest gorąca, dodać napęczniałą żelatynę i dokładnie wymieszać, aby się rozpuściła. Przelać masę do foremek i wstawić do lodówki na co najmniej 4 godziny, aby stężała. W międzyczasie przygotować sos truskawkowy, miksując świeże truskawki z odrobiną cukru. Przed podaniem panna cotty można udekorować sosem truskawkowym i świeżymi truskawkami oraz listkami mięty."
    },

    {
        title: "Gofry",
        category: "slodkosc",
        required: ["mąka", "jajka", "mleko", "cukier", "proszek do pieczenia", "masło"],
        optional: ["cukier puder", "bita śmietana", "truskawki", "borówki", "syrop klonowy", "czekolada mleczna"],
        image: "assets/images/slodkosci/gofry.jpg",
        quantities: ["2 szklanki mąki", "2 jajka", "1 i 3/4 szklanki mleka", "1/2 szklanki cukru", "2 łyżeczki proszku do pieczenia", "100 g masła roztopionego"],
        instructions: "W misce wymieszać mąkę, cukier i proszek do pieczenia. W osobnej misce połączyć jajka, mleko i roztopione masło. Połączyć składniki mokre z suchymi, mieszając do uzyskania gładkiego ciasta. Rozgrzać gofrownicę i lekko ją naoliwić. Wlać porcję ciasta do gofrownicy i piec, aż gofry będą złote i chrupiące. Podawać na gorąco, posypane cukrem pudrem, z bitą śmietaną, owocami, syropem klonowym lub polewą czekoladową."
    },

    {
        title: "Tarta malinowa z białą czekoladą",
        category: "slodkosc",
        required: ["mąka", "masło", "cukier", "jajka", "maliny", "śmietana kremówka", "czekolada biała","cukier puder"],
        optional: ["wanilia", "sok z cytryny"],
        image: "assets/images/slodkosci/tarta_malinowa.jpg",
        quantities: ["1 i 1/2 szklanki mąki", "100 g masła", "1/2 szklanki cukru", "2 żółtka", "300 g malin", "200 ml śmietanki 30%", "100 g białej czekolady", "2 łyżki cukru pudru", "1 łyżeczka wanilii"],
        instructions: "W misce połączyć mąkę, cukier i pokrojone w kostkę masło, następnie dodać żółtka i szybko zagnieść ciasto. Włożyć do lodówki na 30 minut. Po schłodzeniu, rozwałkować ciasto i wyłożyć nim formę do tarty. Nakłuć widelcem i piec w 180°C przez 15 minut. W międzyczasie, w kąpieli wodnej rozpuścić białą czekoladę. Ubić śmietankę z wanilią na sztywno, a następnie delikatnie połączyć z przestudzoną białą czekoladą. Na ostudzone ciasto nałożyć maliny, a następnie rozprowadzić na wierzchu krem z białej czekolady. Udekorować świeżymi malinami i schłodzić przed podaniem."
    },

    {
        title: "Mochi",
        category: "slodkosc",
        required: ["mąka ryżowa", "cukier", "woda", "skrobia kukurydziana", "dżem"],
        optional: ["kakao"],
        image: "assets/images/slodkosci/mochi.jpg",
        quantities: ["1 szklanka mąki ryżowej", "1/2 szklanki cukru", "3/4 szklanki wody", "1/4 szklanki skrobi kukurydzianej", "1/2 szklanki nadzienia"],
        instructions: "W misce połączyć mąkę ryżową z cukrem, a następnie dodać wodę i wymieszać, aż uzyska się gładką masę. Przelać do naczynia nadającego się do gotowania na parze. Gotować na parze przez około 20 minut, aż ciasto stanie się przezroczyste i elastyczne. Po ugotowaniu, przestudzić i posypać skrobią kukurydzianą, aby uniknąć klejenia. Podzielić na małe kawałki, spłaszczyć, nałożyć nadzienie i zwinąć, formując kulki. Podawać na zimno lub lekko schłodzone."
    },
    
    {
        title: "Makaroniki",
        category: "slodkosc",
        required: ["mąka migdałowa", "cukier puder", "jajka", "cukier"],
        optional: ["sól","dżem","ganache"],
        image: "assets/images/slodkosci/makaroniki.jpg",
        quantities: ["1 szklanka mąki migdałowej", "1 i 1/2 szklanki cukru pudrowego", "3 białka jaj", "1/4 szklanki cukru", "barwnik spożywczy (opcjonalnie)", "krem do nadzienia (np. ganache)"],
        instructions: "W misce przesiej mąkę migdałową i cukier puder, aby pozbyć się grudek. W osobnej misce ubij białka jaj na sztywno, dodając stopniowo cukier, aż masa stanie się lśniąca i sztywna. Jeśli używasz, dodaj barwnik spożywczy i delikatnie wymieszaj. Następnie dodaj mieszankę mąki migdałowej do białek, delikatnie mieszając szpatułką do połączenia składników. Przełóż masę do worka cukierniczego i wyciskaj małe okręgi na blachę wyłożoną papierem do pieczenia. Pozwól makaronikom wyschnąć przez około 30-60 minut, aż na powierzchni pojawi się delikatna skórka. Piecz w piekarniku nagrzanym do 150°C przez 15-20 minut. Po ostudzeniu, przekładaj je kremem do nadzienia."
    },

    {
        title: "Pianki z galaretki",
        category: "slodkosc",
        required: ["galaretka", "woda", "żelatyna", "cukier"],
        optional: ["cukier puder"],
        image: "assets/images/slodkosci/pianki.webp",
        quantities: ["1 paczka galaretki (dowolny smak)", "1/2 szklanki wrzącej wody", "1 łyżka żelatyny", "1/4 szklanki cukru"],
        instructions: "Rozpuść galaretkę w 1/2 szklanki wrzącej wody, dokładnie mieszając, aż będzie całkowicie rozpuszczona. W osobnej misce namocz żelatynę w 1/4 szklanki zimnej wody i odstaw na kilka minut. Po namoczeniu, podgrzej żelatynę na małym ogniu, aż się rozpuści, a następnie dodaj ją do rozpuszczonej galaretki. Wymieszaj wszystko razem, a jeśli chcesz, dodaj barwniki spożywcze. Przelej masę do formy wyłożonej folią spożywczą i wstaw do lodówki na kilka godzin, aż stężeje. Po stężeniu, pokrój w kostkę, a następnie obtocz w cukrze pudrze. Podawaj na zimno."
    },

    {
        title: "Ciasto drożdżowe",
        category: "slodkosc",
        required: ["mąka", "drożdże", "cukier", "mleko", "masło", "jajka", "sól"],
        optional: ["cukier wanilinowy", "rodzynki"],
        image: "assets/images/slodkosci/ciasto_drozdzowe.jpg",
        quantities: ["500 g mąki pszennej", "25 g świeżych drożdży lub 7 g suchych drożdży", "100 g cukru", "250 ml mleka", "100 g masła", "2 jajka", "1/2 łyżeczki soli"],
        instructions: "W małym garnku podgrzej mleko, aż będzie ciepłe, ale nie gorące. Dodaj do niego drożdże i łyżkę cukru, a następnie odstaw na 10 minut, aż drożdże zaczną pracować. W dużej misce wymieszaj mąkę, pozostały cukier, sól i jajka. Dodaj rozpuszczone masło oraz spienione drożdże. Wyrabiaj ciasto przez około 10-15 minut, aż będzie gładkie i elastyczne. Odstaw ciasto do wyrośnięcia w ciepłe miejsce na około 1-2 godziny, aż podwoi swoją objętość. Po wyrośnięciu, uformuj ciasto według preferencji (np. w kształcie chałki lub w formie do pieczenia), a następnie pozostaw na kolejne 30 minut do wyrośnięcia. Piecz w nagrzanym piekarniku w temperaturze 180°C przez około 30-40 minut, aż ciasto będzie złociste. Po upieczeniu odstaw do ostudzenia przed krojeniem."
    },

    {
        title: "Sezamki",
        category: "slodkosc",
        required: ["sezam", "cukier", "miód", "woda"],
        optional: ["sól", "wanilia"],
        image: "assets/images/slodkosci/sezamki.jpg",
        quantities: ["200 g sezamu", "150 g cukru", "2 łyżki miodu", "50 ml wody", "szczypta soli"],
        instructions: "Na patelni na średnim ogniu podpraż sezam przez kilka minut, aż będzie lekko złocisty, a następnie odstaw. W małym garnku zagotuj wodę, cukier i miód, mieszając, aż cukier się rozpuści. Gotuj na małym ogniu przez około 5 minut, aż syrop lekko zgęstnieje. Dodaj uprażony sezam i dobrze wymieszaj. Wylej masę na wcześniej wyłożoną papierem do pieczenia blachę i równomiernie rozprowadź. Przykryj drugą warstwą papieru do pieczenia i delikatnie spłaszcz. Pozostaw do ostygnięcia i stwardnienia, a następnie pokrój w kawałki."
    },

    {
        title: "Fondant czekoladowy",
        category: "slodkosc",
        required: ["czekolada gorzka", "masło", "cukier", "jajka", "mąka"],
        optional: ["sól", "bita śmietana"],
        image: "assets/images/slodkosci/fondant.jpg",
        quantities: ["200 g gorzkiej czekolady", "100 g masła", "150 g cukru", "3 jajka", "50 g mąki", "szczypta soli"],
        instructions: "Rozgrzać piekarnik do 180 stopni Celsjusza. W kąpieli wodnej roztopić czekoladę z masłem, mieszając do uzyskania gładkiej konsystencji. W osobnej misce ubij jajka z cukrem do uzyskania puszystej masy. Dodać przestudzoną czekoladę z masłem do jajek, delikatnie wymieszać. Na końcu dodać mąkę i szczyptę soli, wymieszać do połączenia składników. Przelać ciasto do wysmarowanych masłem i posypanych mąką foremek. Piec przez 10-12 minut, aż ciasto będzie z wierzchu twarde, ale w środku lekko płynne. Podawać ciepłe, z bitą śmietaną lub owocami."
    },

    {
        title: "Naleśniki klasyczne",
        category: "slodkosc",
        required: ["mąka", "mleko", "jajka", "woda gazowana", "sól", "olej rzepakowy"],
        optional: ["cukier", "masło", "dżem", "bita śmietana"],
        image: "assets/images/slodkosci/nalesniki.jpg",
        quantities: ["1 szklanka mąki pszennej", "1 szklanka mleka", "2 jajka", "1/2 szklanki wody gazowanej", "szczypta soli", "1 łyżka oleju"],
        instructions: "W dużej misce połącz mąkę, mleko, jajka, wodę gazowaną, sól i olej, miksując do uzyskania gładkiego ciasta o płynnej konsystencji. Rozgrzać niewielką ilość oleju na patelni. Wlać porcję ciasta na patelnię, rozprowadzając je równomiernie. Smażyć na średnim ogniu, aż naleśnik z jednej strony się zarumieni, następnie przewrócić na drugą stronę i smażyć do złocistego koloru. Podawać z ulubionymi dodatkami, takimi jak dżem, owoce lub bita śmietana."
    },

    {
        title: "Sernik na zimno",
        category: "slodkosc",
        required: ["ser twarogowy", "śmietana kremówka", "cukier puder", "żelatyna", "galaretka", "herbatniki"],
        optional: ["maliny", "truskawki", "borówki"],
        image: "assets/images/slodkosci/sernik_na_zimno.jpg",
        quantities: ["500 g serka twarogowego", "250 ml śmietanki kremówki 30%", "1/2 szklanki cukru pudru", "2 łyżki żelatyny", "2 galaretki o ulubionym smaku", "200 g herbatników"],
        instructions: "Rozpuścić galaretkę zgodnie z instrukcją na opakowaniu i odstawić do stężenia. Żelatynę rozpuścić w niewielkiej ilości ciepłej wody. Śmietankę ubić na sztywno, następnie dodać cukier puder i serek twarogowy, delikatnie mieszając. Do masy dodać przestudzoną żelatynę i dokładnie wymieszać. Na dnie tortownicy ułożyć warstwę herbatników, wylać połowę masy serowej i rozłożyć warstwę owoców, jeśli używane. Wylać pozostałą masę serową, a na wierzch przestudzoną galaretkę. Sernik schłodzić w lodówce przez kilka godzin, aż masa stężeje."
    },

    {
        title: "Krówki",
        category: "slodkosc",
        required: ["cukier", "masło", "mleko skondensowane"],
        optional: ["wanilia", "sól morska"],
        image: "assets/images/slodkosci/krowki.jpg",
        quantities: ["2 szklanki cukru", "100 g masła", "1 puszka mleka skondensowanego (400 g)"],
        instructions: "W garnku na małym ogniu rozpuścić masło, a następnie dodać cukier oraz mleko skondensowane. Całość mieszając, gotować na średnim ogniu, aż masa zacznie gęstnieć i nabierze złotego koloru, co trwa około 15-20 minut. Kiedy masa zgęstnieje i stanie się karmelowa, opcjonalnie dodać ekstrakt waniliowy lub szczyptę soli morskiej dla smaku. Gotową masę szybko przelać do formy wyłożonej papierem do pieczenia, wyrównać powierzchnię i odstawić do stężenia na kilka godzin. Gdy masa ostygnie, pokroić na kawałki."
    },

    //DODATKI
    
    {
        title: "Salsa",
        category: "dodatek",
        required: ["pomidor", "cebula", "chili", "kolendra", "limonka"],
        optional: ["czosnek", "sól", "pieprz", "awokado"],
        image: "assets/images/dodatki/salsa.jpg",
        quantities: ["4 pomidory", "1 mała cebula", "1 papryczka chili (lub do smaku)", "1/4 szklanki posiekanej kolendry", "sok z 1 limonki", "1 ząbek czosnku (opcjonalnie)", "sól i pieprz do smaku", "1 awokado (opcjonalnie)"],
        instructions: "Pomidory pokroić w drobną kostkę, cebulę i papryczkę chili posiekać. W misce połączyć pokrojone pomidory, cebulę, papryczkę chili, posiekaną kolendrę oraz sok z limonki. Jeśli używasz, dodaj drobno posiekany czosnek oraz dopraw solą i pieprzem do smaku. Możesz także dodać pokrojone w kostkę awokado, aby wzbogacić smak. Dobrze wymieszać i podawać jako dodatek do nachos, tacos lub dań z grilla."
    },

    {
        title: "Tzatziki",
        category: "dodatek",
        required: ["ogórek", "jogurt", "czosnek", "oliwa", "sól", "pieprz"],
        optional: ["koperek", "sok z cytryny"],
        image: "assets/images/dodatki/tzatziki.webp",
        quantities: ["1 duży ogórek", "400 g jogurtu greckiego", "2 ząbki czosnku", "2 łyżki oliwy z oliwek", "sól i pieprz do smaku", "2 łyżki posiekanego koperku (opcjonalnie)", "sok z 1/2 cytryny (opcjonalnie)"],
        instructions: "Ogórek umyć, zetrzeć na tarce o grubych oczkach, posolić i odczekać kilka minut, aby puścił wodę. Następnie odcisnąć nadmiar wody i przełożyć ogórek do miski. Dodać jogurt grecki, przeciśnięty przez praskę czosnek, oliwę z oliwek, sól i pieprz do smaku. Jeśli chcesz, dodaj posiekany koperek i sok z cytryny. Dokładnie wymieszać i schłodzić w lodówce przez co najmniej 30 minut przed podaniem. Tzatziki doskonale komponują się z grillowanym mięsem lub jako dip do warzyw."
    },

    {
        title: "Tatar",
        category: "dodatek",
        required: ["mięso mielone wołowe", "jajka", "cebula", "ogórek kiszony", "musztarda", "sól", "pieprz"],
        optional: ["natka pietruszki"],
        image: "assets/images/dodatki/tatar.jpg",
        quantities: ["300 g świeżego mięsa wołowego (np. polędwica)", "1 żółtko jaja", "1 mała cebula", "1 ogórek kiszony", "1 łyżeczka musztardy", "sól i pieprz do smaku", "kilka kropli sosu Worcestershire (opcjonalnie)", "natka pietruszki do dekoracji (opcjonalnie)"],
        instructions: "Mięso wołowe zmielić lub bardzo drobno posiekać. Przełożyć do miski, dodać żółtko jaja, drobno posiekaną cebulę i ogórek kiszony, musztardę, sól i pieprz. Dokładnie wymieszać, a następnie spróbować i ewentualnie doprawić do smaku. Podawać na talerzu, udekorowane natką pietruszki. Tatar najlepiej smakuje z chrupiącym pieczywem."
    },
    
    {
        title: "Puree ziemniaczane",
        category: "dodatek",
        required: ["ziemniaki", "masło", "mleko", "sól", "pieprz"],
        optional: ["śmietana", "czosnek", "gałka muszkatołowa"],
        image: "assets/images/dodatki/puree.jpg",
        quantities: ["1 kg ziemniaków", "100 g masła", "200 ml mleka", "sól do smaku", "pieprz do smaku", "2 łyżki śmietany (opcjonalnie)", "1 ząbek czosnku (opcjonalnie)", "szczypta gałki muszkatołowej (opcjonalnie)"],
        instructions: "Ziemniaki obrać, pokroić na kawałki i ugotować w osolonej wodzie, aż będą miękkie. Odcedzić i pozostawić na chwilę, aby odparowały. Następnie zgnieść ziemniaki na gładkie puree, dodając masło i mleko. Jeśli chcesz, dodaj śmietanę, przeciśnięty przez praskę czosnek oraz szczyptę gałki muszkatołowej. Całość dokładnie wymieszać, doprawić solą i pieprzem do smaku. Podawać na ciepło jako dodatek do mięsa lub warzyw."
    },

    {
        title: "Sałatka z jabłka i marchewki",
        category: "dodatek",
        required: ["jabłko", "marchewka", "cytryna"],
        optional: ["sól", "pieprz", "miód", "rodzynki", "jogurt"],
        image: "assets/images/dodatki/marchewka_jablko.jpg",
        quantities: ["2 jabłka", "2 marchewki", "1 łyżka soku z cytryny", "sól i pieprz do smaku", "1 łyżka miodu (opcjonalnie)", "50 g orzechów (opcjonalnie)", "50 g rodzynek (opcjonalnie)", "2 łyżki jogurtu naturalnego (opcjonalnie)"],
        instructions: "Jabłka umyć, obrać i pokroić w kostkę. Marchewki obrać i zetrzeć na tarce o grubych oczkach. W misce wymieszać jabłka z marchewką, dodać sok z cytryny, sól, pieprz oraz ewentualnie miód. Jeśli chcesz, dodaj posiekane rodzynki. Całość można także połączyć z jogurtem naturalnym dla uzyskania kremowej konsystencji. Podawać od razu lub schłodzić w lodówce przed podaniem."
    },

    {
        title: "Sałatka colesław",
        category: "dodatek",
        required: ["kapusta", "marchewka", "majonez"],
        optional: ["sól", "pieprz", "cukier", "ocet", "czosnek", "cebula", "jogurt"],
        image: "assets/images/dodatki/coleslaw.jpg",
        quantities: ["1/2 główki kapusty białej", "2 marchewki", "1/2 szklanki majonezu", "sól i pieprz do smaku", "1 łyżeczka cukru (opcjonalnie)", "1 łyżka octu (opcjonalnie)", "1 ząbek czosnku (opcjonalnie)", "1 mała cebula (opcjonalnie)", "1/4 szklanki jogurtu naturalnego (opcjonalnie)"],
        instructions: "Kapustę drobno poszatkować, marchewkę zetrzeć na tarce o grubych oczkach. W dużej misce połączyć kapustę z marchewką. W osobnej misce wymieszać majonez, sól, pieprz, ewentualnie cukier, ocet, przeciśnięty przez praskę czosnek i posiekaną cebulę. Tak przygotowany sos dodać do warzyw i dobrze wymieszać. Jeśli chcesz, dodaj jogurt naturalny dla lżejszej wersji sałatki. Odstawić na około 30 minut do lodówki przed podaniem, aby smaki się przegryzły."
    },

    {
        title: "Frytki",
        category: "dodatek",
        required: ["ziemniaki", "olej rzepakowy"],
        optional: ["sól", "papryka mielona", "czosnek w proszku", "rozmaryn"],
        image: "assets/images/dodatki/frytki.jpg",
        quantities: ["4-5 dużych ziemniaków", "olej do smażenia", "sól do smaku"],
        instructions: "Ziemniaki obrać i pokroić w słupki o grubości około 1 cm. Włożyć je do miski z zimną wodą na około 30 minut, aby pozbyć się nadmiaru skrobi, co sprawi, że frytki będą chrupiące. Po tym czasie osuszyć ziemniaki ręcznikiem papierowym. Rozgrzać olej w głębokim garnku lub frytkownicy do temperatury około 180°C. Frytki smażyć w partiach przez 4-5 minut, aż będą złociste i chrupiące. Po usmażeniu wyłożyć je na ręcznik papierowy, aby odsączyć nadmiar tłuszczu, a następnie posypać solą i ulubionymi przyprawami. Podawać na ciepło."
    },

    {
        title: "Kluski Śląskie",
        category: "dodatek",
        required: ["ziemniaki", "mąka ziemniaczana", "jajka"],
        optional: ["sól", "pieprz", "masło"],
        image: "assets/images/dodatki/kluski_slaskie.jpg",
        quantities: ["1 kg ziemniaków", "200 g mąki ziemniaczanej", "1 jajko", "sól do smaku", "masło do podania"],
        instructions: "Ziemniaki ugotować w osolonej wodzie, a następnie odcedzić i przepuścić przez praskę lub utłuc na gładką masę. Pozostawić do ostudzenia. Do zimnych ziemniaków dodać mąkę ziemniaczaną, jajko oraz sól. Dokładnie wymieszać, aż składniki się połączą, a ciasto stanie się gładkie. Formować kluski, nadając im charakterystyczny kształt z wgłębieniem w środku. Gotować w osolonej wrzącej wodzie przez około 3-5 minut, aż wypłyną na powierzchnię. Po ugotowaniu wyjąć łyżką cedzakową i podawać z masłem lub ulubionym sosem."
    },

    {
        title: "Ziemniaki pieczone z ziołami",
        category: "dodatek",
        required: ["ziemniaki", "oliwa", "czosnek", "rozmaryn", "tymianek", "oregano"],
        optional: ["sól", "pieprz", "parmezan"],
        image: "assets/images/dodatki/ziemniaki_pieczone.jpg",
        quantities: ["1 kg ziemniaków", "4 łyżki oliwy z oliwek", "2 ząbki czosnku", "1 łyżeczka ziół prowansalskich", "sól i pieprz do smaku"],
        instructions: "Ziemniaki dokładnie umyć, obrać i pokroić na ćwiartki lub plasterki. W misce wymieszać ziemniaki z oliwą z oliwek, posiekanym czosnkiem, ziołami, solą i pieprzem, aby równomiernie pokryły się przyprawami. Przełożyć do naczynia żaroodpornego lub na blachę wyłożoną papierem do pieczenia. Piec w piekarniku nagrzanym do 200°C przez około 30-40 minut, aż będą złociste i chrupiące. Podawać jako dodatek do mięs lub jako samodzielną przekąskę."
    },

    {
        title: "Hummus",
        category: "dodatek",
        required: ["ciecierzyca", "tahini", "czosnek", "sok z cytryny", "oliwa"],
        optional: ["sól", "pieprz", "papryka mielona", "natka pietruszki"],
        image: "assets/images/dodatki/hummus.jpg",
        quantities: ["400 g ciecierzycy (z puszki lub ugotowanej)", "3 łyżki tahini", "2 ząbki czosnku", "2 łyżki soku z cytryny", "3-4 łyżki oliwy z oliwek", "sól i pieprz do smaku"],
        instructions: "Cieciorkę odcedzić i opłukać pod zimną wodą, a następnie wrzucić do blendera. Dodać tahini, posiekany czosnek, sok z cytryny, oliwę z oliwek oraz sól i pieprz. Miksować, aż uzyska się gładką masę. W razie potrzeby dodać odrobinę wody, aby uzyskać pożądaną konsystencję. Przełożyć hummus do miski, skropić oliwą z oliwek i posypać papryką w proszku lub posiekaną natką pietruszki. Podawać z pitą, warzywami lub jako dodatek do dań."
    },
    
    {
        title: "Buraczki na ciepło",
        category: "dodatek",
        required: ["buraki", "cebula", "sól", "cukier", "ocet"],
        optional: ["pieprz", "koperek", "masło"],
        image: "assets/images/dodatki/buraczki.jpg",
        quantities: ["500 g buraków", "1 mała cebula", "sól do smaku", "1 łyżka cukru", "1 łyżka octu"],
        instructions: "Buraki ugotować w osolonej wodzie do miękkości, a następnie ostudzić, obrać i pokroić w kostkę. Cebulę posiekać i podsmażyć na patelni na maśle do zeszklenia, a następnie dodać buraki. Doprawić solą, cukrem i octem, a całość dobrze wymieszać. Smażyć przez kilka minut, aż buraki się podgrzeją. Można podać na ciepło jako dodatek do mięsa lub jako samodzielne danie, posypane świeżym koperkiem."
    },

    {
        title: "Kalafior w panierce",
        category: "dodatek",
        required: ["kalafior", "jajka", "bułka tarta", "mąka", "sól", "pieprz", "olej rzepakowy"],
        optional: ["czosnek w proszku", "papryka mielona"],
        image: "assets/images/dodatki/kalafior_w_panierce.jpg",
        quantities: ["1 mały kalafior", "2 jajka", "1 szklanka bułki tartej", "1/2 szklanki mąki", "sól i pieprz do smaku"],
        instructions: "Kalafior podzielić na różyczki i ugotować w osolonej wodzie przez około 5-7 minut, aż będzie lekko miękki, ale jędrny. Odcedzić i odstawić do ostygnięcia. W misce przygotować mąkę wymieszaną z solą, pieprzem oraz opcjonalnymi przyprawami. W osobnej misce roztrzepać jajka, a w trzeciej przygotować bułkę tartą. Różyczki kalafiora obtaczać najpierw w mące, następnie w jajku, a na końcu w bułce tartej. Smażyć na rozgrzanym oleju na złoty kolor z każdej strony. Podawać na ciepło jako smaczny dodatek do dań głównych."
    },

    {
        title: "Chimichurri",
        category: "dodatek",
        required: ["natka pietruszki", "czosnek", "ocet winny", "oliwa", "sól", "pieprz"],
        optional: ["oregano", "chili"],
        image: "assets/images/dodatki/chimichurri.jpg",
        quantities: ["1 pęczek natki pietruszki", "3 ząbki czosnku", "1/2 szklanki oliwy z oliwek", "1/4 szklanki octu winnego", "sól i pieprz do smaku", "1 łyżeczka oregano", "1/2 papryczki chili (opcjonalnie)"],
        instructions: "Natkę pietruszki drobno posiekać, czosnek przecisnąć przez praskę lub drobno posiekać. W misce połączyć natkę, czosnek, oregano oraz posiekaną papryczkę chili. Dodać ocet winny i oliwę z oliwek, dobrze wymieszać, a następnie doprawić solą i pieprzem do smaku. Chimichurri można podawać od razu lub schłodzić w lodówce przez kilka godzin, aby smaki się przegryzły. Doskonale komponuje się z grillowanym mięsem oraz warzywami."
    },

    {
        title: "Kopytka",
        category: "dodatek",
        required: ["ziemniaki", "mąka", "jajka", "sól"],
        optional: ["masło", "majeranek"],
        image: "assets/images/dodatki/kopytka.jpg",
        quantities: ["1 kg ziemniaków", "250 g mąki pszennej", "1 jajko", "sól do smaku", "2 łyżki masła (do podania)", "1 łyżeczka suszonego majeranku (opcjonalnie)"],
        instructions: "Ugotować ziemniaki w osolonej wodzie do miękkości, odcedzić i przetrzeć przez praskę lub dokładnie utłuc. Pozwolić im ostygnąć, a następnie dodać mąkę, jajko i sól. Zagnieść ciasto, aż będzie gładkie i elastyczne. Podzielić ciasto na części, formować wałki o grubości około 2 cm i kroić na kawałki o długości 2-3 cm. W dużym garnku zagotować osoloną wodę, wrzucić kopytka i gotować, aż wypłyną na powierzchnię. Wyjąć łyżką cedzakową, a następnie podać polane roztopionym masłem i posypane majerankiem, jeśli używasz."
    },

    {
        title: "Pesto",
        category: "dodatek",
        required: ["bazylia", "czosnek", "orzeszki piniowe", "parmezan", "oliwa", "sól"],
        optional: ["sok z cytryny"],
        image: "assets/images/dodatki/pesto.jpg",
        quantities: ["2 szklanki świeżej bazylii", "2 ząbki czosnku", "1/4 szklanki orzeszków piniowych", "1/2 szklanki startego parmezanu", "1/2 szklanki oliwy z oliwek", "sól do smaku", "1 łyżka soku z cytryny (opcjonalnie)"],
        instructions: "Wszystkie składniki umieścić w blenderze: bazylię, czosnek, orzeszki piniowe, parmezan oraz sól. Miksować na wysokich obrotach, stopniowo wlewając oliwę z oliwek, aż uzyskamy gładką, kremową konsystencję. W razie potrzeby doprawić solą oraz dodać sok z cytryny dla lepszego smaku. Pesto można przechowywać w lodówce w szczelnym pojemniku do kilku dni, a przed użyciem dobrze wymieszać."
    }
      

];

let currentCategory = 'all'; // Zmienna przechowująca aktualnie wybraną kategorię

function showRecipes(selectedCategory = currentCategory) {
    const selectedProducts = Array.from(document.querySelectorAll('.form-check-input:checked')).map(input => input.value);
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = ''; // Czyszczenie zawartości przepisów

    // Jeśli nie wybrano żadnych składników, wyświetl komunikat i zakończ funkcję
    if (selectedProducts.length === 0) {
        recipesDiv.innerHTML = '<div class="custom-alert">Najpierw wybierz składniki!</div>';
        return;
    }

    // Filtrowanie przepisów na podstawie kategorii i składników
    const filteredRecipes = recipes
        .filter(recipe => selectedCategory === 'all' || recipe.category === selectedCategory)
        .map(recipe => {
            const matchingIngredients = recipe.required.filter(ingredient => selectedProducts.includes(ingredient));
            const missingIngredients = recipe.required.filter(ingredient => !selectedProducts.includes(ingredient));

            return {
                ...recipe,
                matchingCount: matchingIngredients.length,
                missingCount: missingIngredients.length,
                missingIngredients,
                matchingIngredients // Dodanie pasujących składników
            };
        })
        .filter(recipe => recipe.missingCount <= 5 && recipe.matchingCount > 0)
        .sort((a, b) => a.missingCount - b.missingCount || b.matchingCount - a.matchingCount);

    // Jeśli żadne przepisy nie pasują do kryteriów
    if (filteredRecipes.length === 0) {
        recipesDiv.innerHTML = '<div class="custom-alert">Brak pasujących przepisów.</div>';
        return;
    }

    // Renderowanie przepisów, jeśli są jakieś pasujące
    let recipeHtml = '';
    filteredRecipes.forEach(recipe => {
        const queryString = `title=${encodeURIComponent(recipe.title)}&image=${encodeURIComponent(recipe.image)}&ingredients=${encodeURIComponent(recipe.required.join(','))}&optional=${encodeURIComponent(recipe.optional.join(','))}&quantities=${encodeURIComponent(recipe.quantities.join(','))}&instructions=${encodeURIComponent(recipe.instructions)}`;

        recipeHtml += `
<a href="przepis.html?${queryString}" style="text-decoration: none;">
    <div class="recipe">
        <div class="recipe-info">
            <strong>${recipe.title}</strong>
            <div style="color: rgb(41, 204, 87);">
                Pasujące składniki: ${recipe.matchingCount}
            </div>
            ${recipe.missingCount > 0 
                ? `<div style="color: #dc3545;">Brakuje ${recipe.missingCount === 1 ? 'jednego składnika' : recipe.missingCount + ' składników'}: ${recipe.missingIngredients.join(', ')}</div>`
                : '<div style="color: rgb(41, 204, 87);">Wszystkie składniki są dostępne!</div>'
            }
        </div>
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
    </div>
</a>
        `;
    });

    // Wstawienie wygenerowanego HTML do kontenera
    recipesDiv.innerHTML = recipeHtml;
}


// Funkcja obsługująca zmianę aktywnej zakładki
function filterRecipes(category) {
    currentCategory = category; // Ustawienie bieżącej kategorii
    document.querySelectorAll('.tab1').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab1[onclick="filterRecipes('${category}')"]`).classList.add('active');
    showRecipes(currentCategory); // Wywołanie showRecipes z bieżącą kategorią
}

function showTab(tabId) {
    // Usuwamy klasę active ze wszystkich zakładek i treści
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));
    
    // Dodajemy klasę active do klikniętej zakładki i odpowiedniego kontenera treści
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


// Wywołanie po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    showRecipes(); // Pierwsze wywołanie funkcji

    // Pobranie wszystkich checkboxów składników
    const productCheckboxes = document.querySelectorAll('.form-check-input');
    productCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            showRecipes(currentCategory); // Wywołanie showRecipes po zmianie zaznaczenia składnika z bieżącą kategorią
        });
    });
});


    function getRecipeData() {
        const urlParams = new URLSearchParams(window.location.search);
    
        const title = urlParams.get('title');
        const image = urlParams.get('image');
        const ingredients = urlParams.get('ingredients').split(',');
        const optional = urlParams.get('optional').split(',');
        const quantities = urlParams.get('quantities').split(',');
        const instructions = urlParams.get('instructions');
    
        // Tutaj możesz wyświetlić te dane na stronie HTML
        document.getElementById('recipe-title').innerText = title;
        document.getElementById('recipe-image').src = image;
    
        const quantityList = document.getElementById('recipe-ingredients');
        quantities.forEach((ingredient, index) => {
            const li = document.createElement('li');
            li.textContent = `${quantities[index]}`;
            quantityList.appendChild(li);
        });
    
        document.getElementById('recipe-instructions').innerText = instructions;
        document.getElementById('recipe-optional').innerText = optional.join(', ');
    }

    function searchIngredients() {
        // Znajdź aktywną zawartość zakładki
        const activeTabContent = document.querySelector('.tab-content.active');
    
        // Jeśli aktywna zawartość zakładki istnieje, kontynuujemy
        if (activeTabContent) {
            // Pobieramy wartość wyszukiwania z aktywnego inputa
            const searchInput = activeTabContent.querySelector('.ingredientSearch').value.toLowerCase();
            
            // Wybieramy składniki tylko w aktywnej zakładce
            const ingredients = activeTabContent.querySelectorAll('.form-check');
    
            // Flaga do sprawdzania, czy istnieje jakikolwiek widoczny składnik
            let hasVisibleItems = false;
    
            // Pętla przez składniki i ukrywanie lub pokazywanie ich na podstawie wyszukiwania
            ingredients.forEach((ingredient) => {
                const label = ingredient.querySelector('label').innerText.toLowerCase();
                if (label.includes(searchInput)) {
                    ingredient.style.display = ''; // Pokazuje, jeśli pasuje do wyszukiwania
                    hasVisibleItems = true; // Zaznacza, że istnieje widoczny składnik
                } else {
                    ingredient.style.display = 'none'; // Ukrywa, jeśli nie pasuje
                }
            });
    
            // Sprawdzenie i dodanie komunikatu, jeśli brak widocznych składników
            let alert = activeTabContent.querySelector('.custom-alert');
            if (!hasVisibleItems) {
                // Jeśli alert nie istnieje, tworzymy nowy
                if (!alert) {
                    alert = document.createElement('div');
                    alert.className = 'custom-alert';
                    alert.textContent = 'Brak pasujących składników.';
                    activeTabContent.appendChild(alert);
                }
            } else if (alert) {
                // Usuwamy alert, jeśli istnieje jakikolwiek widoczny składnik
                alert.remove();
            }
        }
    }



    function showAllRecipes(selectedCategory = currentCategory) {
        const recipesDiv = document.getElementById('allRecipes');
        recipesDiv.innerHTML = ''; // Wyczyść poprzednią zawartość
    
        // Filtrowanie przepisów na podstawie wybranej kategorii
        const filteredRecipes = recipes.filter(recipe => selectedCategory === 'all' || recipe.category === selectedCategory);
    
        // Jeśli żadne przepisy nie pasują do kategorii, wyświetl komunikat
        if (filteredRecipes.length === 0) {
            recipesDiv.innerHTML = '<div class="custom-alert">Brak przepisów w tej kategorii.</div>';
            return;
        }
    
        // Generowanie HTML dla każdego przepisu z pełnym zestawem danych
        let recipeHtml = '';
        filteredRecipes.forEach(recipe => {
            const queryString = `title=${encodeURIComponent(recipe.title)}&image=${encodeURIComponent(recipe.image)}&ingredients=${encodeURIComponent(recipe.required.join(','))}&optional=${encodeURIComponent(recipe.optional.join(','))}&quantities=${encodeURIComponent(recipe.quantities.join(','))}&instructions=${encodeURIComponent(recipe.instructions)}`;
    
            recipeHtml += `
            <a href="przepis.html?${queryString}" style="text-decoration: none;">
                <div class="recipe" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="recipe-info">
                        <strong>${recipe.title}</strong>
                        <div class="allRecipes-description">Potrzebne składniki: ${recipe.required.join(', ')}</div>
                    </div>
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
                </div>
            </a>
            `;
        });
    
        // Wstawienie wygenerowanego HTML do kontenera
        recipesDiv.innerHTML = recipeHtml;
    }
    
    
    function goBack() {
        window.history.back();
    }


     // Funkcja generująca losowy numer od 0 do 32
     function getRandomLogoNumber() {
        return Math.floor(Math.random() * 33); // 33, ponieważ liczymy od 0 do 32
    }

    // Ścieżka do folderu z logo
    const logoFolderPath = 'logo/';

    // Generowanie losowego numeru i ustawienie obrazu
    const logoNumber = getRandomLogoNumber();
    const logoPath = `${logoFolderPath}logo${logoNumber}.png`;

    // Ustawienie src elementu <img> na wylosowaną ścieżkę
    document.getElementById('logo').src = logoPath;

    
    // Uruchamiamy funkcję, aby pobrać dane o przepisie
    getRecipeData();



