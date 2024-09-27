URL aplikacije: https://lab6-frontend-tvpz.onrender.com
i backend i frontend se pokreću s npm run dev, nakom npm i

1. interpolation/one-way binding DA:
	src/components/Navbar.vue linija 44
	src/views/ProfilesView.vue linija 4
  		-ova stranica je trebala sadrzavati poveznice na info o svakom useru, nažalost ponestalo vremena

2. two-way binding DA:
	src/views/LoginView.vue linija 13 (v-model) povezana s username
      -rudimentarni login, login moguc s User1, User2 itd. do User5

3. methods DA:
	src/components/BlogPost.vue linija 61 do 98
	
4. computed properties NE


5. barem jedan scoped style DA
	src/views/NotFoundView.vue linija 9

6. koristiti barem jedan lifecycle hook DA:
	src/views/HomeView.vue linja 45, mounted() hook

7. routing (više stranica)	DA
	aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) DA
		src/router/index.js vidljive rute osim '/' koje su bookmarkable

 	dinamičko usmjeravanje s 404 stranicom ("catch all") - DA
		src/router/index.js linija 27
		src/views/NotFoundView.vue

8. (barem) dvije komponente DA:
	src/components/Navbar.vue
	src/components/BlogPost.vue


	komponenta bez stanja, koristiti properties DA:
		src/views/ProfilesView.vue linja 13


	komponenta sa stanjem - DA
		src/components/BlogPost.vue linija 58
		src/views/HomeView.vue linija 26

9. barem jedna komponenta mora emitirati barem jedan event DA:
	src/components/BlogPost.vue linija 94
     src/views/HomeView.vue linija 39 metoda koja se triggera eventom

10. store (Pinia) - DA:
	src/store/auth.js
	src/store/posts.js
   
   korišteni u 
   src/components/BlogPost.vue
	src/views/HomeView.vue 
   src/views/LoginView.vue

11. asinkroni dohvat podataka s backenda, možete: DA
	src/views/HomeView.vue linija 47
	src/store/posts.js linija 19

	koristiti Firebase ili Back4App, Mocky, itd.
	vlastiti storage, ili
	možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
	ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)


svaka promjena na modelu  je samo na frontendu, tj. nad njegovim modelom podataka i ne šalje se na backend za perzistiranje, napravljeno ovako zbog jednostavnosti/proof of concept i zbog ponestalog vremena.
za brisanje/testiranje emitiranja eventa 