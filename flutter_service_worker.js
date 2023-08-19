'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a29e8b22a08aa0274b027931eec216c4",
"index.html": "2690c6f49021cfb0c9b2a25507fd56a0",
"/": "2690c6f49021cfb0c9b2a25507fd56a0",
"CNAME": "4e42d27353184982a8be24e30d9b2388",
"main.dart.js": "e2ecd106267f96f3ea2afd4dd95bb217",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "61b493df9635f221d909421e8769acb0",
"icons/Icon-192.png": "002516a4b23f153b7ac2928347c377b1",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"manifest.json": "69c2b138718bde73d1d8ec7f7830f529",
".git/ORIG_HEAD": "9f5ccf5533e353beb84218797443a1ed",
".git/config": "597df0d33934c8a8afa8effe12514883",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/0d/4b901deec59243645060f05506cd4224ca001e": "3864faef2908e6cc254cfb2971010dca",
".git/objects/59/62a92b6dbfe10031152c56f8d6e95ef6fefd9c": "0d7225ccf0016f64fb950dbcb3f0f645",
".git/objects/50/c193a1893b3cd32b6a12fde3ade2892de7f888": "5b2e69b4177efc8a9ffc806e1fcbeaf1",
".git/objects/50/7e24a1d147795298f46b2a94c27c4f8a002bd1": "6ae7b41bff281d28a9bea34daf22c899",
".git/objects/6f/01a0337193636942175ed441361ba58eec6e42": "e4635062668804b399c3f2d1d28d1052",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/3cfa43caeaaed9cf10d28995a60b2e5c80be7f": "e40786561ee6d9cc890783acb9d9c76c",
".git/objects/6a/8da07996a2ec24cb7f2d7eaf5504331768ef48": "abfffb4fbb461e31faea651f84547c25",
".git/objects/6a/ae52dd34d92130dfb0f7413f0092e9bd56125a": "22b71812924e4b730e6a89bd635ac8fb",
".git/objects/35/68a59013ad2a6d07a6f2b20cb11c801a39fc58": "c2d0909fc5d3d10d7ec2d40c23f088a9",
".git/objects/35/089e12d9d35ae869b274f5f7791325cdf4031b": "743f10475239475be97b4bdb2bda14fa",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/4a72eb048ddc1e12cce1416c1169a297adc354": "f4c480955e9570290a4ef9a2b9d7bf6a",
".git/objects/69/852803714260748d0fe4caa782c4c0671d8321": "78435b762d7a72579c915f11835a130c",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/4bd1c9bbb9ed8149a1bd2dbc34e321e6074cfd": "69acba6f1e36229be704486ed7b9af5f",
".git/objects/58/f33a5fca9211b642ec2ca68b72573d186e7574": "aea465b483b45c94b1cd10bab7e7b452",
".git/objects/67/b59d04e8a61595005ba4d299db25070b26504e": "62233bcf662823d8ea1fc09dd6c00cd0",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/60/7aaad416f3b8c7e09ea7c90193c06fe9e1352a": "db4c7c141fa4ac35679d8d99a75839b4",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/05/576b7c3c8ca7f848cda6ba780451264d513f91": "de1b5cff50e262513ca2951778fadeb0",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/a3/a17fb990a655c6e655fe278c564aade0fed80c": "f29b7b60edb634c14d631a42ba9561f9",
".git/objects/b5/380732fecdd41363492605e95cca72f48e1595": "2e91308bf5ef10cf2f066f927e37d7ca",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/d3b52e3536bf336b06c1900fe215c655195358": "f2c269dff1c34ea394578bbf032a793d",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/fb312225bb037aaea5346234ce08efaa769662": "35cde6c001e7a93d9794df93d32f7733",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/91cabd99f615b271b2617c83d951c3ca542426": "e52f253e60fb913296c70f1e4243f75c",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/b4/6c2c5b6b44148688f7973c6e7e0739e3a53876": "cdf549416260cead21d2cb4275010cfc",
".git/objects/a5/7f6a9f060d9c9e030a866c8dd3d91c98b46154": "5dd102e2f6bdfcd600ef65632b650928",
".git/objects/a5/ad454c8977d83dd8771df8ea6cbc2fea902225": "2188919726a731ee8cbb804ef3441c6a",
".git/objects/bd/4a29909f4be97c4ec0868431b9bec59db76ab0": "d1c5e8216791484a5c64aa3f073f08c8",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/a5c8a811036a327d2123ba95eba71f60cc49b3": "2db008e18f7d65689b087e0acbb376f9",
".git/objects/e2/ea63f177cf471a3a0e6ca3a0bded3cda95538d": "096f6cabcdebdcb55edba3650c7c6302",
".git/objects/c7/661743a3264ccbe83bbb6b68df3d028d8cc669": "8d9524d911ee73dda32287b0c0ceb483",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/f5/494e93f41dbf1032084ea774c8835e319f08a0": "715e37cad7f7bb420745672490258d07",
".git/objects/e3/8ad732c97ba4dc890af94217b8a5baee980762": "505b0a629a64d9ee6324462fddf7d760",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/c8/5d97bd094cc7bd9e6ed82498f4f6c71bc23bff": "d851ce3dbf21d7ed112510a6e6ee9e10",
".git/objects/ed/e383eb0f1392abfc0b301d6778fb0a21996bbb": "f4633f2ab48b5c7974b2da1e0d05278a",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/750ab6613797e096224e748895a5565fd151e8": "e8804ee687f1c0e4e30a3f6d9f42cdb7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/20/0257d83cb594dfebf0313ae67d3f8d774cf090": "ec28fe0dd9fc34cb1ca721cbbf5afd48",
".git/objects/42/7599c487175b04b2ccf3cecccb5638f82362b6": "3bf964ca20ed72b65d9b51672f326ba6",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/5edd06d17fff45436b65d7cfed66c1e4a0f35a": "50d75dac293a1645687e10530dd85e8b",
".git/objects/74/f4faed82b0a502335d3018591688c6151dd71b": "a74dfcb7bfc569f7eb299255caeb26cc",
".git/objects/1a/e078cfdd6ed214b5e2bf265e4b8050d23c20f6": "ebca12523d36fce962bc282c789889c4",
".git/objects/1a/29b3ea3d7c4f5c38605b6bc1bd7a927799fb14": "b9f62e59f11dd3a72b0632c38053a9cf",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/17/511761058c656b1e0d13a18128777a89f50674": "0ff06b7b579f95f635b926a76de2c7f9",
".git/objects/7b/caecbc37e0aec591b65872abe3e7d25e6402b3": "cac669e4a0d85bcc36b62da0bf807cf8",
".git/objects/8f/caf463340a1738c1cb5d7c314f806e9836134b": "98fcf62e53b6e97e49d424d918990d76",
".git/objects/8f/670bf8e9b6bf4bbbae78edfaee61f640bf7dd7": "4f4b28d7b246e0f8355027edf37ed257",
".git/objects/7e/cbd9f645dbd186bbde77ad886b087b88632e72": "95a8da9e85b5c262195b9cf8894506f7",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/4d/6066ec9a27bd05e7a93b5f25bb7b2f3f733778": "5ca061537e82f3bbcdd4db7055995beb",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/72/3cf6e8b1a942242006924295f10c42ee26bf0c": "2fc44f846ec79775d18ba0a94de7cc3e",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2a/c3095c7764d7415339a529f677a26b6873404e": "7c6c36a04fdd2eb28ace5aac212e291a",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/9d28a2ae1a33d5a1f4d3291ce87232fefdd43b": "743f2732930dc1a00829deff0a8fca74",
".git/objects/00/935f577769a185dfb1ff55444a1da55f065ef2": "f052841be74d3b80bd30190a0cc06498",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/09/1068bbdde745d66898f2d7d5804f63f1b9ab98": "fcb2585d9b6db7ef22404ff787a6d643",
".git/objects/09/b3c938ccab5ed1f694a22428839ce681ab3b13": "d46242e172664619ea44cfd214617d62",
".git/objects/5d/1cfe05220c6a0755a0f805ff9a9bc829757ecc": "8a3ba05c556f6e859620b338cf70b3c9",
".git/objects/31/82a3215449b9fad14967c4250e916e409a038c": "60553c96371ff855260097ed9e28c293",
".git/objects/31/471828151aac56c2a0b049c25ca495ba005d37": "a3bf82d53ac3eea111213edec8059298",
".git/objects/65/febf254daae49d63cb6651298d4048f76d8933": "6fe98a67d2b77c381b111af695221cba",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/cdddb2d530ade7ecc0399b55101359b4e1981f": "3710a33fbbd281f0310d9dd79a7ca5d0",
".git/objects/3a/4ae60e669420e7b5716cd8bff4b77010a60f09": "2b22a91defa0eaa02ec1868b9d1e9ef9",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/5e/23a20d8e19de36c8b769e831120e441db74735": "e921884880fab97e291d6747fc918e87",
".git/objects/5b/0e16a6d68ffb3132aa60599713b183aedd96ee": "355bc9e0b73fb1c9e2e83860b692e040",
".git/objects/37/00761c19bd7cd81787e8e5a11b10f3ba81d400": "7d6220630f9ad9008ffa0a93278f0e70",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/0bcf4b1afe82ef8103fb159fd8f72b60d24714": "d4b07d46fbaae7446b8ae00646e94f34",
".git/objects/6d/14229d0c2e2cba7e08f2c5c9c6f472b9ab91e5": "6f3479c180b082819ede9dd2afa03b84",
".git/objects/6d/18ab417d3e801076d12c407cff3865bc3762ad": "eaf30216132af23af5a153e6a8c5f265",
".git/objects/6c/330005165da8d9742a65df15885eb5a29f1320": "bfa703064c70da398f8c47e6ab3bab6a",
".git/objects/6c/b2d4ec6d3432be1f9c0a3bd9ee69c31410ba1a": "169061bc2eff2bd97a23da0f4abca02a",
".git/objects/97/f3547cc6dc4458e6dc05b1d02c50c145841725": "e7c65e2d5f4d342ccbd12a20a784caff",
".git/objects/d3/ed5978ac3a1a3183fe69ca48236ef522b61381": "a44d4bc0bcb8d6a710e91d7ebc2450cc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/275f16e891c8b86f38924485153b1949537c69": "ec2056998ab70d24ac18c9298ad39ca9",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/b1/8fde853ace8531c882bfdd5f6c3e0d10a03e7f": "d0ed9446ac652db83c8a62330a799c46",
".git/objects/dd/94f8e38b7b7f05329636b93824b0b3a6f0bff0": "0f97efc2d21904d90c543ebaac4e5104",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/79681f5dc4a5c24636b87e159f002c4c8cfa7e": "d5acb4c1f4362d7de28726151860e9b5",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/de/7affd4154e198560f4b74176d0dd8c01ce4324": "93210c863a1b13d5039da050d44e567a",
".git/objects/b0/45c189a268adb1b58263e7075d5bed6a05a89f": "4ad13c33c71f60b338550f0e5f473251",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/c3/3f383968c3dbfd036ff990d80319c96a8dd9cc": "e57f9806570bd41bad3d8071acbff388",
".git/objects/e1/7230b3a664839094835c0661c1bc3fc4feee25": "9290759cd9c7fc5816b8e58f6e1702ba",
".git/objects/e1/1826fecf57a76c7b540ecaa22db85fbc56617a": "c91b2de8892b6692c63e9797d61a7eb2",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/e6/e0972641e390c960b5722ee8029174a1969795": "fb0bb22cc74f0e714be903a57fbb245f",
".git/objects/e6/e5f7d77ecd8e6af26e0b78052f5bb69f306a16": "4532d728c9e5defb35dfc2d2148cc801",
".git/objects/f7/aeebdbc1a3302581cdcbd940ea801fdff9223d": "f89e83867e8410e5c4de563556b461f0",
".git/objects/f7/8b2656eb484de4882aa9b65fa1c9fa9eb8f6ed": "a9d4d688373da0212369fd306265a962",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/c5/b3ce40216a1846ee39929e705b9a5de5a775c7": "6e8b1fcc119917aad88e0b6d09925142",
".git/objects/c2/39a69c73d9fb65d67c901f30f7f2d029929eb3": "e8e2c59e6449e0bcdf96699488ee21d6",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/cb/532e7ab5f22e608e96d13e09c87a6a374614fa": "fc01a2c4bd76c862a4f00f2fbb17ea08",
".git/objects/e0/8f1f6f0d005126124b89b6091c07ffdafd1d91": "e627be45faf7b533e4ff83474a47cd60",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/46/52cab572fb04ba239b24cd240213fb68d922a5": "b6db0e379bd5e25937027dda691e7acc",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/1290fc791c89748d573ee6d1e3bf71bb50a698": "5dc7f0c2f656237528c5bfff63e281e0",
".git/objects/70/53d9cdb9d701f650b172b0e55a77487dfe2674": "7a33712184795ff8e0db57543892c0a1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/0923e42eea9be7bf401235c18a56ed2ee411fd": "4a619718e4885e51ec208ec355b248af",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/cfdaa1bec18725dcccfac228cf64a94e78fbf7": "cf363974614a977811ca9e3b78a2cd19",
".git/objects/15/ccbf789ad9c12798286e273677872b9018460b": "4870e6f79a163a1511c485b42d93992a",
".git/objects/8c/766c4244464509102502b1cea0650bea299705": "da22d54fefdb0936a822826532d32e68",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1d/baae621df225bc6ea519ae8940bfbaf9be1bb0": "80862f9f879be517ea6995b651be6a9c",
".git/objects/1d/6df6a9117652e09c051c7e99c8129412c760e0": "9667817ee49c7ddff900864817486771",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/924016f4aa18b8c736d1891966511b7b7b74f8": "8b70a65e144b3400e8dc7beaf451dbb1",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1c/270b049ce079d7790b88340009046c2078e458": "ae2bb97f70f209e90f0891a10a95ac0c",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/2b/11a599ac714bc356d3ca0f453afa3d5d5af20c": "bec4394ef47cf55e95e8729db442278d",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8b/119ae0e054d4e98acc1e25ea6a349509d100be": "59328f76b5bc495eea82eb32c6317470",
".git/objects/7a/8597d864d38a1a6ca3a7e4005c4559c264a451": "dd5fcebf81db39a0630e24347660b9c3",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/34889aad6f8fa96fa97ee3a10b1e7485276614": "d1f07e84bbd176fbc11e2d1669d31ddc",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88baf1045f24f60782cd9ecb8d7becdb",
".git/logs/refs/heads/master": "f9090fddb79f7218e0c5a6d208b66119",
".git/logs/refs/remotes/origin/master": "c30bb305c96ca1a21f0a513bfcd67134",
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
".git/refs/heads/master": "9e5e3b6821fa8545438a3343c68dd55b",
".git/refs/remotes/origin/master": "9e5e3b6821fa8545438a3343c68dd55b",
".git/index": "7a928bdb6fb10c024788f0940513122e",
".git/COMMIT_EDITMSG": "cda3427d5ff09698af25f8cbe456ecef",
".git/FETCH_HEAD": "8754d73487172e5719e930087c86e3ea",
"assets/AssetManifest.json": "1d9ab1dab61ebaac13e9a355999a3f0b",
"assets/NOTICES": "3b720f320c802c15e7ec81c1fd34785a",
"assets/data.json": "17bac21fc1d311ca87b5b1a291788355",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0b0cf0a5e97c6a1c500762252362521f",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "e544a9972bdbffeb004e390ea45589a5",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/projects/map_api.png": "a2c3fb1b40780268acd752113f1d3ac7",
"assets/assets/projects/navigation_demo.jpg": "0bf08cc8d0433ef2ab3a2c6d7db58212",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/navigation.jpeg": "65d0c2f45eb47394a5e3fcec546b1eec",
"assets/assets/projects/gopage.png": "cb3476d188bd1e64ce620d40a666d2d8",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/map_demo.jpg": "d6605492e04218a212a784ddbf9453f8",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/vietmap_navigation.png": "fb841a487946ed6efc82fece85fa8782",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/diachiso.png": "cfa3a96343fdd80e02200d8ba4655cb9",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/projects/snackbar.png": "426d7d3320b4207468e1dec6322b3b08",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/work/vinh.png": "20a953a6162c63c176b774b85f95d366",
"assets/assets/work/vm.png": "0ffeb564a859e1e6735b5236c85dae62",
"assets/assets/work/st.png": "0957bd1682c5a518247a1844656c0f7e",
"assets/assets/work/vietmap.png": "3f7893b77efc47e6ffc4be574951e28d",
"assets/assets/work/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/work/gostream.png": "1a77c090e9da4659deaceb604c414371",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/colored.png": "8a3d7055eba1d9569a6fb6b38d2630b7",
"assets/assets/photos/black-white.png": "0385d5e4c07e3ccfc9f264af3a2bb625",
"assets/assets/photos/mobile.png": "4866bd79174777f6c4229bea1c7a2a60",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
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
