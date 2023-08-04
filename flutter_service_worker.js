'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "177419479eb31e1302e9de89c80e8386",
"index.html": "1b9e0d71795c5f29fbe92657393257f4",
"/": "1b9e0d71795c5f29fbe92657393257f4",
"main.dart.js": "acbddc303ea724c483f0f6a569117003",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "a30275034f29f36de40ffbbfee569cfc",
"icons/Icon-192.png": "723c04b61637d6cbc0de184ac324b86b",
"icons/Icon-maskable-192.png": "723c04b61637d6cbc0de184ac324b86b",
"icons/Icon-maskable-512.png": "06b3769e2981b16b1a807f7d9521eea7",
"icons/Icon-512.png": "06b3769e2981b16b1a807f7d9521eea7",
"manifest.json": "cce42f3a04ecf38425bf4bc5059f3f74",
".git/config": "0eff26048154b25cc423b06a8580d9c2",
".git/objects/0d/86780e27cc4d8a58d15a990083dbc25ff59b2e": "c8433b1de51c53d7954bc4cf76bf582c",
".git/objects/95/73a8909c3c473832016bba8db1ae87a1033f50": "489c9913d8eac9a200e868e79ae23f81",
".git/objects/59/fd6c85abf2e7804be427b051ad5a9caf65e885": "8db557148babb1c986d0ac1bcf6c3e75",
".git/objects/59/b2a05902187e97c2c0792e6dc76302f008edc3": "30023485e2396a4bd7075f71b30245af",
".git/objects/59/1b33311f86340a1d5fb1ca8eb81305b2be87fc": "9f6389dd21518a0f1a648d75506aa193",
".git/objects/66/80aa32c08246315f63612efed8fd36e053bc1e": "b61b10e902a0e701e47596eb0adbe97a",
".git/objects/68/c820b711146e6bd6acf482ede4f2a895b45ab5": "24a51039900c2064760685760ad6c8de",
".git/objects/57/1a316cb72c10706e9b5f05ff456ed291f5edee": "f9362c6f1250e370b916e0a2629258a4",
".git/objects/3b/cea852ab1f1b986919fd0729416db4f30e9c28": "2229670fdde9ff005768ecbc5c229051",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/7ce165f54f8548bbe1b4ba91e00aaa1f7a9eee": "5bc311325617043da6ba2df46634a17b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/f2cce64d57ec0562dc60938758b8c3fa17e96a": "887200a1a664332cfa4bd3823f4331a2",
".git/objects/60/7cfc5c31e32703b31f604a43b657f7548a97bb": "f8f2a6d4fe5792be846e62bab6f7329b",
".git/objects/34/d1d3e532bfce6764f7bfb3052320b4fe36f5ad": "27c3ca4129fba70ffd49d3fbc4c03285",
".git/objects/5f/c288ebb1a4a779572cd67b88f0659b72feef38": "6ef91bdab550a3c8bfc7c601218b6c04",
".git/objects/05/510989b98ee63bbd015df1974f498e5c39c5e1": "f2ed29501a3cdc5c73f70d40f203f752",
".git/objects/9d/525bf63b949d4ac7137786e83ef42172bb07a3": "8333ae8de7674f882be0551aaf9a7e68",
".git/objects/02/a497a9d049fd452cfcb8056cb9afdddeb3db07": "63ae923b5241675296d82991b47b986c",
".git/objects/a4/9ec3330f8ef958186156caa126cfb64acef0b7": "bbc520ada3680e3a7453958bb5d930bc",
".git/objects/a3/0ff99d8892d559d5030d7fcb1087bbff6cccab": "3a31d71de321f32e277903ebcbca0d25",
".git/objects/b5/e7e92f25f95f16081ce04ea38a49d0b2da10bc": "5574849f2fde196592c4278c05d2328c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/72c15f8ae2663cb992d8c9deaa319045d44678": "ef80592295c636a7c57a02fb6d02db64",
".git/objects/d9/bcdd3259aad6cb4251aaff972e029347eb0a72": "15abcde007235a12e822de3c6fc401fc",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/d20cd82d8c780960911710ecdec96c48762e4d": "26a0815efb6561b3ebc1421f6ec43eb1",
".git/objects/be/c0bc1ae7f86012f4944510be45a4daf9525bd2": "f20670d223632fa8e40f0dd53ea0f75f",
".git/objects/d6/f91e7ceb7f55912eda07839e27519628348196": "bfd74f2d88cd1d65068477c119d518dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/ad6fbfac0b268e5995fa822758254036ce8182": "9a191637c8f29bbd31ef3661d09ab249",
".git/objects/e5/964cc3345df27614faecdcd8ec47fce4f829a8": "60e67ba147412a2b89883c63406fd72c",
".git/objects/f4/2fbdf3b7268823c566aa95a50014e228b2f822": "70702d836379d53ed9d65887fabe2bd0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a81c60752f2e6383f3abbf2dd830913cd42320": "45bb4a4a29deac8ec8d67cb08e024223",
".git/objects/ee/f2d9ef6b62f63c5a4307e65062b2da1591a07b": "dc0ee4c887eb9b1618979707d23a442d",
".git/objects/c9/3e84641e1e12e10cf0be39fdb4c60f7e55ad33": "911af152fe67300bc5a5c7e049e40f65",
".git/objects/f5/09eb071313f09af62b79d466bfcdb38a34de80": "fe5b1f62121f4c4e7f53f05679c709de",
".git/objects/e3/4c20baa5e4a4b251ec8f1c37531273efcfcfd8": "7467c17d10893ef46ee2fd238d4b36ed",
".git/objects/e4/348fdffe890de9038c664d891e887a6cb627a3": "392d88452c69938aa02ad6464967193e",
".git/objects/fe/b34a9673670541bda4a4041155fa237ba9e84e": "efe297ba671304557f3359ea7734e0c9",
".git/objects/c8/254a151ed4558182c59d6aedf9b7d78a4691e6": "268e0c74be7c5504652ac97827b7b3ab",
".git/objects/ed/3e1440f7db531a837024756a0766b52ae4f69b": "d2d8706a7cb0c8d3af1847e76fe8cd18",
".git/objects/ed/29442e9abea737cd35438b44d2d909fb07d478": "b442152500b076e5c9209fddfad2158b",
".git/objects/c1/feea1ffeb08de68b4b70c6547f8706b2413594": "d180e411e0f3b2aa1241f44d9e33853c",
".git/objects/c1/207507563213a28c5b6054131a8a62d85b3c28": "4248e56887c5cabfc6cc8a524535652b",
".git/objects/4e/43cb3e0b3134b7a97b1fac71b6a42d2dece52c": "d94fb87ae2f1fab58e6e2ecc3585f1ed",
".git/objects/18/16bc1a0aee1779756ed10491aaaeed5330deac": "11b0c1185e065c21e80cc34767995b1e",
".git/objects/18/12b750f8ff07d22f02592a057392371974832c": "98e4fd96d1a1b3ba1e2f3be655815f23",
".git/objects/27/687fd3df48a0133e0ff64d8a82011ddd173619": "c3982850d4eb5d56cf620758257f9aac",
".git/objects/29/c9a7a9d2bef0d6e4ba9e5abfde9da63d60deb9": "0ad3e7227252f9602204233c77e9a95c",
".git/objects/16/189350540bdce65f21961b925b63b3abf689fc": "e26959cf3b7d52f412d48aadf5049f77",
".git/objects/89/0e703ad47069db8588dbc5b5b7a277baac515d": "7b51d39523314b264d797e6a6ec0ff07",
".git/objects/89/aa90acacbd5b1a08558d701df0f08e1eb35110": "0aa9123aa5549e654214a9f78e0349d7",
".git/objects/45/ce188d260818d5f30b857dbd8a98f70b833eaa": "fd52ef6d83e4a5c58406f4e23b1cb658",
".git/objects/1f/d9dbaccfd7faf1efaa109a727b8e23e86931cb": "b75de4683e1ef2dc1bfd56d6fc9a55bd",
".git/objects/73/9d5ed36e88da893f26b3ebdd54bf1435d3c923": "1b1a36f8c5662e5b733697908cd5b184",
".git/objects/73/79cce8f26709e7f16956413b900120674eb6d6": "6e291a6da62c72412b0a74c646b550ae",
".git/objects/73/625e59fc9802f6de380d50240a06871fc11bac": "437f46a496d517e83081306984d6c042",
".git/objects/87/c69636f31326019f7940cb14bdf76f4e49a3bd": "2db7acc0205dc14f47d19ff6b36698a9",
".git/objects/80/69fc9dd11468cb9d33be2c461ddea31ed49a32": "cb1ae3cdfb53bb4d0a320706f3beb338",
".git/objects/7b/cb4d2787ca35dde351f2e77455270345917dd9": "44971c0c8cde138cc24da341ebd8dfa9",
".git/objects/8a/4e6e5104b4940fcd8a1d399e499b5f75477481": "ec79577d084630aecd789df84c539fe2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/fa5b089fd9e039c1ff05be5ecde1c79aab0493": "fb7e977922681d6cd2acc3794aecac3c",
".git/objects/10/fc35394d5090a0a066e3a1e412edd0656dffef": "718b132991b2ed9290ffd834db43e04a",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/486059a62026b9edb019b2a7ac75db57b898d6": "e3bec8b74de5012a1ac8d79579649412",
".git/objects/26/e36a224142cc118eaf458d5caefca686a526ee": "6b1b1c3484f833414a6c0e1fa0d28cca",
".git/objects/86/24afe5cc2af295f25b737182588f8fa1425254": "3e25098d22dcdc874d36927c42281e9f",
".git/objects/86/de21fb0786089cab40a955b1df4d2a8e679671": "f25ce7c84eb632216356e25125c670d4",
".git/objects/43/22360f029c1d352ac328d53b5efc3e1d98cb4a": "d41bffcf26a1e022ddb923aea5055f95",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/3ae51803aef672e6bc00bcb2d5b15190fa2731": "ee04d984ec74785b23cfe9b605c3f3c6",
".git/objects/6e/d0b637e0c67933b828a368f725af8f8ed08050": "933c2be645d0d286da4911fffc2b2b93",
".git/objects/36/649c582beff368d1bf504e6fcce0d3de460985": "3fdf452f48c274a75812515771267fa0",
".git/objects/09/2a912ee7fd9bd66a36fed56a98cb69a70ed220": "e3963ef06506434baad91f2201dadba6",
".git/objects/09/d0915240b716bd144a2d48ca017909dc8173e5": "c57a617849422f87a2cdb3e33bdc7131",
".git/objects/5d/e799cc493c8c9f8bdec138273e6ba4912eefe7": "4cf8c9534f9ecce0114dc491fcd9b3a2",
".git/objects/31/e113a5e29b9a29080d2f4af033abe56ff67249": "399a8fada46892c69cc1507c8f2afec9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/79bbe38de8f41cea0f62480ebe580ce8dd9aba": "2a4965ab2b9a87498fc61f7fd250bbe0",
".git/objects/98/c8d48617502b9abdb2af059a400a0b5135da9c": "16a2dc877bf6ce36a5d9a5243ab62741",
".git/objects/5e/32f838d4514d36ea3afe3eae904848186c3be3": "367e216d3eae373449870dad7f63ecb2",
".git/objects/5b/74bfe6ebe4cc22430d09a7c6dae3c2b1fec073": "bb635ac08cb2aced84a6fbbd72c5d6ba",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/e949adbbcedd3c0389b31fb8ad539fde9246aa": "d0badb5a8da908b1de544b31b4b36588",
".git/objects/6c/5d4604c711f0198a8e1b12956f863efb8e5ed3": "8ab616afbe1df9c4779def814a5dd310",
".git/objects/39/0d766361088fb1dfa7981c2067cd673dcd6443": "294d3f1c4239eb79f7e084aca53f8675",
".git/objects/39/c188822abf8e39366440a4d2cb70a27aa0101b": "4be822d876988c6862bdfa1fb8eeb3d8",
".git/objects/99/c1ed07aac00bb3b1b0cb885ba8f347a28d4834": "0b33cfc9f8fe01417742e51c786c1987",
".git/objects/99/e2e4ef5be6376d1c075512189e51ab860bfa1b": "0f686b9e60608fa984f4866b08a5846b",
".git/objects/97/1f109e918abbda983107928c657337ff3a3e30": "aba40993ada6636023c9a441c74fa962",
".git/objects/63/6d999d460704b26a14607a4f1ae8dd48d8a42d": "0cc6ee1d07b6571cad0b888da75c58c6",
".git/objects/0f/1a899f7fbba37c29c52a1a807dee270eff0202": "53b27bf0f80e092f40f09a89b13105cc",
".git/objects/0f/a9dd27c7f9b0eb5849910867baeb373a58466b": "af064f0debc222dcd19ea170edc13d9b",
".git/objects/0f/9b1cc95ee555b2a38cddc545d286af495f0261": "202a8a25d4d2dc2f73ba3753e3aa7be5",
".git/objects/0f/9f5c19db59aaa238ae6e679bb35be5d4e79b9a": "173a284686671864f8bce6f37b8f9465",
".git/objects/0a/7d87f52078a2c5a88537ce59b4a51530420311": "dfd7bd4dc521bbfbb017882f5490dc92",
".git/objects/0a/1ed246b9a7d48154edf3487ca74902a69d511e": "72e048a5c47f5c4436f5d7b7e22aac7a",
".git/objects/64/9e92b75668d29e2386397028625a4980f8c128": "789642e6136331749dc72527c57cdd03",
".git/objects/90/61537afc2f3f9a2e70fc3242c8a7b221b25636": "f24b18329e1e04c6abdb6eb04b6a268e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/f88b63bfc0e584d49b4eb487fb67bd471964b9": "6b3981be7d215ebe782a8704854f5839",
".git/objects/a7/f6100a382a987ff3c5db51837fd43399963eba": "f9eb8bb58aa2341b32a92e6add8157bb",
".git/objects/dc/8e22dbbb422c0ae38a00018e7ad2faeb542b59": "8ae4dc5f96b83f0a9a13f64e67506349",
".git/objects/a9/509dc2b7a04255a23a123aa8600a50e3c7b7a4": "f8d89a66f43e1f01fa25ec6f2afdd911",
".git/objects/aa/4a529b010cc784f8a7723f5fb2aa5fceff555f": "0e305f01c38af95dda0b51e97964c344",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/240163598bdda1d04dd0eb294c8e8070c8ccb2": "780c0b5d8aa00d0f226e86fcd5bed022",
".git/objects/b0/ea63004aefc5ae1c3c36a25bfc1ce629d9eecd": "54d17d07a6d5719dbcba28fef7b1fbd7",
".git/objects/b9/17fdeb76d83d8a27ad482a6a29c6cfa8a876e9": "c2ee1b356eb0b3319584ee938f0ea940",
".git/objects/c4/efa55aad582738e1558d5e7f2fbdae182344c0": "3b13942e18b8179c014a3abe3274a470",
".git/objects/cc/e1b05fd167cb56f9df641ff059a7bd2c2b144d": "1781ec0919844cdb01a5941489c0802b",
".git/objects/e6/d54cdac12e6d089e9e7b607d0b49cd276fa42c": "765f4a3eb3af54fb06eaacf32d2f70e8",
".git/objects/f9/4bdf7636f34ff9fdc232fb12506503387b03d8": "3a9165ec039bd4daed144c883b15c93c",
".git/objects/f9/cdce3981643de52e2e4259df391d1e8429c12f": "81b3456799db9a94e86ac40fc29e65b5",
".git/objects/f0/4f932d1b964ebb5d6bc09bd61b0c670fd6dcfd": "bc59d30ce7c7d51b8381be9eeabf55a0",
".git/objects/f7/4940499745877a947d99786bfdbf4536ee4d7f": "f32f1bd6612b94c07574d50c6bc3e0b3",
".git/objects/f7/79c270b9bc0ab06877a9c501ff56289a21c932": "8aa22f8844bbc620126084bcac4d7204",
".git/objects/f7/59bff62130fe082e51c2114e442534eee4d653": "90a6f1cad556a1df5891832abadc13f1",
".git/objects/fa/104101cac0def64d5dafe527aded97d41e8fa2": "091044083f1782b2854137ba782c2acc",
".git/objects/c5/dc0fefbb0db22f11d66937bd7f4c2d7b0102fc": "247466bef126c97e417ae3576bd24101",
".git/objects/c2/bd620ff83ffc4f9ba2c8623c7340cfe91fa776": "73efc9e2b500e27ce7236efa0f25cba4",
".git/objects/f6/a0eacef76f0ab069e7ebb3965b4fd3fed97534": "ed5b3afbadd1d061fde1652aa569316d",
".git/objects/e9/2a39df2326614f9934857bd63aefa43a6059f4": "188f6e965311c473a18af4f45d811b09",
".git/objects/f1/d59400bb8967bec7002117f1c186cd92e1579a": "1642aff1dc56b6a0ae18f14982025a45",
".git/objects/e7/cd327f274974bfd9ff9778d6b7c7431c65bf9f": "97148fd70b8a6633d4b61520f9fb9744",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/1b/7dd53c20e2d3542e5872102f2bbc26501d0b3e": "999a37e497159534a92da09bb8ead05d",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/b65ebb51dfa26af1c463c592b6bafdca250093": "fd22edfba18e55570f0b35c59ef8b3e2",
".git/objects/70/2d690c3dae62b372fc3a31cdb0cf04f4361618": "0062baaa6b3b7c34d37283cf1b031d83",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/53dbba5d502a05851f17f307f245524b151c0d": "564e93da17d85cdcd06e258665047564",
".git/objects/23/27fc59751f77e0ad1bca1c81503c244c1eb655": "0503267e9c7943d1541c41a51f979b58",
".git/objects/23/c3d98dc0fc7aef2ae477ef90c7150aaa7173db": "d4fba6e698beff262e2639206b0263f8",
".git/objects/4f/eeb3e177fca8b07f03158835424f7b3db4eeae": "73f66cdd17fee2ab13af8eca37d2f41e",
".git/objects/8c/36421131db021052cb658ffbc73b5ab2fa6b69": "5bfe3a472dfd1483d1d2b35bc2bf82fe",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/3559a7a0f0cd1ae6dec823f4af1da8ee59dbb4": "58b9795f4c6a8f683ad85d2edfa3bc6d",
".git/objects/76/fe413ad924c0d5280d0d62d5fef95b54388b59": "07406d6bae185ca9d56cfd348b862783",
".git/objects/1c/716d7c53850cab209a79791b3cad8bae8fdcac": "4a7e1bda2a823b376417a7e63e9c94e8",
".git/objects/1c/13adaf5e2ff2113ea7f8b8f508fcd711bd91b9": "2ee20e6a5af027168a7fdc6c996f2206",
".git/objects/1c/b7c968551e16998af63f26f1383659f14d57bf": "62b308686fafdb0d98a9800db677e9a3",
".git/objects/82/28b6b020c42bd75baba4b666cbf751cd16a87f": "c0ddd486dbed102bbcf75a3d870dceb5",
".git/objects/82/9f11585971c466768bc43ec162142f58bdfa41": "b0fa2ec3da1093c097ba2b87aa150355",
".git/objects/82/d70e258f5b282a0d8dd308c4197120ec701a7e": "d572db6343886177e99d45e245eb7ddd",
".git/objects/2e/5f474e66ad96896beed126320b88413d6b2c91": "206a28168612eb3aadcc3eeb0093c171",
".git/objects/2b/a8d7377d53efb781620756147c29a81a424a72": "d0dcfe49ae2c93ae3f8965c3e0139ecd",
".git/objects/2b/d720ac8a54f6e452888055a49637c06b628d34": "0fea1d1e70968f489eae2c22036779f4",
".git/objects/47/ff7053c40094afd2c7d9279b38089883978188": "377671b4804e1efb1bbfc146d0d08f43",
".git/objects/78/4331930a48ec97f16fffd92e0158ff84ac4719": "96fb75f8a9bb476384ed1bbc3ae554cd",
".git/objects/78/f72333efbbaa18586428218c0003cf1227c0fe": "7fc66b782278c7edc09459183a6dc61a",
".git/objects/7a/a6a5d0698e670b659927ebd8afd5e6c268f3d5": "82a78f0752f8eb422472bbf4e42ab223",
".git/objects/14/efe8119db95229141888aa9e551b612789ebec": "14d88df63c20c585559cd8232fe5165c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74bcad8d9539ed5d32c0ffb3b91063b5",
".git/logs/refs/heads/main": "437fafbfc033636fbd075175d4291632",
".git/logs/refs/remotes/origin/main": "4f7f6bef6d272399d524e507ee50b5cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1c9dd0d8b47c7be99a99df039763bcc9",
".git/refs/remotes/origin/main": "1c9dd0d8b47c7be99a99df039763bcc9",
".git/index": "1f88c06fb0e1a68bb3e09b83444929aa",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
"assets/AssetManifest.json": "aadd1f5fc84d7fbc22094a2dc8c8c680",
"assets/NOTICES": "5834a3e56b33582f0f2a52b652b13a65",
"assets/FontManifest.json": "3a9064c706ecf952f88e059ea227c64b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "cc95b94cdd83abce6a1fc4ac227e4115",
"assets/fonts/MaterialIcons-Regular.otf": "3d70790b8062e699771a77e361dd22cd",
"assets/assets/images/card/recharge_limit_img.png": "3a5d43285f5e3217ac628cbd62bdeee2",
"assets/assets/images/card/apply_card_title_bg.png": "db515f5dfeb83f21b80b1ff353b255bc",
"assets/assets/images/card/monthly_fee_img.png": "eafc385aad5aad7451af7c274458ccda",
"assets/assets/images/card/fire_icon_img.png": "b0535f87210b4acd2d6851fc43a25132",
"assets/assets/images/card/commission_img.png": "add2145dc14d4e00c24667e0d983e4f1",
"assets/assets/images/card/withdrawal_icon.png": "d9b13b62eb44043e4057c208b711c13a",
"assets/assets/images/card/recharge_icon.png": "582a74dfba4fd3978c9ea9503f76790e",
"assets/assets/images/card/consumption_img.png": "77c4466f6d72c2c81b378a0bc7a34464",
"assets/assets/images/card/bare_card_img.png": "98843a7941b2dfee4fb077c1f8de7d1d",
"assets/assets/images/card/activation_icon.png": "69924f23862b5bd2785c8bb685be1bc1",
"assets/assets/images/card/centurion_card_img.png": "740580516c639b7fbe76f60d6348f02b",
"assets/assets/images/card/check_button_img.png": "39e66834cfef5bfe4aa5a556b6e94085",
"assets/assets/images/card/period_validity_img.png": "f4e6fa50ddc60e8a0137db870f4c9e5b",
"assets/assets/images/card/recharge_process_img.png": "00e9eff538726e5457da67736a291c7d",
"assets/assets/images/card/card_fee_img.png": "5896d790f4716acfe9765a9ce669dbac",
"assets/assets/images/card/no_data.png": "5a3188ffef5910fc9a29ce5332d45d8b",
"assets/assets/images/card/card_title_bg.png": "84f43a641c232079c91d5983b1294e14",
"assets/assets/images/card/benefits_icon.png": "30fc8faa694d0e94a4f83a3bedb50a8f",
"assets/assets/images/card/warn_icon_img.png": "155498b3237d232711d10cca82c3a014",
"assets/assets/images/card/card_payment.png": "f680371dc6d2a6fece0d927cb4f2544f",
"assets/assets/images/card/cvv_code_icon.png": "df91debab482ddb54aef0b58123ba47d",
"assets/assets/images/tab/wallet_inactive.png": "6ea4a98bfa7d2a3ba88de51e7a0e2e7c",
"assets/assets/images/tab/me_active.png": "65fc8b374f2d32d02039a2fb561348cd",
"assets/assets/images/tab/me_inactive.png": "8e5a51ba220e1d793ddd70151573193a",
"assets/assets/images/tab/card_inactive.png": "5ed004bf29b8716232ad85dcc7b21356",
"assets/assets/images/tab/card_active.png": "89e8848c6e02d7f0474aee57d28bebcf",
"assets/assets/images/tab/invite_active.png": "d28fb2b32cb7fb54b53baf1c16add67f",
"assets/assets/images/tab/invite_inactive.png": "444e8998ef78e52519242710776b54bd",
"assets/assets/images/tab/wallet_active.png": "866a441020d904cfc4b707bb2404f811",
"assets/assets/images/invite/start_start.png": "f471e983f38c7316f9a3df259cb25868",
"assets/assets/images/invite/invite_banner_bg.png": "f51eb39e65d98a965402cbd8bb9d084e",
"assets/assets/images/wallet/withdraw_success_tip.png": "c16f6029ebdbf5aeb4065ee57c3206a6",
"assets/assets/images/wallet/fill_round.png": "26c30e364ab015aa32c9f6be298d5d16",
"assets/assets/images/wallet/wallet_title_bg.png": "1c60a1b59b19d82ba0634c08d2d040b7",
"assets/assets/images/wallet/usdt_icon.png": "81f19c028b6e26392316d7ab4c2a01c3",
"assets/assets/images/wallet/usd_icon.png": "21a238b6e7b816de072d768b4b5f255d",
"assets/assets/images/setting/twitter_img.png": "5c57b1fac4d8992ffcd49b8a4f31963d",
"assets/assets/images/setting/open_eye_img.png": "bf5032c193642a6770b714b2ec05e314",
"assets/assets/images/setting/my_head_bj_img.png": "c830c988e544696d0e0b4e59f2c4b798",
"assets/assets/images/setting/official_website_img.png": "adb970a027ab8d370110ab145bac6913",
"assets/assets/images/setting/user_logo_img.png": "7456cbf56e6556e4015a1953686b10f2",
"assets/assets/images/setting/we_com_img.png": "bc388846b21038761c0882223620ece1",
"assets/assets/images/setting/check_img.png": "91d41adcda73dfc0386bf9c0610640e4",
"assets/assets/images/setting/pricing_icon_img.png": "5ff49f997df304ff1d4b5f4ae72b36e8",
"assets/assets/images/setting/version_icon_img.png": "df9b741b7b0164d6940ed1452bca2b9d",
"assets/assets/images/setting/close_eyes_img.png": "abb94b88cc6f8eedb1c5c9187bcf06b2",
"assets/assets/images/setting/asset_overview_img.png": "b5a48ae9c2d0e7dadb992a7cdeb4d33c",
"assets/assets/images/setting/message_img.png": "bf758c33c45cdfa5e062792e41b0ce19",
"assets/assets/images/setting/default_card_img.png": "5beeae22f552ec59e26d47b38944f56a",
"assets/assets/images/setting/mailbox_img.png": "4f07a10b983f2417d3e0b215df78569d",
"assets/assets/images/setting/privacy_icon_img.png": "c9cc18251923013be4c75195727d1d84",
"assets/assets/images/setting/common_icon_img.png": "19aa0bee4530f077350b7ef76740d8df",
"assets/assets/images/setting/service_icon_img.png": "7dce224161fe47c0aee3c2b5fbcf3c33",
"assets/assets/images/setting/official_account_img.png": "b5c1801fba67c83273b07a55df4484be",
"assets/assets/images/setting/agreement_icon_img.png": "3a9ff8553f32baa729f35eede1b01d74",
"assets/assets/images/setting/commission_icon_img.png": "19a14c6c7280bab24a802eda751566ac",
"assets/assets/images/setting/trumpet_icon_img.png": "ffa3a42704939bb08e9ed82c1f18435b",
"assets/assets/images/setting/scan_code_img.png": "eb68232602067e2b165b9712ca2ea444",
"assets/assets/images/setting/alert_icon_img.png": "3b67cd2b1857f5b0fa792bb5a85288bc",
"assets/assets/images/setting/arrow_img.png": "c46e2537ea2513619504485c9fc4359f",
"assets/assets/images/setting/secure_icon_img.png": "569d59dd0f588313edf2d166e4eb9646",
"assets/assets/images/setting/cost_icon_img.png": "0f44549ba94a1e30ad80b54ecfe99fe5",
"assets/assets/images/setting/card_balance_img.png": "480265de039cfd683caa8b38d0c46c54",
"assets/assets/images/setting/payment_icon_img.png": "c643572b444c59f1b59c396a4503cca7",
"assets/assets/images/setting/notice_icon_img.png": "032ff6eaad94a4b9944419e20de1a140",
"assets/assets/images/setting/exit_icon_img.png": "89f6843924e16b6f5af9ab27c93f1850",
"assets/assets/images/setting/user_copy_icon_img.png": "6a1796289f151dfa6c0a916ac7b66685",
"assets/assets/images/setting/total_expenditure_img.png": "92395704a0b835ee344d2b4265e0cbff",
"assets/assets/images/setting/telegram_img.png": "c4ab5e87721ac7f235ed139ad9b4e1a9",
"assets/assets/images/setting/copy_icon_img.png": "e5da47d8012e34dbf5c2572acae0afa9",
"assets/assets/images/setting/qq_img.png": "0938ebc38387558ba15ad94e785202c5",
"assets/assets/images/setting/help_icon_img.png": "806e901bca1925f3414a117b89e98997",
"assets/assets/images/setting/language_icon_img.png": "5d4529f3bb8e2cf0d46e83f8df8501ec",
"assets/assets/images/setting/log_off_icon_img.png": "5208366a6a460205f81f1ac05071b600",
"assets/assets/images/login/binding_tip.png": "0ed3a1753aa7cc46facc7842d5453251",
"assets/assets/images/login/login_info_expire.png": "70c342535714c5dbe268d09050a4651d",
"assets/assets/images/login/kyc_certification.png": "b1a63c8da29c19425bb4c64372b72484",
"assets/assets/images/login/title_header.png": "15d9933a8a7f30bdc236c539a663c9ba",
"assets/assets/images/login/failure_icon.png": "c84855de760be0108f79ee600bc4ba1e",
"assets/assets/images/login/kyc_failure.png": "898271fc4f3109e4d57b54f2a1fae9e0",
"assets/assets/images/login/binding_success.png": "f04f6674bd3d517160c1ab16d257b82d",
"assets/assets/images/login/secondary_validation_header.png": "86a323ab47a444151183af455b1e4277",
"assets/assets/font/cardfont.ttf": "f059c1c61f135f8143b27ad3ab22a1ab",
"assets/assets/font/iconfont.ttf": "89c341904953dc047dd767322fbb4ca1",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
