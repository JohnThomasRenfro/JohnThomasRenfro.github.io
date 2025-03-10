// Assuming the database is a string with entries separated by new lines and fields separated by ';;;'
const dbString = `
научноисследовательский	;;;	scientific-research (adj)	
социалдемократический	;;;	social-democratic	
достопримечательность	;;;	sight, place worth seeing	
сельскохозяйственный	;;;	agricultural	
усовершенствоваться	;;;	to improve os; improve one’s knowledge (of)	
специализированный	;;;	specialized	
совершенствоваться	;;;	to improve os; improve one’s knowledge (of)	
производительность	;;;	productivity	
приостанавливаться	;;;	to stop (for a while), pause	
превосходительство	;;;	excellency (title)	
последовательность	;;;	sequence; consistency	
машиностроительный	;;;	mechanical engineering (adj)	
купанье or купание	;;;	bathing	
западноевропейский	;;;	Western European	
заинтересовываться	;;;	to become interested in	
заинтересованность	;;;	interest (in)	
высококачественный	;;;	high-quality	
внешнеполитический	;;;	foreign-policy (adj)	
продемонстрировать	;;;	to demonstrate, show	
экспериментальный	;;;	experimental	
характеризоваться	;;;	to be characterized (by)	
сосредоточиваться	;;;	to concentrate (on)	
совершенствование	;;;	improvement	
свидетельствовать	;;;	to show, be evidence (of)	
самостоятельность	;;;	independence	
руководствоваться	;;;	to be guided (by)	
противопоставлять	;;;	to contrast (sth with sth), set sth against sth	
противоположность	;;;	opposite, antithesis	
продовольственный	;;;	food (adj)	
приспосабливаться	;;;	to adapt (to)	
предусматриваться	;;;	to be envisaged, be stipulated	
правительственный	;;;	government (adj)	
научнотехнический	;;;	scientific and technical	
контрреволюционер	;;;	counter-revolutionary	
квалифицированный	;;;	qualified, skilled	
капиталистический	;;;	capitalist (adj)	
исследовательский	;;;	research (adj)	
беспрепятственный	;;;	unimpeded, unhindered	
аристократический	;;;	aristocratic	
проконтролировать	;;;	to check	
усовершенствовать	;;;	to perfect, improve	
чувствительность	;;;	sensitivity	
централизованный	;;;	centralized	
целеустремлённый	;;;	purposeful	
целесообразность	;;;	expediency	
социалистический	;;;	socialist	
совершенствовать	;;;	to perfect, improve	
самодеятельность	;;;	individual initiative; amateur activity	
реконструировать	;;;	to reconstruct	
распространяться	;;;	to spread	
распространённый	;;;	widespread, common	
разведывательный	;;;	reconnaissance (adj); intelligence (adj)	
профессиональный	;;;	professional (adj)	
пропорциональный	;;;	proportional	
пропагандировать	;;;	to propagandize, promote	
производственный	;;;	production (adj)	
производительный	;;;	productive	
прессконференция	;;;	press conference	
предосудительный	;;;	reprehensible	
последовательный	;;;	consistent; successive	
поинтересоваться	;;;	to take an interest, wonder	
подготовительный	;;;	preparatory	
организованность	;;;	good organization	
общечеловеческий	;;;	universal, of all mankind	
несправедливость	;;;	injustice, unfairness	
неприкосновенный	;;;	untouchable, inviolable	
непосредственный	;;;	immediate, direct, spontaneous	
многозначительно	;;;	meaningfully	
механизированный	;;;	mechanized	
металлургический	;;;	metallurgical	
коммунистический	;;;	communist (adj)	
капиталовложение	;;;	capital investment	
калоша or галоша	;;;	galosh, overshoe	
интеллектуальный	;;;	intellectual (adj)	
законодательство	;;;	legislation	
заинтересованный	;;;	interested (in)	
довольствоваться	;;;	to be satisfied (with)	
действительность	;;;	reality; validity (of a document)	
безответственный	;;;	irresponsible	
административный	;;;	administrative	
проанализировать	;;;	to analyse	
попутешествовать	;;;	to travel	
заинтересоваться	;;;	to be interested in	
эксплуатировать	;;;	to exploit	
характеризовать	;;;	to characterize	
устанавливаться	;;;	to become established	
транспортировка	;;;	transportation	
технологический	;;;	technological	
территориальный	;;;	territorial	
среднеазиатский	;;;	Central Asian	
сосуществование	;;;	coexistence	
сосредоточивать	;;;	to concentrate (sth on sth)	
соприкосновение	;;;	contact	
соотечественник	;;;	compatriot	
соответствующий	;;;	corresponding	
соответствовать	;;;	to correspond (to)	
снисходительный	;;;	condescending; lenient, indulgent	
систематический	;;;	systematic	
самостоятельный	;;;	independent	
самоотверженный	;;;	self-sacrificing	
республиканский	;;;	republican	
рассматриваться	;;;	to be considered	
распространение	;;;	spreading, dissemination	
психологический	;;;	psychological	
противоположный	;;;	opposite; contrary	
продолжительный	;;;	prolonged	
присматриваться	;;;	to look closely (at); get used (to)	
привлекательный	;;;	attractive	
преобразовывать	;;;	to reform; transform	
преимущественно	;;;	primarily	
предусматривать	;;;	to envisage, stipulate, foresee	
предприниматель	;;;	entrepreneur, businessman	
предназначаться	;;;	to be intended for	
предварительный	;;;	preliminary; prior	
последовательно	;;;	consistently	
перекрещиваться	;;;	to intersect	
переглядываться	;;;	to exchange glances (with)	
ответственность	;;;	responsibility	
останавливаться	;;;	to stop	
освободительный	;;;	liberation (adj)	
ориентироваться	;;;	to find one’s way; (на +a) be orientated towards	
организационный	;;;	organizational	
нерешительность	;;;	indecisiveness	
непосредственно	;;;	immediately	
невмешательство	;;;	non-interference (in)	
неблагоприятный	;;;	unfavourable	
настораживаться	;;;	to prick up one’s ears, be on one’s guard	
крепостничество	;;;	serfdom	
кратковременный	;;;	brief, short-term	
корреспонденция	;;;	correspondence	
конструкторский	;;;	design (adj)	
коллективизация	;;;	collectivization	
изобразительный	;;;	graphic; decorative	
земледельческий	;;;	agricultural	
здравоохранение	;;;	healthcare, health service	
законодательный	;;;	legislative	
железнодорожный	;;;	railway (adj)	
дореволюционный	;;;	pre-revolutionary	
дипломатический	;;;	diplomatic	
демонстрировать	;;;	to demonstrate, show	
демонстрировать	;;;	to demonstrate; (+a) show, display	
демократический	;;;	democratic	
дальневосточный	;;;	Far Eastern	
государственный	;;;	state (adj)	
вспомогательный	;;;	auxiliary	
восстанавливать	;;;	to restore, reconstruct; (+a против +g) set s.o. against s.o.	
взаимопонимание	;;;	mutual understanding	
взаимоотношение	;;;	interrelation	
бюрократический	;;;	bureaucratic	
благоустройство	;;;	equipping with amenities	
астрономический	;;;	astronomic(al)	
сосредоточиться	;;;	to concentrate (on)	
воспользоваться	;;;	to use, make use of	
почувствоваться	;;;	to be felt	
энергетический	;;;	power, energy (adj)	
электроэнергия	;;;	electric power	
электростанция	;;;	power station	
чувствительный	;;;	sensitive	
цивилизованный	;;;	civilized	
целесообразный	;;;	expedient	
художественный	;;;	artistic	
характеристика	;;;	description; reference (for job etc.)	
фантастический	;;;	fantastic	
урегулирование	;;;	regulation; adjustment	
уполномоченный	;;;	plenipotentiary; person authorized	
удовлетворение	;;;	satisfaction	
требовательный	;;;	demanding	
сформулировать	;;;	to formulate	
стратегический	;;;	strategic	
стимулирование	;;;	stimulation	
справедливость	;;;	justice, fairness	
спохватываться	;;;	to remember suddenly (coll)	
способствовать	;;;	to promote, further (sth)	
социалдемократ	;;;	social democrat	
сотрудничество	;;;	collaboration	
сосредоточенно	;;;	intently, with concentration	
сопротивляться	;;;	to resist	
сопровождаться	;;;	to be accompanied by	
соответственно	;;;	correspondingly	
сознательность	;;;	awareness	
содержательный	;;;	rich in content, profound, interesting	
снисходительно	;;;	condescendingly; leniently, indulgently	
систематически	;;;	systematically	
самостоятельно	;;;	independently	
реалистический	;;;	realistic	
растительность	;;;	vegetation	
распространять	;;;	to spread	
распределяться	;;;	to be distributed	
расплачиваться	;;;	to settle up, pay	
разочарованный	;;;	disappointed, disillusioned	
развёртываться	;;;	to unroll, unfold; expand; swing round (make a U-turn)	
путешествовать	;;;	to travel	
путешественник	;;;	traveller	
противоречивый	;;;	contradictory	
проницательный	;;;	penetrating; shrewd	
промышленность	;;;	industry	
проектирование	;;;	planning	
продуктивность	;;;	productivity	
продовольствие	;;;	provisions	
присутствующий	;;;	present, (as noun) person present	
присутствовать	;;;	to be present	
приспособление	;;;	adaptation; device	
присоединяться	;;;	to join, join (a group)	
прислушиваться	;;;	to listen carefully (to)	
приподниматься	;;;	to raise os slightly	
принципиальный	;;;	of principle, fundamental	
принадлежность	;;;	(к +d) membership (of); (pl) equipment, accessories	
примечательный	;;;	noteworthy	
придерживаться	;;;	to keep to, adhere to	
приготовляться	;;;	to get ready	
приготавливать	;;;	to prepare	
приглядываться	;;;	to look closely at (coll)	
приветствовать	;;;	to greet	
приблизительно	;;;	approximately	
преувеличивать	;;;	to exaggerate	
препятствовать	;;;	to hinder	
преобразование	;;;	transformation; reform	
премьерминистр	;;;	prime minister	
предшествовать	;;;	to precede	
предшественник	;;;	predecessor	
представляться	;;;	to introduce os; present itself, occur	
предполагаться	;;;	to be proposed, intended	
предотвращение	;;;	prevention	
предоставление	;;;	giving, granting	
предварительно	;;;	beforehand, in advance	
подчёркиваться	;;;	to be emphasized	
подтверждаться	;;;	to be confirmed	
подозрительный	;;;	suspicious	
подготавливать	;;;	to prepare	
подвёртываться	;;;	(coll) to turn up, crop up; be rolled up; be sprained, twisted (foot)	
поворачиваться	;;;	to turn round	
переспрашивать	;;;	to ask again	
пересматривать	;;;	to reconsider	
передразнивать	;;;	to mimic	
переворачивать	;;;	to turn over	
первостепенный	;;;	paramount	
первоначальный	;;;	initial, original	
педагогический	;;;	pedagogical, education (adj)	
патриотический	;;;	patriotic	
парикмахерская	;;;	hairdresser’s, barber’s	
отвратительный	;;;	repulsive	
отворачиваться	;;;	to turn away (from)	
осуществляться	;;;	to be brought about, be fulfilled, be put into effect	
оскорбительный	;;;	insulting	
организовывать	;;;	to organize	
организованный	;;;	organized	
ограничиваться	;;;	to limit oneself (to); be limited (to)	
ограниченность	;;;	narrowness	
общественность	;;;	the public	
обстоятельство	;;;	circumstance	
образовываться	;;;	to be formed	
обнаруживаться	;;;	to be revealed	
нравственность	;;;	morality	
несправедливый	;;;	unjust	
непринуждённый	;;;	relaxed, unconstrained	
неопределённый	;;;	indefinite, vague	
неограниченный	;;;	unlimited	
необыкновенный	;;;	unusual	
незначительный	;;;	insignificant	
национальность	;;;	nationality, ethnic group	
наследственный	;;;	inherited	
насильственный	;;;	violent, forcible	
монументальный	;;;	monumental	
могущественный	;;;	powerful	
многочисленный	;;;	numerous	
механизировать	;;;	to mechanize	
машиностроение	;;;	mechanical engineering	
математический	;;;	mathematical	
легкомысленный	;;;	frivolous	
координировать	;;;	to coordinate	
контрреволюция	;;;	counter-revolution	
контролировать	;;;	to check	
констатировать	;;;	to ascertain; certify	
количественный	;;;	quantitative	
исполнительный	;;;	executive (adj); efficient	
исключительный	;;;	exceptional	
интересоваться	;;;	to be interested in	
индустриальный	;;;	industrial	
индивидуальный	;;;	individual	
иллюстрировать	;;;	to illustrate	
идеологический	;;;	ideological	
знаменательный	;;;	significant	
злоупотреблять	;;;	to misuse, abuse (sth)	
замешательство	;;;	confusion; consternation	
закономерность	;;;	regularity, law	
заключительный	;;;	final, concluding	
жизнерадостный	;;;	cheerful, happy	
животноводство	;;;	stock-raising	
естествознание	;;;	natural science	
дополнительный	;;;	additional	
документальный	;;;	documentary (adj)	
доказательство	;;;	proof	
доисторический	;;;	prehistoric	
договорённость	;;;	agreement	
договариваться	;;;	to reach agreement (with)	
демократизация	;;;	democratization	
действительный	;;;	real, actual; valid	
гостеприимство	;;;	hospitality	
господствующий	;;;	ruling, predominant	
господствовать	;;;	to dominate	
горизонтальный	;;;	horizontal	
географический	;;;	geographical	
вычислительный	;;;	calculating, computing	
выздоравливать	;;;	to recover, get better	
второстепенный	;;;	secondary, subsidiary	
восстановление	;;;	restoration	
воспроизводить	;;;	to reproduce	
воспитательный	;;;	educational	
воздерживаться	;;;	to abstain (from)	
воздействовать	;;;	to affect, influence, put pressure on	
взаимодействие	;;;	interaction	
взаимовыгодный	;;;	mutually advantageous	
величественный	;;;	majestic	
бомбардировщик	;;;	bomber (aeroplane)	
большевистский	;;;	Bolshevik (adj)	
благосостояние	;;;	well-being, prosperity	
безоговорочный	;;;	unconditional	
бездействовать	;;;	to do nothing; stand idle	
безграмотность	;;;	illiteracy	
автоматический	;;;	automatic	
посоветоваться	;;;	to consult (s.o.)	
запротестовать	;;;	to protest (against)	
заинтересовать	;;;	to interest	
позаимствовать	;;;	to borrow	
зааплодировать	;;;	to applaud (s.o. or sth)	
сманеврировать	;;;	to manoeuvre	
эффективность	;;;	effectiveness; efficiency	
электричество	;;;	electricity	
электрический	;;;	electric	
экономический	;;;	economic	
чувствоваться	;;;	to be felt	
хозяйственный	;;;	economic	
хладнокровный	;;;	cool, calm, composed	
установленный	;;;	established, prescribed	
устанавливать	;;;	to set up, establish	
успокаиваться	;;;	to calm down	
условливаться	;;;	to make an arrangement (with s.o. about sth/to do sth)	
универсальный	;;;	universal; versatile, multi-purpose	
удовлетворять	;;;	to satisfy; (+d) be in accordance with	
увлекательный	;;;	fascinating, absorbing	
увеличиваться	;;;	to increase	
торжествовать	;;;	to triumph (over); (+a) celebrate	
торжественный	;;;	ceremonial; celebratory	
теоретический	;;;	theoretical	
телевизионный	;;;	television (adj)	
существование	;;;	existence	
строительство	;;;	construction	
стремительный	;;;	rapid; dynamic	
странствовать	;;;	to wander, travel	
стихотворение	;;;	poem	
средневековый	;;;	medieval	
специфический	;;;	specific	
специальность	;;;	speciality; profession	
специализация	;;;	specialization	
сочувствовать	;;;	to sympathize (with)	
соревноваться	;;;	to compete, vie (with)	
сопутствовать	;;;	to accompany	
сопротивление	;;;	resistance	
сопровождение	;;;	accompaniment	
соприкасаться	;;;	to adjoin, be in contact with	
созидательный	;;;	creative	
согласовывать	;;;	to coordinate	
современность	;;;	the present age	
собственность	;;;	property (something owned)	
следовательно	;;;	consequently, therefore	
скольконибудь	;;;	any, any quantity of	
синтетический	;;;	synthetic	
символический	;;;	symbolic	
себестоимость	;;;	cost, cost price	
сговариваться	;;;	to make an arrangement (with s.o.)	
своевременный	;;;	timely	
свидетельство	;;;	evidence; certificate	
ремонтировать	;;;	to repair, redecorate	
рекомендовать	;;;	to recommend	
революционный	;;;	revolutionary	
растерянность	;;;	bewilderment, dismay	
расстреливать	;;;	to execute (by shooting)	
расспрашивать	;;;	to question	
рассматривать	;;;	to examine; make out	
распределение	;;;	distribution	
расправляться	;;;	to deal with; straighten out	
распоряжаться	;;;	to give orders; (+inst) deal with, manage, be in charge of	
расположенный	;;;	situated; (к +d) inclined, disposed to	
располагаться	;;;	to take up position; settle oneself; make os comfortable	
раскидываться	;;;	to stretch out	
разыгрываться	;;;	to romp; warm up, get into one’s stride; (storm etc.) break, rage	
разрабатывать	;;;	to work out, devise, develop, design, cultivate	
разочарование	;;;	disappointment	
разнообразный	;;;	various, varied	
разновидность	;;;	variety, type	
раздробленный	;;;	shattered, splintered, disunited	
разговориться	;;;	to become talkative	
разговаривать	;;;	to converse, talk	
разворачивать	;;;	to unfold; develop; expand	
развивающийся	;;;	developing	
развёртывание	;;;	unfolding; development	
разваливаться	;;;	to fall to pieces	
радиоприёмник	;;;	radio (set)	
прохаживаться	;;;	to take a walk	
протягиваться	;;;	to stretch out; extend	
противостоять	;;;	to resist	
противоречить	;;;	to contradict (s.o. or sth)	
просматривать	;;;	to look over; overlook, look through	
прославляться	;;;	to become famous	
прославленный	;;;	renowned	
проповедовать	;;;	to preach; advocate	
проникновение	;;;	penetration	
пронзительный	;;;	penetrating	
промежуточный	;;;	intermediate	
происхождение	;;;	origin	
производиться	;;;	to be produced	
производитель	;;;	producer	
прогуливаться	;;;	to take a walk	
прогрессивный	;;;	progressive	
проголодаться	;;;	to get hungry	
провозглашать	;;;	to proclaim	
проваливаться	;;;	to fall through; (coll) fail (exam); (coll) vanish	
прищуриваться	;;;	to screw up one’s eyes, half close one’s eyes	
приспособлять	;;;	to adapt (sth)	
присматривать	;;;	to look after, supervise	
присаживаться	;;;	to take a seat, sit down	
принципиально	;;;	on principle; fundamentally	
примечательно	;;;	(it is) noteworthy	
применительно	;;;	with reference to	
прикосновение	;;;	contact	
прикидываться	;;;	to pretend (to be sth) (coll)	
признательный	;;;	grateful	
приготовление	;;;	preparation	
приговаривать	;;;	to sentence (s.o. to)	
привязываться	;;;	to become attached to	
преследование	;;;	pursuit; persecution	
преподаватель	;;;	teacher, lecturer	
пренебрежение	;;;	scorn, neglect	
президентский	;;;	president’s, presidential	
предупреждать	;;;	to warn (s.o. about sth), tell in advance	
представление	;;;	presentation; performance; notion, conception	
представитель	;;;	representative	
предсказывать	;;;	to predict	
предпринимать	;;;	to undertake	
предположение	;;;	supposition	
предотвращать	;;;	to prevent, avert	
предоставлять	;;;	to give, grant (sth to s.o.)	
предназначать	;;;	to intend for, earmark (for)	
превосходство	;;;	superiority	
правительство	;;;	government	
потомственный	;;;	hereditary	
постановление	;;;	resolution, decree	
поразительный	;;;	astonishing	
положительный	;;;	positive	
подтверждение	;;;	confirmation	
подозрительно	;;;	suspiciously	
повествование	;;;	narration	
поверхностный	;;;	superficial	
почеловечески	;;;	like a human being	
перспективный	;;;	promising, having prospects; long-term	
периодический	;;;	periodic, recurrent	
перехватывать	;;;	to intercept	
переплетаться	;;;	to be interwoven	
переодеваться	;;;	to change one’s clothes; disguise os	
перелистывать	;;;	to leaf through	
перебрасывать	;;;	to throw over	
первоначально	;;;	originally	
парламентский	;;;	parliamentary	
отсутствовать	;;;	to be absent	
отрицательный	;;;	negative	
относительный	;;;	relative (adj)	
откровенность	;;;	frankness	
отечественный	;;;	of the fatherland; Russian	
ответственный	;;;	responsible	
осуществление	;;;	carrying out	
останавливать	;;;	to stop (sth)	
основательный	;;;	well-founded; solid; thorough	
осматриваться	;;;	to look round, see where one is, get one’s bearings	
ослепительный	;;;	dazzling	
освобождённый	;;;	liberated, free	
освобождаться	;;;	to free os; become free	
осведомляться	;;;	to enquire about	
оправдываться	;;;	to justify os; make excuses	
омерзительный	;;;	disgusting, revolting	
окончательный	;;;	final	
оккупационный	;;;	occupation (adj)	
ознакомляться	;;;	to acquaint oneself with	
односторонний	;;;	one-sided; one-way	
одновременный	;;;	simultaneous	
обязательство	;;;	pledge	
объективность	;;;	objectivity	
общеизвестный	;;;	well-known, generally known	
обходительный	;;;	courteous, well-mannered	
обстоятельный	;;;	detailed, thorough	
оборачиваться	;;;	to turn round; turn out	
новорождённый	;;;	new-born	
несовместимый	;;;	incompatible	
неравномерный	;;;	irregular	
непререкаемый	;;;	unquestionable	
непреодолимый	;;;	insurmountable	
неожиданность	;;;	surprise	
необыкновенно	;;;	unusually	
необходимость	;;;	necessity	
независимость	;;;	independence	
недостаточный	;;;	insufficient	
недоразумение	;;;	misunderstanding	
неграмотность	;;;	illiteracy	
невозможность	;;;	impossibility	
наталкиваться	;;;	to run into, come up	
насчитываться	;;;	to number, total	
настойчивость	;;;	persistence	
напряжённость	;;;	tension	
накапливаться	;;;	to accumulate	
монархический	;;;	monarchic	
многообразный	;;;	diverse	
мировоззрение	;;;	outlook, philosophy of life	
металлический	;;;	metallic	
международный	;;;	international	
маневрировать	;;;	to manoeuvre	
ликвидировать	;;;	to liquidate	
корреспондент	;;;	correspondent	
кооперативный	;;;	cooperative (adj)	
консерватория	;;;	conservatoire, music academy	
климатический	;;;	climatic	
категорически	;;;	categorically	
исчерпывающий	;;;	exhaustive	
исследователь	;;;	researcher	
использование	;;;	utilization	
искусственный	;;;	artificial	
исключительно	;;;	exclusively; exceptionally	
интеллигенция	;;;	intelligentsia; professional people	
изготовляться	;;;	to be manufactured; get ready	
землетрясение	;;;	earthquake	
здравствовать	;;;	to be healthy, prosper	
захлёбываться	;;;	to choke	
заподазривать	;;;	to suspect (s.o. of sth)	
запечатлевать	;;;	to imprint	
занимательный	;;;	entertaining, interesting	
замечательный	;;;	remarkable, splendid	
заканчиваться	;;;	to end; finish	
задерживаться	;;;	to be delayed	
дружественный	;;;	friendly	
драматический	;;;	dramatic	
драгоценность	;;;	jewel; something valuable	
достоверность	;;;	authenticity, reliability	
дополнительно	;;;	additionally	
добросовестно	;;;	conscientiously	
действительно	;;;	really, actually	
девятнадцатый	;;;	nineteenth	
геологический	;;;	geological	
гармонический	;;;	harmonious	
гарантировать	;;;	to guarantee	
высказываться	;;;	to speak out, state one’s opinion	
выразительный	;;;	expressive	
выжидательный	;;;	waiting, expectant	
всматриваться	;;;	to look closely at	
всероссийский	;;;	all-Russian	
всеобъемлющий	;;;	comprehensive, all-embracing	
воспитываться	;;;	to be brought up; be fostered	
восемнадцатый	;;;	eighteenth	
воодушевление	;;;	enthusiasm, fervour	
возникновение	;;;	beginning, origin	
военноморской	;;;	naval	
водохранилище	;;;	reservoir	
вмешательство	;;;	interference (in)	
вицепрезидент	;;;	vice-president	
взволнованный	;;;	anxious, agitated	
бомбардировка	;;;	bombardment	
блистательный	;;;	brilliant	
благословлять	;;;	to bless	
благословение	;;;	blessing	
благоприятный	;;;	favourable	
благополучный	;;;	successful	
благодарность	;;;	gratitude	
биологический	;;;	biological	
бессмысленный	;;;	senseless, meaningless	
беспредельный	;;;	boundless, unlimited	
беспорядочный	;;;	disorderly	
бесконечность	;;;	infinity	
атеистический	;;;	atheistic	
архитектурный	;;;	architectural	
анализировать	;;;	to analyse	
академический	;;;	academic	
администрация	;;;	administration	
автомобильный	;;;	car (adj)	
автоматизация	;;;	automation	
австралийский	;;;	Australian (adj)	
удовлетворить	;;;	to satisfy; (+d) be in accordance with	
сосредоточить	;;;	to concentrate (sth on sth)	
возненавидеть	;;;	to hate	
разгорячиться	;;;	to get excited	
проголосовать	;;;	to vote (for/against)	
почувствовать	;;;	to feel	
встревожиться	;;;	to worry	
потребоваться	;;;	to be necessary, be needed	
отреагировать	;;;	to react (to)	
израсходовать	;;;	to spend, use up	
запланировать	;;;	to plan	
замаскировать	;;;	to disguise, camouflage	
вскарабкаться	;;;	to clamber (coll)	
познакомиться	;;;	to become acquainted with; meet	
поздороваться	;;;	to greet	
подействовать	;;;	to act, function, affect	
взволноваться	;;;	to worry	
поблагодарить	;;;	to thank (s.o. for sth)	
обеспокоиться	;;;	to worry, be worried (about)	
эстетический	;;;	aesthetic	
элементарный	;;;	elementary	
эксплуатация	;;;	exploitation	
экономически	;;;	economically	
штабквартира	;;;	headquarters	
шестнадцатый	;;;	sixteenth	
чрезвычайный	;;;	extreme; exceptional	
читательский	;;;	reader’s	
четырнадцать	;;;	fourteen	
черноморский	;;;	Black Sea (adj)	
чередоваться	;;;	to alternate (with)	
человечность	;;;	humaneness, humanity	
человечество	;;;	mankind	
человеческий	;;;	human (adj)	
христианство	;;;	Christianity	
христианский	;;;	Christian	
формирование	;;;	formation	
утомительный	;;;	tiring; tedious	
утверждаться	;;;	to become established	
устремляться	;;;	to rush, dash; be fixed on, aspire to	
устраиваться	;;;	to make arrangements; settle down; get a job; work out well	
устойчивость	;;;	stability	
установление	;;;	establishment	
употребление	;;;	use	
упорядочение	;;;	putting in order, regulation	
уничтожаться	;;;	to be destroyed	
укладываться	;;;	to pack one’s things; (в +a) fit (into sth)	
укладываться	;;;	to lie down, go to bed; (p only) calm down; (p only) settle	
удовольствие	;;;	pleasure	
удивительный	;;;	surprising, astonishing	
удерживаться	;;;	to stand firm; restrain os	
убеждённость	;;;	conviction	
убедительный	;;;	convincing; earnest	
тысячелетний	;;;	thousand-year (adj)	
трогательный	;;;	touching, affecting	
транспортный	;;;	transport (adj)	
традиционный	;;;	traditional	
торжественно	;;;	ceremonially; festively	
товарищеский	;;;	comradely; friendly	
теоретически	;;;	theoretically	
танцевальный	;;;	dance (adj)	
таинственный	;;;	mysterious	
существующий	;;;	existing	
существовать	;;;	to exist	
существенный	;;;	essential; important	
субъективный	;;;	subjective	
студенческий	;;;	student (adj)	
строительный	;;;	construction (adj)	
стремительно	;;;	swiftly; impetuously	
столкновение	;;;	collision, clash	
сталкиваться	;;;	to collide with	
стабильность	;;;	stability	
сравнительно	;;;	comparatively	
спрашиваться	;;;	to be asked	
справедливый	;;;	fair, just	
сплочённость	;;;	unity, solidarity	
спасительный	;;;	saving, life saving	
соревнование	;;;	competition	
сопровождать	;;;	to accompany	
сопоставлять	;;;	to compare	
соответствие	;;;	accordance	
сомнительный	;;;	doubtful, dubious	
солидарность	;;;	solidarity	
сокровищница	;;;	treasure-house	
сознательный	;;;	(politically, socially) conscious; deliberate	
совокупность	;;;	totality	
советоваться	;;;	to consult (s.o.)	
совершенство	;;;	perfection	
скороговорка	;;;	tongue-twister; rapid speech	
складываться	;;;	to take shape; club together	
сентябрьский	;;;	September (adj)	
сдерживаться	;;;	to control os	
свойственный	;;;	characteristic (of)	
своеобразный	;;;	distinctive, individual	
своевременно	;;;	in good time	
самоубийство	;;;	suicide	
самосознание	;;;	self-awareness	
самодержавие	;;;	autocracy	
руководитель	;;;	leader, manager; instructor, supervisor	
родительский	;;;	parents’	
рекомендация	;;;	recommendation	
редакционный	;;;	editorial, editing	
революционер	;;;	revolutionary	
рациональный	;;;	rational	
растрёпанный	;;;	dishevelled; tattered	
растительный	;;;	vegetable (adj)	
растворяться	;;;	to dissolve; to open	
рассчитывать	;;;	to calculate; expect; rely on	
расстройство	;;;	disorder	
расстроенный	;;;	upset	
расстраивать	;;;	to upset	
расстилаться	;;;	to spread out	
расстёгивать	;;;	to unfasten	
расставаться	;;;	to part (with/from)	
рассмотрение	;;;	examination, scrutiny	
рассказывать	;;;	to tell, talk (about)	
рассеиваться	;;;	to disperse; give os a break	
распрощаться	;;;	to say goodbye (to s.o.) (coll)	
распределять	;;;	to distribute; allocate	
распоряжение	;;;	instruction, command	
расположение	;;;	arrangement; location; liking; inclination	
раскрываться	;;;	to open; be revealed, open up	
раскладывать	;;;	to put away, lay, set up, distribute, lay out; spread	
раскаиваться	;;;	to repent (of sth)	
разрозненный	;;;	incomplete (of set); scattered, uncoordinated	
разрастаться	;;;	to grow, expand, spread	
разоблачение	;;;	exposing, unmasking	
разноцветный	;;;	many-coloured	
разнообразие	;;;	variety	
раздражаться	;;;	to become irritated	
раздавливать	;;;	to crush	
разглядывать	;;;	to examine closely	
развёртывать	;;;	to unfold; expand	
разбрасывать	;;;	to scatter	
радиостанция	;;;	radio station	
прошлогодний	;;;	last year’s	
противоречие	;;;	contradiction	
протестовать	;;;	to protest (against)	
простужаться	;;;	to catch a cold	
пространство	;;;	space, expanse	
простительно	;;;	pardonably	
простираться	;;;	to extend, stretch	
прослезиться	;;;	to shed tears	
прослеживать	;;;	to track, trace	
проскакивать	;;;	to rush past; slip through	
просвечивать	;;;	to be translucent; shine through	
пронзительно	;;;	piercingly; stridently	
промышленный	;;;	industrial	
промышленник	;;;	industrialist	
прокладывать	;;;	to lay, construct (a road)	
происшествие	;;;	incident, occurrence	
производство	;;;	production	
произведение	;;;	a work	
продолжаться	;;;	to continue	
продвигаться	;;;	to advance, move forward	
проглатывать	;;;	to swallow	
прихватывать	;;;	to grip; fasten; take (coll)	
притворяться	;;;	to pretend (to be sth)	
прислоняться	;;;	to lean (against)	
приподнимать	;;;	to raise slightly	
приоткрывать	;;;	to open slightly	
приобретение	;;;	acquisition	
принадлежать	;;;	to belong to; (к +d) be a member of	
прикрываться	;;;	to use as a cover, hide behind	
признаваться	;;;	to confess	
придерживать	;;;	to hold back, check	
придвигаться	;;;	to come near, move up	
приближаться	;;;	to approach; draw near	
претендовать	;;;	to claim (sth)	
преступность	;;;	crime, criminality	
преступление	;;;	crime	
преследовать	;;;	to pursue; persecute	
преодолевать	;;;	to overcome	
пренебрегать	;;;	to scorn (s.o. or sth)	
прекращаться	;;;	to cease	
преимущество	;;;	advantage	
предчувствие	;;;	presentiment	
представлять	;;;	to present, introduce	
предсказание	;;;	prediction	
председатель	;;;	chairman	
предрассудок	;;;	prejudice	
предпочитать	;;;	to prefer (sth to sth)	
предпочитать	;;;	to prefer sth to sth	
предполагать	;;;	to suppose	
предлагаться	;;;	to be offered	
предвыборный	;;;	election (adj)	
превращаться	;;;	to turn into (sth)	
превосходный	;;;	superb	
превосходить	;;;	to surpass, excel	
практический	;;;	practical	
празднование	;;;	celebration	
православный	;;;	orthodox (religious term); (as noun) member of Orthodox Church	
правильность	;;;	correctness	
поучительный	;;;	instructive	
постановлять	;;;	to decide, resolve	
посмеиваться	;;;	to chuckle	
посматривать	;;;	to look (at) from time to time	
послевоенный	;;;	postwar	
посвистывать	;;;	to whistle	
поразительно	;;;	strikingly, astonishingly	
популярность	;;;	popularity	
поправляться	;;;	to get better; correct os; put on weight	
понадобиться	;;;	to be necessary	
пользоваться	;;;	to use, make use of	
положительно	;;;	positively	
политический	;;;	political	
полированный	;;;	polished	
покачиваться	;;;	to rock, sway	
показываться	;;;	to show os, be shown	
поздравление	;;;	congratulation; greeting	
подчёркивать	;;;	to underline; emphasize	
подхватывать	;;;	to pick up, take up	
подтверждать	;;;	to confirm	
подталкивать	;;;	to push slightly; (coll) urge on	
подсчитывать	;;;	to count up, calculate	
подслушивать	;;;	to eavesdrop (on s.o.); (p) overhear	
подскакивать	;;;	to run up; jump up	
подсказывать	;;;	to prompt, suggest	
подкладывать	;;;	to put under; add	
поддерживать	;;;	to support	
подвергаться	;;;	to undergo, be subjected to	
подбрасывать	;;;	to throw, toss (up); jolt; add	
повседневный	;;;	everyday	
поворачивать	;;;	to turn	
повиноваться	;;;	to obey	
поблёскивать	;;;	to gleam	
победоносный	;;;	victorious	
понастоящему	;;;	properly, in the right way	
плодотворный	;;;	fruitful	
пленительный	;;;	captivating	
пластический	;;;	plastic (adj); artistically expressive	
планирование	;;;	planning	
писательский	;;;	writer’s, literary	
персональный	;;;	personal	
перечитывать	;;;	to reread	
переставлять	;;;	to shift; rearrange	
переселяться	;;;	to move, migrate	
перепутывать	;;;	to tangle, confuse	
переписывать	;;;	to rewrite; copy out	
переноситься	;;;	to be carried (over)	
перемещаться	;;;	to move	
переменяться	;;;	to change	
переливаться	;;;	to flow (swh); overflow; (i only) glisten, play (of colours), modulate	
перекидывать	;;;	to throw over	
переигрывать	;;;	to play again; overact	
передумывать	;;;	to change one’s mind	
переделывать	;;;	to remake, alter	
передвижение	;;;	movement	
передаваться	;;;	to be transmitted	
перевязывать	;;;	to bandage; tie up	
пассажирский	;;;	passenger (adj)	
отрицательно	;;;	negatively; unfavourably	
отрабатывать	;;;	to work off (debt etc.), work (shift etc.), finish working	
отправляться	;;;	to set off	
относительно	;;;	relatively; (+g) concerning	
отмахиваться	;;;	to brush off	
откидываться	;;;	to lean back	
отказываться	;;;	to refuse (to do sth); (от +g) renounce (sth)	
отделываться	;;;	to get rid of; (+inst) get off, escape (with)	
осуществлять	;;;	to carry out, accomplish, execute	
осторожность	;;;	caution	
основательно	;;;	solidly, soundly, thoroughly	
осмеливаться	;;;	to dare	
освобождение	;;;	liberation	
оросительный	;;;	irrigation (adj)	
оригинальный	;;;	original	
органический	;;;	organic	
организовать	;;;	to organize	
опрокидывать	;;;	to knock over, overturn	
опровержение	;;;	refutation	
определяться	;;;	to be determined, be defined	
определённый	;;;	definite; certain	
окончательно	;;;	finally, definitively	
оккупировать	;;;	to occupy	
оканчиваться	;;;	to end	
ознакомление	;;;	familiarization, getting to know	
ожесточённый	;;;	embittered, bitter	
однообразный	;;;	monotonous	
одновременно	;;;	simultaneously	
одиннадцатый	;;;	eleventh	
ограничивать	;;;	to limit	
ограниченный	;;;	limited	
оглядываться	;;;	to look back	
оглядываться	;;;	to look round	
обязательный	;;;	compulsory	
обыкновенный	;;;	usual; ordinary	
объединяться	;;;	to unite	
объединённый	;;;	united	
общественный	;;;	social, public	
общенародный	;;;	national, of the whole people	
обслуживание	;;;	service	
обсерватория	;;;	observatory	
обрушиваться	;;;	to collapse, cave in; (на +a) fall upon, attack (s.o. or sth)	
образовывать	;;;	to form	
образованный	;;;	educated	
обрабатывать	;;;	to process, work on	
обосновывать	;;;	to substantiate, justify	
оборудование	;;;	equipment	
обозреватель	;;;	observer	
обнаруживать	;;;	to reveal; discover	
обнадёживать	;;;	to give hope (to), reassure	
обмениваться	;;;	to exchange	
обеспечивать	;;;	to supply, provide (s.o. with sth); (+a) assure, guarantee	
нравственный	;;;	moral	
неустойчивый	;;;	unstable	
неторопливый	;;;	unhurried	
нетерпеливый	;;;	impatient	
нерешительно	;;;	indecisively, hesitantly	
непроходимый	;;;	impassable; (coll) utter	
неприятность	;;;	unpleasantness	
непримиримый	;;;	irreconcilable; uncompromising	
неприемлемый	;;;	unacceptable	
непреклонный	;;;	unyielding, adamant	
неправильный	;;;	incorrect	
непостижимый	;;;	incomprehensible	
непоправимый	;;;	irreparable	
неповторимый	;;;	unique, exceptional	
неотъемлемый	;;;	inalienable, integral	
неосторожный	;;;	careless	
неоднократно	;;;	repeatedly	
ненормальный	;;;	abnormal; mad	
неизбежность	;;;	inevitability	
незабываемый	;;;	unforgettable	
недостаточно	;;;	insufficient(ly); (+g) not enough	
недовольство	;;;	dissatisfaction (with)	
негритянский	;;;	negro (adj)	
национальный	;;;	national; ethnic	
наслаждаться	;;;	to delight (in), get physical pleasure (from)	
направляться	;;;	to make for, head for	
направленный	;;;	directed; purposeful	
намереваться	;;;	to intend	
наименование	;;;	designation, name	
наговаривать	;;;	(coll) to slander s.o.; (+a or +g) say a lot of	
наваливаться	;;;	to fall on; lean on	
мужественный	;;;	manly, courageous	
мобилизовать	;;;	to mobilize	
многообразие	;;;	diversity	
многовековой	;;;	centuries-old	
министерство	;;;	ministry (government)	
механический	;;;	mechanical	
медлительный	;;;	slow	
материальный	;;;	material (adj)	
мальчишеский	;;;	boyish; childish	
максимальный	;;;	maximal	
литературный	;;;	literary	
крестьянство	;;;	peasantry	
крестьянский	;;;	peasant (adj)	
красноармёец	;;;	Red Army soldier	
концентрация	;;;	concentration	
конфисковать	;;;	to confiscate	
коммунальный	;;;	communal	
коммерческий	;;;	commercial	
командование	;;;	command	
командирский	;;;	commander’s	
командировка	;;;	business trip, study trip, assignment	
колоссальный	;;;	colossal	
колониальный	;;;	colonial	
коллекционер	;;;	collector	
коллективный	;;;	collective	
классический	;;;	classical	
квалификация	;;;	qualification	
качественный	;;;	qualitative; good quality	
католический	;;;	Catholic (adj)	
исторический	;;;	historical; historic	
исследование	;;;	investigation; research	
использовать	;;;	to make use of	
искусственно	;;;	artificially	
интересовать	;;;	to interest	
изумительный	;;;	amazing	
изобретатель	;;;	inventor	
измельчённый	;;;	crumbled, chopped up	
издательство	;;;	publishing house	
издательский	;;;	publishing (adj)	
изготовление	;;;	manufacture	
значительный	;;;	significant	
знаменитость	;;;	celebrity	
затягиваться	;;;	to be covered (by); drag on; inhale (when smoking); heal (of wound); tighten one’s belt	
затериваться	;;;	to go missing, be mislaid; vanish (coll)	
застреливать	;;;	to shoot dead	
засаживаться	;;;	to sit down, lodge os (coll)	
зарабатывать	;;;	to earn	
запутываться	;;;	to get confused	
запоминаться	;;;	to stick in one’s memory	
замечательно	;;;	remarkable; remarkably	
закономерный	;;;	regular, predictable	
заимствовать	;;;	to borrow	
задумываться	;;;	to think deeply, become thoughtful (about)	
загораживать	;;;	to fence in; obstruct	
заговаривать	;;;	to start speaking	
заворачивать	;;;	to wrap; (за +а) turn (a corner)	
журналистика	;;;	journalism	
естественный	;;;	natural	
единственный	;;;	only, sole	
долгосрочный	;;;	long-term	
документация	;;;	documentation, documents	
докатываться	;;;	to roll to, come to	
догадываться	;;;	to guess; (+inf) have the sense to	
доверительно	;;;	confidentially	
добровольный	;;;	voluntary	
длительность	;;;	duration	
деятельность	;;;	activity	
демонстрация	;;;	demonstration	
двусторонний	;;;	double-sided, two-way; bilateral	
гуманитарный	;;;	humanitarian; humanities (adj)	
гидростанция	;;;	hydroelectric station	
вытягиваться	;;;	to stretch out	
высовываться	;;;	to push os forward; lean out; poke one’s head out	
высказывание	;;;	utterance, statement	
высаживаться	;;;	to disembark, land	
вырабатывать	;;;	to produce; work out	
выпрямляться	;;;	to become straight, straighten up	
выносливость	;;;	ability to endure, stamina	
выжидательно	;;;	expectantly	
выговаривать	;;;	to pronounce, articulate; (coll, i only) tell off, reprimand	
вспоминаться	;;;	to be recalled, come to mind	
вспоминаться	;;;	to be remembered	
всесторонний	;;;	all-round; thorough	
всевозможный	;;;	all kinds of	
впоследствии	;;;	subsequently	
восторженный	;;;	enthusiastic, rapturous	
восторгаться	;;;	to be delighted (with)	
воспринимать	;;;	to perceive	
воспоминание	;;;	memory, recollection	
восемнадцать	;;;	eighteen	
воинственный	;;;	warlike	
возрастающий	;;;	growing, increasing	
возобновлять	;;;	to renew	
возвращаться	;;;	to return	
возвращаться	;;;	to come back	
возбуждённый	;;;	aroused, excited	
возбуждающий	;;;	arousing, stimulating	
возбуждаться	;;;	to become aroused	
внимательный	;;;	attentive, considerate (to)	
взволнованно	;;;	anxiously	
взаимопомощь	;;;	mutual assistance	
вещественный	;;;	substantial, material	
вертикальный	;;;	vertical	
великолепный	;;;	magnificent	
вдохновенный	;;;	inspired	
вглядываться	;;;	to gaze at, study, look closely at, peer at	
божественный	;;;	divine	
благородство	;;;	nobility	
благополучно	;;;	safely, well	
благополучие	;;;	well-being	
бесчисленный	;;;	innumerable	
бесцеремонно	;;;	unceremoniously	
бессовестный	;;;	shameless, unscrupulous	
бессмысленно	;;;	pointlessly, meaninglessly	
беспокойство	;;;	agitation, anxiety	
беспокоиться	;;;	to worry, be worried (about)	
бесповоротно	;;;	irreversibly	
беспартийный	;;;	without party affiliation, independent	
бескорыстный	;;;	unconcerned with personal gain, disinterested, unselfish	
бережливость	;;;	thrift	
безопасность	;;;	security	
безнаказанно	;;;	with impunity	
безжалостный	;;;	pitiless	
безграничный	;;;	limitless	
безграмотный	;;;	illiterate	
бдительность	;;;	vigilance	
ассигнование	;;;	allocation	
аристократия	;;;	aristocracy	
арестовывать	;;;	to arrest	
арестованный	;;;	arrested, person arrested	
аплодировать	;;;	to applaud (s.o. or sth)	
антисемитизм	;;;	antisemitism	
американский	;;;	American	
авторитетный	;;;	authoritative, trustworthy	
шевельнуться	;;;	to stir	
ухмыльнуться	;;;	to smirk, grin (coll)	
установиться	;;;	to become established	
уничтожиться	;;;	to be destroyed	
спохватиться	;;;	to remember suddenly (coll)	
рассердиться	;;;	to be angry (with)	
продиктовать	;;;	to dictate	
разветвиться	;;;	to branch	
пробормотать	;;;	to mumble	
приблизиться	;;;	to draw near	
пошевелиться	;;;	to stir	
поцеловаться	;;;	to kiss (each other)	
похвастаться	;;;	to boast (of)	
поторопиться	;;;	to hurry, be in a hurry	
постесняться	;;;	to be shy	
посоветовать	;;;	to advise (s.o.)	
порадоваться	;;;	to be glad (at)	
обрадоваться	;;;	to be glad (at), be pleased (about)	
померещиться	;;;	to seem (coll), imagine	
полюбоваться	;;;	to admire	
поколебаться	;;;	to sway; hesitate	
позавидовать	;;;	to envy	
позаботиться	;;;	to worry about, concern os with, look after; take care of	
пожертвовать	;;;	to donate; (+inst) sacrifice	
пожаловаться	;;;	to complain (about)	
повеселиться	;;;	to make merry	
побеседовать	;;;	to talk, converse (with); have a talk (with)	
сформировать	;;;	to form	
опубликовать	;;;	to publish	
юридический	;;;	legal, law (adj)	
эффективный	;;;	effective	
электронный	;;;	electronic	
электроника	;;;	electronics	
эксперимент	;;;	experiment	
шотландский	;;;	Scottish	
шестнадцать	;;;	sixteen	
чувствовать	;;;	to feel	
чрезвычайно	;;;	extremely	
численность	;;;	total number, quantity	
чередование	;;;	alternation	
цивилизация	;;;	civilization	
центральный	;;;	central	
хрустальный	;;;	crystal (adj)	
хорошенький	;;;	pretty	
холодильник	;;;	refrigerator	
хозяйничать	;;;	to be in charge; throw one’s weight about	
характерный	;;;	characteristic (adj)	
французский	;;;	French (adj)	
формировать	;;;	to form	
философский	;;;	philosophical	
физкультура	;;;	physical training	
фактический	;;;	actual	
учительница	;;;	teacher (f)	
участвовать	;;;	to take part in	
утопический	;;;	utopian	
утверждение	;;;	assertion; confirmation	
уставляться	;;;	to fix one’s gaze (on), stare (at)	
успокаивать	;;;	to calm, soothe, quieten	
усматривать	;;;	to see (sth in sth), interpret as	
усиливаться	;;;	to grow stronger, increase	
усаживаться	;;;	to sit down, settle down, take a seat	
урожайность	;;;	crop productivity, yield	
управляющий	;;;	manager	
управляться	;;;	to cope with (coll)	
управляться	;;;	to be controlled; (c +inst) deal with	
управляемый	;;;	controlled	
употреблять	;;;	to use	
упоминаться	;;;	to be mentioned	
уничтожение	;;;	annihilation, destruction	
университет	;;;	university	
уменьшаться	;;;	to diminish, decrease	
укрепляться	;;;	to become stronger; become fixed; consolidate one’s position	
укоризненно	;;;	reproachfully	
укореняться	;;;	to take root	
указываться	;;;	to be indicated	
удостаивать	;;;	to award s.o. sth; (+a +inst) favour s.o. with sth	
удивительно	;;;	surprisingly	
уговаривать	;;;	to persuade, urge	
углубляться	;;;	to become deeper; (в +a) go deep into, become absorbed in	
уверенность	;;;	confidence	
увеличивать	;;;	to increase (sth)	
убедительно	;;;	convincingly, earnestly	
тысячелетие	;;;	millennium	
тропический	;;;	tropical	
треугольник	;;;	triangle	
тревожиться	;;;	to worry	
требоваться	;;;	to be necessary, be needed	
трагический	;;;	tragic	
томительный	;;;	tiresome	
технический	;;;	technical; engineering	
температура	;;;	temperature	
телеграфный	;;;	telegraph (adj)	
телевидение	;;;	television (medium)	
текстильный	;;;	textile (adj)	
театральный	;;;	theatrical	
талантливый	;;;	talented	
тактический	;;;	tactical	
таинственно	;;;	mysteriously	
существенно	;;;	vitally, essentially	
сумасшедший	;;;	mad	
суверенитет	;;;	sovereignty	
старомодный	;;;	old-fashioned	
старательно	;;;	diligently, painstakingly	
становиться	;;;	to become; to stand; p: begin	
срабатывать	;;;	to work (function) properly	
справляться	;;;	to cope (with); (o +pr) ask about	
справедливо	;;;	justly, fairly; correctly	
спотыкаться	;;;	to trip, stumble	
способность	;;;	ability	
спокойствие	;;;	calmness	
специальный	;;;	special	
сохраняться	;;;	to be preserved	
сострадание	;;;	compassion	
составление	;;;	formation, making, compiling	
соскучиться	;;;	to get bored; (пo +d) miss	
соскакивать	;;;	to jump off	
соотношение	;;;	correlation	
соображение	;;;	consideration, reason	
сомневаться	;;;	to doubt	
сокращаться	;;;	to decrease, be reduced, get shorter	
сознательно	;;;	consciously	
сознаваться	;;;	to confess	
создаваться	;;;	to be created; arise	
соединяться	;;;	to unite	
соединённый	;;;	united	
содружество	;;;	commonwealth	
содержаться	;;;	to be maintained; be contained	
соглашаться	;;;	to agree (c +inst) with, (на +a) to	
современный	;;;	modern, contemporary	
современник	;;;	contemporary	
совершенный	;;;	perfect	
совершаться	;;;	to be accomplished	
собственный	;;;	(one’s) own	
собственник	;;;	owner	
соблюдаться	;;;	to be observed, be adhered to	
смешиваться	;;;	to mix, mingle; get mixed up	
смертельный	;;;	fatal	
случайность	;;;	chance, chance occurrence	
сложившийся	;;;	developed	
следователь	;;;	investigator	
скатываться	;;;	to roll down	
скандальный	;;;	scandalous; (coll) quarrelsome, rowdy	
сказываться	;;;	to have an effect (на +pr) on; proclaim oneself	
серьёзность	;;;	seriousness	
серебристый	;;;	silvery	
сегодняшний	;;;	today’s	
связываться	;;;	to get in touch with; communicate with; (coll) get involved with	
сворачивать	;;;	to roll (up); turn	
свойственно	;;;	(it is) characteristic (of)	
своеобразие	;;;	peculiarity, individuality	
самокритика	;;;	self-criticism	
рукопожатие	;;;	handshake	
руководящий	;;;	leading, guiding	
руководство	;;;	leadership; guide, manual	
родственный	;;;	family (adj), kindred	
родственник	;;;	relative	
решительный	;;;	decisive	
реставрация	;;;	restoration	
репродукция	;;;	reproduction	
ремесленник	;;;	craftsman; hack	
религиозный	;;;	religious	
реагировать	;;;	to react (to)	
расширяться	;;;	to broaden, expand	
расценивать	;;;	to assess	
расходовать	;;;	to spend, use up	
расходиться	;;;	to disperse, split up	
расхаживать	;;;	to pace up and down	
растерянный	;;;	perplexed, bewildered	
рассыпаться	;;;	to scatter; crumble	
рассуждение	;;;	reasoning, argument	
расставлять	;;;	to place; distribute, set out; move apart	
располагать	;;;	to arrange, set out; ; win over; (+inst) to have available	
распахивать	;;;	to throw open	
распадаться	;;;	to fall apart, break up	
раскусывать	;;;	to bite through; (p only) (coll) suss out; get to the heart of sth	
раскидывать	;;;	to stretch out, extend	
раскалённый	;;;	scorching, burning hot	
разыскивать	;;;	to seek out, search for	
разыгрывать	;;;	to perform; raffle, draw lots (for sth); play a trick (on s.o.), fool	
разъяснение	;;;	explanation	
разузнавать	;;;	to find out	
разрываться	;;;	to break; explode	
разрушаться	;;;	to fall apart, be destroyed	
разрешаться	;;;	to be permitted; be resolved	
разоружение	;;;	disarmament	
разогревать	;;;	to heat up	
разоблачать	;;;	to expose, unmask	
разнородный	;;;	heterogeneous	
разногласие	;;;	disagreement	
размышление	;;;	reflection, thought	
размещаться	;;;	to be seated, placed, accommodated, take one’s place	
размахивать	;;;	to swing (sth)	
различаться	;;;	to differ	
разливаться	;;;	to spill; overflow	
разлетаться	;;;	to fly apart; scatter, shatter	
разлагаться	;;;	to decompose, disintegrate	
разительный	;;;	striking	
раздумывать	;;;	to change one’s mind; (i only) (o +pr) ponder	
раздражённо	;;;	with irritation, crossly	
раздражение	;;;	irritation	
раздеваться	;;;	to undress, get undressed	
раздаваться	;;;	to resound	
разгораться	;;;	to flare up, blaze up	
разгадывать	;;;	to guess, work out	
развязывать	;;;	to untie	
разводиться	;;;	to get divorced; breed	
развлечение	;;;	entertainment	
развиваться	;;;	to develop	
развешивать	;;;	to hang up (a number of things); weigh out	
разбойничий	;;;	robber’s, brigand’s	
разбираться	;;;	to sort sth out; investigate; understand	
разбиваться	;;;	to break (into pieces), get broken	
разбегаться	;;;	to scatter; take a run-up	
радикальный	;;;	radical	
равноправие	;;;	equality	
равномерный	;;;	even, uniform	
равнодушный	;;;	indifferent (to)	
пятнадцатый	;;;	fifteenth	
путешествие	;;;	journey, voyage	
публиковать	;;;	to publish	
проявляться	;;;	to show itself, be revealed	
процветание	;;;	flourishing; prosperity	
прохождение	;;;	passing, passage	
профсоюзный	;;;	trade union (adj)	
протягивать	;;;	to stretch out	
просыпаться	;;;	to wake up	
простаивать	;;;	to stand idle	
прославлять	;;;	to make famous	
просиживать	;;;	to sit (for a specified time)	
просвещение	;;;	education; enlightenment	
прорываться	;;;	to break through; tear	
прорезывать	;;;	to cut through	
пропитывать	;;;	to feed; saturate	
проноситься	;;;	to rush through/past	
пронизывать	;;;	to pierce, penetrate, permeate	
променивать	;;;	to exchange (sth for sth)	
происходить	;;;	to happen; to originate	
произносить	;;;	to pronounce	
производить	;;;	to produce	
проигрывать	;;;	to lose (game etc)	
продумывать	;;;	to think through, over	
продолжение	;;;	continuation	
проделывать	;;;	to make, do, accomplish	
продвижение	;;;	advancement, progress	
продаваться	;;;	to be sold; sell os	
проговорить	;;;	to say	
проводиться	;;;	to be conducted, take place	
пробираться	;;;	to make one’s way through, force one’s way	
пробиваться	;;;	to force one’s way through, fight one’s way through	
причудливый	;;;	odd, whimsical	
приходиться	;;;	to have to	
присутствие	;;;	presence	
пристрастие	;;;	partiality; weakness (for)	
пристальный	;;;	fixed, constant	
приставлять	;;;	to place sth against sth	
присваивать	;;;	to take over, appropriate; award, confer (sth on s.o.)	
припоминать	;;;	to remember, recall	
приподнятый	;;;	elated	
приписывать	;;;	to ascribe (sth to sth/s.o.)	
приобретать	;;;	to acquire (formal)	
принуждение	;;;	compulsion	
приниматься	;;;	to get down, start work on	
примитивный	;;;	primitive	
примиряться	;;;	to be reconciled with	
применяться	;;;	to be used; (к +d) adapt os (to)	
прикреплять	;;;	to fasten (sth to sth)	
приключение	;;;	adventure	
приказывать	;;;	to order, command s.o.	
приземистый	;;;	stocky, squat	
прижиматься	;;;	to squeeze up against; press os (to), snuggle up (to)	
придумывать	;;;	to think up, invent	
придираться	;;;	to find fault with	
пригородный	;;;	suburban	
пригодиться	;;;	to come in useful	
приглашение	;;;	invitation	
привязывать	;;;	to attach (sth to sth)	
привлечение	;;;	attraction	
приветствие	;;;	greeting	
приветливый	;;;	affable, friendly	
приближение	;;;	approach	
престарелый	;;;	aged, of advanced years	
пресловутый	;;;	notorious	
препятствие	;;;	obstacle	
преподавать	;;;	to teach	
преодоление	;;;	overcoming	
преобладать	;;;	to predominate	
прекращение	;;;	stopping, ending	
предъявлять	;;;	to show, present (sth to s.o.)	
предстоящий	;;;	forthcoming, imminent	
представать	;;;	to appear (before)	
предприятие	;;;	enterprise, factory	
предпосылка	;;;	prerequisite, precondition	
предписание	;;;	order, instruction	
предложение	;;;	offer, suggestion; sentence (grammar)	
предисловие	;;;	foreword	
предвидение	;;;	foresight	
преданность	;;;	devotion	
превращение	;;;	conversion	
превосходно	;;;	splendidly	
практически	;;;	practically	
праздновать	;;;	to celebrate	
праздничный	;;;	festive	
поэтический	;;;	poetic	
почтительно	;;;	respectfully	
потрясённый	;;;	staggered, stunned	
потрясающий	;;;	staggering, astonishing	
потрудиться	;;;	to take the trouble (to); do some work	
потребность	;;;	need	
потребление	;;;	consumption	
потребитель	;;;	consumer	
потемневший	;;;	darkened	
поступление	;;;	joining (an organization); arrival (of goods)	
постукивать	;;;	to knock, tap, patter	
посторонний	;;;	outside, not directly involved; outsider	
постепенный	;;;	gradual	
посредством	;;;	by means of	
послезавтра	;;;	the day after tomorrow	
последующий	;;;	subsequent, following	
последствие	;;;	consequence	
поравняться	;;;	to draw level with, come up to	
порабощение	;;;	enslavement	
понедельник	;;;	Monday	
помалкивать	;;;	to keep quiet (coll)	
пользование	;;;	use (of sth)	
полноценный	;;;	genuine, complete, of good quality	
полицейский	;;;	police (adj); (adj used as noun) policeman	
политически	;;;	politically	
поликлиника	;;;	clinic, health centre	
покрываться	;;;	to be covered (with), cover os (with)	
поздравлять	;;;	to congratulate (s.o. on sth)	
подчиняться	;;;	to submit, be subject to	
подчинённый	;;;	subordinate	
подтягивать	;;;	to tighten; pull up	
подставлять	;;;	to put under	
подружиться	;;;	to make friends with	
подробность	;;;	detail	
подписывать	;;;	to sign	
подозревать	;;;	to suspect	
подниматься	;;;	to rise, climb	
подмигивать	;;;	to wink (at)	
поддержание	;;;	support, maintenance	
поддаваться	;;;	to yield, give way (to)	
подвигаться	;;;	to move; advance	
подвешивать	;;;	to suspend	
подавляющий	;;;	overwhelming	
подавленный	;;;	suppressed; depressed	
погружаться	;;;	to immerse os (in sth)	
пограничный	;;;	border (adj)	
поглядывать	;;;	to cast looks at	
повторяться	;;;	to be repeated	
повреждение	;;;	damage	
поверхность	;;;	surface	
побеждённый	;;;	defeated	
побаиваться	;;;	to be rather afraid of	
плодородный	;;;	fertile, fruitful	
планомерный	;;;	planned, systematic	
планировать	;;;	to plan	
питательный	;;;	nourishing	
перспектива	;;;	perspective; prospect	
перечислять	;;;	to enumerate; transfer (money)	
переступать	;;;	to step over	
перестройка	;;;	restructuring	
переставать	;;;	to cease, stop	
переработка	;;;	reworking	
перемещение	;;;	displacement, shifting	
перекрывать	;;;	to cover again; block off	
перекрёсток	;;;	crossroads	
переживание	;;;	experience, emotional experience	
передвигать	;;;	to shift	
перегородка	;;;	partition	
первобытный	;;;	primitive	
официальный	;;;	official	
отталкивать	;;;	to push away, repel	
отступление	;;;	digression; retreat	
отправление	;;;	dispatch; departure (of train)	
открываться	;;;	to open	
откровенный	;;;	frank	
откликаться	;;;	to respond (to sth)	
откладывать	;;;	to put aside; postpone	
отдельность	;;;	jointing; parting	
отвлечённый	;;;	abstract	
отбрасывать	;;;	to throw off; discard	
особенность	;;;	peculiarity, special feature	
осмысливать	;;;	to make sense (of sth), interpret	
осматривать	;;;	to examine; look round (sth), inspect	
освобождать	;;;	to liberate, free	
организация	;;;	organization	
организатор	;;;	organizer	
оптимальный	;;;	optimal	
опровергать	;;;	to refute, disprove	
определённо	;;;	definitely	
определение	;;;	definition	
оправляться	;;;	to recover	
оправдывать	;;;	to justify; acquit	
оперативный	;;;	energetic; operative	
октябрьский	;;;	October (adj)	
окрестность	;;;	environs, vicinity	
оказываться	;;;	to turn out (to be); to find oneself	
озлобленный	;;;	embittered	
озабоченный	;;;	worried, preoccupied	
одиночество	;;;	loneliness, solitude	
одиннадцать	;;;	eleven	
ограничение	;;;	limitation	
обязательно	;;;	without fail, definitely	
обязанность	;;;	duty, obligation	
обыкновенно	;;;	usually	
объясняться	;;;	to make os understood; be explained; explain os	
объективный	;;;	objective (adj)	
объединение	;;;	union, association	
обхватывать	;;;	to encompass	
обсуждаться	;;;	to be discussed	
обслуживать	;;;	to serve (s.o.)	
обследовать	;;;	to investigate	
образование	;;;	education; formation	
обоснование	;;;	basis; grounds, justification	
оборудовать	;;;	to equip	
обороняться	;;;	to defend os (from)	
обогащаться	;;;	to become rich	
обнаружение	;;;	revealing; discovery	
обкладывать	;;;	to put round	
обеспечение	;;;	securing, providing, provision (with)	
ничтожество	;;;	nonentity	
нефтепровод	;;;	oil pipeline	
неторопливо	;;;	unhurriedly	
нетерпеливо	;;;	impatiently	
несравненно	;;;	incomparably	
неспособный	;;;	incapable	
несомненный	;;;	undoubted	
неслыханный	;;;	unprecedented	
неразбериха	;;;	muddle (coll)	
непривычный	;;;	unaccustomed, unusual	
непрерывный	;;;	uninterrupted	
непременный	;;;	indispensable	
неправильно	;;;	incorrectly	
неподвижный	;;;	motionless	
непобедимый	;;;	invincible	
неожиданный	;;;	unexpected	
необычайный	;;;	exceptional	
необходимый	;;;	essential	
необозримый	;;;	immense	
ненавистный	;;;	hated, hateful	
немедленный	;;;	immediate	
нейтральный	;;;	neutral	
нейтралитет	;;;	neutrality	
неинтересно	;;;	(it’s) uninteresting	
неизвестный	;;;	unknown	
незаменимый	;;;	irreplaceable	
независимый	;;;	independent	
недоступный	;;;	inaccessible	
недостойный	;;;	unworthy	
недоставать	;;;	to be lacking	
недовольный	;;;	dissatisfied (with)	
недоверчиво	;;;	distrustfully, suspiciously	
неграмотный	;;;	illiterate	
негодование	;;;	indignation	
невыносимый	;;;	intolerable	
невозможный	;;;	impossible	
невероятный	;;;	improbable; incredible	
национализм	;;;	nationalism	
насчитывать	;;;	to number, total	
наступление	;;;	offensive, advance	
настраивать	;;;	to tune, adjust; (на +a) put s.o. in the mood (for sth)	
настойчивый	;;;	insistent	
насмешливый	;;;	sarcastic	
наслаждение	;;;	physical pleasure	
нарастающий	;;;	growing	
напряжённый	;;;	tense	
направление	;;;	direction	
наполняться	;;;	to fill (with)	
накопляться	;;;	to accumulate	
наклоняться	;;;	to bend down, stoop, bend over	
накладывать	;;;	to lay sth on sth, put on, superimpose	
накапливать	;;;	to accumulate	
надвигаться	;;;	to draw near	
нагреваться	;;;	to warm os, warm up	
наблюдаться	;;;	to be observed	
наблюдатель	;;;	observer	
мучительный	;;;	excruciating	
музыкальный	;;;	musical	
монопольный	;;;	monopoly (adj)	
молоденький	;;;	young and attractive; very young	
мобилизация	;;;	mobilization	
многолетний	;;;	lasting many years; long-lasting, perennial	
миролюбивый	;;;	peace-loving	
минимальный	;;;	minimum (adj)	
миниатюрный	;;;	miniature (adj)	
минеральный	;;;	mineral (adj)	
механически	;;;	mechanically	
механизация	;;;	mechanization	
механизатор	;;;	mechanization expert; machine servicer	
металлургия	;;;	metallurgy	
мероприятие	;;;	measure; function (reception etc.)	
меньшинство	;;;	minority	
медицинский	;;;	medical	
материнский	;;;	maternal	
маскировать	;;;	to disguise, camouflage	
любопытство	;;;	curiosity	
легкомыслие	;;;	thoughtlessness	
легендарный	;;;	legendary	
лаборатория	;;;	laboratory	
кувыркаться	;;;	to turn somersaults, go head over heels	
критический	;;;	critical	
критиковать	;;;	to criticize	
кремлёвский	;;;	Kremlin (adj)	
красноречие	;;;	eloquence	
красноватый	;;;	reddish	
космический	;;;	(outer) space	
королёвский	;;;	royal	
координация	;;;	coordination	
конференция	;;;	conference	
контрольный	;;;	checking, monitoring	
конструкция	;;;	construction	
конструктор	;;;	constructor, designer	
конституция	;;;	constitution	
конкуренция	;;;	competition	
кондиционер	;;;	air conditioner	
комплексный	;;;	complex, consisting of several parts	
комментарий	;;;	commentary	
комендатура	;;;	commandant’s office	
командующий	;;;	(as noun) commander (of)	
командовать	;;;	to command (sth)	
колокольчик	;;;	small bell; bluebell	
когданибудь	;;;	ever; some day	
керосиновый	;;;	kerosene (adj)	
карабкаться	;;;	to clamber (coll)	
капитальный	;;;	main, most important	
кандидатура	;;;	candidature	
какойнибудь	;;;	any; any kind of	
итальянский	;;;	Italian (adj)	
исчерпывать	;;;	to exhaust	
истребление	;;;	extermination	
истребитель	;;;	fighter (plane)	
исследовать	;;;	to investigate	
исправление	;;;	correction	
исполняться	;;;	to be fulfilled, be completed	
исполнитель	;;;	executor; performer	
исполненный	;;;	full (of)	
исполинский	;;;	giant (adj)	
иронический	;;;	ironical	
интенсивный	;;;	intensive	
интеллигент	;;;	member of intelligentsia; professional; intellectual	
иностранный	;;;	foreign	
иллюстрация	;;;	illustration	
иллюминатор	;;;	porthole	
изобретение	;;;	invention	
изображение	;;;	depiction	
излюбленный	;;;	favourite	
изготовлять	;;;	to manufacture	
известность	;;;	fame	
избавляться	;;;	to escape from; get rid of	
значительно	;;;	significantly, considerably	
знакомиться	;;;	to become acquainted with; meet	
зеленоватый	;;;	greenish	
здороваться	;;;	to greet	
захлопывать	;;;	to bang, slam	
захватывать	;;;	to take, grasp; seize	
заулыбаться	;;;	to start smiling	
затруднение	;;;	difficulty	
затрачивать	;;;	to spend, expend	
затрагивать	;;;	to touch, affect	
застенчивый	;;;	shy	
застёгивать	;;;	to fasten	
заслуживать	;;;	to merit, achieve by merit, deserve	
заслуженный	;;;	deserved; distinguished	
запрещённый	;;;	forbidden	
запаздывать	;;;	to be late (with)	
заокеанский	;;;	transoceanic	
заместитель	;;;	deputy, substitute	
закрываться	;;;	to be closed; close down; cover os	
законченный	;;;	complete; consummate, professional	
заключённый	;;;	(as noun) prisoner, convict	
заключаться	;;;	to consist of	
закладывать	;;;	to put behind; lay down, found; (+inst) block (with); pawn, mortgage	
заканчивать	;;;	to finish	
задерживать	;;;	to delay; arrest	
загрязнение	;;;	pollution	
заграничный	;;;	foreign	
заглядывать	;;;	to glance	
завсегдатай	;;;	habitue; regular customer	
завоёвывать	;;;	to conquer	
завоеватель	;;;	conqueror	
завоёванный	;;;	conquered	
зависимость	;;;	dependence	
завершаться	;;;	to be finishing, end	
забрасывать	;;;	to throw, cast; abandon; neglect	
заболевание	;;;	illness	
заблуждение	;;;	delusion	
заблудиться	;;;	to lose one’s way	
жизненность	;;;	vitality; lifelikeness	
естественно	;;;	naturally	
единственно	;;;	only	
единогласно	;;;	unanimously	
европейский	;;;	European	
духовенство	;;;	clergy	
драгоценный	;;;	valuable	
достоинство	;;;	merit, virtue; dignity; value	
достоверный	;;;	reliable	
достигнутый	;;;	achieved	
достигаться	;;;	to be achieved	
достаточный	;;;	sufficient	
доставаться	;;;	to fall to s.o.’s lot; (coll) catch it (be punished)	
допрашивать	;;;	to interrogate	
должно быть	;;;	probably	
докладывать	;;;	to report (on)	
добродушный	;;;	good-natured	
добродетель	;;;	virtue	
добровольно	;;;	voluntarily	
диссертация	;;;	dissertation, thesis	
десятилетие	;;;	decade	
деревенский	;;;	village, country (adj)	
действующий	;;;	functioning	
действовать	;;;	to act, function, affect	
действенный	;;;	effective	
девственный	;;;	virgin (adj)	
девальвация	;;;	devaluation	
двенадцатый	;;;	twelfth	
давнымдавно	;;;	ages ago (coll)	
губительный	;;;	destructive	
грандиозный	;;;	grandiose	
гражданский	;;;	civil, civic	
государство	;;;	state	
голубоватый	;;;	light-bluish	
голосование	;;;	voting	
голландский	;;;	Dutch	
гимнастёрка	;;;	soldier’s tunic	
героический	;;;	heroic	
генеральный	;;;	general (adj)	
вышвыривать	;;;	to throw out, chuck out (coll)	
выхватывать	;;;	to snatch, pull out	
вытаскивать	;;;	to drag out, pull out (from)	
выступление	;;;	speech; (public) appearance	
выслушивать	;;;	to hear (s.o.) out	
выскакивать	;;;	to jump out (of)	
высказывать	;;;	to express	
выпускаться	;;;	to be released	
выполняться	;;;	to be fulfilled	
вынужденный	;;;	forced	
выкладывать	;;;	to lay out, put out, set out; (+a +inst) face, cover (sth with sth)	
выдерживать	;;;	to withstand	
выдвигаться	;;;	to move out; go up in the world	
выглядывать	;;;	to look out	
выбрасывать	;;;	to throw out	
всхлипывать	;;;	to sob	
встречаться	;;;	to meet (s.o.)	
вскрикивать	;;;	to cry out	
всесторонне	;;;	thoroughly	
всенародный	;;;	national	
впечатление	;;;	impression	
восхищаться	;;;	to admire	
восторженно	;;;	enthusiastically	
воспитывать	;;;	to educate, bring up	
воскресенье	;;;	Sunday	
восемьдесят	;;;	eighty	
вооружённый	;;;	armed	
вооружаться	;;;	to arm os	
воображение	;;;	imagination	
волноваться	;;;	to worry	
возрождение	;;;	rebirth, revival, renaissance	
возможность	;;;	possibility	
воздействие	;;;	influence, pressure	
возглавлять	;;;	to head, lead	
возвышенный	;;;	elevated; lofty	
возвышаться	;;;	to rise	
возвращение	;;;	return	
возбуждённо	;;;	excitedly	
возбуждение	;;;	excitement, arousal	
внушительно	;;;	impressively	
внимательно	;;;	attentively	
вмешиваться	;;;	to interfere (in)	
влиятельный	;;;	influential	
виноградник	;;;	vineyard	
вздрагивать	;;;	to start, flinch, shudder	
взглядывать	;;;	to look, glance (at)	
вертикально	;;;	vertically	
вероятность	;;;	probability	
великолепно	;;;	splendid(ly)	
великолепие	;;;	magnificence	
вдумываться	;;;	to ponder on	
вдохновлять	;;;	to inspire	
вдохновение	;;;	inspiration	
варьировать	;;;	to vary, modify	
быть вправе	;;;	to have a right to	
бревенчатый	;;;	made of logs	
большинство	;;;	majority	
болезненный	;;;	unhealthy	
богатырский	;;;	heroic	
благородный	;;;	noble	
благодарный	;;;	grateful	
благодарить	;;;	to thank (s.o. for sth)	
бестолковый	;;;	stupid; incoherent, muddled	
бесстрашный	;;;	fearless	
бессмертный	;;;	immortal	
беспощадный	;;;	merciless	
беспомощный	;;;	helpless	
бесполезный	;;;	useless	
беспокойный	;;;	anxious, agitated	
белоснежный	;;;	snow-white	
белорусский	;;;	Belorussian	
безусловный	;;;	unconditional	
безупречный	;;;	irreproachable	
безразлично	;;;	indifferently	
безработный	;;;	unemployed	
безработица	;;;	unemployment	
безошибочно	;;;	correctly, accurately	
безнадёжный	;;;	hopeless	
беззаветный	;;;	selfless	
безжалостно	;;;	pitilessly, ruthlessly	
безгранично	;;;	infinitely	
африканский	;;;	African (adj)	
атмосферный	;;;	atmospheric	
ассортимент	;;;	assortment	
архитектура	;;;	architecture	
артиллерист	;;;	gunner	
аналогичный	;;;	analogous	
активизация	;;;	activization	
агрессивный	;;;	aggressive	
агитировать	;;;	to agitate, campaign	
австрийский	;;;	Austrian	
авиационный	;;;	aviation (adj)	
абстрактный	;;;	abstract	
утвердиться	;;;	to become established	
устремиться	;;;	to rush, dash; be fixed on, aspire to	
успокоиться	;;;	to calm down	
усмехнуться	;;;	to smile slightly, give a short laugh	
ускользнуть	;;;	to slip away	
упомянуться	;;;	to be mentioned	
уменьшиться	;;;	to diminish, decrease	
укорениться	;;;	to take root	
увеличиться	;;;	to increase	
столкнуться	;;;	to collide with	
споткнуться	;;;	to trip, stumble	
сохраниться	;;;	to be preserved	
сопоставить	;;;	to compare	
сократиться	;;;	to decrease, be reduced, get shorter	
соединиться	;;;	to unite	
согласовать	;;;	to coordinate	
согласиться	;;;	to agree (c +inst) with, (на +a) to	
совершиться	;;;	to be accomplished	
сговориться	;;;	to make an arrangement (with s.o.)	
растеряться	;;;	to get lost; panic	
рассмеяться	;;;	to burst out laughing	
проскрипеть	;;;	to squeak, creak, crunch	
продрогнуть	;;;	to be chilled	
разделиться	;;;	to be divided (into)	
приготовить	;;;	to prepare; to cook	
развеселить	;;;	to cheer up; amuse	
зацепляться	;;;	to clutch (at); catch (on)	
сохраниться	;;;	to be kept	
нахмуриться	;;;	to frown	
похлопотать	;;;	to bustle about; make efforts	
потрудиться	;;;	to labour	
потревожить	;;;	to trouble	
встревожить	;;;	to alarm; disturb	
потребовать	;;;	to demand	
затормозить	;;;	to slow down, impede; brake	
потолковать	;;;	to have a talk about sth with s.o. (coll)	
истолковать	;;;	to interpret, explain	
потанцевать	;;;	to dance	
засуетиться	;;;	to run around, fuss about	
постыдиться	;;;	to be ashamed of	
построиться	;;;	to be built	
постараться	;;;	to try	
пoставиться	;;;	to be placed	
поссориться	;;;	to quarrel (with s.o.)	
послышаться	;;;	to be heard	
послушаться	;;;	to obey	
последовать	;;;	to follow (+d); to be required	
попрощаться	;;;	to say goodbye (to)	
попроситься	;;;	to ask for	
попробовать	;;;	(+inf) to try; (+a) test; taste	
понравиться	;;;	to please (s. o.)	
закружиться	;;;	to whirl, spin round; begin to spin	
наименовать	;;;	to name	
познакомить	;;;	to introduce (s.o. to s.o. or sth)	
зажмуриться	;;;	to screw up one’s eyes; half-close one’s eyes	
погрузиться	;;;	to get on board, embark	
загрохотать	;;;	to thunder, rumble	
погрозиться	;;;	to threaten (coll)	
взволновать	;;;	to worry, excite, disturb (s.o.)	
забормотать	;;;	to mutter	
обеспокоить	;;;	to worry (s.o.)	
энергичный	;;;	energetic	
энергетика	;;;	power engineering	
электричка	;;;	suburban train (coll)	
экспедиция	;;;	expedition	
шестьдесят	;;;	sixty	
шевелиться	;;;	to stir	
шампанское	;;;	champagne	
чудовищный	;;;	monstrous	
чемоданчик	;;;	small suitcase	
целоваться	;;;	to kiss (each other)	
хорошенько	;;;	properly (coll)	
химический	;;;	chemical	
хвастаться	;;;	to boast (of)	
характерно	;;;	characteristically	
футбольный	;;;	football (adj)	
фотография	;;;	photograph	
формальный	;;;	formal	
финансовый	;;;	financial	
физический	;;;	physical	
физиономия	;;;	physiognomy, face; shape	
фашистский	;;;	Fascist (adj)	
фантастика	;;;	fantastic, fantasy	
фактически	;;;	in fact; practically	
учреждение	;;;	establishment, institution	
ухмыляться	;;;	to smirk, grin (coll)	
ухитряться	;;;	to manage (to do sth) (coll)	
ухватывать	;;;	to seize	
ухватиться	;;;	to grasp	
утрачивать	;;;	to lose	
утверждать	;;;	to confirm	
утверждать	;;;	to affirm, maintain	
устройство	;;;	organization; mechanism	
устранение	;;;	removal, elimination	
устраивать	;;;	to arrange, organize (sth)	
устойчивый	;;;	stable	
устаревать	;;;	to become obsolete, go out of date	
усмотрение	;;;	discretion, judgement	
усмехаться	;;;	to smile slightly, give a short laugh	
ускользать	;;;	to slip away	
упрощённый	;;;	simplified; over-simplified	
упражнение	;;;	exercise	
управление	;;;	management; administration; control	
упомянутый	;;;	previously mentioned	
уничтожать	;;;	to destroy; do away with	
уникальный	;;;	unique	
умственный	;;;	mental, intellectual	
улучшаться	;;;	to improve	
улавливать	;;;	to catch; detect	
укрываться	;;;	to take refuge (from)	
укрепление	;;;	strengthening	
украинский	;;;	Ukrainian	
уклоняться	;;;	to avoid, evade (sth)	
укладывать	;;;	to lay (down); pack, stack	
удивляться	;;;	to be surprised (at)	
удивлённый	;;;	surprised	
удерживать	;;;	to hold back, retain; hold onto; restrain	
угрожающий	;;;	threatening	
угнетённый	;;;	oppressed	
углубление	;;;	deepening; depression, hollow	
увольнение	;;;	dismissal	
увлекаться	;;;	to be keen on	
увеличение	;;;	increase	
убеждённый	;;;	convinced	
убеждаться	;;;	to convince oneself, become sure (of sth)	
тщательный	;;;	thorough	
туристский	;;;	tourist (adj)	
трудящийся	;;;	labouring (participle)	
трудоёмкий	;;;	labour-intensive, laborious	
тринадцать	;;;	thirteen	
тренировка	;;;	training	
требование	;;;	demand	
тракторный	;;;	tractor (adj)	
тракторист	;;;	tractor driver	
торопиться	;;;	to hurry, be in a hurry	
толкование	;;;	interpretation	
типография	;;;	printing-house, press	
технология	;;;	technology	
территория	;;;	territory	
терпеливый	;;;	patient	
теперешний	;;;	present (adj) (coll)	
телефонный	;;;	telephone (adj)	
телеграмма	;;;	telegram	
творчество	;;;	creative work	
творческий	;;;	creative	
таможенный	;;;	customs (adj)	
счастливый	;;;	happy, lucky	
счастливец	;;;	lucky man	
сухопутный	;;;	ground (adj) (troops)	
стремление	;;;	striving, aspiration, desire	
стремиться	;;;	to strive (for)	
стрелковый	;;;	shooting (adj); rifle, infantry (adj)	
сторожевой	;;;	watch, guard (adj)	
стискивать	;;;	to squeeze	
стесняться	;;;	to be shy	
стекольщик	;;;	glazier	
стеклянный	;;;	glass (adj)	
стаскивать	;;;	to drag off; (coll) pinch	
сталкивать	;;;	to push off; to knock together	
сравнивать	;;;	to compare (sth with sth)	
спускаться	;;;	to go down, descend	
спрыгивать	;;;	to jump off	
спрашивать	;;;	to ask (s.o. about sth)	
справочник	;;;	reference book, guide	
спортивный	;;;	sporting	
сплочённый	;;;	united	
специально	;;;	specially	
специалист	;;;	specialist	
спекуляция	;;;	speculation	
сочувствие	;;;	sympathy	
сочетаться	;;;	to combine (with)	
социальный	;;;	social	
сохранение	;;;	preservation	
состязание	;;;	competition	
состояться	;;;	to take place	
составлять	;;;	to make up, compose, constitute	
сооружение	;;;	construction	
сообщаться	;;;	to be communicated; communicate with	
соображать	;;;	to realize, work out, think out, understand	
соломенный	;;;	straw (adj)	
солдатский	;;;	soldier’s	
сокращение	;;;	reduction; abbreviation	
соединение	;;;	joining, combination; joint, join (tech)	
содержание	;;;	content (noun)	
содействие	;;;	assistance	
соглашение	;;;	agreement	
совпадение	;;;	coincidence	
совместный	;;;	joint, combined	
советовать	;;;	to advise (s.o.)	
совершенно	;;;	completely, perfectly	
собственно	;;;	strictly, properly	
соблюдение	;;;	observance	
соблазнять	;;;	to tempt; seduce	
собираться	;;;	to gather; intend to; be about to	
собеседник	;;;	interlocutor, the person one is talking to	
снаряжение	;;;	equipment	
славянский	;;;	Slavonic	
скульптура	;;;	sculpture	
скрываться	;;;	to hide os, vanish	
скромность	;;;	modesty	
скоростной	;;;	high-speed, express	
скопляться	;;;	to accumulate	
сковородка	;;;	frying-pan	
склоняться	;;;	to bend, bow; be declined	
склонность	;;;	tendency (to); aptitude (for)	
складывать	;;;	to pile up, put together; fold up; add up; put down	
серебряный	;;;	silver (adj)	
семнадцать	;;;	seventeen	
семилетний	;;;	seven-year; seven-year-old	
секретарша	;;;	(female) secretary (coll)	
сдерживать	;;;	to hold back, restrain, keep (promise)	
сдержанный	;;;	restrained	
светящийся	;;;	luminous	
сверкающий	;;;	sparkling	
сбрасывать	;;;	to drop; throw off	
санитарный	;;;	medical, sanitary	
рыболовный	;;;	fishing (adj)	
руководить	;;;	to manage, supervise	
российский	;;;	Russian (of Russia)	
рисоваться	;;;	to show off, pose; seem	
решительно	;;;	resolutely; definitely, absolutely	
республика	;;;	republic	
регулярный	;;;	regular	
реальность	;;;	reality	
реализация	;;;	implementation; sale	
реактивный	;;;	jet-propelled	
расширение	;;;	expansion	
расцветать	;;;	to blossom, bloom	
растерянно	;;;	in bewilderment	
растворять	;;;	to open; dissolve	
рассуждать	;;;	to arbitrate (between), judge; decide	
рассуждать	;;;	to reason; (o +pr) discuss	
расстояние	;;;	distance	
расслышать	;;;	to catch (sth said)	
рассеянный	;;;	absent-minded	
рассеивать	;;;	to scatter	
распускать	;;;	to dismiss, disband; let out	
распорядок	;;;	routine	
расписание	;;;	timetable	
раскрывать	;;;	to open wide; reveal	
расистский	;;;	racist (adj)	
разъяснять	;;;	to explain	
разуметься	;;;	to be meant	
разрушение	;;;	destruction	
разрешение	;;;	permission; solution	
разработка	;;;	elaboration, working out; design; mining	
разоряться	;;;	to be ruined, bankrupt	
размышлять	;;;	to ponder (on)	
размещение	;;;	placing, allocation, accommodation	
разложение	;;;	decomposition, disintegration	
раздражать	;;;	to irritate, annoy	
разделение	;;;	division	
раздвигать	;;;	to move apart	
разглядеть	;;;	to make out, perceive	
радоваться	;;;	to be glad (at)	
радоваться	;;;	to be glad (at), be pleased (about)	
равномерно	;;;	uniformly, evenly	
равнодушно	;;;	with indifference	
равнодушие	;;;	indifference	
равновесие	;;;	balance, equilibrium	
пятнадцать	;;;	fifteen	
пулемётный	;;;	machine-gun (adj)	
публикация	;;;	publication	
психология	;;;	psychology	
прояснение	;;;	clarification, clearing up; clear period (weather)	
проявление	;;;	manifestation, display	
прощальный	;;;	farewell (adj), parting	
процветать	;;;	to flourish	
прохладный	;;;	cool	
протяжение	;;;	extent; expanse	
проступать	;;;	to come through, show through	
просторный	;;;	spacious	
пропускать	;;;	to let through; omit, miss	
пропаганда	;;;	propaganda	
промежуток	;;;	interval; space, gap	
проклинать	;;;	to curse	
прозрачный	;;;	transparent	
продолжить	;;;	to prolong	
продолжать	;;;	to continue	
провокация	;;;	provocation	
провокатор	;;;	agent provocateur; provoker	
приступать	;;;	to get down to, start on	
пристально	;;;	fixedly	
приставать	;;;	to stick to, adhere (to); pester	
присвоение	;;;	appropriation; conferment	
примирение	;;;	reconciliation	
применение	;;;	application, use	
прикрывать	;;;	to screen, shelter (sth with sth)	
приказание	;;;	order, command	
признанный	;;;	acknowledged, recognized	
признавать	;;;	to admit; to recognize	
приемлемый	;;;	acceptable	
приглашать	;;;	to invite	
привлекать	;;;	to attract	
прибрежный	;;;	coastal; riverside	
прибавлять	;;;	to add	
претендент	;;;	claimant, aspirant (to)	
преступный	;;;	criminal (adj)	
преступник	;;;	criminal	
прелестный	;;;	charming	
прекращать	;;;	to stop, discontinue	
прекрасный	;;;	beautiful, fine	
предыдущий	;;;	preceding	
предстоять	;;;	to lie ahead (of s.o.)	
предлагать	;;;	to offer, propose (sth to s.o.)	
предельный	;;;	maximum (adj)	
предвидеть	;;;	to foresee	
превращать	;;;	to convert, turn (into)	
пребывание	;;;	stay	
праздность	;;;	idleness	
правильный	;;;	correct, right	
появляться	;;;	to appear	
потрясение	;;;	shock	
потреблять	;;;	to consume	
потихоньку	;;;	slowly; quietly; secretly (coll)	
посыпаться	;;;	to pour down	
построение	;;;	construction	
постоянный	;;;	constant, permanent	
постепенно	;;;	gradually	
постановка	;;;	placing, setting; staging (of a play etc.)	
поставлять	;;;	to deliver, supply	
посредство	;;;	mediation	
посольство	;;;	embassy	
посетитель	;;;	visitor	
поселяться	;;;	to take up residence	
порядочный	;;;	decent, respectable	
поражённый	;;;	defeated; astounded	
популярный	;;;	popular	
поправлять	;;;	to correct, put right	
пополнение	;;;	replenishment; reinforcement(s)	
поперечный	;;;	transverse	
попадаться	;;;	to be caught; turn up	
помиловать	;;;	to pardon	
помещаться	;;;	to be located; find space, go in, fit in; install os	
получаться	;;;	to turn out, work out, result	
полуостров	;;;	peninsula	
полтораста	;;;	a hundred and fifty	
положенный	;;;	agreed, fixed	
полководец	;;;	military leader	
полагаться	;;;	to rely (on)	
покупатель	;;;	customer	
покачивать	;;;	to rock	
показывать	;;;	to show (sth to s.o.)	
показатель	;;;	index, indicator	
позитивный	;;;	positive	
позабывать	;;;	to forget (coll)	
пожениться	;;;	to get married (of a couple)	
пожалуйста	;;;	please, please do; don’t mention it	
подыматься	;;;	to rise; climb (coll)	
подъезжать	;;;	to drive up to	
подчинение	;;;	submission, subjection	
подходящий	;;;	suitable	
подтянутый	;;;	self-controlled; well turned out, smart	
подпольный	;;;	underground (adj)	
подоконник	;;;	window-sill	
подозрение	;;;	suspicion	
подготовка	;;;	preparation (for)	
подвергать	;;;	to subject (s.o. to sth)	
подбородок	;;;	chin	
подавление	;;;	suppression	
подаваться	;;;	to move, shift; be served (of food)	
повышенный	;;;	raised	
повышаться	;;;	to rise	
поведывать	;;;	to relate, tell	
поваренный	;;;	culinary	
побуждение	;;;	motive, stimulus	
поблизости	;;;	nearby; hereabouts	
победитель	;;;	victor	
попрежнему	;;;	as before	
повидимому	;;;	seemingly	
пластмасса	;;;	plastic	
письменный	;;;	written; writing (adj)	
печататься	;;;	to be printed, be published	
персидский	;;;	Persian	
переходить	;;;	to cross, go over	
пересекать	;;;	to intersect, cross, cut across	
перерезать	;;;	to cut	
переносный	;;;	portable; metaphorical	
переносить	;;;	to transfer, carry over; postpone	
перенимать	;;;	to copy, adopt	
переменять	;;;	to change; transform	
переживать	;;;	to live through; experience; outlive; suffer	
переезжать	;;;	to drive across; move (house)	
передавать	;;;	to pass, hand over; transmit, convey	
перегрузка	;;;	overload	
перегонять	;;;	to outdistance, outstrip; drive (sth swh); distil	
переговоры	;;;	negotiations	
перевозить	;;;	to transport across, from swh to swh	
переводить	;;;	to take across; transfer; translate	
перебирать	;;;	to sort out; look through; go over; sort through; to take in excess	
перебивать	;;;	to interrupt	
первенство	;;;	first place (in competition); championship	
пепельница	;;;	ashtray	
патриотизм	;;;	patriotism	
палисадник	;;;	front garden; stake fence	
ошеломлять	;;;	to stun, astound	
охлаждение	;;;	cooling	
охватывать	;;;	to seize, envelop	
оформление	;;;	registration; putting in required form	
официально	;;;	officially	
офицерский	;;;	officer’s	
отыскивать	;;;	to seek out, seek and find	
отчётливый	;;;	clear, distinct	
отсутствие	;;;	absence	
отстранять	;;;	to push aside; remove	
отстаивать	;;;	to defend	
отставлять	;;;	to set aside	
отставание	;;;	lag, lagging behind	
отрываться	;;;	to be torn off, break away	
отрекаться	;;;	to renounce (sth)	
отражаться	;;;	to be reflected	
отправлять	;;;	to send off	
отодвигать	;;;	to move aside	
относиться	;;;	to relate to; to regard, treat	
отмечаться	;;;	to register, sign one’s name	
отличаться	;;;	to distinguish os; (от +g i only) differ	
откровенно	;;;	frankly	
откидывать	;;;	to throw away, throw back	
отказывать	;;;	to refuse (s.o. sth)	
отзываться	;;;	to respond to; affect; (o +pr) express a view of; give an opinion of	
отделяться	;;;	to separate (from)	
отдалённый	;;;	distant, remote	
отвращение	;;;	disgust	
отваливать	;;;	to push away (sth heavy); cast off (boat)	
отбиваться	;;;	to break away from; repulse, beat off; stray	
остроумный	;;;	witty	
осторожный	;;;	careful, cautious	
оставшийся	;;;	remaining	
оставаться	;;;	to stay	
оспаривать	;;;	to contest, dispute	
осознавать	;;;	to realize	
основывать	;;;	to found	
осложнение	;;;	complication	
оскорблять	;;;	to insult	
освещённый	;;;	illuminated	
освещаться	;;;	to be illuminated, light up	
ориентация	;;;	orientation	
опускаться	;;;	to lower os, sink	
определять	;;;	to define, determine	
оправдание	;;;	justification; acquittal	
опомниться	;;;	to come to one’s senses	
оплошность	;;;	slip, blunder	
опаздывать	;;;	to be late (for)	
окружающий	;;;	surrounding	
окрашивать	;;;	to paint, colour	
оканчивать	;;;	to finish; graduate (from)	
оживляться	;;;	to become lively	
оживлённый	;;;	animated, excited	
однородный	;;;	homogeneous, of one type	
одинаковый	;;;	identical	
одерживать	;;;	to obtain, gain	
одёргивать	;;;	to straighten (clothing); (coll) call to order, tell s.o. to be quiet	
одалживать	;;;	to lend (sth to s.o.)	
огорчаться	;;;	to be sad, distressed	
оглядывать	;;;	to inspect, look over	
оглядывать	;;;	to look over, inspect	
овладевать	;;;	to master; take possession of	
объяснение	;;;	explanation	
объявление	;;;	announcement	
объективно	;;;	objectively	
объединять	;;;	to unite, combine	
обходиться	;;;	to manage; treat; turn out	
обуздывать	;;;	to curb, restrain	
обсуждение	;;;	discussion	
обстановка	;;;	environment, situation; furniture	
обрываться	;;;	to snap; stop suddenly; stop short	
обречённый	;;;	doomed	
обращаться	;;;	to turn to; (в +a) turn into; (c +inst) handle sth, treat s.o.	
образцовый	;;;	model, exemplary	
обострение	;;;	intensification, sharpening	
обозначать	;;;	to mark, designate, denote, mean	
обновление	;;;	renovation	
обниматься	;;;	to embrace one another	
обнажённый	;;;	naked	
обманывать	;;;	to deceive	
облегчение	;;;	(feeling of) relief; making lighter; simplification	
обдумывать	;;;	to consider, ponder, think over	
нормальный	;;;	normal	
новогодний	;;;	new year (adj)	
неутомимый	;;;	tireless	
неуместный	;;;	inappropriate, misplaced	
неуловимый	;;;	elusive	
неудобство	;;;	discomfort, inconvenience	
неуверенно	;;;	uncertainly	
нетронутый	;;;	untouched	
нетерпение	;;;	impatience	
несчастный	;;;	unhappy	
нестерпимо	;;;	unbearably	
несомненно	;;;	undoubtedly	
нервничать	;;;	to be nervous	
неразрывно	;;;	inseparably	
неприятный	;;;	unpleasant	
неприятель	;;;	enemy	
неприлично	;;;	indecently	
непрерывно	;;;	continuously	
непременно	;;;	without fail	
непонятный	;;;	incomprehensible	
неподвижно	;;;	motionlessly, still	
неподалёку	;;;	not far away	
неотложный	;;;	urgent	
неожиданно	;;;	unexpectedly	
необычайно	;;;	exceptionally	
необъятный	;;;	immense, boundless	
необходимо	;;;	it is essential; it is necessary	
ненавидеть	;;;	to hate	
немыслимый	;;;	unthinkable	
немедленно	;;;	immediately, forthwith	
неловкость	;;;	clumsiness	
некрасивый	;;;	ugly	
неизмеримо	;;;	immeasurably	
неизменный	;;;	invariable	
неизвестно	;;;	(it is) unknown	
неизбежный	;;;	inevitable	
незыблемый	;;;	unshakable	
незнакомый	;;;	unfamiliar	
нездоровый	;;;	unhealthy	
незаметный	;;;	imperceptible	
независимо	;;;	independently	
недоуменно	;;;	uncomprehendingly	
недоумение	;;;	bewilderment	
недостаток	;;;	defect; (+g or в +pr) shortage (of)	
недовольно	;;;	discontentedly	
невозможно	;;;	impossibly; it is impossible	
невиданный	;;;	unprecedented	
невзрачный	;;;	unattractive	
невероятно	;;;	improbably	
невежество	;;;	ignorance	
начинаться	;;;	to begin	
начальство	;;;	the management, the authorities	
находиться	;;;	to be situated; to be found, turn up	
нахальство	;;;	against impudence	
натягивать	;;;	to pull tight; pull on	
натыкаться	;;;	to run into, stumble upon, meet unexpectedly	
насыщенный	;;;	saturated; rich (in content)	
настроение	;;;	mood	
настойчиво	;;;	insistently	
настаивать	;;;	to insist, get one’s own way	
насмешливо	;;;	mockingly, sarcastically	
наследство	;;;	inheritance	
населённый	;;;	inhabited	
насаживать	;;;	to fix (sth onto sth)	
насаждение	;;;	planting; propagation	
нарушаться	;;;	to be broken, be infringed	
нарастание	;;;	growth, increase	
напряжённо	;;;	with strain, intensively	
напряжение	;;;	tension	
направлять	;;;	to direct	
напоследок	;;;	in the end (coll)	
напоминать	;;;	to remind (s.o. of sth.)	
наполовину	;;;	half, by half	
напиваться	;;;	to drink one’s fill; get drunk	
намечаться	;;;	to be planned	
налаживать	;;;	to put in working order, set going, adjust, put in order	
накопление	;;;	accumulation	
накидывать	;;;	to throw on	
накалённый	;;;	white-hot; tense	
наказывать	;;;	to punish	
наибольший	;;;	largest	
называться	;;;	to be called	
называемый	;;;	called	
назначение	;;;	appointment (to a post); purpose (for which sth is intended)	
надстройка	;;;	additional storey; superstructure	
надобность	;;;	necessity, need	
надлежащий	;;;	proper, fitting, appropriate	
награждать	;;;	to reward	
нагибаться	;;;	to bend down	
навязывать	;;;	to impose, foist (sth on s.o.)	
наваливать	;;;	to heap up, pile	
наблюдение	;;;	observation	
набираться	;;;	to collect	
набережная	;;;	embankment; sea-front	
мучительно	;;;	excruciatingly	
московский	;;;	Moscow (adj)	
молчаливый	;;;	taciturn	
молодёжный	;;;	youth (adj)	
могущество	;;;	power, might	
милостивый	;;;	gracious, kind	
милосердие	;;;	mercy, charity	
миллионный	;;;	millionth; containing a million	
мерещиться	;;;	to seem (coll), imagine	
медикамент	;;;	medicine	
мгновенный	;;;	instantaneous; momentary	
машинистка	;;;	typist	
машинально	;;;	mechanically	
математика	;;;	mathematics	
мастерство	;;;	skill, craftsmanship	
мастерская	;;;	workshop, studio	
маскировка	;;;	disguise, camouflage	
мартовский	;;;	March (adj)	
магнитофон	;;;	tape-recorder	
магистраль	;;;	main line; main road	
любопытный	;;;	curious	
любоваться	;;;	to admire	
лондонский	;;;	London (adj)	
логический	;;;	logical	
литература	;;;	literature	
лирический	;;;	lyrical	
ликвидация	;;;	liquidation, elimination	
ледниковый	;;;	glacial	
купеческий	;;;	merchant (adj)	
культурный	;;;	cultured, civilized; cultural	
куданибудь	;;;	anywhere	
кубический	;;;	cubic	
критически	;;;	critically	
кривляться	;;;	to behave affectedly (coll)	
крестьянин	;;;	peasant	
креститься	;;;	to be baptized; (p) cross os	
крепостной	;;;	serf	
коричневый	;;;	brown	
коренастый	;;;	thickset, stocky	
копошиться	;;;	to swarm	
кооперация	;;;	cooperation	
кооператив	;;;	cooperative	
концлагерь	;;;	concentration camp	
концертный	;;;	concert (adj)	
консервный	;;;	canned food (adj)	
конкретный	;;;	concrete, specific	
композиция	;;;	composition	
композитор	;;;	composer	
комбинезон	;;;	overalls	
комбинация	;;;	combination	
колыхаться	;;;	to sway; flutter	
колокольня	;;;	bell-tower	
количество	;;;	quantity	
колебаться	;;;	to sway; hesitate	
квадратный	;;;	square (adj)	
катастрофа	;;;	disaster	
капиталист	;;;	capitalist	
капитализм	;;;	capitalism	
кавказский	;;;	Caucasian, of the Caucasus	
истреблять	;;;	to destroy, exterminate	
испытывать	;;;	to test; experience	
испытанный	;;;	tested, tried	
испуганный	;;;	frightened	
исправлять	;;;	to correct	
исполнение	;;;	fulfilment; performance	
ископаемые	;;;	minerals	
исключение	;;;	exception	
иронически	;;;	ironically	
информация	;;;	information	
интересный	;;;	interesting	
инструмент	;;;	instrument; tool	
инструкция	;;;	instructions	
иностранец	;;;	foreigner	
инициатива	;;;	initiative	
инженерный	;;;	engineering (adj)	
изобретать	;;;	to invent	
изображать	;;;	to depict	
измеряться	;;;	to be measured	
изменяться	;;;	to change	
издеваться	;;;	to mock (s.o.), make fun of	
издаваться	;;;	to be published	
извиняться	;;;	to apologize (to)	
извержение	;;;	eruption	
избиратель	;;;	voter	
игрушечный	;;;	toy (adj); tiny	
зрительный	;;;	visual	
золотистый	;;;	golden	
значимость	;;;	significance	
знаменитый	;;;	famous	
знакомство	;;;	acquaintance (with), knowledge (of)	
зеркальный	;;;	mirror (adj)	
земледелие	;;;	agriculture	
земледeлец	;;;	farmer, peasant farmer	
Здравствуй	;;;	Hello/How are you?	
защищаться	;;;	to defend os; defend one’s thesis (for a higher degree)	
затягивать	;;;	to tighten	
затруднять	;;;	to make difficult, complicate; trouble	
застревать	;;;	to get stuck	
заставлять	;;;	to force, compel (s.o. to do sth)	
засовывать	;;;	to thrust (sth into sth)	
заряженный	;;;	loaded (of weapon)	
зарубежный	;;;	foreign	
запутанный	;;;	confused, tangled	
запугивать	;;;	to intimidate	
запрещение	;;;	prohibition, ban	
запоминать	;;;	to commit to memory, memorize	
запоздалый	;;;	belated	
заповедник	;;;	reserve, nature-reserve	
записывать	;;;	to note down	
запинаться	;;;	to stumble	
запасаться	;;;	to stock up (with)	
заниматься	;;;	to take up	
заниматься	;;;	to occupy oneself	
заматывать	;;;	to wind, twist; tire out	
заманчивый	;;;	tempting	
заливаться	;;;	to be flooded; (+inst) start to do sth vigorously	
закусывать	;;;	to have a snack, have some food	
закуривать	;;;	to start smoking, light up (cigarette etc.)	
закреплять	;;;	to fasten, secure	
законность	;;;	legality	
заключение	;;;	conclusion; confinement	
закидывать	;;;	to cast, toss	
заказывать	;;;	to order (sth)	
зажиточный	;;;	well-off	
зажигаться	;;;	to light up, be lit	
задыхаться	;;;	to suffocate	
задумывать	;;;	to think up; plan	
задумчивый	;;;	thoughtful	
загораться	;;;	to catch fire	
загадочный	;;;	mysterious	
завязывать	;;;	to tie; start, get involved in	
завтрашний	;;;	tomorrow’s	
завоевание	;;;	conquest	
заводиться	;;;	to start (working); (coll) get worked up	
завидовать	;;;	to envy	
завершение	;;;	completion	
заведующий	;;;	manager, head (of)	
заваривать	;;;	to brew	
заваливать	;;;	to block, cram	
забываться	;;;	to be forgotten; doze off; forget os	
заботливый	;;;	solicitous, caring	
заботиться	;;;	to worry about, concern os with, look after; take care of	
заболевать	;;;	to fall ill	
забираться	;;;	to get, climb (into/onto)	
забастовка	;;;	strike (by workers)	
живописный	;;;	picturesque	
жестокость	;;;	cruelty	
жертвовать	;;;	to donate; (+inst) sacrifice	
желтоватый	;;;	yellowish	
желательно	;;;	(it is) desirable	
жаловаться	;;;	to complain (about)	
ежедневный	;;;	daily, everyday	
единодушно	;;;	unanimously	
египетский	;;;	Egyptian	
дьявольски	;;;	devilishly	
друг друга	;;;	each other	
достижение	;;;	achievement	
достаточно	;;;	sufficiently; (+g) enough	
доставлять	;;;	to deliver	
допустимый	;;;	permissible	
доноситься	;;;	to reach (sounds etc.)	
доказывать	;;;	to demonstrate, prove	
дожидаться	;;;	to wait (for)	
доводиться	;;;	to chance to, manage to, have occasion to (coll)	
доверчивый	;;;	trusting	
довериться	;;;	to trust (in), confide in	
добываться	;;;	to be obtained	
добродушно	;;;	kindly, good-naturedly	
доброволец	;;;	volunteer	
добираться	;;;	to reach, get to	
добиваться	;;;	to obtain, achieve; to strive for; to get	
длительный	;;;	lengthy	
дисциплина	;;;	discipline	
дипломатия	;;;	diplomacy	
деятельный	;;;	active	
дефицитный	;;;	scarce, in short supply	
деревянный	;;;	wooden	
демократия	;;;	democracy	
декларация	;;;	declaration	
двоюродный	;;;	related through grandparent	
дворянство	;;;	gentry	
дворянский	;;;	gentry (adj)	
двенадцать	;;;	twelve	
дальнейший	;;;	further	
губернатор	;;;	governor	
грузинский	;;;	Georgian	
громоздкий	;;;	cumbersome, bulky	
готовность	;;;	readiness	
готовиться	;;;	to prepare (for sth)	
господство	;;;	domination, supremacy	
горячиться	;;;	to get excited	
голосовать	;;;	to vote (for/against)	
говориться	;;;	to be said	
гимнастика	;;;	gymnastics	
гигантский	;;;	giant (adj)	
германский	;;;	Germanic	
гениальный	;;;	brilliant	
выясняться	;;;	to become clear	
вытягивать	;;;	to stretch out	
высыпаться	;;;	to get enough sleep	
выставлять	;;;	to display, put forward	
высовывать	;;;	to thrust out	
высаживать	;;;	to set down, land	
вырываться	;;;	to tear oneself away	
выращивать	;;;	to grow (sth), rear, cultivate	
выражаться	;;;	to express os; (coll) swear	
выполнение	;;;	carrying out	
выписывать	;;;	to write out; subscribe to (periodical)	
выныривать	;;;	to come to the surface	
выносливый	;;;	resilient	
выкидывать	;;;	to throw out	
выигрывать	;;;	to win	
вызываться	;;;	to volunteer	
выдумывать	;;;	to invent, fabricate, make up	
выделяться	;;;	to stand out (from)	
выдающийся	;;;	eminent, prominent [participle used as (adj)]	
выдаваться	;;;	to stick out	
выбираться	;;;	to get out	
вцепляться	;;;	to grip, grip hold of	
вульгарный	;;;	vulgar	
вторгаться	;;;	to invade	
вступление	;;;	introduction	
вспыхивать	;;;	to blaze up, flare up	
вспоминать	;;;	to remember, recall	
вследствие	;;;	because of, owing to	
вскидывать	;;;	to throw (upwards, up onto)	
вскакивать	;;;	to jump in; leap up	
всесоюзный	;;;	all-union (relating to all the republics of the USSR)	
вреза́ться	;;;	to cut into	
враждебный	;;;	hostile	
вполголоса	;;;	in an undertone	
восходящий	;;;	rising	
восхищение	;;;	rapture, admiration	
восприятие	;;;	perception	
воспитание	;;;	upbringing	
воскресный	;;;	Sunday (adj)	
воскресать	;;;	to come back to life; revive	
восклицать	;;;	to exclaim	
ворочаться	;;;	to turn, toss and turn (coll)	
воротничок	;;;	(small) collar	
воплощение	;;;	embodiment	
вооружение	;;;	arming; arms	
воображать	;;;	to imagine	
возрастать	;;;	to grow	
возражение	;;;	objection	
возмущённо	;;;	indignantly	
возмущение	;;;	indignation	
воздвигать	;;;	to raise, erect	
возвращать	;;;	to return	
возбуждать	;;;	to arouse	
водопровод	;;;	water-pipe	
внутренний	;;;	inner, interior, internal	
влюбляться	;;;	to fall in love with	
влюблённый	;;;	in love (with)	
включаться	;;;	to join; be included; be switched on	
вкладывать	;;;	to insert; invest	
взрываться	;;;	to explode	
взвешивать	;;;	to weigh	
взбираться	;;;	to climb up	
веселиться	;;;	to make merry	
венгерский	;;;	Hungarian	
вежливость	;;;	politeness	
вчетвёртых	;;;	fourthly	
бюрократия	;;;	bureaucracy	
буржуазный	;;;	bourgeois	
буквальный	;;;	literal	
британский	;;;	British (adj)	
боеприпасы	;;;	ammunition	
Богородица	;;;	the Virgin	
близорукий	;;;	short-sighted	
блаженство	;;;	bliss	
библиотека	;;;	library	
библейский	;;;	biblical	
бесцветный	;;;	colourless	
бесстрашно	;;;	fearlessly	
бесстрашие	;;;	fearlessness	
бесспорный	;;;	indisputable	
бессонница	;;;	insomnia	
бессмертие	;;;	immortality	
бессильный	;;;	powerless	
беспощадно	;;;	mercilessly	
беспорядок	;;;	disorder, mess	
бесполезно	;;;	uselessly	
беспокойно	;;;	restlessly; disturbing	
беспокоить	;;;	to worry (s.o.)	
бесплодный	;;;	barren; fruitless	
бесплатный	;;;	free (of charge)	
бесконечно	;;;	endlessly	
беседовать	;;;	to talk, converse (with); have a talk (with)	
безымянный	;;;	nameless	
безуспешно	;;;	unsuccessfully	
безусловно	;;;	undoubtedly	
безропотно	;;;	uncomplainingly, without a murmur	
безопасный	;;;	safe	
безобразие	;;;	ugliness; scandal	
безнадёжно	;;;	hopelessly	
беззаветно	;;;	selflessly	
бездельник	;;;	idler	
безделушка	;;;	knick-knack, trinket	
безвестный	;;;	unknown	
бдительный	;;;	vigilant	
балтийский	;;;	Baltic	
баловаться	;;;	to play about, indulge os	
астрономия	;;;	astronomy	
ассоциация	;;;	association	
архитектор	;;;	architect	
артиллерия	;;;	artillery	
арифметика	;;;	arithmetic	
аристократ	;;;	aristocrat	
аппаратура	;;;	apparatus	
англичанин	;;;	Englishman	
английский	;;;	English; British (adj)	
американец	;;;	American (noun)	
альпийский	;;;	alpine	
актуальный	;;;	topical	
активность	;;;	activity	
аккуратный	;;;	exact, punctual; tidy	
адресовать	;;;	to address (sth to s.o.)	
автономный	;;;	autonomous	
автомобиль	;;;	car	
автомашина	;;;	car, vehicle	
автоматика	;;;	automation; machinery	
авантюрист	;;;	adventurer	
абсолютный	;;;	absolute	
ухитриться	;;;	to manage (to do sth) (coll)	
устроиться	;;;	to make arrangements; settle down; get a job; work out well	
установить	;;;	to set up, establish	
уставиться	;;;	to fix one’s gaze (on), stare (at)	
усомниться	;;;	to doubt	
условиться	;;;	to make an arrangement (with s.o. about sth/to do sth)	
управиться	;;;	to cope with (coll)	
употребить	;;;	to use	
уничтожить	;;;	to destroy; do away with	
улыбнуться	;;;	to smile (at)	
улучшиться	;;;	to improve	
укрепиться	;;;	to become stronger; become fixed; consolidate one’s position	
уклониться	;;;	to avoid, evade (sth)	
удержаться	;;;	to stand firm; restrain os	
углубиться	;;;	to become deeper; (в +a) go deep into, become absorbed in	
схватиться	;;;	to seize; (c +inst) grapple with	
спуститься	;;;	to go down, descend	
справиться	;;;	to cope (with); (o +pr) ask about	
сообщиться	;;;	to be communicated; communicate with	
сообразить	;;;	to realize, work out, think out, understand	
соблазнить	;;;	to tempt; seduce	
склониться	;;;	to bend, bow; be declined	
сдержаться	;;;	to control os	
присниться	;;;	to appear in a dream, see in a dream	
промолчать	;;;	to keep silent	
раскаяться	;;;	to repent	
обозлиться	;;;	to be angry, get angry (with)	
прозвучать	;;;	to sound	
разгромить	;;;	to rout; wreck	
пригрозить	;;;	to threaten (s.o.)	
прогреметь	;;;	to thunder, resound	
разбомбить	;;;	to bomb	
сощуриться	;;;	to screw up one’s eyes, narrow one’s eyes	
пощекотать	;;;	to tickle	
пошевелить	;;;	to stir, move	
почудиться	;;;	to seem, imagine (coll)	
поцеловать	;;;	to kiss	
захохотать	;;;	to guffaw, laugh loudly	
захотеться	;;;	to want, feel like; p: to start to want	
похоронить	;;;	to bury	
потянуться	;;;	to stretch; stretch os	
поторопить	;;;	to hurry (s.o.)	
потеряться	;;;	to get lost; lose one’s head	
пострадать	;;;	to suffer	
посмотреть	;;;	to watch; (на +a) look (at)	
посмеяться	;;;	to laugh	
засмеяться	;;;	to laugh (at)	
посетовать	;;;	to lament, complain (about)	
обрушиться	;;;	to collapse	
поругаться	;;;	to swear; (c +inst) (coll) have a row with	
нарисовать	;;;	to draw	
порадовать	;;;	to gladden, please	
обрадовать	;;;	to gladden, please	
поработать	;;;	to work, work for a while	
попятиться	;;;	to back away, step back	
попытаться	;;;	to attempt	
испугаться	;;;	to take fright (at)	
отпечатать	;;;	to print (off)	
напечатать	;;;	to print	
заночевать	;;;	to spend the night	
замучаться	;;;	to be tormented; worry, torment os	
помолиться	;;;	to pray	
помириться	;;;	to be reconciled with	
помириться	;;;	to make peace, be reconciled	
замёрзнуть	;;;	to freeze	
обменяться	;;;	to change; p: (+inst) exchange	
искупаться	;;;	to bathe	
покраснеть	;;;	to become red; blush, turn red	
покоситься	;;;	to become crooked; (на +a) look sideways at	
поколотить	;;;	to batter	
поклясться	;;;	to swear, vow	
покатиться	;;;	to roll	
покататься	;;;	to roll around; take a trip	
показаться	;;;	to seem, to appear, to show oneself	
позеленеть	;;;	to turn green, look green	
подивиться	;;;	to wonder, marvel (at) (coll)	
поделиться	;;;	to share (sth with s.o.)	
поговорить	;;;	to speak; to have a talk, talk (to)	
заглохнуть	;;;	to die away; stall (engine); go to seed	
поваляться	;;;	to roll; lie about	
повалиться	;;;	to fall	
побледнеть	;;;	to turn pale	
избаловать	;;;	to spoil (s.o.)	
сэкономить	;;;	to save, economize	
сравняться	;;;	(на +a) to emulate; (+d) be equal to	
спрятаться	;;;	to hide	
январский	;;;	January (adj)	
явственно	;;;	clearly	
юношеский	;;;	youthful	
юбилейный	;;;	anniversary (adj)	
эффектный	;;;	striking, done for effect	
эстрадный	;;;	stage (adj)	
энтузиаст	;;;	enthusiast	
энтузиазм	;;;	enthusiasm	
энергично	;;;	energetically	
экскурсия	;;;	excursion	
экономить	;;;	to save, economize	
экономист	;;;	economist	
экономика	;;;	economics; economy	
экземпляр	;;;	copy (of book etc.)	
штормовой	;;;	gale (adj)	
шоссейный	;;;	highway (adj)	
шерстяной	;;;	woollen	
шептаться	;;;	to whisper	
шахматный	;;;	chess (adj)	
чтонибудь	;;;	anything	
чрезмерно	;;;	excessively	
числиться	;;;	to be, be listed; (+inst) be considered (to be sth)	
четыреста	;;;	four hundred	
четвёртый	;;;	fourth	
честность	;;;	honesty	
чемпионат	;;;	championship	
человечек	;;;	little man	
частность	;;;	detail	
частичный	;;;	partial	
частенько	;;;	quite often (coll)	
церковный	;;;	church (adj)	
церемония	;;;	ceremony	
цепляться	;;;	to clutch (at); catch (on)	
цементный	;;;	cement (adj)	
цветочный	;;;	flower (adj)	
худощавый	;;;	thin	
худенький	;;;	slim, thin (coll)	
храниться	;;;	to be kept	
храбрость	;;;	bravery	
хозяйство	;;;	economy	
хозяйский	;;;	owner’s; boss’s	
хозрасчёт	;;;	self-financing	
хмуриться	;;;	to frown	
хлопотать	;;;	to bustle about; make efforts	
хвататься	;;;	to seize; (c +inst) grapple with	
футболист	;;;	footballer	
фундамент	;;;	foundation	
формально	;;;	formally	
философия	;;;	philosophy	
физически	;;;	physically	
фестиваль	;;;	festival	
федерация	;;;	federation	
фальшивый	;;;	FALSE	
факультет	;;;	faculty	
фабричный	;;;	factory (adj)	
учитывать	;;;	to take into account; to take into consideration, bear in mind	
участница	;;;	participant (f)	
уцелевший	;;;	surviving	
ухаживать	;;;	to look after (s.o.); make advances (to a woman)	
уткнуться	;;;	to bury os in; bump into	
устранять	;;;	to remove	
установка	;;;	installation; purpose	
усталость	;;;	tiredness	
ускорение	;;;	acceleration	
усиливать	;;;	to strengthen	
усиленный	;;;	intensive, intensified	
усваивать	;;;	to adopt, acquire (habit); master, learn	
упрямство	;;;	obstinacy	
упрочение	;;;	strengthening	
управлять	;;;	to manage, control	
упоминать	;;;	to mention	
упираться	;;;	to lean (against); come up against	
униматься	;;;	to calm down	
умываться	;;;	to wash os	
умеренный	;;;	moderate	
уменьшать	;;;	to reduce	
улыбаться	;;;	to smile (at)	
улучшение	;;;	improvement	
укутывать	;;;	to wrap (s.o.) up	
укреплять	;;;	to strengthen	
украшение	;;;	decoration	
уклончиво	;;;	evasively	
указывать	;;;	to point out	
указанный	;;;	indicated, specified	
удобрение	;;;	fertilizer; fertilizing	
удивлённо	;;;	with surprise	
удивление	;;;	surprise	
удаляться	;;;	to move away, withdraw	
удаваться	;;;	to succeed	
уголовный	;;;	criminal (adj)	
угнетение	;;;	oppression	
угадывать	;;;	to guess	
увольнять	;;;	to dismiss, fire	
увлечение	;;;	enthusiasm; hobby	
увесистый	;;;	weighty	
уверенный	;;;	confident, sure	
уважаемый	;;;	respected	
убираться	;;;	to tidy up; clear off, make os scarce (coll)	
убеждённо	;;;	with conviction	
убеждение	;;;	conviction, belief	
тщеславие	;;;	vanity	
тщательно	;;;	thoroughly	
трусливый	;;;	cowardly	
трудность	;;;	difficulty	
трудиться	;;;	to labour	
трогаться	;;;	to set off	
тридцатый	;;;	thirtieth	
трепетать	;;;	to tremble	
тревожный	;;;	worrying; worried	
тревожить	;;;	to trouble	
тревожить	;;;	to alarm; disturb	
требовать	;;;	to demand	
транспорт	;;;	transport	
тосковать	;;;	to be miserable; (пo +d) yearn for, miss	
тоскливый	;;;	depressed, depressing	
торопливо	;;;	hastily	
тормозить	;;;	to slow down, impede; brake	
торжество	;;;	celebration; triumph	
торговать	;;;	to trade (in)	
топтаться	;;;	to stamp	
тоненький	;;;	slim	
толпиться	;;;	to crowd, throng	
толковать	;;;	to have a talk about sth with s.o. (coll)	
толковать	;;;	to interpret, explain	
толкаться	;;;	to push, jostle	
тогдашний	;;;	then (adj)	
тесниться	;;;	to crowd, jostle	
терпеливо	;;;	patiently	
термометр	;;;	thermometer	
тенденция	;;;	tendency	
телевизор	;;;	television (set)	
творчески	;;;	creatively	
твориться	;;;	to be going on, happen	
твёрдость	;;;	firmness	
татарский	;;;	Tatar (adj)	
танцевать	;;;	to dance	
табуретка	;;;	stool	
считаться	;;;	(+inst) to be considered; (c +inst) take into account	
счастливо	;;;	happily	
сходиться	;;;	to meet; form a liaison with; agree	
сумрачный	;;;	gloomy; dreary	
суетиться	;;;	to run around, fuss about	
суеверный	;;;	superstitious	
судорожно	;;;	convulsively, feverishly	
стягивать	;;;	to tighten; pull off	
стыдиться	;;;	to be ashamed of	
ступенька	;;;	step	
структура	;;;	structure	
струиться	;;;	to stream	
строиться	;;;	to be built	
строитель	;;;	construction worker, builder	
строгость	;;;	strictness	
стратегия	;;;	strategy	
страстный	;;;	passionate	
страдание	;;;	suffering	
сторонник	;;;	supporter	
столичный	;;;	capital (adj)	
стойкость	;;;	firmness, steadfastness	
стоимость	;;;	cost, value	
стихийный	;;;	elemental; spontaneous	
старинный	;;;	ancient	
стараться	;;;	to try	
стаканчик	;;;	small glass	
ставиться	;;;	to be placed	
ссылаться	;;;	to refer to, quote; plead (give as an excuse)	
ссориться	;;;	to quarrel (with s.o.)	
срываться	;;;	to break away; (coll) fail, go wrong	
сражаться	;;;	to fight	
сравнение	;;;	comparison	
способный	;;;	able, capable	
спортсмен	;;;	sportsman	
спокойный	;;;	calm	
сплочение	;;;	uniting, strengthening	
спичечный	;;;	match (adj)	
списывать	;;;	to copy; write off	
спекулянт	;;;	speculator	
спектакль	;;;	(theatre) performance	
спасаться	;;;	to escape, save os	
сочинение	;;;	composition, essay	
сочетание	;;;	combination	
социалист	;;;	socialist	
социализм	;;;	socialism	
сохранять	;;;	to keep, preserve	
сотрудник	;;;	employee, official	
состояние	;;;	state, condition; fortune	
составной	;;;	composite; component	
соседство	;;;	vicinity	
соседский	;;;	neighbour’s	
сороковой	;;;	fortieth	
сооружать	;;;	to build, construct	
сообщение	;;;	communication	
солнечный	;;;	sun, solar; sunny	
сокровище	;;;	treasure	
сокращать	;;;	to shorten; reduce	
созревать	;;;	to mature, ripen	
сознавать	;;;	to acknowledge, be aware of	
создатель	;;;	creator	
созданный	;;;	created	
создавать	;;;	to create	
сожаление	;;;	regret	
соединять	;;;	to unite, join	
содержать	;;;	to contain	
согревать	;;;	to warm	
согласный	;;;	in agreement; (as noun) consonant	
совпадать	;;;	to coincide (with)	
совместно	;;;	jointly	
совещание	;;;	meeting, conference	
советский	;;;	Soviet (adj)	
совершать	;;;	to accomplish, complete	
собранный	;;;	disciplined; precise	
соблюдать	;;;	to keep to, adhere to	
собачонка	;;;	little dog (coll)	
сниматься	;;;	to be taken off; move off; have one’s picture taken; come off; act in a film; be photographed	
снижаться	;;;	to come down, fall, go down	
снаряжать	;;;	to equip	
снабжение	;;;	supply, supplying	
смущённый	;;;	embarrassed	
смущаться	;;;	to be embarrassed	
смиряться	;;;	to submit; resign oneself (to)	
смешивать	;;;	to confuse, mix	
сменяться	;;;	to be replaced	
слышаться	;;;	to be heard	
слушаться	;;;	to obey	
слушатель	;;;	listener	
случаться	;;;	to happen	
случайный	;;;	chance (adj), fortuitous	
служебный	;;;	working	
сложность	;;;	complexity	
словесный	;;;	verbal	
сливаться	;;;	to merge, join together	
следующий	;;;	following, next	
следствие	;;;	consequence; investigation	
следовать	;;;	to follow (+d); to be required	
славиться	;;;	to be famous for	
скульптор	;;;	sculptor	
скуластый	;;;	with high cheek-bones	
скопление	;;;	accumulation	
скользить	;;;	to slide	
скитаться	;;;	to wander, roam	
скидывать	;;;	to throw off (coll)	
скалистый	;;;	rocky	
сказочный	;;;	fairy-tale (adj)	
сибирский	;;;	Siberian (adj)	
сжиматься	;;;	to tighten, clench	
сестрёнка	;;;	little sister	
сердиться	;;;	to be angry (with)	
сердечный	;;;	heart (adj); heartfelt; warm-hearted	
семьдесят	;;;	seventy	
семейство	;;;	family	
секретный	;;;	secret (adj)	
секретарь	;;;	secretary	
сдержанно	;;;	with restraint	
сдвинутый	;;;	shifted	
сдаваться	;;;	to surrender, give up	
сгибаться	;;;	to bend; stoop	
священный	;;;	holy, sacred	
священник	;;;	priest	
связывать	;;;	to tie; to connect, bind	
связанный	;;;	connected; bound	
сводиться	;;;	to reduce (to)	
свободный	;;;	free	
свинцовый	;;;	lead (adj), leaden	
свидетель	;;;	witness	
свешивать	;;;	to lower, let dangle; (p only) (coll) weigh	
светиться	;;;	to shine, gleam	
сверстник	;;;	person of the same age, contemporary	
свержение	;;;	overthrow	
сваривать	;;;	to weld	
сваливать	;;;	to throw down; pile up	
сближение	;;;	rapprochement	
сбиваться	;;;	to slip; go wrong, get confused; huddle together	
сберегать	;;;	to save; protect	
сантиметр	;;;	centimetre	
санаторий	;;;	sanatorium	
самолюбие	;;;	pride, self-esteem	
рубиновый	;;;	ruby (adj)	
роскошный	;;;	luxurious	
романтика	;;;	romance, romanticism	
рождаться	;;;	to be born	
рисковать	;;;	to risk, take a risk	
решимость	;;;	determination, resoluteness	
репутация	;;;	reputation	
репрессия	;;;	repression	
ремонтный	;;;	repair (adj)	
результат	;;;	result	
резолюция	;;;	resolution	
резиновый	;;;	rubber (adj)	
регулярно	;;;	regularly	
революция	;;;	revolution	
револьвер	;;;	revolver	
ревновать	;;;	to be jealous	
ребятишки	;;;	children, kids (coll)	
рвануться	;;;	to dash	
расширять	;;;	to broaden, expand	
рассыпать	;;;	to spill, scatter	
рассеянно	;;;	absent-mindedly	
раскрытый	;;;	wide-open	
раскаяние	;;;	repentance	
разрывать	;;;	to tear up	
разрушать	;;;	to destroy, ruin	
разрешать	;;;	to allow, permit; solve	
разрезать	;;;	to cut up	
разорение	;;;	ruin, devastation	
размещать	;;;	to accommodate	
различный	;;;	different, various	
различать	;;;	to distinguish	
разлагать	;;;	to analyze, decompose, expand, corrupt, demoralize, break down	
разделять	;;;	to divide; separate; share	
раздавать	;;;	to distribute, give out	
разгонять	;;;	to disperse	
разводить	;;;	to separate; dissolve	
развивать	;;;	to develop	
разведчик	;;;	secret agent; scout, prospector	
разве… не	;;;	surely	
развалина	;;;	ruin	
разбойник	;;;	brigand	
разбирать	;;;	to take to pieces; make out, sort out, understand	
разбивать	;;;	to break, smash	
радостный	;;;	glad, joyful	
равняться	;;;	(на +a) to emulate; (+d) be equal to	
равенство	;;;	equality	
работница	;;;	female worker	
пятилетка	;;;	five-year plan	
пшеничный	;;;	wheat (adj), wheaten	
пустынный	;;;	desert (adj), deserted	
пускаться	;;;	to set out, start, embark (on sth)	
публичный	;;;	public	
прятаться	;;;	to hide	
проявлять	;;;	to display, manifest	
прощаться	;;;	to say goodbye (to)	
прошедший	;;;	past (adj)	
прочность	;;;	stability, solidity, durability	
процедура	;;;	procedure	
проходить	;;;	to go through, pass (on foot)	
профессор	;;;	professor	
профессия	;;;	profession	
протирать	;;;	to rub; rub through	
противный	;;;	disgusting	
противник	;;;	opponent, adversary	
протекать	;;;	to flow; pass (of time); leak	
просыпать	;;;	to oversleep	
просторно	;;;	(it is) spacious	
проситься	;;;	to ask for	
проповедь	;;;	sermon	
пропадать	;;;	to vanish, be lost, p: go missing	
проникать	;;;	to penetrate (sth)	
проливать	;;;	to spill	
пролетать	;;;	to fly through or past	
пролезать	;;;	to climb through, go through	
проклятый	;;;	damned	
проклятие	;;;	curse	
прозывать	;;;	to nickname (s.o. sth)	
проживать	;;;	to reside; (p) live for a specified period	
прожектор	;;;	searchlight; floodlight	
проектный	;;;	planning (adj); projected	
проезжать	;;;	to drive through or past	
продукция	;;;	production, output	
продавать	;;;	to sell	
программа	;;;	programme	
прогонять	;;;	to drive away; banish, throw out	
проворный	;;;	quick, agile	
проволока	;;;	wire	
провожать	;;;	to accompany, see off	
проводник	;;;	guide, conductor	
проводить	;;;	to lead, conduct; spend (time)	
провинция	;;;	province; provinces	
проверять	;;;	to check	
пробовать	;;;	(+inf) to try; (+a) test; taste	
пробивать	;;;	to pierce	
пробегать	;;;	to run (past/through/a certain distance)	
пришивать	;;;	to sew on	
причинять	;;;	to cause	
приходить	;;;	to arrive (on foot)	
притихать	;;;	to quieten down	
присягать	;;;	to swear an oath (of sth to s.o.)	
присылать	;;;	to send	
природный	;;;	natural	
приносить	;;;	to bring	
принимать	;;;	to take, accept, receive	
примыкать	;;;	to join, side with; (i only) примкнуть p adjoin, be adjacent to	
применять	;;;	to use, employ, apply	
приличный	;;;	decent	
прилетать	;;;	to arrive (by air)	
прилагать	;;;	to place in contact with; apply; add, attach (to)	
прикрытие	;;;	cover, screen	
призывать	;;;	to summon, appeal	
признание	;;;	confession, admission	
призвание	;;;	calling, vocation	
прижимать	;;;	to press, clasp (sth to sth)	
приезжать	;;;	to arrive (by transport)	
придавать	;;;	to impart, give (sth to sth)	
пригодный	;;;	useful	
привычный	;;;	customary	
привыкать	;;;	to get used to; get into the habit of	
привозить	;;;	to bring (by transport)	
приводить	;;;	to bring (s.o.); (к +d) lead to	
прививать	;;;	to inoculate; inculcate	
прибывать	;;;	to arrive (formal); (coll) increase	
прибирать	;;;	to tidy up; (coll) take over, pocket	
прибивать	;;;	to nail, fix (to)	
прибегать	;;;	to run up, come running	
прибегать	;;;	to run to; resort to	
претензия	;;;	claim	
прерывать	;;;	to interrupt	
прекрасно	;;;	fine, excellent(ly)	
презрение	;;;	scorn	
презирать	;;;	to despise	
президиум	;;;	presidium	
президент	;;;	president	
предельно	;;;	maximally	
преданный	;;;	devoted	
предавать	;;;	to betray; hand over	
превышать	;;;	to exceed	
пребывать	;;;	to be (swh)	
правление	;;;	government; board (of management)	
правитель	;;;	ruler	
правильно	;;;	correctly	
появление	;;;	appearance	
почтённый	;;;	respected	
почтальон	;;;	postman	
потрясать	;;;	to shake	
потомство	;;;	posterity, descendants	
поступать	;;;	to act; (в +a) enter (organization)	
постройка	;;;	building	
постоянно	;;;	constantly, perpetually	
постигать	;;;	to comprehend; befall	
поставщик	;;;	supplier	
посредине	;;;	in the middle (of)	
поспевать	;;;	to be in time for; ripen (coll), be on time; keep up with	
послушный	;;;	obedient	
пословица	;;;	proverb	
последний	;;;	last	
поскольку	;;;	since, because, in as far as	
посещение	;;;	visit (to), attendance (at)	
посвящать	;;;	to devote, dedicate (sth to sth/s.o.)	
порывисто	;;;	jerkily; suddenly	
поручение	;;;	commission, errand	
поросёнок	;;;	piglet	
порождать	;;;	to beget, engender, generate	
поражение	;;;	defeat	
понимание	;;;	understanding	
понижение	;;;	lowering	
понемногу	;;;	little by little	
помниться	;;;	to be remembered	
помещичий	;;;	landowner’s (adj)	
помещение	;;;	accommodation, premises	
полушубок	;;;	half-length sheepskin coat	
полушарие	;;;	hemisphere	
получение	;;;	receiving	
полотенце	;;;	towel	
полосатый	;;;	striped	
положение	;;;	position	
полностью	;;;	fully, completely	
полковник	;;;	colonel	
политбюро	;;;	Politburo	
покрывать	;;;	to cover (sth with sth)	
покрывало	;;;	cover; bedspread	
покончить	;;;	to finish (with), do away with	
поколение	;;;	generation	
покоиться	;;;	to rest, repose (on)	
поклонник	;;;	admirer	
показание	;;;	testimony; reading (on instrument)	
познавать	;;;	to get to know, experience	
позволять	;;;	to permit (s.o.)	
позавчера	;;;	the day before yesterday	
пожелание	;;;	wish	
подъёмный	;;;	lifting (adj)	
подчинять	;;;	to subordinate, subject (s.o. to s.o. or sth)	
подходить	;;;	to approach; (+d) to suit	
подсобный	;;;	subsidiary, supplementary	
подрывной	;;;	undermining; subversive	
подрывать	;;;	to undermine	
подросток	;;;	juvenile, youth	
подробный	;;;	detailed	
подражать	;;;	to imitate	
подпирать	;;;	to prop up	
подносить	;;;	to take to; (+d) present to, bring	
поднимать	;;;	to raise, lift	
подлинный	;;;	genuine	
подлежать	;;;	to be subject to	
подземный	;;;	underground (adj)	
поджигать	;;;	to set fire to	
поддержка	;;;	support	
подданный	;;;	subject, citizen	
подводный	;;;	underwater (adj)	
подводить	;;;	to lead up; (coll) let (s.o.) down	
подвижный	;;;	mobile, agile	
подвигать	;;;	to move	
подбирать	;;;	to pick up; select	
подбегать	;;;	to run up (to)	
подавлять	;;;	to suppress	
погружать	;;;	to immerse	
поговорка	;;;	saying, proverbial phrase	
поглощать	;;;	to swallow, absorb	
повышение	;;;	rise, increase; promotion	
повторять	;;;	to repeat	
повторный	;;;	repeated	
поведение	;;;	behaviour	
побуждать	;;;	to prompt, induce (s.o. to do sth)	
побережье	;;;	coast	
побеждать	;;;	to defeat, conquer	
постарому	;;;	as before	
поразному	;;;	in different ways	
подругому	;;;	differently	
плотность	;;;	solidity; density	
плоскость	;;;	flatness; plane (surface)	
племянник	;;;	nephew	
племенной	;;;	tribal; thoroughbred	
платформа	;;;	platform	
платёжный	;;;	payment (adj)	
пластинка	;;;	(gramophone) record; flat piece of metal or other material	
пламенный	;;;	burning	
питерский	;;;	St Petersburg (adj) (coll)	
печальный	;;;	sad	
пересадка	;;;	change (of transport); transplant(ation)	
переправа	;;;	crossing; crossing place ford	
переписка	;;;	correspondence	
перемирие	;;;	truce	
пережиток	;;;	survival, relic (of the past)	
передышка	;;;	breathing-space, rest, short break	
передовой	;;;	advanced; progressive	
переделка	;;;	alteration	
переворот	;;;	coup	
перевозка	;;;	transportation	
первичный	;;;	primary	
пенсионер	;;;	pensioner	
пассивный	;;;	passive	
пасмурный	;;;	cloudy, overcast; gloomy	
партийный	;;;	party (adj)	
парламент	;;;	parliament	
парижский	;;;	Parisian	
ощущаться	;;;	to be felt	
ошибочный	;;;	mistaken	
ошибаться	;;;	to make a mistake	
очутиться	;;;	to find oneself	
очертание	;;;	outline	
очередной	;;;	next; regular	
очевидный	;;;	obvious	
оценивать	;;;	to evaluate, appreciate	
охотничий	;;;	hunting (adj)	
охотиться	;;;	to hunt	
охлаждать	;;;	to cool	
оформлять	;;;	to put into proper form	
отчаянный	;;;	desperate	
отцовский	;;;	paternal	
отступать	;;;	to retreat; deviate (from)	
отставать	;;;	to lag behind	
отрицание	;;;	negation	
отреза́ть	;;;	to cut off	
отражение	;;;	reflection	
отравлять	;;;	to poison	
отпускать	;;;	to let go, release	
отпечаток	;;;	imprint	
отопление	;;;	heating	
отношение	;;;	attitude, relation (to); (pl) relations	
открывать	;;;	to open; to discover	
отечество	;;;	fatherland	
отдельный	;;;	separate, individual	
отделение	;;;	department, section	
отвлекать	;;;	to distract	
отверстие	;;;	opening, aperture	
отвергать	;;;	to reject	
осуждение	;;;	condemnation	
осторожно	;;;	carefully, cautiously	
остановка	;;;	stop	
остальной	;;;	the rest (of)	
остальное	;;;	the rest, remainder	
оставлять	;;;	to leave (sth), abandon	
особенный	;;;	special, particular	
основание	;;;	foundation, basis; founding	
оснащение	;;;	equipping; equipment	
освещение	;;;	illumination	
осваивать	;;;	to master	
орудийный	;;;	gun, cannon (adj)	
оранжевый	;;;	orange (adj)	
опущенный	;;;	lowered	
опоздание	;;;	lateness	
описывать	;;;	to describe	
описанный	;;;	described	
опираться	;;;	to lean on	
опережать	;;;	to outstrip; forestall	
опасность	;;;	danger	
опасаться	;;;	to be afraid of	
окружение	;;;	encirclement, surrounding	
окрестный	;;;	surrounding	
окончание	;;;	end, ending	
оккупация	;;;	occupation	
окидывать	;;;	to glance over	
океанский	;;;	oceanic	
оказывать	;;;	to render, give	
озираться	;;;	to look round	
ожидаться	;;;	to be expected	
оживлённо	;;;	animatedly, excitedly	
оживление	;;;	excitement, animation	
одолевать	;;;	to overcome	
одобрение	;;;	approval	
одиночный	;;;	individual, single, solitary	
одинаково	;;;	identically	
одеваться	;;;	to dress	
огорчение	;;;	distress	
оголённый	;;;	bare, exposed	
овладение	;;;	mastery (of)	
обязывать	;;;	to oblige s.o. to do sth	
обязанный	;;;	obliged	
обыденный	;;;	ordinary	
обыватель	;;;	man-in-the-street; philistine	
объяснять	;;;	to explain	
объявлять	;;;	to declare, announce	
общежитие	;;;	hostel	
обсуждать	;;;	to discuss	
обращение	;;;	appeal (to); (c +inst) treatment; circulation	
обработка	;;;	treatment, processing	
обострять	;;;	to intensify, worsen, aggravate	
оборонный	;;;	defence (adj)	
обозрение	;;;	surveying, survey	
обогащать	;;;	to enrich	
обобщение	;;;	generalization	
облигация	;;;	bond	
облегчать	;;;	to lighten; simplify; make easier	
областной	;;;	oblast (adj), provincial	
обитатель	;;;	inhabitant	
обиженный	;;;	offended	
обижаться	;;;	to take offence	
оберегать	;;;	to protect (s.o. from sth)	
обвинение	;;;	accusation	
нуждаться	;;;	to need, be in need of	
нравиться	;;;	to please (s. o.)	
нормально	;;;	normal, OK	
новенький	;;;	brand-new, nice and new	
ничтожный	;;;	worthless	
нисколько	;;;	not at all	
нехороший	;;;	bad	
неустанно	;;;	tirelessly	
неурядица	;;;	confusion (coll)	
неудачный	;;;	unsuccessful	
неудачник	;;;	failure (person)	
несчастье	;;;	misfortune	
неспроста	;;;	with an ulterior motive, not without a reason (coll)	
несметный	;;;	countless	
несложный	;;;	uncomplicated	
несколько	;;;	a few, some	
неприятно	;;;	(it’s) unpleasant; unpleasantly	
непонятно	;;;	incomprehensible/ly	
неполадка	;;;	fault, defect	
необычный	;;;	unusual	
ненадолго	;;;	not for long	
ненависть	;;;	hate	
немыслимо	;;;	unthinkably	
неминуемо	;;;	inevitably	
некоторый	;;;	some, a certain	
некоторые	;;;	some, certain (people)	
неистовый	;;;	frenzied	
неизменно	;;;	invariably	
неизбежно	;;;	inevitably	
незаметно	;;;	imperceptibly	
незаконно	;;;	illegally	
незадолго	;;;	not long before	
недоверие	;;;	mistrust	
недалёкий	;;;	near; dim, dull-witted	
невысокий	;;;	low, short	
невольный	;;;	involuntary	
невидимый	;;;	invisible	
невесёлый	;;;	joyless	
неведомый	;;;	unknown	
небывалый	;;;	unprecedented; (coll) inexperienced	
небосклон	;;;	horizon	
небольшой	;;;	small	
нашествие	;;;	invasion	
начинание	;;;	undertaking, initiative	
начальный	;;;	initial, primary	
начальник	;;;	head, boss	
натворить	;;;	to get up to, do (sth bad) (coll)	
наступать	;;;	to advance; begin; tread on; come (of time, seasons)	
настоящий	;;;	real; present	
настоящее	;;;	the present	
настолько	;;;	so much	
наставник	;;;	mentor, tutor	
наставать	;;;	to come (of seasons etc.)	
наследник	;;;	heir	
насколько	;;;	how much; as much	
население	;;;	population	
насекомое	;;;	insect	
нарушение	;;;	violation, offence	
нарекание	;;;	reprimand	
нарастать	;;;	to grow (on); increase	
наполнять	;;;	to fill	
наподобие	;;;	like, resembling	
наперекор	;;;	contrary, counter (to), in defiance (of)	
нападение	;;;	attack	
намерение	;;;	intention	
накрывать	;;;	to cover; lay	
наказание	;;;	punishment	
наилучший	;;;	the best	
назначать	;;;	to appoint (s.o. as sth); fix, arrange	
надоедать	;;;	to bore	
надлежать	;;;	it is necessary (= надо)	
надеяться	;;;	to hope	
нагрянуть	;;;	to come unexpectedly (coll)	
нагревать	;;;	to warm, heat	
наглядный	;;;	clear, graphic	
навстречу	;;;	towards	
наверняка	;;;	for sure; safely, without taking risks	
наблюдать	;;;	to observe, watch	
мыслитель	;;;	thinker	
мысленный	;;;	mental	
мраморный	;;;	marble (adj)	
мороженое	;;;	ice-cream	
моральный	;;;	moral	
монополия	;;;	monopoly	
монастырь	;;;	monastery; convent	
молодость	;;;	youth	
множество	;;;	large number	
милостыня	;;;	alms	
миллионер	;;;	millionaire	
миллиметр	;;;	millimetre	
миленький	;;;	sweet, nice, dear	
микроскоп	;;;	microscope	
мещанство	;;;	petty bourgeoisie, lower middle-class	
мещанский	;;;	bourgeois, petty bourgeois; narrow-minded	
местность	;;;	locality, district	
медленный	;;;	slow	
мгновенно	;;;	instantaneously, instantly	
мгновение	;;;	moment	
математик	;;;	mathematician	
массивный	;;;	massive	
мальчишка	;;;	boy, small boy (coll)	
малиновый	;;;	raspberry (adj)	
маленький	;;;	small	
любопытно	;;;	curiously	
лошадиный	;;;	equine, horse (adj)	
лицемерие	;;;	hypocrisy	
лихорадка	;;;	fever; rash	
литератор	;;;	literary man, man of letters	
лекарство	;;;	medicine	
лейтенант	;;;	lieutenant	
легальный	;;;	legal	
латинский	;;;	Latin (adj)	
кустарник	;;;	bushes, shrubs	
ктонибудь	;;;	anyone	
крутиться	;;;	to turn, spin	
кружиться	;;;	to whirl, spin round; begin to spin	
крошечный	;;;	tiny	
крохотный	;;;	tiny (coll)	
красавица	;;;	beautiful woman	
крайность	;;;	extreme	
космонавт	;;;	cosmonaut	
косвенный	;;;	oblique	
корыстный	;;;	self-interested, mercenary, selfish	
коробочка	;;;	small box	
кормиться	;;;	(p по-) to be fed, eat; (p про-) live on	
кончаться	;;;	to end, come to an end	
контролёр	;;;	inspector	
континент	;;;	continent	
конкурент	;;;	competitor	
конкретно	;;;	concretely, specifically	
компьютер	;;;	computer	
коммунист	;;;	communist	
коммунизм	;;;	communism	
комендант	;;;	warden (of hostel); commandant, governor	
командный	;;;	command (adj), commanding	
колхозный	;;;	collective farm (adj)	
колхозник	;;;	collective farmer	
коллекция	;;;	collection	
коллектив	;;;	group, team	
колебание	;;;	hesitation	
когдалибо	;;;	at any time; ever	
клетчатый	;;;	checked	
классовый	;;;	class (political) (adj)	
кланяться	;;;	to bow	
китайский	;;;	Chinese	
кирпичный	;;;	brick (adj)	
кинотеатр	;;;	cinema	
килограмм	;;;	kilogram	
квитанция	;;;	receipt	
каторжный	;;;	hard-labour (adj)	
категория	;;;	category	
карьерист	;;;	careerist	
картофель	;;;	potatoes	
караулить	;;;	to guard; lie in wait for	
капризный	;;;	capricious	
канадский	;;;	Canadian (adj)	
календарь	;;;	calendar	
какойлибо	;;;	any	
какнибудь	;;;	somehow; anyhow; sometime (in the future)	
итальянец	;;;	Italian	
истечение	;;;	outflow; expiry, termination	
испытание	;;;	test, trial; ordeal	
испуганно	;;;	fearfully	
исполнять	;;;	to carry out, fulfil; perform	
исподволь	;;;	gradually (coll)	
испарение	;;;	evaporation	
испанский	;;;	Spanish (adj)	
искушение	;;;	temptation	
искусство	;;;	art	
искренний	;;;	sincere	
исключать	;;;	to exclude	
интонация	;;;	intonation	
интересно	;;;	interestingly; it is interesting	
инстанция	;;;	instance, stage (in legal proceedings); department	
инспекция	;;;	inspection	
инспектор	;;;	inspector	
индустрия	;;;	industry	
индийский	;;;	Indian	
инвентарь	;;;	equipment; inventory	
имущество	;;;	property, possessions	
импортный	;;;	imported	
император	;;;	emperor	
именовать	;;;	to name	
изумлённо	;;;	with amazement	
изумление	;;;	amazement	
измерение	;;;	measurement; dimension	
изменение	;;;	change, alteration	
изложение	;;;	exposition	
извлекать	;;;	to extract	
известный	;;;	well-known	
избранный	;;;	selected	
избавлять	;;;	to save (from)	
идеология	;;;	ideology	
идеальный	;;;	ideal (adj)	
золочёный	;;;	gilded	
значиться	;;;	to be, figure	
знакомить	;;;	to introduce (s.o. to s.o. or sth)	
земельный	;;;	land (adj)	
звёздочка	;;;	small star; asterisk	
заявление	;;;	announcement; application	
захватчик	;;;	invader	
заурядный	;;;	ordinary, mediocre	
затоплять	;;;	to light (stove); to flood, sink	
затворять	;;;	to close	
затаивать	;;;	to conceal	
засыпа́ть	;;;	to fill sth, cover sth with sth	
застывший	;;;	congealed; frozen	
застывать	;;;	to harden, thicken, congeal; (coll) become stiff	
заставать	;;;	to find (a person)	
заслонять	;;;	to shield, conceal, screen	
заседание	;;;	meeting, conference, session	
зарастать	;;;	to become overgrown; heal (of wound)	
заработок	;;;	earnings	
запускать	;;;	to launch, throw; start up; thrust; start	
запрягать	;;;	to harness	
запрещать	;;;	(+d) to forbid (s.o.); (+a) ban (sth)	
заполнять	;;;	to fill in, fill up	
занавеска	;;;	curtain	
замкнутый	;;;	reserved, unsociable; secluded, private	
замечание	;;;	remark	
замерзать	;;;	to freeze	
закрывать	;;;	to close, shut; to cover	
заключать	;;;	to conclude; enclose; imprison	
зазвенеть	;;;	to begin to ring	
задумчиво	;;;	thoughtfully, pensively	
загробный	;;;	beyond the grave	
заготовка	;;;	state order (for goods); stocking up	
загорелый	;;;	suntanned	
заголовок	;;;	title, heading	
загадочно	;;;	mysteriously	
заводской	;;;	factory (adj)	
зависимый	;;;	dependent	
завершать	;;;	to complete	
заведение	;;;	institution	
заботливо	;;;	solicitously	
журналист	;;;	journalist	
жмуриться	;;;	to screw up one’s eyes; half-close one’s eyes	
житейский	;;;	worldly; everyday	
жизненный	;;;	vital; life (adj)	
жемчужина	;;;	pearl	
ежедневно	;;;	every day	
евангелие	;;;	gospel	
дружеский	;;;	friendly	
древность	;;;	antiquity	
древесный	;;;	wood (adj)	
древесина	;;;	timber	
доступный	;;;	accessible	
достояние	;;;	property	
достойный	;;;	worthy	
достигать	;;;	to achieve, reach	
доставать	;;;	to get, obtain; take out; reach	
досрочный	;;;	early, ahead of schedule	
допускать	;;;	to admit (s.o. to); assume; allow	
донесение	;;;	report, dispatch	
должность	;;;	post, job	
докладчик	;;;	speaker (at conference)	
довольный	;;;	satisfied, pleased (with)	
довоенный	;;;	prewar	
добротный	;;;	high-quality	
добавлять	;;;	to add (sth to sth)	
дистанция	;;;	distance	
дискуссия	;;;	discussion	
директива	;;;	directive	
диктовать	;;;	to dictate	
диктатура	;;;	dictatorship	
детальный	;;;	detailed	
держаться	;;;	to hold on (to); (+g) keep to	
делегация	;;;	delegation	
дежурство	;;;	(period of) duty	
девятьсот	;;;	nine hundred	
девяносто	;;;	ninety	
двигаться	;;;	to move	
двигатель	;;;	motor, engine	
двадцатый	;;;	twentieth	
грузиться	;;;	to get on board, embark	
грохотать	;;;	to thunder, rumble	
громадный	;;;	enormous	
грозиться	;;;	to threaten (coll)	
греческий	;;;	Greek (adj)	
грамотный	;;;	literate	
гражданка	;;;	citizen (f)	
гражданин	;;;	citizen	
гостиница	;;;	hotel	
госпиталь	;;;	(military) hospital	
горожанин	;;;	town-dweller	
городской	;;;	urban, town (adj)	
горничная	;;;	maid (servant)	
гордиться	;;;	to be proud of	
годовщина	;;;	anniversary	
глубинный	;;;	deep; deep-water; remote	
глинистый	;;;	clay (adj)	
гласность	;;;	openness	
гимназист	;;;	grammar-school pupil	
геройство	;;;	heroism	
геройский	;;;	heroic	
география	;;;	geography	
гденибудь	;;;	anywhere	
выяснение	;;;	explanation	
вычислять	;;;	to calculate	
вытянутый	;;;	stretched	
вытеснять	;;;	to force out, displace	
выступать	;;;	to appear in public; protrude; to speak (publicly)	
вырастать	;;;	to grow, increase	
выражение	;;;	expression	
выработка	;;;	working-out; production	
выпускник	;;;	final-year student; graduate; school-leaver	
выпускать	;;;	to release	
выполнять	;;;	to carry out, fulfil	
вынуждать	;;;	to force, compel	
выключать	;;;	to switch off	
выдвигать	;;;	to move out; put forward	
выгружать	;;;	to unload	
выглядеть	;;;	to look	
вчерашний	;;;	yesterday’s	
втягивать	;;;	to pull in	
вторичный	;;;	second; secondary	
вторжение	;;;	invasion	
всяческий	;;;	all kinds of (coll)	
встречный	;;;	oncoming	
встречать	;;;	to meet	
вставлять	;;;	to insert	
вскрывать	;;;	to unseal; disclose; dissect; open; reveal	
всенощная	;;;	night service (church)	
всемирный	;;;	world, worldwide	
всемерный	;;;	utmost, every kind of	
вселённая	;;;	universe	
врываться	;;;	to burst in	
временный	;;;	temporary	
вредитель	;;;	pest	
вращаться	;;;	to revolve	
вражеский	;;;	enemy (adj)	
враждебно	;;;	hostilely	
восточный	;;;	eastern	
восстание	;;;	uprising	
восемьсот	;;;	eight hundred	
воровство	;;;	stealing	
вооружать	;;;	to arm	
волшебный	;;;	magic	
волосатый	;;;	hairy	
волновать	;;;	to worry, excite, disturb (s.o.)	
возражать	;;;	to object (to)	
возникать	;;;	to arise	
возмущать	;;;	to anger, outrage	
возможный	;;;	possible	
возмездие	;;;	retribution	
возлагать	;;;	to lay on	
воззрение	;;;	opinion, outlook	
воззвание	;;;	appeal	
воздушный	;;;	air (adj)	
возводить	;;;	to raise	
водружать	;;;	to hoist, erect	
водоросль	;;;	seaweed	
вовлекать	;;;	to involve (s.o. in sth)	
внешность	;;;	exterior	
внезапный	;;;	sudden	
внедрение	;;;	inculcation; putting into practice	
включение	;;;	inclusion	
виноватый	;;;	guilty, to blame	
виднеться	;;;	to be visible	
видимость	;;;	visibility; appearance	
взыскание	;;;	penalty, punishment	
вещество́	;;;	substance, matter	
вечеринка	;;;	party	
ветвиться	;;;	to branch	
вестибюль	;;;	lobby	
верховный	;;;	supreme	
вертеться	;;;	to rotate	
вероятный	;;;	probable	
велосипед	;;;	bicycle	
величавый	;;;	majestic	
ведомство	;;;	department (of government)	
ведомость	;;;	list, register	
вдребезги	;;;	to pieces	
вводиться	;;;	to be introduced, brought in	
бюллетень	;;;	bulletin; ballot-paper; medical certificate	
бухгалтер	;;;	bookkeeper	
бутылочка	;;;	small bottle	
бутерброд	;;;	(open) sandwich	
буржуазия	;;;	bourgeoisie	
буквально	;;;	literally	
будничный	;;;	weekday (adj); dull, everyday	
брошенный	;;;	abandoned	
бросаться	;;;	to rush, throw oneself	
бронзовый	;;;	bronze (adj)	
бриллиант	;;;	(cut) diamond	
брезгливо	;;;	squeamishly	
борющийся	;;;	struggling	
бородатый	;;;	bearded	
бормотать	;;;	to mumble	
бормотать	;;;	to mutter	
большевик	;;;	Bolshevik	
болтаться	;;;	to dangle; hang about (coll)	
богатство	;;;	wealth, riches	
близиться	;;;	to draw near	
блестящий	;;;	shining, bright, brilliant	
блаженный	;;;	blessed	
благодаря	;;;	thanks to	
биография	;;;	biography	
бизнесмен	;;;	businessman	
бешенство	;;;	fury; rabies	
бесстыдно	;;;	shamelessly	
бесспорно	;;;	indisputably	
бессонный	;;;	sleepless	
бесследно	;;;	without trace	
бесплатно	;;;	free (without payment)	
беспечный	;;;	carefree, unconcerned	
берёзовый	;;;	birch (adj)	
береговой	;;;	coastal	
белокурый	;;;	blond, fair-haired	
безмолвно	;;;	silently	
безлюдный	;;;	lacking people, unfrequented	
беззвучно	;;;	soundlessly	
бездушный	;;;	heartless	
бездонный	;;;	bottomless	
бездомный	;;;	homeless	
бархатный	;;;	velvet (adj)	
баррикада	;;;	barricade	
аудитория	;;;	auditorium	
атмосфера	;;;	atmosphere	
атаковать	;;;	to attack	
ассамблея	;;;	assembly	
армянский	;;;	Armenian (adj)	
армейский	;;;	army (adj)	
алкоголик	;;;	alcoholic (noun)	
аккуратно	;;;	thoroughly; tidily	
азиатский	;;;	Asian (adj)	
агентство	;;;	agency	
авторский	;;;	author’s	
авторитет	;;;	authority	
авианосец	;;;	aircraft carrier	
абсолютно	;;;	absolutely	
царапнуть	;;;	to scratch	
хлестнуть	;;;	to whip	
хихикнуть	;;;	to giggle	
утвердить	;;;	to confirm	
устранить	;;;	to remove	
успокоить	;;;	to calm, soothe, quieten	
усмотреть	;;;	to see (sth in sth), interpret as	
усилиться	;;;	to grow stronger, increase	
упрекнуть	;;;	to accuse (s.o. of), reproach	
упомянуть	;;;	to mention	
упереться	;;;	to lean (against); come up against	
уменьшить	;;;	to reduce	
уложиться	;;;	to pack one’s things; (в +a) fit (into sth)	
указаться	;;;	to be indicated	
удостоить	;;;	to award s.o. sth; (+a +inst) favour s.o. with sth	
удивиться	;;;	to be surprised (at)	
удалиться	;;;	to move away, withdraw	
уговорить	;;;	to persuade, urge	
увеличить	;;;	to increase (sth)	
убедиться	;;;	to convince oneself, become sure (of sth)	
тронуться	;;;	to set off	
столкнуть	;;;	to push off; to knock together	
сразиться	;;;	to fight	
сработать	;;;	to work (function) properly	
спрыгнуть	;;;	to jump off	
сохранить	;;;	to keep, preserve	
составить	;;;	to make up, compose, constitute	
сослаться	;;;	to refer to, quote; plead (give as an excuse)	
соскочить	;;;	to jump off	
сорваться	;;;	to break away; (coll) fail, go wrong	
соорудить	;;;	to build, construct	
сократить	;;;	to shorten; reduce	
сознаться	;;;	to confess	
создаться	;;;	to be created; arise	
соединить	;;;	to unite, join	
согнуться	;;;	to bend; stoop	
совершить	;;;	to accomplish, complete	
собраться	;;;	to gather; intend to; be about to	
снизиться	;;;	to come down, fall, go down	
снарядить	;;;	to equip	
смутиться	;;;	to be embarrassed	
смириться	;;;	to submit; resign oneself (to)	
смешаться	;;;	to mix, mingle; get mixed up	
смениться	;;;	to be replaced	
случиться	;;;	to happen	
сложиться	;;;	to take shape; club together	
скопиться	;;;	to accumulate	
скатиться	;;;	to roll down	
сказаться	;;;	to have an effect (на +pr) on; proclaim oneself	
связаться	;;;	to get in touch with; communicate with; (coll) get involved with	
свистнуть	;;;	to whistle	
свергнуть	;;;	to overthrow	
отомстить	;;;	to take revenge (on s.o. for sth)	
прожевать	;;;	to chew	
разделить	;;;	to divide, share	
разбудить	;;;	to wake, rouse	
пробудить	;;;	to awaken	
почистить	;;;	to clean	
начертить	;;;	to draw, draw up	
почернеть	;;;	to turn black	
похлопать	;;;	to slap, clap	
похвалить	;;;	to praise	
научиться	;;;	to learn (to do sth)	
поужинать	;;;	to have supper	
потрепать	;;;	to rumple, tousle; pat; (coll) natter	
потратить	;;;	to spend	
потерпеть	;;;	to be patient; endure	
потемнеть	;;;	to get dark, go dark	
сотворить	;;;	to create	
потаскать	;;;	to drag	
сосчитать	;;;	to count	
постучать	;;;	to knock (at)	
построить	;;;	to build	
выстирать	;;;	to wash (clothes); rub off	
постареть	;;;	to grow old	
поставить	;;;	to place, put (in a standing position)	
поспорить	;;;	to argue	
поспешить	;;;	to hurry	
послушать	;;;	to listen to	
послужить	;;;	to serve	
поскакать	;;;	to skip; gallop	
порваться	;;;	to tear, burst; want strongly (to do sth)	
вырастить	;;;	to grow, raise	
попросить	;;;	to request, ask (s.o. to do sth)	
испортить	;;;	to spoil, damage	
вспомнить	;;;	to remember	
поползать	;;;	to crawl about	
наплевать	;;;	to spit; not to give a damn about	
заплатить	;;;	to pay (s.o. for sth)	
заплакать	;;;	to cry, weep, p: to begin to cry	
поплавать	;;;	to swim; sail	
пообещать	;;;	to promise (sth to s.o)	
пообедать	;;;	to dine, have a meal	
понестись	;;;	to rush	
помчаться	;;;	to rush	
помолчать	;;;	to be silent for a while	
замолчать	;;;	to be silent; p: to fall silent	
помедлить	;;;	to delay, hesitate	
польстить	;;;	to flatter	
покрыться	;;;	to lie (in), be concealed (in)	
закрутить	;;;	to twist	
закричать	;;;	to shout	
накормить	;;;	to feed	
позвонить	;;;	to ring, telephone (s.o.)	
зазвенеть	;;;	to ring; (+inst) jingle	
задрожать	;;;	to shiver, start shaking	
подраться	;;;	to fight; have a fight with	
подохнуть	;;;	to die (of animals)	
погрузить	;;;	to load	
погреться	;;;	to warm os	
загреметь	;;;	to roar, resound	
поглядеть	;;;	to look (at)	
заглушить	;;;	to drown (a sound)	
погладить	;;;	to stroke; iron	
погибнуть	;;;	to perish	
погаснуть	;;;	to go out, be extinguished, fade	
повредить	;;;	to harm, damage	
повертеть	;;;	to twirl	
побродить	;;;	to wander	
побриться	;;;	to shave	
побояться	;;;	to be afraid, not dare to	
поболтать	;;;	to shake, stir; (coll) chatter	
спутаться	;;;	to get mixed up	
сломаться	;;;	to break; (coll) put on airs; (coll) be awkward, make difficulties	
окрепнуть	;;;	to get stronger, get stronger	
сделаться	;;;	to become; be done	
своровать	;;;	to steal	
увидеться	;;;	to see one another, see each other	
свалиться	;;;	to fall down	
яростный	;;;	furious, frenzied	
японский	;;;	Japanese (adj)	
янтарный	;;;	amber (adj)	
языковой	;;;	linguistic	
ядовитый	;;;	poisonous; venomous	
являться	;;;	to appear	
являться	;;;	to be (sth) (formal)	
этикетка	;;;	label	
этажерка	;;;	bookcase	
эмигрант	;;;	emigrant, emigre	
экономно	;;;	economically, thriftily	
эволюция	;;;	evolution	
щуриться	;;;	to screw up one’s eyes, narrow one’s eyes	
щекотать	;;;	to tickle	
щедрость	;;;	generosity	
штатский	;;;	civilian (adj) (not military)	
шовинизм	;;;	chauvinism	
школьный	;;;	school (adj)	
школьник	;;;	schoolboy	
шкатулка	;;;	casket, box	
шириться	;;;	to spread, expand	
шестьсот	;;;	six hundred	
шестёрка	;;;	six; group of six	
шершавый	;;;	rough (to the touch)	
шёлковый	;;;	silk (adj)	
шевелить	;;;	to stir, move	
шведский	;;;	Swedish	
шататься	;;;	to sway; wobble; (coll) loaf about	
чутьчуть	;;;	a little bit, just a little (coll)	
чудовище	;;;	monster	
чудиться	;;;	to seem, imagine (coll)	
чудесный	;;;	wonderful	
чугунный	;;;	cast-iron (adj)	
чреватый	;;;	fraught (with)	
читатель	;;;	reader	
чиновник	;;;	bureaucrat; official	
четверть	;;;	quarter	
четвёрка	;;;	four; group of four	
чересчур	;;;	too, excessive(ly)	
частушка	;;;	chastushka, witty rhyme	
частично	;;;	partially	
цыплёнок	;;;	chicken	
ценность	;;;	value	
целовать	;;;	to kiss	
цветущий	;;;	blooming; flourishing	
царапать	;;;	to scratch	
художник	;;;	artist	
хрусталь	;;;	crystal, cut glass	
хранение	;;;	keeping; storage	
хохотать	;;;	to guffaw, laugh loudly	
хотеться	;;;	to want, feel like; p: to start to want	
хоронить	;;;	to bury	
холостой	;;;	unmarried	
холодный	;;;	cold	
хоккеист	;;;	hockey player	
хлестать	;;;	to whip	
хлебнуть	;;;	to drink (coll)	
хихикать	;;;	to giggle	
хитрость	;;;	cunning, guile (noun); ruse; (coll) ingenuity	
характер	;;;	character	
форточка	;;;	ventilation window	
формация	;;;	stage of development; formation	
фельетон	;;;	satirical article	
фантазия	;;;	imagination	
учащийся	;;;	student (active participle)	
участник	;;;	participant	
утренний	;;;	morning (adj)	
уточнять	;;;	to make more precise; verify	
утешение	;;;	comfort, solace	
уступать	;;;	to yield, give up, cede (sth to s.o.)	
уставать	;;;	to tire	
успешный	;;;	successful	
успевать	;;;	to have time, to be in time	
услыхать	;;;	to hear (= услышать р)	
условный	;;;	conventional; conditional; tentative	
ускорять	;;;	to accelerate	
усиленно	;;;	intensively	
усиление	;;;	strengthening	
усеивать	;;;	to strew, dot, litter (sth with sth)	
упускать	;;;	to let slip; miss	
упрекать	;;;	to accuse (s.o. of), reproach	
упорство	;;;	persistence; obstinacy	
унижение	;;;	humiliation	
умножать	;;;	to multiply	
улучшать	;;;	to improve	
украшать	;;;	to adorn	
украдкой	;;;	stealthily	
указание	;;;	indication; instruction	
узнавать	;;;	to recognize; find out	
удобство	;;;	convenience	
удивлять	;;;	to surprise	
удаление	;;;	removal	
угрожать	;;;	to threaten (s.o.)	
угождать	;;;	to please; (coll) get into, end up (p only)	
угнетать	;;;	to oppress	
увлекать	;;;	to carry away; fascinate, distract	
уверенно	;;;	confidently	
уважение	;;;	respect	
убийство	;;;	murder	
убеждать	;;;	to convince; persuade	
тянуться	;;;	to stretch; stretch os	
тюремный	;;;	prison (adj)	
турецкий	;;;	Turkish	
туманный	;;;	misty	
тряхнуть	;;;	to shake	
трястись	;;;	to shake; tremble	
труженик	;;;	toiler, worker	
трудовой	;;;	labour, work (adj)	
трубочка	;;;	small pipe, tube	
тропинка	;;;	path	
тридцать	;;;	thirty	
трибунал	;;;	tribunal	
тревожно	;;;	anxiously	
трамплин	;;;	spring-board; ski-jump	
традиция	;;;	tradition	
трагедия	;;;	tragedy	
точность	;;;	precision; punctuality	
тоскливо	;;;	drearily	
торопить	;;;	to hurry (s.o.)	
торговый	;;;	trade (adj)	
торговля	;;;	trade	
торговец	;;;	trader	
тонкость	;;;	thinness; subtlety	
томиться	;;;	to languish, suffer	
толковый	;;;	clever, sensible; clear, comprehensible; (словарь) explanatory	
товарный	;;;	goods (adj)	
тихонько	;;;	quietly (coll)	
типичный	;;;	typical	
техникум	;;;	technical college	
тетрадка	;;;	exercise book	
теряться	;;;	to get lost; panic	
теряться	;;;	to get lost; lose one’s head	
терпение	;;;	patience	
теплоход	;;;	motor-vessel, motor-ship	
телескоп	;;;	telescope	
телеграф	;;;	telegraph	
творение	;;;	creation	
твердить	;;;	to repeat	
танковый	;;;	tank (adj)	
табличка	;;;	door-plate, nameplate, plaque	
таблетка	;;;	pill	
табачный	;;;	tobacco (adj)	
сыпаться	;;;	to pour out	
съезжать	;;;	to drive down; (coll) slip	
сходство	;;;	similarity	
сущность	;;;	essence	
существо	;;;	essence; being, creature	
суматоха	;;;	confusion, turmoil	
суконный	;;;	cloth (adj)	
суждение	;;;	opinion, judgement	
судебный	;;;	judicial, legal	
стропило	;;;	rafter, roof beam	
стройный	;;;	harmonious; well-proportioned	
строение	;;;	construction	
стрелять	;;;	to shoot, fire (at)	
стрелять	;;;	to shoot (at)	
стрельба	;;;	shooting	
страшный	;;;	terrible, dreadful	
страстно	;;;	passionately	
странный	;;;	strange	
странник	;;;	wanderer	
страница	;;;	page	
страдать	;;;	to suffer	
столовый	;;;	table (adj)	
столовая	;;;	dining-room; canteen, refectory	
столетие	;;;	century	
стержень	;;;	pivot, rod	
старшина	;;;	sergeant-major; leader	
старушка	;;;	old woman	
старость	;;;	old age	
старичок	;;;	(little) old man	
стальной	;;;	steel (adj)	
средство	;;;	means; (pl) resources	
сражение	;;;	battle	
спускать	;;;	to lower; release	
спокойно	;;;	calmly, quietly	
сплошной	;;;	continuous	
спиртной	;;;	alcoholic (adj)	
спасение	;;;	salvation, rescue	
сочинять	;;;	to compose, make up	
сочетать	;;;	to combine (sth with sth)	
сосулька	;;;	icicle	
состоять	;;;	to consist (of)	
сосновый	;;;	pine (adj)	
соседний	;;;	neighbouring, next	
соперник	;;;	rival	
сообщать	;;;	to communicate (sth to s.o.)	
сомнение	;;;	doubt	
солнышко	;;;	sun (dim)	
солидный	;;;	solid, sound; reliable	
солдатик	;;;	toy soldier	
созывать	;;;	to convene	
сознание	;;;	consciousness	
создание	;;;	creation; creature	
согласно	;;;	according to	
согласие	;;;	agreement	
советник	;;;	adviser	
совестно	;;;	ashamed	
собрание	;;;	meeting, collection	
собирать	;;;	to gather, collect	
сношение	;;;	intercourse	
сноровка	;;;	knack, skill	
снижение	;;;	lowering	
снежинка	;;;	snowflake	
снабжать	;;;	to supply (s.o. with sth)	
смятение	;;;	confusion, disarray, panic	
смущённо	;;;	with embarrassment	
смущение	;;;	embarrassment	
смотреть	;;;	to watch; (на +a) look (at)	
смеяться	;;;	to burst out laughing	
смеяться	;;;	to laugh	
смеяться	;;;	to laugh (at)	
смертный	;;;	fatal; mortal	
смелость	;;;	bravery, courage	
случайно	;;;	by chance	
служение	;;;	service (to), serving	
служащий	;;;	office worker, white-collar worker	
сложение	;;;	build, composition; addition (arithmetic)	
словечко	;;;	word (coll)	
слабость	;;;	weakness	
скрывать	;;;	to hide, conceal	
скромный	;;;	modest	
скрипеть	;;;	to squeak, creak, crunch	
скорость	;;;	speed	
скорлупа	;;;	shell	
скорбный	;;;	(grammatical term) mournful	
склонять	;;;	to bend, bow	
склонный	;;;	inclined (to)	
сквозняк	;;;	draught	
сквозной	;;;	through (adj)	
скверный	;;;	lousy	
скважина	;;;	chink, hole	
скатерть	;;;	tablecloth	
скамейка	;;;	bench	
ситуация	;;;	situation	
симпатия	;;;	liking (for s.o.)	
сигарета	;;;	cigarette	
сетовать	;;;	to lament, complain (about)	
серьёзно	;;;	seriously	
серийный	;;;	serial	
середина	;;;	middle	
сердитый	;;;	angry	
сентябрь	;;;	September	
сенсация	;;;	sensation	
семейный	;;;	family (adj)	
сельский	;;;	rural, country	
северный	;;;	north, northern	
сдвигать	;;;	to shift	
сгорание	;;;	combustion	
свойство	;;;	characteristic, property	
свободно	;;;	freely	
свистеть	;;;	to whistle	
свирепый	;;;	ferocious	
свинство	;;;	swinish trick (coll)	
свидание	;;;	meeting, rendezvous	
светский	;;;	(high) society (adj); secular	
световой	;;;	light (adj, as in ‘light year’)	
сверкать	;;;	to sparkle	
свергать	;;;	to overthrow	
свежесть	;;;	freshness	
сведение	;;;	information, reduction	
сахарный	;;;	sugary	
салфетка	;;;	napkin; tissue; serviette	
садиться	;;;	to sit down; get into (transport)	
рыночный	;;;	market (adj)	
рушиться	;;;	to collapse	
ручаться	;;;	to vouch for	
рукоятка	;;;	handle	
рукопись	;;;	manuscript	
рукавица	;;;	mitten, glove (without fingers)	
ругаться	;;;	to swear; (c +inst) (coll) have a row with	
ругаться	;;;	to swear	
розыгрыш	;;;	(lottery) draw; practical joke	
рождение	;;;	birth	
родитель	;;;	parent	
рисовать	;;;	to draw	
ринуться	;;;	to rush, charge, dash	
решающий	;;;	deciding, decisive	
решаться	;;;	to make up one's mind (to); to bring os (to); dare, risk; be decided	
ресторан	;;;	restaurant	
репортёр	;;;	reporter	
репортаж	;;;	reporting	
режиссёр	;;;	producer (theatre), director (cinema)	
редкость	;;;	rarity	
редакция	;;;	editorial office; editing	
редактор	;;;	editor	
ревность	;;;	jealousy	
ревнивый	;;;	jealous	
реальный	;;;	real; realistic	
растущий	;;;	growing	
растение	;;;	plant	
рассудок	;;;	reason, ability to think	
расстрел	;;;	execution (by firing squad)	
расправа	;;;	reprisal; harsh treatment; punishment	
расписка	;;;	receipt	
раковина	;;;	(sea)shell; sink, wash-basin	
ракетный	;;;	rocket (adj)	
районный	;;;	regional, district (adj)	
разумный	;;;	sensible	
разорять	;;;	to ruin	
различие	;;;	difference	
разевать	;;;	to gape (coll)	
раздумье	;;;	meditation, thought	
раздолье	;;;	expanse, open space; freedom	
разговор	;;;	conversation	
развитой	;;;	developed, mature	
развитие	;;;	development	
разведка	;;;	intelligence service; reconnaissance	
разбитый	;;;	broken	
радужный	;;;	iridescent; radiant	
радостно	;;;	joyfully	
радовать	;;;	to gladden, please	
работник	;;;	worker, s.o. who works	
работать	;;;	to work, work for a while	
пятиться	;;;	to back away, step back	
пьянство	;;;	drunkenness	
пытаться	;;;	to attempt	
пылающий	;;;	flaming, blazing	
пушистый	;;;	fluffy, downy	
путаться	;;;	to get mixed up	
путаница	;;;	confusion, mix-up	
пуговица	;;;	button	
пугаться	;;;	to take fright (at)	
прощение	;;;	pardon	
прощание	;;;	farewell, parting	
прохожий	;;;	passer-by	
прохвост	;;;	scoundrel (coll)	
профсоюз	;;;	trade union	
протяжно	;;;	slowly, lingeringly; with a drawl	
протокол	;;;	protocol; minutes (of meeting)	
противно	;;;	disgusting(ly)	
простыня	;;;	sheet (bedding)	
простота	;;;	simplicity	
проспект	;;;	avenue (wide street)	
пропасть	;;;	precipice, abyss	
промысел	;;;	trade, business	
прокурор	;;;	prosecutor	
произвол	;;;	arbitrariness, abuse of power	
прозвище	;;;	nickname	
продавец	;;;	salesman, shop assistant	
прогулка	;;;	walk; outing	
прогресс	;;;	progress	
проверка	;;;	check(ing), inspection	
проблема	;;;	problem	
приятный	;;;	pleasant	
приятель	;;;	friend	
причёска	;;;	hairstyle	
прихожая	;;;	entrance hall	
приучать	;;;	to train (to do sth)	
присущий	;;;	inherent (in)	
пристань	;;;	jetty, pier, wharf	
прислуга	;;;	servants	
приписка	;;;	(written) addition	
припадок	;;;	fit, attack	
принятый	;;;	accepted	
принятие	;;;	taking, acceptance	
примерно	;;;	approximately	
приманка	;;;	bait; inducement	
прилично	;;;	decently	
прилавок	;;;	counter (in shop)	
приёмный	;;;	reception (adj); adopted	
приёмник	;;;	radio set	
приёмная	;;;	waiting-room	
приезжий	;;;	non-resident, passing through, visiting; (as noun) newcomer, visitor	
пригород	;;;	suburb	
приговор	;;;	verdict, sentence	
привычно	;;;	in the customary way, as usual	
привычка	;;;	habit	
прибытие	;;;	arrival (bookish)	
премьера	;;;	premiere, first night	
прелесть	;;;	charm	
предание	;;;	legend	
преграда	;;;	obstacle	
практика	;;;	practice	
праздник	;;;	holiday, festival	
правящий	;;;	ruling (adj)	
пояснять	;;;	to explain	
почтовый	;;;	postal, mail (adj)	
почтение	;;;	respect	
почитать	;;;	i: to respect; p: to read a little	
почётный	;;;	respected	
почемуто	;;;	for some reason	
похороны	;;;	funeral	
походить	;;;	to resemble	
похмелье	;;;	hangover	
потирать	;;;	to rub	
посылать	;;;	to send	
поступок	;;;	action, act	
поставка	;;;	delivery	
поспешно	;;;	hastily	
поскорее	;;;	a little faster; hurry up!	
посещать	;;;	to visit (a place)	
порывать	;;;	to tear; break off	
поручать	;;;	to entrust sth to s.o.	
портфель	;;;	briefcase	
портовый	;;;	port (adj)	
порочный	;;;	vicious; defective	
порожний	;;;	empty (coll)	
поражать	;;;	to strike; astonish; rout	
попутчик	;;;	fellow-traveller	
попутный	;;;	accompanying; passing	
попросту	;;;	simply (coll)	
поправка	;;;	correction	
попадать	;;;	to hit; to get to	
поощрять	;;;	to encourage	
понятный	;;;	comprehensible	
понимать	;;;	to understand	
понижать	;;;	to lower; reduce	
поначалу	;;;	at first (coll)	
помощник	;;;	assistant	
помогать	;;;	to help (s.o.)	
помирать	;;;	to die (coll)	
поминать	;;;	to mention; recall	
помещать	;;;	to accommodate, place	
поместье	;;;	estate	
поменьше	;;;	a little less	
полярный	;;;	polar	
польский	;;;	Polish (adj)	
полыхать	;;;	to blaze	
получать	;;;	to receive, get	
положено	;;;	one is supposed to	
половица	;;;	floorboard	
половина	;;;	half	
полковой	;;;	regimental	
политика	;;;	politics; policy, policies	
поливать	;;;	to pour (liquid on sth)	
полезный	;;;	useful	
полагать	;;;	to suppose, think	
покупать	;;;	to buy	
покрышка	;;;	covering; (coll) lid	
покорять	;;;	to conquer, subjugate	
покорный	;;;	humble	
покойный	;;;	calm; late, deceased	
покойник	;;;	dead person, the deceased	
покидать	;;;	to abandon	
поистине	;;;	indeed	
позорный	;;;	disgraceful	
познание	;;;	knowledge, cognition	
пожимать	;;;	to press, squeeze	
пожарный	;;;	fire (adj); (as noun) fireman	
поединок	;;;	duel	
подымать	;;;	to raise (coll)	
подружка	;;;	(female) friend (dim)	
подробно	;;;	in detail	
подполье	;;;	underground organization; cellar	
подобный	;;;	similar	
поднятый	;;;	raised	
поднятие	;;;	raising	
подножие	;;;	foot (of mountain etc.); pedestal	
подлость	;;;	mean behaviour; dirty trick	
подлинно	;;;	genuinely	
поделать	;;;	to do (coll)	
подвести	;;;	to lead up (to); (coll) let down (disappoint)	
подальше	;;;	a little further (coll)	
подавать	;;;	to give; serve (food); present	
погрузка	;;;	loading	
погодить	;;;	to wait a little	
погибший	;;;	lost, ruined	
погибать	;;;	to perish	
повышать	;;;	to raise	
поводить	;;;	to move, twitch	
повисать	;;;	to hang, dangle; droop, sag	
повидать	;;;	to see (coll)	
повестка	;;;	notification	
побывать	;;;	to visit (a place)	
поборник	;;;	champion, keen supporter (of)	
побольше	;;;	a bit more	
потвоему	;;;	in your opinion; as you want it	
посвоему	;;;	in one’s own way	
порусски	;;;	in Russian; in Russian style	
поновому	;;;	in a new way	
повашему	;;;	in your opinion; as you want	
площадка	;;;	ground, area	
плескать	;;;	to splash	
плачущий	;;;	tearful	
плановый	;;;	planned, planning	
плавучий	;;;	floating	
плавание	;;;	swimming; sailing	
питаться	;;;	to feed (on)	
пистолет	;;;	pistol	
писаться	;;;	to be written; be spelt	
писатель	;;;	writer	
пирожное	;;;	cake, pastry	
пирамида	;;;	pyramid	
печатать	;;;	to print (off)	
печатать	;;;	to print	
печально	;;;	sad(ly)	
песчаный	;;;	sandy	
перчатка	;;;	glove (with fingers)	
персонал	;;;	personnel, staff	
персонаж	;;;	character	
перечень	;;;	list, enumeration	
переулок	;;;	lane	
переплёт	;;;	binding	
перемена	;;;	change	
передняя	;;;	entrance hall	
передник	;;;	apron; pinafore	
передний	;;;	front (adj)	
передача	;;;	transmission	
пассажир	;;;	passenger	
паршивый	;;;	mangy; shabby, nasty	
партизан	;;;	partisan	
парнишка	;;;	lad (coll)	
парадокс	;;;	paradox	
парадный	;;;	ceremonial; main	
папироса	;;;	cigarette	
панорама	;;;	panorama	
панихида	;;;	requiem	
памятный	;;;	memorable	
памятник	;;;	monument	
павильон	;;;	pavilion	
ощущение	;;;	sensation, feeling	
ощутимый	;;;	perceptible	
очнуться	;;;	to regain consciousness	
очевидно	;;;	obviously	
охранять	;;;	to guard	
официант	;;;	waiter	
отчётный	;;;	report (adj), reporting	
отчество	;;;	patronymic	
отчаянно	;;;	desperately	
отчаяние	;;;	despair	
отходить	;;;	to move away (from); depart (train)	
отсталый	;;;	backward	
отставка	;;;	retirement, resignation	
отрывать	;;;	to tear off, tear away	
отрубать	;;;	to chop off	
отрицать	;;;	to deny	
отражать	;;;	to reflect; repulse	
отправка	;;;	sending off, dispatch	
отпирать	;;;	to unlock	
отовсюду	;;;	from everywhere	
относить	;;;	to take (somewhere)	
отнимать	;;;	to take away	
отмечать	;;;	to mark, note, record, mention; to celebrate	
отменять	;;;	to abolish, cancel	
отменный	;;;	excellent	
отличный	;;;	excellent	
отличать	;;;	to distinguish	
отливать	;;;	to pour off; cast (metal); (no p) (+inst) be streaked with (a colour)	
откудато	;;;	from somewhere	
открытый	;;;	open (adj)	
открытка	;;;	postcard	
открытие	;;;	opening; discovery	
отдыхать	;;;	to rest; have/take a holiday	
отделять	;;;	to separate	
отдельно	;;;	separately	
отдавать	;;;	to give back; to give away; to return	
отворять	;;;	to open	
отвозить	;;;	to transport away	
отводить	;;;	to take aside	
отвечать	;;;	to answer	
отвесный	;;;	steep	
отважный	;;;	courageous	
отбывать	;;;	to serve (a period of time); (bookish) depart	
отборный	;;;	selected, specially chosen	
отбирать	;;;	to take away; select	
отбивать	;;;	to repulse; remove; break off; beat off, get by force	
осуждать	;;;	to condemn	
остывать	;;;	to cool down, get cold	
островок	;;;	islet	
особенно	;;;	especially	
основной	;;;	basic, fundamental	
оснащать	;;;	to equip (sth with sth)	
освоение	;;;	assimilation, mastery	
освещать	;;;	to illuminate	
орошение	;;;	irrigation	
оригинал	;;;	original; eccentric (noun)	
организм	;;;	organism	
опускать	;;;	to lower, drop	
опрятный	;;;	tidy, neat	
описание	;;;	description	
опасение	;;;	fear	
окружать	;;;	to surround (sth with sth)	
окошечко	;;;	little window	
окликать	;;;	to hail, call (to s.o.)	
окаянный	;;;	cursed	
оказание	;;;	rendering	
озябнуть	;;;	to get cold, chilled	
озорство	;;;	naughtiness (coll)	
означать	;;;	to mean	
ожидание	;;;	waiting; expectation	
ожерелье	;;;	necklace	
одобрять	;;;	to approve	
одиночка	;;;	person on his or her own, single person	
одинокий	;;;	solitary	
огромный	;;;	enormous	
огорчать	;;;	to distress, disappoint	
оговорка	;;;	reservation, proviso; slip of the tongue	
огненный	;;;	fiery	
общество	;;;	society	
общаться	;;;	associate, socialize (with)	
обширный	;;;	extensive, vast	
обходить	;;;	to go round; avoid	
обучение	;;;	teaching (of sth); training (in sth)	
обстоять	;;;	to be	
обрывать	;;;	to tear off; interrupt	
обронить	;;;	to drop (and lose); let fall	
обретать	;;;	to find (bookish)	
обращать	;;;	to turn	
обратный	;;;	reverse (adj)	
образный	;;;	graphic, evocative; figurative	
оболочка	;;;	cover, envelope	
обождать	;;;	to wait (coll)	
обобщать	;;;	to generalize	
обнимать	;;;	to embrace	
обнажать	;;;	to bare, expose	
обливать	;;;	to pour sth (inst) over sth	
облезлый	;;;	shabby, scruffy; mangy (coll)	
облачный	;;;	cloudy	
обладать	;;;	to possess	
облагать	;;;	to assess (for tax)	
обильный	;;;	abundant	
обиженно	;;;	resentfully, looking hurt	
обжигать	;;;	to burn; bake, fire (bricks etc.)	
обещание	;;;	promise	
обезьяна	;;;	monkey	
обгонять	;;;	to overtake, outstrip	
обводить	;;;	to take round; (+inst) surround (with)	
обвинять	;;;	to accuse (s.o. of sth)	
нынешний	;;;	present, present-day	
ночевать	;;;	to spend the night	
носиться	;;;	to rush around; float, drift	
нечистый	;;;	unclean, impure	
нечаянно	;;;	accidentally; unexpectedly	
нехорошо	;;;	not good	
нехватка	;;;	shortage (coll)	
нефтяной	;;;	oil (adj)	
нефтяник	;;;	oil worker	
неудобно	;;;	uncomfortably, awkwardly; it’s awkward	
неудачно	;;;	unsuccessfully	
нетрудно	;;;	(it’s) not difficult	
несмотря	;;;	in spite of	
неслышно	;;;	inaudible; inaudibly	
неправый	;;;	wrong	
неправда	;;;	untruth; untrue	
неполный	;;;	incomplete	
неплохой	;;;	not bad	
неохотно	;;;	unwillingly	
необычно	;;;	unusually	
ненужный	;;;	unnecessary	
немножко	;;;	(coll) a little, a bit	
немногие	;;;	few (people)	
немецкий	;;;	German (adj)	
неловкий	;;;	awkward	
нелёгкий	;;;	difficult; heavy	
незваный	;;;	uninvited	
нежность	;;;	tenderness	
недобрый	;;;	hostile; evil	
недалеко	;;;	not far	
недавний	;;;	recent	
негромко	;;;	quietly, in a low voice	
невольно	;;;	unintentionally	
невинный	;;;	innocent	
невестка	;;;	daughter-in-law; sister-in-law (brother’s wife)	
неверный	;;;	incorrect; uncertain; unfaithful	
небрежно	;;;	carelessly	
небесный	;;;	heavenly, celestial	
начинать	;;;	to begin	
находить	;;;	to find	
насыщать	;;;	to satiate; fill (sth with sth), saturate	
насущный	;;;	vital, essential	
насовсем	;;;	for good, for ever (coll)	
насмешка	;;;	taunt	
насмерть	;;;	to (the) death	
наследие	;;;	legacy, heritage	
насквозь	;;;	through	
насильно	;;;	by force	
населять	;;;	to populate	
нарядный	;;;	well-dressed	
нарушать	;;;	to disturb, violate, break, infringe	
наружный	;;;	outer, external	
народный	;;;	people’s	
напрямик	;;;	directly; bluntly (coll)	
напротив	;;;	opposite; on the contrary	
например	;;;	for example	
напрасно	;;;	in vain	
напевать	;;;	to sing; sing quietly, hum	
нападать	;;;	to attack; come upon	
наоборот	;;;	on the contrary, vice versa, the other way round	
наносить	;;;	to inflict (sth on s.o.), pile up	
нанимать	;;;	to hire	
намечать	;;;	to plan	
намекать	;;;	to allude to	
наличный	;;;	available; cash (adj)	
наливать	;;;	to pour out, fill	
налетать	;;;	to swoop on; run into	
накануне	;;;	(on) the day before	
наизусть	;;;	by heart, from memory	
наиболее	;;;	(the) most	
называть	;;;	to call, name (s.o. sth)	
название	;;;	name; title (book)	
нажимать	;;;	to press	
наживать	;;;	to gain, make (money)	
наделать	;;;	to make; (coll) to do	
надёжный	;;;	reliable	
надевать	;;;	to put on (clothing etc.)	
надбавка	;;;	addition, supplement	
нагрузка	;;;	load; workload	
нагонять	;;;	to overtake, catch up	
наглядно	;;;	clearly, graphically	
навсегда	;;;	for ever	
наводить	;;;	to guide (to); evoke, cause	
нависать	;;;	to overhang	
навещать	;;;	to visit	
наверное	;;;	probably	
набросок	;;;	sketch, rough draft	
набирать	;;;	to gather, assemble	
набивать	;;;	to stuff (sth with sth)	
мышление	;;;	thinking	
мыслящий	;;;	thinking	
мысленно	;;;	mentally	
мучаться	;;;	to be tormented; worry, torment os	
мусорный	;;;	rubbish (adj)	
музыкант	;;;	musician	
музейный	;;;	museum (adj)	
мужицкий	;;;	peasant (adj), peasant’s	
мужество	;;;	courage	
мудрость	;;;	wisdom	
мощность	;;;	power (of engine etc.)	
мошенник	;;;	swindler	
мохнатый	;;;	shaggy	
мотоцикл	;;;	motorcycle	
моторный	;;;	motor, engine (adj)	
мотаться	;;;	to sway; rush about (coll)	
мостовая	;;;	roadway	
морщинка	;;;	wrinkle	
морозный	;;;	frosty	
морально	;;;	morally	
монумент	;;;	monument	
монархия	;;;	monarchy	
молчание	;;;	silence	
молочный	;;;	milk (adj)	
молодёжь	;;;	young people	
молиться	;;;	to pray	
младенец	;;;	baby	
мириться	;;;	to be reconciled with	
мириться	;;;	to make peace, be reconciled	
минувший	;;;	past	
миновать	;;;	to pass, pass by	
миллиард	;;;	1,000,000,000 (American billion)	
микрофон	;;;	microphone	
мечтание	;;;	day-dreaming	
механика	;;;	mechanics	
механизм	;;;	mechanism	
метаться	;;;	to rush about	
местечко	;;;	place; small town	
мерзость	;;;	vileness; sth disgusting	
мёрзнуть	;;;	to freeze	
мерзавец	;;;	scoundrel (coll)	
меняться	;;;	to change; p: (+inst) exchange	
мельница	;;;	mill	
мелькать	;;;	to be (briefly) visible	
медленно	;;;	slowly	
медицина	;;;	medicine, medical studies	
медвежий	;;;	bear’s	
машинный	;;;	machine (adj)	
машинист	;;;	engine-driver	
материал	;;;	material	
массовый	;;;	mass (adj)	
манифест	;;;	manifesto; proclamation	
максимум	;;;	maximum	
любовный	;;;	love (adj)	
любитель	;;;	amateur; lover (of sth)	
любезный	;;;	obliging	
лохматый	;;;	shaggy	
лопаться	;;;	to burst	
ломаться	;;;	to break; (coll) put on airs; (coll) be awkward, make difficulties	
ложиться	;;;	to lie down	
ловкость	;;;	dexterity, smartness	
лишаться	;;;	to be deprived of, lose	
личность	;;;	personality; individual	
листочек	;;;	small leaf	
ликовать	;;;	to rejoice	
лечиться	;;;	to undergo treatment, be treated for	
лечебный	;;;	medical, medicinal	
летопись	;;;	chronicle	
лестница	;;;	staircase; ladder	
лесничий	;;;	forest warden, ranger	
ленточка	;;;	small ribbon	
лёгкость	;;;	easiness; lightness	
ласточка	;;;	swallow	
ласковый	;;;	tender, affectionate	
ландшафт	;;;	landscape	
лампочка	;;;	(light) bulb	
лабиринт	;;;	labyrinth	
курносый	;;;	snub-nosed (coll)	
купаться	;;;	to bathe	
культура	;;;	culture	
кукуруза	;;;	maize	
кудрявый	;;;	curly	
кубометр	;;;	cubic metre	
кряхтеть	;;;	to groan; grunt	
крымский	;;;	Crimean	
крылатый	;;;	winged	
крушение	;;;	wreck, ruin, collapse	
крупинка	;;;	grain	
кругозор	;;;	horizon, outlook	
кровавый	;;;	bloody	
крепость	;;;	fortress; strength	
крепнуть	;;;	to get stronger, get stronger	
крашеный	;;;	painted; dyed	
красться	;;;	to creep	
краснеть	;;;	to become red; blush, turn red	
красивый	;;;	beautiful	
красавец	;;;	handsome man	
котлован	;;;	foundation pit, trench	
костяной	;;;	bone (adj), made of bone	
косточка	;;;	stone (of fruit); small bone	
коситься	;;;	to become crooked; (на +a) look sideways at	
короткий	;;;	short	
королева	;;;	queen	
кормовой	;;;	stem (of ship - adj); fodder (adj)	
коренной	;;;	fundamental	
копчёный	;;;	smoked	
копаться	;;;	to rummage; dawdle	
конфликт	;;;	conflict	
контроль	;;;	checking	
конечный	;;;	final	
конгресс	;;;	congress	
конвейер	;;;	conveyor belt	
комплект	;;;	set, complete set	
комплекс	;;;	complex	
компания	;;;	company; group of friends	
комиссия	;;;	commission, committee	
комбинат	;;;	combine, industrial complex	
командир	;;;	commander	
колыбель	;;;	cradle	
колотить	;;;	to batter	
коллегия	;;;	board (administrative body)	
колесико	;;;	little wheel; cog	
коекакой	;;;	some, certain	
коварный	;;;	crafty	
коалиция	;;;	coalition	
клясться	;;;	to swear, vow	
классный	;;;	class (adj); first-class	
кладбище	;;;	cemetery	
кислород	;;;	oxygen	
километр	;;;	kilometre	
киевский	;;;	Kiev (adj)	
кидаться	;;;	to throw os, rush	
квартира	;;;	flat, apartment	
качество	;;;	quality	
качаться	;;;	to rock, swing	
катиться	;;;	to roll	
кататься	;;;	to roll around; take a trip	
кастрюля	;;;	saucepan	
касаться	;;;	to touch; to concern	
карусель	;;;	merry-go-round, carousel	
картошка	;;;	potatoes (coll)	
карточка	;;;	card	
картинка	;;;	picture, illustration	
карандаш	;;;	pencil	
капелька	;;;	droplet	
каникулы	;;;	holidays, vacation	
кандидат	;;;	candidate	
кампания	;;;	campaign	
каменный	;;;	stone (adj)	
какникак	;;;	nevertheless, all the same (coll)	
казённый	;;;	belonging to the State	
казаться	;;;	to seem, to appear, to show oneself	
исчезать	;;;	to vanish; disappear	
исходный	;;;	initial	
исходить	;;;	to issue from, proceed from	
источник	;;;	source	
истинный	;;;	TRUE	
истерика	;;;	hysterics	
истёкший	;;;	past, preceding	
истекать	;;;	to flow out; expire (time)	
исполком	;;;	executive committee	
исповедь	;;;	confession	
искусный	;;;	skilful	
искренно	;;;	sincerely	
искренне	;;;	sincerely	
искажать	;;;	to distort	
интервью	;;;	interview	
институт	;;;	institute; institution	
инстинкт	;;;	instinct	
изучение	;;;	(detailed) study (of)	
изрядный	;;;	fairly good, quite large	
изоляция	;;;	isolation; insulation	
изобилие	;;;	abundance	
измерять	;;;	to measure	
изменять	;;;	to change, alter; (+d) betray	
изменник	;;;	traitor	
излучать	;;;	to radiate	
излишний	;;;	superfluous	
излагать	;;;	to set out, expound, put in words	
издатель	;;;	publisher	
издалека	;;;	from a distance	
издавать	;;;	to publish; emit	
изгонять	;;;	to expel, banish	
изволить	;;;	to wish, desire; deign	
извозчик	;;;	carrier, cabman	
извинять	;;;	to pardon	
извещать	;;;	to inform, notify (bookish)	
известно	;;;	it is (well) known	
известие	;;;	piece of news	
избирать	;;;	to choose, elect; select	
избивать	;;;	to beat up	
избегать	;;;	to avoid	
идеализм	;;;	idealism	
зрелость	;;;	maturity	
значение	;;;	meaning, importance	
знакомый	;;;	familiar; an acquaintance	
зловещий	;;;	ominous, sinister	
зёрнышко	;;;	grain	
зерновой	;;;	grain (adj)	
земляной	;;;	earthen, earth (adj)	
зеленеть	;;;	to turn green, look green	
здоровье	;;;	health	
здоровый	;;;	healthy	
звучание	;;;	sound, sounds	
звуковой	;;;	sound (adj)	
звёздный	;;;	star (adj); starry	
заявлять	;;;	to announce	
защищать	;;;	to defend	
защитный	;;;	protective	
защитник	;;;	defender	
зачастую	;;;	often (coll)	
заходить	;;;	(к +d) to call on s.o.; (за +a) go behind, set (of sun)	
затыкать	;;;	to stop up, plug	
затихать	;;;	to die down	
затевать	;;;	to undertake, start, organize (coll)	
засыпать	;;;	to fall asleep	
застенок	;;;	torture-chamber	
заседать	;;;	to sit, be in session	
заряжать	;;;	to load (weapon); charge (electrical equipment)	
зарплата	;;;	pay, wages, salary	
заросший	;;;	overgrown	
заражать	;;;	to infect (s.o. with sth)	
запчасть	;;;	spare part	
записной	;;;	note (adj)	
запирать	;;;	to lock	
запевать	;;;	to start singing	
запасный	;;;	spare, reserve	
запасной	;;;	spare, reserve	
западный	;;;	western	
заносить	;;;	to bring in; raise	
занимать	;;;	to occupy	
замирать	;;;	to stand still, die away	
замечать	;;;	to notice	
заметный	;;;	noticeable	
заменять	;;;	to replace (sth with sth)	
заливать	;;;	to flood (sth with sth)	
залетать	;;;	to fly in; (за +a) fly behind	
залезать	;;;	to climb, get (into/onto)	
заладить	;;;	to keep repeating (sth); (+inf) get into the habit of (coll)	
закрытый	;;;	closed	
закоулок	;;;	back alley; nook, cranny	
законный	;;;	legal	
закладка	;;;	laying; bookmark	
заиграть	;;;	to start playing	
зажимать	;;;	to squeeze	
зажигать	;;;	to set fire to	
заезжать	;;;	to call in	
задирать	;;;	to tear to pieces; lift up (coll)	
задержка	;;;	delay	
задевать	;;;	to touch; catch (on sth)	
заданный	;;;	set, assigned	
задавать	;;;	to set, assign (sth to s.o.)	
загрузка	;;;	loading	
загонять	;;;	to drive in	
загонять	;;;	to tire out	
заглавие	;;;	title, heading	
загибать	;;;	to bend	
заводить	;;;	to take somewhere; start, start up; wind up	
зависеть	;;;	to depend (on)	
завещать	;;;	to bequeath (sth to s.o.)	
заветный	;;;	cherished, intimate	
забывать	;;;	to forget	
забрести	;;;	to wander in, drop in; stray	
забирать	;;;	to take hold of; take away	
забивать	;;;	to begin to beat; hammer in; block; cram	
забегать	;;;	to run in; call in; run off, (coll) drop in	
забегать	;;;	to start rushing around	
забвение	;;;	oblivion	
забавный	;;;	amusing	
жилищный	;;;	housing (adj)	
жидкость	;;;	liquid	
животный	;;;	animal (adj)	
животное	;;;	animal	
живопись	;;;	painting, paintings	
жестяной	;;;	tin (adj)	
жестокий	;;;	cruel	
жениться	;;;	to marry (of man)	
железный	;;;	iron (adj)	
желающий	;;;	person interested (in doing sth)	
желанный	;;;	wished for, welcome	
жалобный	;;;	plaintive; complaints (adj)	
жадность	;;;	greed	
ежегодно	;;;	annually	
единство	;;;	unity	
дымчатый	;;;	smoke-coloured	
дымиться	;;;	to smoke	
душистый	;;;	fragrant	
душевный	;;;	mental; sincere, heartfelt	
духовный	;;;	spiritual	
дурацкий	;;;	idiotic, stupid (coll)	
думаться	;;;	to be thought	
дрожащий	;;;	trembling	
дрогнуть	;;;	to be chilled	
дрогнуть	;;;	to shake, waver	
дразнить	;;;	to tease	
доходить	;;;	to reach (s.o. or sth)	
достойно	;;;	worthily, properly	
достаток	;;;	sufficiency; prosperity	
доставка	;;;	delivery	
досрочно	;;;	ahead of schedule	
дорожный	;;;	road (adj)	
дорожить	;;;	to value	
доносить	;;;	to carry (sth to); (+a +d) report (sth to s.o.); (на +a) inform (on s.o.), denounce (s.o.)	
домашний	;;;	domestic	
документ	;;;	document	
доктрина	;;;	doctrine	
доживать	;;;	to live (till)	
доезжать	;;;	to reach	
догонять	;;;	to catch up (with)	
довольно	;;;	fairly, rather; contentedly; (+g) enough	
доводить	;;;	to lead to, take as far as	
доверять	;;;	to trust (s.o.); (+a +d) entrust (sth to s.o.)	
добывать	;;;	to get, obtain	
доблесть	;;;	valour	
директор	;;;	director	
дипломат	;;;	diplomat; attaché-case	
диктатор	;;;	dictator	
дивиться	;;;	to wonder, marvel (at) (coll)	
диапазон	;;;	range, scope	
детектив	;;;	detective story	
детально	;;;	minutely, in detail	
десятина	;;;	desiatina (about a hectare)	
дерзость	;;;	rudeness; audacity	
денежный	;;;	money (adj), monetary	
демократ	;;;	democrat	
деловито	;;;	in a businesslike way, energetically	
делиться	;;;	to be divided (into)	
делиться	;;;	to share (sth with s.o.)	
делаться	;;;	to become; be done	
действие	;;;	act, action	
дежурный	;;;	duty (adj); (as noun) person on duty	
дежурить	;;;	to be on duty	
девчонка	;;;	girl (coll)	
деваться	;;;	to get to, vanish	
дворянин	;;;	nobleman, member of the gentry	
движение	;;;	movement, motion	
двадцать	;;;	twenty	
давление	;;;	pressure	
даваться	;;;	to be given; come easily (to s.o.), be learnt easily	
гусеница	;;;	caterpillar	
гуманный	;;;	humane	
губерния	;;;	tsarist province (now область)	
грядущий	;;;	future (bookish)	
грустный	;;;	sad	
грузовой	;;;	goods (adj)	
грузовик	;;;	lorry, truck	
грубость	;;;	rudeness	
готовить	;;;	to prepare; to cook	
государь	;;;	sovereign	
гостиная	;;;	sitting-room	
господин	;;;	gentleman; Mr	
горлышко	;;;	neck (of bottle); small throat	
горизонт	;;;	horizon	
горевать	;;;	to grieve	
гордость	;;;	pride	
гоняться	;;;	to chase (after)	
голубчик	;;;	my dear (coll)	
голодный	;;;	hungry	
голодать	;;;	to go hungry	
головной	;;;	head (adj)	
голенище	;;;	top (of a boot)	
годиться	;;;	to be fit (for), be usable	
говорить	;;;	to say	
говорить	;;;	to speak; to have a talk, talk (to)	
глупость	;;;	foolishness	
глубокий	;;;	deep	
глохнуть	;;;	to die away; stall (engine); go to seed	
глиняный	;;;	clay (adj)	
гипсовый	;;;	plaster	
гипотеза	;;;	hypothesis	
гимназия	;;;	grammar school, high school	
гарнизон	;;;	garrison	
гармошка	;;;	accordion (coll)	
гармония	;;;	harmony	
гарантия	;;;	guarantee	
газетный	;;;	newspaper (adj)	
выяснять	;;;	to clarify, establish	
выявлять	;;;	to reveal, expose	
вышибать	;;;	to knock out, kick out (coll)	
выходной	;;;	exit (adj)	
выходить	;;;	to marry a husband	
выходить	;;;	to go out	
вытирать	;;;	to wipe, wipe dry	
вытекать	;;;	to flow out	
высылать	;;;	to send out; exile, deport	
выставка	;;;	exhibition	
вырывать	;;;	to pull out	
выручать	;;;	to rescue; make (money)	
вырезать	;;;	to cut out	
выражать	;;;	to express	
выпуклый	;;;	prominent, bulging; convex	
выпивать	;;;	to drink (alcohol)	
выпадать	;;;	to fall out (of)	
выносить	;;;	to carry out, take away; endure	
вынимать	;;;	to take out	
вымывать	;;;	to wash (thoroughly)	
выметать	;;;	to sweep out	
вылетать	;;;	to fly out, take off	
вылезать	;;;	to climb out	
вылезать	;;;	to climb out (of)	
вызывать	;;;	to summon; cause	
выжимать	;;;	to squeeze out	
выжидать	;;;	to wait (for)	
выживать	;;;	to survive	
выезжать	;;;	to leave (by transport)	
выдержка	;;;	self-control; excerpt	
выделять	;;;	to pick out; allot, assign	
выдавать	;;;	to give out, issue; betray; give away	
выгонять	;;;	to expel, drive out	
выгодный	;;;	advantageous	
вывозить	;;;	to transport away; export	
выводить	;;;	to lead out; remove	
выбывать	;;;	to leave (formal)	
выборный	;;;	electoral; elected	
выбирать	;;;	to choose	
выбивать	;;;	to knock out, dislodge	
выбегать	;;;	to run out	
вторично	;;;	secondarily	
всячески	;;;	in every way possible	
всходить	;;;	to ascend	
вступать	;;;	to enter, join (organization)	
вставать	;;;	to get up, stand up	
вспылить	;;;	to flare up (coll)	
всеобщий	;;;	general; universal	
всемерно	;;;	in all possible ways	
временно	;;;	temporarily	
вращение	;;;	rotation	
вплотную	;;;	close up (to)	
восковой	;;;	wax (adj)	
ворчливо	;;;	grumpily, querulously	
ворочать	;;;	to move (sth heavy); (+inst) have control of	
воротник	;;;	collar	
воровать	;;;	to steal	
вопиющий	;;;	flagrant, scandalous	
волнение	;;;	agitation; disturbance	
волжский	;;;	Volga (adj)	
воинский	;;;	military	
возможно	;;;	possibly; possible; it is possible	
возиться	;;;	to fiddle (with)	
военщина	;;;	militarism; militarists	
водиться	;;;	(c +inst) to associate with; be, be found	
водитель	;;;	driver	
вопервых	;;;	firstly, in the first place	
вовторых	;;;	secondly	
внимание	;;;	attention	
внезапно	;;;	suddenly	
внедрять	;;;	to inculcate; introduce; put into practice	
вложение	;;;	enclosure (in letter); investment	
властный	;;;	imperious; authoritative	
владение	;;;	possession, ownership	
владёлец	;;;	owner	
включать	;;;	to include; switch on	
вишнёвый	;;;	cherry (adj)	
виселица	;;;	gallows	
винтовка	;;;	rifle	
виноград	;;;	grapes	
виновный	;;;	guilty	
виновник	;;;	culprit	
виновато	;;;	guiltily	
видеться	;;;	to see one another, see each other	
взрывать	;;;	to blow up	
взрослый	;;;	adult	
взлетать	;;;	to fly up	
вздыхать	;;;	to sigh	
вздумать	;;;	to decide suddenly (coll)	
взаимный	;;;	mutual	
вечность	;;;	eternity	
вечерний	;;;	evening (adj)	
весенний	;;;	spring (adj)	
веселить	;;;	to cheer up; amuse	
верхушка	;;;	top; (coll) the bosses	
верховье	;;;	upper reaches (of river)	
верховой	;;;	riding	
верующий	;;;	believer (religious)	
вертолёт	;;;	helicopter	
вероятно	;;;	probably	
верность	;;;	faithfulness, loyalty; truth	
вериться	;;;	to believe	
вереница	;;;	file, line, string	
величина	;;;	size	
вежливый	;;;	polite	
ве́дение	;;;	authority, control	
веде́ние	;;;	conducting, conduct	
вдогонку	;;;	in pursuit (coll)	
вдобавок	;;;	in addition (to) (coll)	
введение	;;;	introduction	
валяться	;;;	to roll; lie about	
валиться	;;;	to fall down	
валиться	;;;	to fall	
важность	;;;	importance	
вагончик	;;;	small wagon, coach	
втретьих	;;;	thirdly	
бюрократ	;;;	bureaucrat	
быстрота	;;;	speed	
бушевать	;;;	to rage	
буфетчик	;;;	barman	
бумажный	;;;	paper (adj)	
булыжник	;;;	cobble-stone; cobbles	
брожение	;;;	ferment	
бригадир	;;;	brigade leader; foreman	
братство	;;;	brotherhood	
братский	;;;	fraternal, brotherly	
братишка	;;;	little brother (coll)	
бороться	;;;	to struggle (against)	
бомбёжка	;;;	bombardment (coll)	
больница	;;;	hospital	
болтовня	;;;	chatter, gossip (coll)	
болотный	;;;	marsh (adj)	
бодрость	;;;	cheerfulness	
богатырь	;;;	bogatyr, hero	
блюдечко	;;;	small dish, saucer	
блуждать	;;;	to wander	
близость	;;;	closeness	
блестяще	;;;	brilliantly	
блестеть	;;;	to shine	
блеснуть	;;;	to flash	
бледнеть	;;;	to turn pale	
биология	;;;	biology	
бетонный	;;;	concrete (adj)	
бесшумно	;;;	noiselessly	
беречься	;;;	to be careful	
безумный	;;;	mad	
безмерно	;;;	immensely	
безделье	;;;	idleness	
бедствие	;;;	disaster	
бедность	;;;	poverty	
батальон	;;;	battalion	
барометр	;;;	barometer	
баловать	;;;	to spoil (s.o.)	
багровый	;;;	crimson	
бабушкин	;;;	grandmother’s (possessive adj)	
аэропорт	;;;	airport	
аэродром	;;;	aerodrome, airfield	
астроном	;;;	astronomer	
аспирант	;;;	postgraduate (noun)	
археолог	;;;	archaeologist	
аргумент	;;;	argument	
арабский	;;;	Arab (adj), Arabian	
апельсин	;;;	orange	
античный	;;;	ancient	
ансамбль	;;;	ensemble	
аналогия	;;;	analogy	
амнистия	;;;	amnesty	
алмазный	;;;	diamond (adj)	
алкоголь	;;;	alcohol	
активный	;;;	active	
активист	;;;	(political) activist	
академия	;;;	academy	
академик	;;;	academician	
агрессор	;;;	aggressor	
агрессия	;;;	aggression	
аграрный	;;;	agrarian	
агитация	;;;	agitation	
агитатор	;;;	agitator	
австрйец	;;;	Austrian	
авангард	;;;	vanguard	
щёлкнуть	;;;	to flick; (+inst) click, crack, snap	
шлёпнуть	;;;	to smack	
швырнуть	;;;	to fling, hurl, throw (coll)	
шаркнуть	;;;	to shuffle	
черпнуть	;;;	to scoop, draw (from)	
хлопнуть	;;;	to bang, slap, clap	
фыркнуть	;;;	to snort	
ухватить	;;;	to seize	
утратить	;;;	to lose	
уточнить	;;;	to make more precise; verify	
уступить	;;;	to yield, give up, cede (sth to s.o.)	
устроить	;;;	to arrange, organize (sth)	
устареть	;;;	to become obsolete, go out of date	
ускорить	;;;	to accelerate	
усесться	;;;	to sit down, settle down, take a seat	
упустить	;;;	to let slip; miss	
умножить	;;;	to multiply	
улучшить	;;;	to improve	
укрыться	;;;	to take refuge (from)	
укрепить	;;;	to strengthen	
украсить	;;;	to adorn	
удержать	;;;	to hold back, retain; hold onto; restrain	
угостить	;;;	to treat (s.o. to sth), entertain	
увлечься	;;;	to be keen on	
убраться	;;;	to tidy up; clear off, make os scarce (coll)	
толкнуть	;;;	to push, shove	
схватить	;;;	to seize, grab	
стукнуть	;;;	to knock, bang	
стихнуть	;;;	to abate, die down	
стиснуть	;;;	to squeeze	
сравнить	;;;	to compare (sth with sth)	
спустить	;;;	to lower; release	
спросить	;;;	to ask (s.o. about sth)	
спастись	;;;	to escape, save os	
сочинить	;;;	to compose, make up	
сообщить	;;;	to communicate (sth to s.o.)	
совпасть	;;;	to coincide (with)	
соблюсти	;;;	to keep to, adhere to	
снабдить	;;;	to supply (s.o. with sth)	
скрыться	;;;	to hide os, vanish	
склонить	;;;	to bend, bow	
сдержать	;;;	to hold back, restrain, keep (promise)	
сдвинуть	;;;	to shift	
свестись	;;;	to reduce (to)	
свернуть	;;;	to roll (up); turn	
сбросить	;;;	to drop; throw off	
растаять	;;;	to melt	
прослыть	;;;	to have the reputation of, be considered	
пощупать	;;;	to feel, touch (sth), probe	
пощадить	;;;	to spare	
пошутить	;;;	to joke	
зашуметь	;;;	to make a noise	
пошарить	;;;	to grope, fumble	
зашагать	;;;	to stride out	
починить	;;;	to repair	
почесать	;;;	to scratch	
захотеть	;;;	to want	
походить	;;;	to walk about	
пoходить	;;;	to walk around	
потянуть	;;;	to pull, drag	
потушить	;;;	to extinguish; stew	
потрясти	;;;	to shake	
потопить	;;;	to stoke; heat; (p) sink (sth), drown (s.o.)	
потонуть	;;;	to sink; drown	
потерять	;;;	to lose	
потереть	;;;	to rub	
потащить	;;;	to drag	
посыпать	;;;	to pour, strew	
высушить	;;;	to dry (sth)	
посулить	;;;	to promise (sth)	
постоять	;;;	to stand; p: to stand for a while	
посидеть	;;;	to sit (p: sit for a while)	
зарычать	;;;	to growl	
порыться	;;;	to dig, rummage (in)	
взругать	;;;	to abuse, scold	
порезать	;;;	to cut	
зарезать	;;;	to kill	
зареветь	;;;	to roar, howl	
напугать	;;;	to frighten	
испугать	;;;	to frighten	
поползти	;;;	to crawl	
напитать	;;;	to feed	
написать	;;;	to write	
понюхать	;;;	to smell, sniff (sth)	
замучить	;;;	to torment	
помешать	;;;	to disturb, hinder, prevent; (+a) stir	
измерить	;;;	to measure; try on (clothing)	
поменять	;;;	to change	
помахать	;;;	to wave	
помахать	;;;	to wave (for a while)	
поманить	;;;	to beckon, lure	
полюбить	;;;	to like, love; p: to fall in love with	
поломать	;;;	to break	
политься	;;;	to pour	
вылечить	;;;	to treat, cure	
полететь	;;;	to fly	
полетать	;;;	to fly around	
вылепить	;;;	to model, mould	
полежать	;;;	to lie, (p) lie for a while	
полазить	;;;	to climb	
поладить	;;;	to get on with (s.o.)	
покушать	;;;	to eat (polite usage)	
покурить	;;;	to smoke	
заколоть	;;;	to chop; stab	
закипеть	;;;	to boil	
вскипеть	;;;	to boil, be boiling	
покатить	;;;	to roll (sth)	
покарать	;;;	to punish	
поискать	;;;	to search for, to look for	
пожелать	;;;	to want, wish (for)	
пожевать	;;;	to chew	
зажарить	;;;	to fry; roast	
пожалеть	;;;	to pity, feel sorry for; (o +pr) regret	
съездить	;;;	to travel there and back	
поездить	;;;	to travel	
подышать	;;;	to breathe	
задушить	;;;	to strangle, suffocate, stifle	
подумать	;;;	to think	
подарить	;;;	to give, present (sth to s.o.)	
погулять	;;;	to take a walk; (coll) take time off	
загудеть	;;;	to start hooting/humming	
погубить	;;;	to destroy, ruin	
загореть	;;;	to burn, be alight	
погонять	;;;	to drive, make (s.o.) run	
погасить	;;;	to put out, extinguish; cancel	
повозить	;;;	to transport (around/there and back)	
поводить	;;;	to lead, (p) to lead about	
повлиять	;;;	to influence	
обвинить	;;;	to accuse (s.o. of sth)	
поверить	;;;	to believe (+d) s.o. or sth, (в +a ) in s.o. or sth	
заварить	;;;	to boil, cook by boiling	
побрести	;;;	to plod along	
побелеть	;;;	to grow white, be white	
побежать	;;;	to run	
побегать	;;;	to run around	
струсить	;;;	to be cowardly	
стемнеть	;;;	to get dark	
услышать	;;;	to hear	
ослабеть	;;;	to become weak	
опустеть	;;;	to empty, become empty	
спрятать	;;;	to hide (sth)	
сплясать	;;;	to dance	
окрасить	;;;	to paint, colour; dye	
озлиться	;;;	to get angry (coll)	
ограбить	;;;	to rob, pillage	
овладеть	;;;	to possess; have command of; to master	
ясность	;;;	clarity	
яростно	;;;	furiously	
ярмарка	;;;	fair, trade fair	
яркость	;;;	brightness	
яичница	;;;	fried eggs	
ядерный	;;;	nuclear	
ягнёнок	;;;	lamb	
явление	;;;	phenomenon	
яблочко	;;;	little apple	
эстрада	;;;	stage	
энергия	;;;	energy	
элемент	;;;	element	
эксперт	;;;	expert	
экзамен	;;;	examination	
экватор	;;;	equator	
щёлкать	;;;	to flick; (+inst) click, crack, snap	
шутливо	;;;	jokingly, facetiously	
шустрый	;;;	smart, quick, agile (coll)	
шуршать	;;;	to rustle	
штабной	;;;	staff, headquarters (adj)	
штабель	;;;	stack, pile	
шляться	;;;	to loaf about (coll)	
шлёпать	;;;	to smack	
шкафчик	;;;	small cupboard	
широкий	;;;	wide	
шествие	;;;	procession	
шеренга	;;;	rank, file, column	
шептать	;;;	to whisper	
швырять	;;;	to fling, hurl, throw (coll)	
швейный	;;;	sewing	
шахматы	;;;	chess	
шаркать	;;;	to shuffle	
шапочка	;;;	small hat	
чуточку	;;;	a little (coll)	
чужбина	;;;	foreign land	
чудесно	;;;	wonderfully	
чувство	;;;	feeling	
чтолибо	;;;	anything	
чистота	;;;	cleanliness; purity	
чистить	;;;	to clean	
чешский	;;;	Czech (adj)	
четверо	;;;	four, foursome	
четверг	;;;	Thursday	
честный	;;;	honest	
чертить	;;;	to draw, draw up	
черпать	;;;	to scoop, draw (from)	
чернила	;;;	ink	
чернеть	;;;	to turn black	
чемпион	;;;	champion	
чемодан	;;;	suitcase	
челюсть	;;;	jaw	
человек	;;;	person	
частота	;;;	frequency	
частный	;;;	private, individual (adj)	
частица	;;;	small part; particle	
часовой	;;;	hour (adj); watch, clock (adj); (as noun) sentry	
цыпочки	;;;	tiptoes	
цилиндр	;;;	cylinder; top hat	
церковь	;;;	church	
цепочка	;;;	small chain; series	
центнер	;;;	100 kilogrammes, centner	
цельный	;;;	entire	
целиком	;;;	entirely	
цветной	;;;	coloured	
царство	;;;	kingdom	
царский	;;;	tsar’s; tsarist	
хулиган	;;;	hooligan	
хрупкий	;;;	fragile	
хроника	;;;	chronicle; news items; newsreel	
хромать	;;;	to limp	
хриплый	;;;	hoarse	
хрипеть	;;;	to wheeze	
хранить	;;;	to keep, store	
храбрый	;;;	brave	
хороший	;;;	good	
холодок	;;;	coolness; cool place (coll)	
холодно	;;;	coldly; it’s cold	
хозяйка	;;;	owner, proprietress; hostess	
ходовой	;;;	(coll) popular; operational, working	
хлынуть	;;;	to gush	
хлопоты	;;;	trouble, efforts	
хло́пок	;;;	cotton	
хлопо́к	;;;	clap, bang	
хлопать	;;;	to bang, slap, clap	
хлопать	;;;	to slap, clap	
хлебный	;;;	bread (adj)	
хвойный	;;;	coniferous	
хватать	;;;	(3rd pers +g) to be enough, suffice	
хватать	;;;	to seize, grab	
хвалить	;;;	to praise	
фыркать	;;;	to snort	
фуражка	;;;	peaked cap	
функция	;;;	function	
француз	;;;	Frenchman	
формула	;;;	formula	
финский	;;;	Finnish	
финансы	;;;	finances	
философ	;;;	philosopher	
фигурка	;;;	small figure; figurine	
феномен	;;;	phenomenon	
февраль	;;;	February	
фамилия	;;;	surname	
фабрика	;;;	factory	
уяснять	;;;	to understand	
учиться	;;;	to learn (to do sth)	
учиться	;;;	to study	
учитель	;;;	teacher	
училище	;;;	college (vocational)	
учебный	;;;	educational	
учебник	;;;	textbook	
участок	;;;	plot of land; district	
участие	;;;	participation; sympathy	
уцелеть	;;;	to survive	
уходить	;;;	to leave (on foot)	
утешать	;;;	to console	
уступка	;;;	concession	
устоять	;;;	to remain standing; hold out	
усталый	;;;	tired	
успешно	;;;	successfully	
усмешка	;;;	slight smile; sneer; smirk	
условно	;;;	conditionally, provisionally	
условие	;;;	condition	
усердно	;;;	conscientiously	
усадьба	;;;	country estate	
уровень	;;;	level; standard	
упрямый	;;;	stubborn	
упряжка	;;;	team (of horses, dogs); harness	
упругий	;;;	elastic, springy	
упорный	;;;	persistent	
уносить	;;;	to carry away	
унижать	;;;	to humiliate	
умолять	;;;	to implore	
умирать	;;;	to die	
уместно	;;;	appropriately	
уличный	;;;	street (adj)	
улетать	;;;	to fly away	
ужинать	;;;	to have supper	
ужасный	;;;	terrible	
уезжать	;;;	to go away, leave (by transport)	
удобный	;;;	comfortable; convenient	
удирать	;;;	to run away, do a bunk (coll)	
уделять	;;;	to allot, give	
удачный	;;;	successful	
ударять	;;;	to strike, hit	
ударный	;;;	urgent; attacking; percussion (adj)	
удалять	;;;	to send away, remove	
угрюмый	;;;	sullen, gloomy	
угощать	;;;	to treat (s.o. to sth), entertain	
углерод	;;;	carbon	
увозить	;;;	to take away (by transport)	
уводить	;;;	to lead away	
уверять	;;;	to assure	
уважать	;;;	to respect	
уборная	;;;	lavatory; dressing-room (in theatre)	
убирать	;;;	to take away; tidy; p: tidy up	
убивать	;;;	to kill; to murder	
убегать	;;;	to run away	
тяжесть	;;;	weight, burden	
тяжёлый	;;;	heavy	
тягость	;;;	burden	
тусклый	;;;	dim	
туннель	;;;	tunnel	
трусить	;;;	to be cowardly	
трудный	;;;	difficult	
тротуар	;;;	pavement, sidewalk	
трогать	;;;	to touch	
трибуна	;;;	platform; stand (in stadium)	
трещина	;;;	crack, cleft	
трещать	;;;	to crack; crackle	
трепать	;;;	to rumple, tousle; pat; (coll) natter	
трезвый	;;;	sober	
тревога	;;;	alarm	
тратить	;;;	to spend	
трамвай	;;;	tram, streetcar	
трактор	;;;	tractor	
трактир	;;;	inn	
травить	;;;	to exterminate, poison; damage; hunt; persecute	
торчать	;;;	to stick out	
топливо	;;;	fuel	
толщина	;;;	thickness	
толстый	;;;	fat (adj)	
толкать	;;;	to push, shove	
товарищ	;;;	comrade	
течение	;;;	flow, current; course	
техника	;;;	technology	
тётушка	;;;	auntie; (old) lady	
тетрадь	;;;	exercise book	
теснота	;;;	tightness; cramped conditions	
терраса	;;;	terrace	
терпеть	;;;	to be patient; endure	
терзать	;;;	to torment; pull about	
теплота	;;;	warmth	
теплица	;;;	hothouse	
темнота	;;;	darkness	
темнеть	;;;	to get dark	
темнеть	;;;	to get dark, go dark	
телефон	;;;	telephone	
телёнок	;;;	calf	
текущий	;;;	current (adj)	
творить	;;;	to create	
твёрдый	;;;	hard, firm, solid	
татарин	;;;	Tatar	
таскать	;;;	to drag	
тарелка	;;;	plate	
таракан	;;;	cockroach	
танкист	;;;	tank soldier, member of tank crew	
тактика	;;;	tactics	
таковой	;;;	such	
таиться	;;;	to be concealed	
таёжный	;;;	taiga (adj)	
таблица	;;;	table (of figures)	
сюрприз	;;;	surprise	
сшибать	;;;	to knock down (coll)	
считать	;;;	(+a +inst) consider (sth/s.o. to be sth)	
считать	;;;	to count	
счастье	;;;	happiness, luck	
сходный	;;;	similar; (coll) fair (of price)	
сходить	;;;	to go down (from)	
схватка	;;;	fight, tussle	
сушёный	;;;	dried	
сутулый	;;;	round-shouldered, stooping	
суровый	;;;	harsh	
супруга	;;;	spouse (wife)	
сумерки	;;;	twilight, dusk	
суждено	;;;	it is fated	
суббота	;;;	Saturday	
стучать	;;;	to knock (at)	
ступень	;;;	step, rung; stage, level, grade	
ступать	;;;	to step	
стукать	;;;	to knock, bang	
студент	;;;	student	
струйка	;;;	thin stream, trickle	
стружка	;;;	shaving, shavings	
строчка	;;;	line (of text); stitch	
стройка	;;;	building; building site	
строить	;;;	to build	
строгий	;;;	strict, severe	
стрелка	;;;	arrow; hand (of clock)	
страшно	;;;	terribly; it is terrible	
страсть	;;;	passion	
странно	;;;	strangely; it is strange	
стоящий	;;;	worthwhile (adj)	
стоянка	;;;	stop; parking	
сторона	;;;	side	
стонать	;;;	to groan	
столько	;;;	so much, so many	
столица	;;;	capital (city)	
столбик	;;;	small column	
стойкий	;;;	stable; steadfast	
стихать	;;;	to abate, die down	
стирать	;;;	to rub off; grind down	
стирать	;;;	to wash (clothes); rub off	
степной	;;;	steppe (adj)	
степень	;;;	degree, extent	
стенной	;;;	wall (adj)	
статься	;;;	to happen (coll)	
старший	;;;	elder, senior	
старуха	;;;	old woman	
старина	;;;	bygone times; (coll) old fellow	
стареть	;;;	to grow old	
станция	;;;	station	
станица	;;;	Cossack village	
стадион	;;;	stadium	
ставить	;;;	to place, put (in a standing position)	
ставень	;;;	shutter	
срывать	;;;	to tear off; wreck	
срочный	;;;	urgent	
срезать	;;;	to cut down, cut off; shut s.o. up	
средний	;;;	middle; average	
спутник	;;;	travelling companion; satellite	
справка	;;;	piece of information; certificate	
спорить	;;;	to argue	
сплетни	;;;	gossip	
спираль	;;;	spiral	
спешный	;;;	urgent	
спешить	;;;	to hurry	
спасибо	;;;	thank you	
спасать	;;;	to save	
спальня	;;;	bedroom	
союзный	;;;	allied; of the USSR	
союзник	;;;	ally	
соседка	;;;	(female) neighbour	
соловей	;;;	nightingale	
солидно	;;;	solidly, substantially, weightily	
солёный	;;;	salted	
совесть	;;;	conscience	
событие	;;;	event	
собачка	;;;	small dog; trigger; catch	
собачий	;;;	dog’s	
сносить	;;;	to demolish; take down, take off; carry away	
сновать	;;;	to dash about, scurry	
сниться	;;;	to appear in a dream, see in a dream	
снимать	;;;	to take off; photograph; rent	
снижать	;;;	to lower, reduce	
снежный	;;;	snow (adj), snowy	
сначала	;;;	at first; from the beginning	
снаружи	;;;	outside, from outside	
смывать	;;;	to wash off	
смущать	;;;	to embarrass; disturb; trouble	
смутный	;;;	vague, dim; troubled	
смуглый	;;;	dark (of complexion)	
смирный	;;;	docile	
смешной	;;;	funny, ridiculous	
смешить	;;;	to make (s.o.) laugh, amuse	
сметана	;;;	sour cream	
сменять	;;;	to replace, change	
смежный	;;;	adjacent, adjoining, connected	
слышный	;;;	audible	
слышать	;;;	to hear	
слыхать	;;;	to hear (about) (coll)	
слушать	;;;	to listen to	
служить	;;;	to serve	
сломить	;;;	to break	
сложный	;;;	complicated, complex	
словарь	;;;	dictionary	
слияние	;;;	confluence; merging	
слишком	;;;	too, too much	
слесарь	;;;	metal worker, fitter	
слезать	;;;	to climb down, climb off	
следить	;;;	to watch, keep an eye on	
сладкий	;;;	sweet	
славный	;;;	glorious	
слабеть	;;;	to become weak	
скучный	;;;	boring	
скучать	;;;	to be bored; (по +d) miss (s.o. or sth)	
скудный	;;;	meagre	
скрытый	;;;	hidden	
скромно	;;;	modestly	
скрипка	;;;	violin	
скрежет	;;;	grinding (noise)	
скотина	;;;	cattle	
сколько	;;;	how many, how much	
склянка	;;;	phial, bottle	
складка	;;;	fold, crease	
скептик	;;;	sceptic	
скверно	;;;	badly	
скандал	;;;	scandal	
скакать	;;;	to skip; gallop	
система	;;;	system	
сильный	;;;	strong, powerful	
сидение	;;;	sitting; (preferably сиденье) seat	
сибиряк	;;;	Siberian	
сжимать	;;;	to squeeze	
сжигать	;;;	to burn	
сечение	;;;	cutting; section	
серебро	;;;	silver	
сердито	;;;	angrily	
сенатор	;;;	senator	
семьсот	;;;	seven hundred	
семечко	;;;	(small) seed	
селение	;;;	settlement, village	
селёдка	;;;	herring	
секунда	;;;	second	
седьмой	;;;	seventh	
сегодня	;;;	today	
сдавать	;;;	to hand in, hand over; rent, let; surrender, give up; i: take (exam); p: to pass (exam)	
сгоряча	;;;	in the heat of the moment	
сгорать	;;;	to burn, burn out	
святыня	;;;	sacred place or thing	
связист	;;;	signaller; communications engineer	
сволочь	;;;	swine, bastard (coll)	
сводить	;;;	to take (s.o. somewhere); bring together; (c +g) take down, away	
свобода	;;;	freedom	
свисток	;;;	whistle	
светлый	;;;	light, bright	
светить	;;;	to shine	
светило	;;;	luminary	
светать	;;;	to get light, dawn	
свёрток	;;;	package, bundle	
свадьба	;;;	wedding	
сборный	;;;	collapsible, prefabricated; mixed, combined (team)	
сборник	;;;	collection (book of poems, stories, articles)	
сбивать	;;;	to knock down; confuse; whip, whisk; distract, beat	
сбегать	;;;	to run down, run away	
самолёт	;;;	aeroplane	
самогон	;;;	home-made vodka	
самовар	;;;	samovar	
садовод	;;;	gardener	
рядовой	;;;	ordinary, rank and file; (as noun) private soldier	
рыбачий	;;;	fishing (adj)	
рухнуть	;;;	to collapse	
русский	;;;	Russian; a Russian	
румяный	;;;	rosy, ruddy	
румянец	;;;	flush, rosy complexion	
рулевой	;;;	steering (adj); helmsman	
рубрика	;;;	heading, rubric	
рубашка	;;;	shirt	
роскошь	;;;	luxury	
роковой	;;;	fateful	
розовый	;;;	pink; rosy	
рождать	;;;	to give birth	
родство	;;;	kinship	
родовой	;;;	ancestral; generic; birth (adj)	
родимый	;;;	native; dear (= родной)	
рисунок	;;;	drawing	
римский	;;;	Roman	
решётка	;;;	grating, grille, railings	
решение	;;;	decision; solution	
реформа	;;;	reform	
ресница	;;;	eyelash	
реплика	;;;	rejoinder, retort	
ремесло	;;;	trade (profession)	
религия	;;;	religion	
реклама	;;;	advertisement	
ребячий	;;;	child’s; childish	
ребёнок	;;;	child	
реализм	;;;	realism	
реакция	;;;	reaction	
рваться	;;;	to tear, burst; want strongly (to do sth)	
рвануть	;;;	to tug; (coll) jerk into motion	
расцвет	;;;	bloom; flourishing	
растить	;;;	to grow, raise	
рассказ	;;;	story	
рассвет	;;;	daybreak	
расовый	;;;	racial	
раненый	;;;	wounded	
ранение	;;;	wounding, wound	
разъезд	;;;	departure, dispersal	
разумно	;;;	sensibly	
разница	;;;	difference	
разлука	;;;	separation	
разгром	;;;	crushing defeat; devastation	
радость	;;;	joy	
равнина	;;;	plain	
рабство	;;;	slavery	
рабочий	;;;	(blue collar) worker; working	
пятьсот	;;;	five hundred	
пятница	;;;	Friday	
пятёрка	;;;	the number five; excellent (exam mark)	
пьяница	;;;	drunkard	
пыльный	;;;	dusty	
пылесос	;;;	vacuum cleaner	
пшеница	;;;	wheat	
путёвка	;;;	voucher for travel and accommodation	
пустырь	;;;	waste ground	
пустыня	;;;	desert	
пустота	;;;	emptiness	
пустеть	;;;	to empty, become empty	
пускать	;;;	to allow; let in; let go	
пулемёт	;;;	machine-gun	
пузырёк	;;;	bubble; phial	
публика	;;;	public	
прятать	;;;	to hide (sth)	
прыгать	;;;	to jump	
пружина	;;;	spring (mechanism)	
прощать	;;;	to forgive (s.o. or sth), pardon	
прошлый	;;;	past	
прошлое	;;;	the past	
прочный	;;;	firm, solid	
процесс	;;;	process; trial, lawsuit	
процент	;;;	percent, percentage	
профиль	;;;	profile	
протест	;;;	protest	
просьба	;;;	request	
просчёт	;;;	miscalculation; counting	
простор	;;;	space, expanse	
простой	;;;	simple	
просить	;;;	to request, ask (s.o. to do sth)	
просвет	;;;	shaft of light; aperture	
пропуск	;;;	pass, permit; blank, gap	
продукт	;;;	product	
продажа	;;;	sale	
прогноз	;;;	forecast	
пробыть	;;;	to spend (a certain time)	
приятно	;;;	pleasant	
причина	;;;	reason (+g for), cause	
прирост	;;;	increase	
природа	;;;	nature	
припасы	;;;	stores, supplies; provisions	
принцип	;;;	principle	
примета	;;;	sign	
примесь	;;;	admixture	
призрак	;;;	ghost	
признак	;;;	sign, indication	
прибыль	;;;	profit	
престол	;;;	throne	
престиж	;;;	prestige	
пресный	;;;	unsalted; flavourless, bland	
прежний	;;;	former	
предмет	;;;	object, article; subject, topic	
предлог	;;;	pretext; preposition	
править	;;;	to rule	
правило	;;;	rule	
поэтому	;;;	consequently	
почесть	;;;	honour, mark of respect	
поцелуй	;;;	kiss	
похожий	;;;	resembling, similar	
походка	;;;	gait, walk	
похвала	;;;	praise	
поучать	;;;	to lecture (s.o.)	
потомок	;;;	descendant	
потолок	;;;	ceiling	
посылка	;;;	parcel; errand; sending	
постный	;;;	lenten, meatless; without meat or milk; (coll) lean (of meat); (coll) gloomy, glum; (coll) sanctimonious	
постель	;;;	bedding, bed	
посреди	;;;	in the middle (of)	
пособие	;;;	financial assistance; textbook, educational aid	
посёлок	;;;	settlement	
посадка	;;;	boarding (of plane etc.); landing; planting	
порядок	;;;	order	
поручик	;;;	lieutenant (tsarist army)	
портрет	;;;	portrait	
портной	;;;	tailor	
портить	;;;	to spoil, damage	
порошок	;;;	powder	
поровну	;;;	equally	
попытка	;;;	attempt	
попутно	;;;	on the way; in passing	
поприще	;;;	field (of activity)	
пополам	;;;	in half, half-and-half	
поперёк	;;;	across	
поодаль	;;;	at some distance	
понятно	;;;	understandably; I see! I understand!	
понятие	;;;	concept, notion	
помнить	;;;	to remember	
помидор	;;;	tomato	
помещик	;;;	landowner	
пометка	;;;	mark, note	
полчаса	;;;	half an hour	
получше	;;;	a little better	
получка	;;;	pay, wages (coll)	
полтора	;;;	one and a half	
полотно	;;;	canvas (painting); linen	
полоска	;;;	strip	
пологий	;;;	gently sloping	
половой	;;;	sexual	
полночь	;;;	midnight	
полнота	;;;	fullness; stoutness	
полиция	;;;	police	
политик	;;;	politician	
ползать	;;;	to crawl about	
полезно	;;;	(it is) useful; usefully	
полевой	;;;	field (adj)	
полдень	;;;	midday	
полгода	;;;	half a year	
полвека	;;;	half a century	
покупка	;;;	purchase	
покорно	;;;	humbly, obediently	
пока не	;;;	until	
позорно	;;;	disgracefully, shamefully	
позиция	;;;	position	
поздний	;;;	late	
пожилой	;;;	elderly	
пожалуй	;;;	very probably	
поездка	;;;	journey, trip	
подъезд	;;;	entrance, doorway	
подушка	;;;	pillow; cushion	
подсчёт	;;;	calculation	
подступ	;;;	approach	
подруга	;;;	(female) friend	
подпись	;;;	signature	
подошва	;;;	sole (of shoe, foot)	
подолгу	;;;	for a long time	
подобно	;;;	similar (to)	
подобие	;;;	resemblance, likeness	
подвода	;;;	cart	
подарок	;;;	present, gift	
поганый	;;;	foul, vile	
повязка	;;;	bandage	
повсюду	;;;	everywhere	
поворот	;;;	turn	
повозка	;;;	cart, carriage	
повесть	;;;	story, novella	
повадка	;;;	habit, (habitual) behaviour (coll)	
поближе	;;;	a bit closer	
помоему	;;;	in my opinion; as I would have it	
плясать	;;;	to dance	
площадь	;;;	square; area	
плотный	;;;	compact; solid	
плотник	;;;	carpenter	
плотина	;;;	dam	
плоский	;;;	flat	
плетень	;;;	hurdle, wattle (fence)	
плесень	;;;	mould	
пленный	;;;	captive	
плевать	;;;	to spit	
плевать	;;;	to spit; not to give a damn about	
платить	;;;	to pay (s.o. for sth)	
планета	;;;	planet	
плакать	;;;	to cry, weep, p: to begin to cry	
плавный	;;;	smooth, flowing	
плавать	;;;	to swim; sail	
пищевой	;;;	food (adj)	
питание	;;;	feeding, food	
пирожок	;;;	pie	
пианино	;;;	(upright) piano	
пёстрый	;;;	many-coloured, motley	
песенка	;;;	song	
пёрышко	;;;	(little) feather (coll)	
персона	;;;	person	
переход	;;;	crossing, transition	
перерыв	;;;	break, interval	
перенос	;;;	transfer, carrying over; hyphenation	
перелом	;;;	break, fracture; turning-point	
перелив	;;;	tint; play of colours	
перелёт	;;;	flying over; migration (birds)	
переезд	;;;	crossing; removal (change of residence)	
перевод	;;;	translation; transfer	
перевал	;;;	crossing; mountain pass	
пелёнка	;;;	nappy, diaper	
педагог	;;;	pedagogue, teacher	
пахнуть	;;;	to smell (of)	
паутина	;;;	cobweb	
патруль	;;;	patrol	
патриот	;;;	patriot	
пасынок	;;;	stepson	
паспорт	;;;	passport	
партнёр	;;;	partner	
пароход	;;;	steamer	
паровой	;;;	steam (adj)	
паровоз	;;;	locomotive, steam engine	
паренёк	;;;	lad (coll)	
парашют	;;;	parachute	
пальчик	;;;	small finger	
палочка	;;;	small stick, baton	
палатка	;;;	tent	
пакость	;;;	dirty trick; filth	
пакетик	;;;	bag, plastic bag	
падение	;;;	fall	
ощущать	;;;	to feel, sense	
очищать	;;;	to clean, purify	
очередь	;;;	queue, turn	
охотник	;;;	hunter	
отчасти	;;;	partly	
оттенок	;;;	shade, nuance	
отрывок	;;;	excerpt	
отрасль	;;;	branch (of science, industry, government, etc.)	
отметка	;;;	note, mark	
отлично	;;;	excellent(ly)	
отличие	;;;	difference; distinction	
отделка	;;;	finishing, fitting-out, decoration	
отблеск	;;;	reflection	
осыпать	;;;	to shower (s.o./sth with sth)	
острота	;;;	sharpness; witticism	
остаток	;;;	remainder	
особняк	;;;	detached house	
осколок	;;;	splinter	
осенний	;;;	autumn (adj)	
оркестр	;;;	orchestra	
опытный	;;;	experienced	
оперный	;;;	opera (adj), operatic	
опасный	;;;	dangerous	
октябрь	;;;	October	
окраска	;;;	colouring	
окраина	;;;	outskirts	
озорной	;;;	mischievous (coll)	
озарять	;;;	to illuminate	
ожидать	;;;	to wait (for); to expect	
оживать	;;;	to revive, come to life	
однажды	;;;	once, one day	
одевать	;;;	to dress (s.o.); (coll) put on	
обычный	;;;	usual	
объятие	;;;	embrace	
общение	;;;	social intercourse, contact (with people)	
обучать	;;;	to teach (s.o. sth)	
обувать	;;;	to put shoes on s.o.; provide with shoes	
обстрел	;;;	bombardment	
обратно	;;;	back (adv)	
образец	;;;	model, pattern	
обочина	;;;	roadside, kerb	
оборона	;;;	defence	
обожать	;;;	to adore	
обломок	;;;	fragment	
обложка	;;;	cover (of book etc.)	
область	;;;	oblast, province; area, field (of activity)	
обитать	;;;	to live, reside	
обижать	;;;	to offend, hurt	
обещать	;;;	to promise (sth to s.o)	
обещать	;;;	to promise (s.o.)	
обедать	;;;	to dine, have a meal	
обаяние	;;;	charm	
носовой	;;;	nose (adj), nasal	
носилки	;;;	stretcher	
ножницы	;;;	scissors	
новость	;;;	piece of news	
новичок	;;;	novice, beginner	
новинка	;;;	novelty	
новизна	;;;	novelty, newness	
новатор	;;;	innovator	
ниточка	;;;	thread	
никогда	;;;	never	
никакой	;;;	(absolutely) no	
неясный	;;;	unclear	
неужели	;;;	really? is it possible?	
неудача	;;;	failure	
нестись	;;;	to rush	
нередко	;;;	often	
нервный	;;;	nervous	
неплохо	;;;	not bad(ly)	
неохота	;;;	reluctance; (coll) (+d) to be unwilling	
немного	;;;	a little, not much	
немалый	;;;	considerable	
неловко	;;;	awkwardly	
нелепый	;;;	absurd	
нелегко	;;;	(it’s) not easy	
некогда	;;;	there’s no time; once	
незачем	;;;	there’s no point	
недолго	;;;	not (for) long	
недаром	;;;	not for nothing	
недавно	;;;	recently	
негодяй	;;;	rascal	
невесть	;;;	no-one knows (coll)	
невеста	;;;	bride; fiancee	
неверно	;;;	false(ly)	
неважно	;;;	not very well; it doesn’t matter	
начисто	;;;	completely (coll)	
начинка	;;;	stuffing, filling (of pie etc.)	
находка	;;;	find	
научный	;;;	scientific, scholarly	
настежь	;;;	wide open	
насморк	;;;	cold (in the head)	
наскоро	;;;	hastily (coll)	
насилие	;;;	violence, force	
нарочно	;;;	deliberately	
наравне	;;;	level (with), on equal terms (with)	
направо	;;;	to the right	
напиток	;;;	drink	
намного	;;;	by a lot	
намерен	;;;	intend (to) (short adj)	
наличие	;;;	presence	
наконец	;;;	in the end	
накидка	;;;	cloak, mantle, cape	
наивный	;;;	naive	
наёмный	;;;	hired	
наёмник	;;;	mercenary	
наедине	;;;	in private; alone	
надпись	;;;	inscription	
надолго	;;;	for a long time	
надобно	;;;	necessary (coll) (= надо)	
надежда	;;;	hope	
награда	;;;	reward	
наглухо	;;;	tightly, firmly	
навечно	;;;	for ever	
наверху	;;;	above; upstairs	
наверно	;;;	probably, most likely	
мыслить	;;;	to think	
мчаться	;;;	to rush	
муравей	;;;	ant	
мужчина	;;;	man	
мужской	;;;	masculine; male	
мрачный	;;;	gloomy, baleful	
москвич	;;;	Muscovite	
морщина	;;;	wrinkle	
морской	;;;	sea, marine; naval	
моргать	;;;	to blink; wink	
молчать	;;;	to keep silent	
молчать	;;;	to be silent for a while	
молчать	;;;	to be silent; p: to fall silent	
молоток	;;;	hammer	
молодой	;;;	young	
молодец	;;;	fine fellow; well done!	
молитва	;;;	prayer	
мозаика	;;;	mosaic	
могучий	;;;	powerful	
младший	;;;	younger; junior	
мировой	;;;	world (adj)	
минутка	;;;	moment	
министр	;;;	minister (government)	
минимум	;;;	minimum	
миндаль	;;;	almonds; almond tree	
милость	;;;	favour	
миллион	;;;	million	
милиция	;;;	police	
мизинец	;;;	little finger; little toe	
мещанка	;;;	lower middle-class woman; philistine	
мещанин	;;;	petty bourgeois, lower middle class person; philistine	
мечтать	;;;	to (day) dream (about)	
меховой	;;;	fur (adj)	
механик	;;;	mechanic	
местный	;;;	local	
мерцать	;;;	to twinkle, flicker	
мёртвый	;;;	dead	
меньший	;;;	smaller	
мельком	;;;	in passing	
мелодия	;;;	melody	
медлить	;;;	to delay, hesitate	
медлить	;;;	to be slow, tarry	
медведь	;;;	bear	
маятник	;;;	pendulum	
машинка	;;;	(small) machine	
матушка	;;;	mother (coll)	
матовый	;;;	mat(t), dull	
материя	;;;	matter	
материк	;;;	mainland	
масштаб	;;;	scale	
маршрут	;;;	route	
мамочка	;;;	mummy	
мальчик	;;;	boy	
малость	;;;	a bit, a little	
макушка	;;;	top; crown (of head)	
майский	;;;	May (adj)	
магазин	;;;	shop, store	
лягушка	;;;	frog	
людской	;;;	human (adj)	
любимый	;;;	favourite	
любимец	;;;	favourite	
любезно	;;;	obligingly, courteously	
льстить	;;;	to flatter	
лукавый	;;;	sly	
ловушка	;;;	trap	
лишение	;;;	deprivation	
листать	;;;	to leaf through (coll)	
линейка	;;;	line (on paper); ruler (for drawing lines)	
лиловый	;;;	violet, lilac	
лечение	;;;	healing, treatment	
летучий	;;;	flying	
лестный	;;;	flattering	
лесоруб	;;;	lumberjack	
лесенка	;;;	small staircase; short ladder (coll)	
лепёшка	;;;	flat cake; scone; lozenge, pastille	
ленивый	;;;	lazy	
ледяной	;;;	icy	
ледовый	;;;	ice (adj)	
легенда	;;;	legend	
лауреат	;;;	prize-winner	
ласково	;;;	affectionately	
лампада	;;;	icon-lamp	
лазейка	;;;	hole; loop-hole	
лавочка	;;;	small shop; small bench	
кухарка	;;;	cook (f)	
кусочек	;;;	small piece	
куриный	;;;	hen’s	
кукушка	;;;	cuckoo	
ктолибо	;;;	anyone	
крыться	;;;	to lie (in), be concealed (in)	
крыльцо	;;;	entrance steps; porch	
крутить	;;;	to twist	
крупный	;;;	large, important	
кружить	;;;	to spin; circle	
кружево	;;;	lace	
круглый	;;;	round	
кроткий	;;;	gentle, meek	
кровный	;;;	blood (adj); vital	
кровать	;;;	bed	
кричать	;;;	to shout	
критика	;;;	criticism	
крестик	;;;	little cross	
крепкий	;;;	strong	
краткий	;;;	short	
красота	;;;	beauty	
красный	;;;	red	
красить	;;;	to paint, colour; dye	
красиво	;;;	beautifully, attractively	
крайний	;;;	extreme	
кошелёк	;;;	purse (for money)	
который	;;;	which, who	
котлета	;;;	cutlet; meatball, hamburger	
котёнок	;;;	kitten	
котелок	;;;	pot; bowler hat	
косынка	;;;	headscarf	
костыль	;;;	crutch	
коротко	;;;	short, briefly	
коробка	;;;	box	
кормить	;;;	to feed	
коридор	;;;	corridor	
корзина	;;;	basket	
корешок	;;;	back (of bookbinding); small root; counterfoil; (coll) pal, mate	
корабль	;;;	ship	
копейка	;;;	kopeck	
конюшня	;;;	stable	
кончина	;;;	decease, demise (formal)	
кончать	;;;	to finish; graduate	
концерт	;;;	concert	
конфета	;;;	sweet	
контора	;;;	office	
контакт	;;;	contact	
конский	;;;	horse (adj)	
конкурс	;;;	competition	
конечно	;;;	of course	
конверт	;;;	envelope	
комната	;;;	room	
комитет	;;;	committee	
комедия	;;;	comedy	
комбайн	;;;	combine harvester	
команда	;;;	team, crew; command	
коляска	;;;	pram; carriage	
колючка	;;;	prickle	
колючий	;;;	prickly	
колонна	;;;	column	
колония	;;;	colony	
колокол	;;;	bell	
колодец	;;;	well	
коллега	;;;	colleague	
колечко	;;;	little ring, ringlet	
коленка	;;;	knee (coll)	
колбаса	;;;	sausage, salami	
козырёк	;;;	peak (of cap)	
кожаный	;;;	leather (adj)	
когдато	;;;	at some time, at one time	
книжный	;;;	book (adj); bookish	
клиника	;;;	clinic	
клевета	;;;	slander	
клевать	;;;	to peck	
кислота	;;;	acid; acidity	
кипяток	;;;	boiling water	
керосин	;;;	kerosene	
квартал	;;;	block (of buildings); quarter of year	
квадрат	;;;	square	
каяться	;;;	to repent	
кашлять	;;;	to cough	
кафедра	;;;	department (university)	
катушка	;;;	reel, spool	
каторга	;;;	hard labour, penal servitude	
карьера	;;;	career	
картина	;;;	picture	
караван	;;;	caravan; convoy	
капуста	;;;	cabbage	
капитан	;;;	captain	
капитал	;;;	capital (financial)	
канадец	;;;	Canadian (man)	
каморка	;;;	small room (coll)	
камешек	;;;	pebble	
калитка	;;;	gate, garden gate	
каковой	;;;	which (official style)	
казнить	;;;	to execute	
казачий	;;;	Cossack (adj)	
казарма	;;;	barracks	
кабинет	;;;	study, office	
история	;;;	history; story	
историк	;;;	historian	
истерия	;;;	hysteria	
искусно	;;;	skilfully	
искание	;;;	search	
интерес	;;;	interest	
инженер	;;;	engineer	
инерция	;;;	inertia	
инвалид	;;;	invalid	
империя	;;;	empire	
иметься	;;;	to be, be available	
именины	;;;	name-day	
иллюзия	;;;	illusion	
изящный	;;;	elegant	
изучать	;;;	to learn, master	
изумруд	;;;	emerald	
изредка	;;;	occasionally	
изнутри	;;;	from inside	
излишне	;;;	excessively	
изделие	;;;	(manufactured) article	
издание	;;;	publication; edition	
издавна	;;;	since long ago	
известь	;;;	lime (chemical)	
избыток	;;;	abundance; surplus	
идиллия	;;;	idyll	
идейный	;;;	ideological; containing ideas; progressive; high-principled	
игрушка	;;;	toy	
зритель	;;;	spectator	
зрелище	;;;	spectacle	
золотой	;;;	gold, golden	
знающий	;;;	knowledgeable	
значить	;;;	to mean	
знатный	;;;	distinguished, outstanding; (hist) high-born, noble	
злиться	;;;	to be angry, get angry (with)	
злиться	;;;	to get angry (coll)	
зеркало	;;;	mirror	
зелёный	;;;	green	
здорово	;;;	(coll) splendid(ly), great healthily; (coll) hi!	
здешний	;;;	local, from here	
звучать	;;;	to sound	
звонкий	;;;	ringing, clear	
звонить	;;;	to ring, telephone (s.o.)	
звенеть	;;;	to ring; (+inst) jingle	
затяжка	;;;	delay; inhalation (smoking)	
затылок	;;;	back of the head	
затрата	;;;	expense	
заслуга	;;;	service, merit, achievement	
заросль	;;;	thicket	
зародыш	;;;	foetus; embryo	
заранее	;;;	in advance	
записка	;;;	note (written)	
западня	;;;	trap	
занятый	;;;	occupied, busy	
занятие	;;;	occupation; (pl) classes	
занавес	;;;	(heavy) curtain	
замысел	;;;	scheme, idea	
заметно	;;;	noticeably	
заметка	;;;	mark, (written) note	
закуска	;;;	hors-d’oeuvre; snack	
закупка	;;;	purchase	
закалка	;;;	physical training, fitness	
задолго	;;;	long before	
задание	;;;	task, assignment	
заговор	;;;	plot	
загадка	;;;	mystery; riddle	
завтрак	;;;	breakfast	
зависть	;;;	envy	
забытый	;;;	forgotten	
забавно	;;;	amusingly	
жилетка	;;;	waistcoat	
живучий	;;;	hardy, enduring	
жестоко	;;;	cruelly	
жёсткий	;;;	harsh	
женщина	;;;	woman	
женский	;;;	female	
женатый	;;;	married (of man)	
желудок	;;;	stomach	
желание	;;;	wish, desire	
жалость	;;;	pity	
жаждать	;;;	to thirst for	
ёмкость	;;;	capacity	
единица	;;;	unit	
дыхание	;;;	breathing	
дырявый	;;;	full of holes	
дымовой	;;;	smoke (adj)	
душевно	;;;	mentally; cordially	
дурачок	;;;	idiot, half-wit	
дубовый	;;;	oak (adj)	
дружный	;;;	amicable; simultaneous	
дружить	;;;	to be friends (with s.o.)	
дружина	;;;	militia	
дрожать	;;;	to shiver, start shaking	
дремать	;;;	to doze	
древний	;;;	ancient	
драться	;;;	to fight; have a fight with	
дощечка	;;;	nameplate; small board	
дощатый	;;;	made of planks, board (adj)	
дохнуть	;;;	to die (of animals)	
дотация	;;;	subsidy	
досадно	;;;	annoying	
дорожка	;;;	path; track	
дорогой	;;;	dear, expensive	
донской	;;;	(of the river) Don	
домысел	;;;	conjecture	
домишко	;;;	shack, hovel	
должный	;;;	due, proper	
договор	;;;	agreement; treaty; contract	
догадка	;;;	guess, conjecture	
доверие	;;;	trust	
доброта	;;;	goodness, kindness	
добавка	;;;	addition	
дневной	;;;	day (adj)	
дневник	;;;	diary	
длиться	;;;	to last	
длинный	;;;	long	
дивизия	;;;	division (army)	
диаметр	;;;	diameter	
деятель	;;;	agent, figure	
дешёвый	;;;	cheap	
дефицит	;;;	deficit; shortage, shortages	
детство	;;;	childhood	
детский	;;;	children’s	
детишки	;;;	children (coll)	
детвора	;;;	kids (coll)	
десятый	;;;	tenth	
десяток	;;;	ten; a decade	
дескать	;;;	(indicating reported speech) ‘he said’, ‘they said’ etc. (coll)	
дерзкий	;;;	cheeky; daring	
держать	;;;	to hold, keep	
держава	;;;	power (powerful country)	
деревня	;;;	village; countryside	
дёргать	;;;	to tug	
депутат	;;;	elected representative	
дельный	;;;	businesslike	
деловой	;;;	business (adj)	
деление	;;;	division	
делегат	;;;	delegate	
декабрь	;;;	December	
дедушка	;;;	grandfather	
девятый	;;;	ninth	
девчата	;;;	girls (coll)	
девушка	;;;	girl	
девочка	;;;	little girl	
девичий	;;;	girl’s, maiden’s	
дворник	;;;	caretaker, janitor; (coll) windscreen wiper	
двойной	;;;	double, twofold	
двигать	;;;	to move, set in motion	
дальний	;;;	distant, remote	
далёкий	;;;	distant, remote	
гулянье	;;;	festival, fete, open-air party	
грязный	;;;	dirty	
грустно	;;;	sad(ly)	
грузчик	;;;	docker; freight handler	
грузить	;;;	to load	
громкий	;;;	loud	
громить	;;;	to rout; wreck	
громада	;;;	mass, bulk	
грозный	;;;	threatening	
грозить	;;;	to threaten (s.o.)	
грешный	;;;	sinful	
греться	;;;	to warm os	
греметь	;;;	to thunder, resound	
греметь	;;;	to roar, resound	
гребень	;;;	comb, crest	
граница	;;;	frontier; limit	
граната	;;;	shell; grenade	
грамота	;;;	literacy; document, deed	
грабить	;;;	to rob, pillage	
готовый	;;;	ready	
господь	;;;	God, the Lord	
горящий	;;;	burning (adj)	
горячий	;;;	hot	
горючее	;;;	fuel	
горький	;;;	bitter	
горчица	;;;	mustard	
городок	;;;	small town	
гораздо	;;;	much (with comparatives)	
гонорар	;;;	fee; royalties	
голубой	;;;	light blue	
гололёд	;;;	covering of ice; icy weather	
головка	;;;	small head	
годовой	;;;	yearly	
гнусный	;;;	vile	
гневный	;;;	angry	
глянуть	;;;	to glance (at)	
глядеть	;;;	to look (at)	
глушить	;;;	to drown (a sound)	
глубоко	;;;	deep; deeply, it is deep	
глубина	;;;	depth	
глотать	;;;	to swallow	
гласить	;;;	to announce, say	
гладкий	;;;	smooth	
гладить	;;;	to stroke; iron	
главный	;;;	main	
главное	;;;	the main thing	
гибнуть	;;;	to perish	
героизм	;;;	heroism	
генерал	;;;	general (noun)	
гвардия	;;;	Guards	
гаснуть	;;;	to go out, be extinguished, fade	
галстук	;;;	tie, necktie	
галерея	;;;	gallery	
газовый	;;;	gas (adj)	
гадость	;;;	filth; dirty trick	
выходка	;;;	bad behaviour, escapade	
выстрел	;;;	shot	
высокий	;;;	high, tall	
высадка	;;;	landing, disembarkation	
выручка	;;;	proceeds, earnings; rescue	
выплата	;;;	payment	
вымысел	;;;	fabrication, fantasy	
выигрыш	;;;	win	
выдумка	;;;	invention; fabrication, lie	
выгодно	;;;	advantageously	
выговор	;;;	reprimand; pronunciation	
вывеска	;;;	signboard	
входной	;;;	entrance (adj)	
входить	;;;	to enter	
вторник	;;;	Tuesday	
встреча	;;;	meeting	
вспышка	;;;	flash	
всплеск	;;;	splash	
всерьёз	;;;	seriously	
всётаки	;;;	all the same, for all that	
всадник	;;;	horseman	
вряд ли	;;;	(it’s) unlikely	
вручную	;;;	by hand	
вручать	;;;	to hand, hand over	
вредный	;;;	harmful	
вредить	;;;	to harm, damage	
впрочем	;;;	however, but; or rather	
впереди	;;;	ahead	
впервые	;;;	for the first time	
впадина	;;;	hollow, depression	
впадать	;;;	to fall in/into	
восьмой	;;;	eighth	
восторг	;;;	delight	
ворчать	;;;	to grumble; growl	
воронка	;;;	funnel	
воробей	;;;	sparrow	
вопреки	;;;	in spite of	
вольный	;;;	free	
волосок	;;;	(a) hair	
волевой	;;;	strong-willed	
возраст	;;;	age	
возглас	;;;	exclamation	
военный	;;;	military, war (adj); soldier	
воедино	;;;	together	
воевать	;;;	to wage war	
водяной	;;;	water (adj), aquatic, water-powered	
водород	;;;	hydrogen	
водопад	;;;	waterfall	
вовремя	;;;	on time	
внушать	;;;	to instil, inspire (sth in s.o.), put sth in s.o.’s head	
вносить	;;;	to carry in, bring in	
вникать	;;;	to investigate	
внешний	;;;	exterior	
вначале	;;;	at first	
влияние	;;;	influence	
влетать	;;;	to fly in	
влезать	;;;	to climb in	
властно	;;;	imperiously	
влажный	;;;	damp	
владыка	;;;	master, ruler	
владеть	;;;	to possess; have command of; to master	
вкусный	;;;	tasty	
витрина	;;;	shop-window; showcase	
виноват	;;;	guilty; sorry! (short adj)	
визжать	;;;	to scream; squeal	
видимый	;;;	visible, evident	
видение	;;;	vision	
взывать	;;;	to appeal to	
взаимно	;;;	mutually	
вешалка	;;;	coat hanger	
вечером	;;;	in the evening	
ветчина	;;;	ham	
веточка	;;;	twig, sprig	
ветерок	;;;	breeze	
ветеран	;;;	veteran	
вестник	;;;	messenger	
весомый	;;;	weighty	
веселье	;;;	merriment	
весёлый	;;;	cheerful, merry	
вершина	;;;	summit, peak	
верхний	;;;	upper	
вертеть	;;;	to twirl	
верёвка	;;;	rope; string	
верблюд	;;;	camel	
венский	;;;	Viennese	
величие	;;;	greatness	
великий	;;;	great	
великан	;;;	giant	
веление	;;;	command	
вековой	;;;	centuries-old	
вежливо	;;;	politely	
ведущий	;;;	leading; (as noun) presenter (of programme)	
вдыхать	;;;	to breathe in	
вдоволь	;;;	in abundance; enough	
вдалеке	;;;	in the distance	
вводить	;;;	to bring in, introduce	
вбегать	;;;	to run in	
вариант	;;;	variant	
варенье	;;;	jam, preserves	
варежка	;;;	mitten	
валовой	;;;	gross (adj)	
валенок	;;;	felt boot	
бытовой	;;;	social, everyday	
быстрый	;;;	quick, fast	
бывалый	;;;	experienced	
бутылка	;;;	bottle	
буркать	;;;	to mutter, growl (coll)	
бумажка	;;;	piece of paper; banknote	
бульвар	;;;	avenue	
булавка	;;;	pin	
будущий	;;;	future (adj)	
брошюра	;;;	brochure	
бросать	;;;	to throw; abandon, give up	
бродяга	;;;	tramp, down-and-out	
бродить	;;;	to wander	
бриться	;;;	to shave	
бригада	;;;	brigade, team	
браться	;;;	to take hold of; start work on; to take up, get down to	
браслет	;;;	bracelet	
бояться	;;;	to be afraid, not dare to	
бояться	;;;	to fear, be afraid	
ботинок	;;;	(low) boot	
бородка	;;;	small beard	
бомбить	;;;	to bomb	
большой	;;;	large	
больший	;;;	bigger	
больной	;;;	ill; sore; (as noun) patient, invalid	
болтать	;;;	to shake, stir; (coll) chatter	
болезнь	;;;	illness	
боковой	;;;	side (adj)	
богатый	;;;	rich	
блокнот	;;;	notepad	
блиндаж	;;;	dug out	
близнец	;;;	twin	
близкий	;;;	close, near	
ближний	;;;	near	
бледный	;;;	pale	
бинокль	;;;	binoculars	
бешеный	;;;	mad; furious	
беседка	;;;	summer-house	
берёзка	;;;	little birch tree	
бережно	;;;	carefully	
белизна	;;;	whiteness	
безумие	;;;	madness	
беженец	;;;	refugee	
бедняга	;;;	poor fellow (coll)	
беднота	;;;	the poor	
бегство	;;;	flight, escape	
батюшка	;;;	father	
батарея	;;;	battery; radiator	
бассейн	;;;	pool, swimming-pool; basin (geog)	
барышня	;;;	young lady	
барский	;;;	lord’s, barin's	
барахло	;;;	old clothes, jumble; junk (coll)	
барабан	;;;	drum	
бабушка	;;;	grandmother	
бабочка	;;;	butterfly	
афоризм	;;;	aphorism	
атомный	;;;	atomic	
асфальт	;;;	asphalt	
арсенал	;;;	arsenal	
аппетит	;;;	appetite	
аппарат	;;;	apparatus	
апостол	;;;	apostle	
антенна	;;;	antenna; aerial	
анекдот	;;;	anecdote, joke	
анархия	;;;	anarchy	
актриса	;;;	actress	
активно	;;;	actively	
адмирал	;;;	admiral	
адвокат	;;;	lawyer	
агроном	;;;	agronomist	
агрегат	;;;	unit, assembly	
автомат	;;;	slot-machine; phone box	
автобус	;;;	bus	
авиация	;;;	aviation	
явиться	;;;	to appear	
шепнуть	;;;	to whisper	
шагнуть	;;;	to step, stride; to take a step	
чихнуть	;;;	to sneeze	
хватить	;;;	(3rd pers +g) to be enough, suffice	
уяснить	;;;	to understand	
утешить	;;;	to console	
усилить	;;;	to strengthen	
усвоить	;;;	to adopt, acquire (habit); master, learn	
уронить	;;;	to drop	
уняться	;;;	to calm down	
унизить	;;;	to humiliate	
умыться	;;;	to wash os	
умолить	;;;	to implore	
умереть	;;;	to die	
уложить	;;;	to lay (down); pack, stack	
уловить	;;;	to catch; detect	
улечься	;;;	to lie down, go to bed; (p only) calm down; (p only) settle	
улететь	;;;	to fly away	
укутать	;;;	to wrap (s.o.) up	
указать	;;;	to point out	
удивить	;;;	to surprise	
уделить	;;;	to allot, give	
удаться	;;;	to succeed	
ударить	;;;	to strike, hit	
удалить	;;;	to send away, remove	
угодить	;;;	to please; (coll) get into, end up (p only)	
угадать	;;;	to guess	
уволить	;;;	to dismiss, fire	
увидеть	;;;	to see	
уверить	;;;	to assure	
убежать	;;;	to run away	
убедить	;;;	to convince; persuade	
тронуть	;;;	to touch	
топнуть	;;;	to stamp (one’s feet); (coll) go (=идти)	
сыграть	;;;	to play	
съехать	;;;	to drive down; (coll) slip	
сшибить	;;;	to knock down (coll)	
стянуть	;;;	to tighten; pull off	
ступить	;;;	to step	
стереть	;;;	to rub off; grind down	
стащить	;;;	to drag off; (coll) pinch	
списать	;;;	to copy; write off	
сорвать	;;;	to tear off; wreck	
сойтись	;;;	to meet; form a liaison with; agree	
созреть	;;;	to mature, ripen	
сознать	;;;	to acknowledge, be aware of	
создать	;;;	to create	
созвать	;;;	to convene	
согреть	;;;	to warm	
собрать	;;;	to gather, collect	
сняться	;;;	to be taken off; move off; have one’s picture taken; come off; act in a film; be photographed	
снизить	;;;	to lower, reduce	
смутить	;;;	to embarrass; disturb; trouble	
смешать	;;;	to confuse, mix	
сменить	;;;	to replace, change	
сложить	;;;	to pile up, put together; fold up; add up; put down	
слиться	;;;	to merge, join together	
скинуть	;;;	to throw off (coll)	
сказать	;;;	to say	
сжаться	;;;	to tighten, clench	
сдаться	;;;	to surrender, give up	
сгореть	;;;	to burn, burn out	
связать	;;;	to tie; to connect, bind	
свесить	;;;	to lower, let dangle; (p only) (coll) weigh	
сварить	;;;	to weld	
сварить	;;;	to boil, cook	
свалить	;;;	to throw down; pile up	
сбиться	;;;	to slip; go wrong, get confused; huddle together	
сберечь	;;;	to save; protect	
сбежать	;;;	to run down, run away	
почуять	;;;	to scent, smell; sense, feel	
почтить	;;;	to honour	
научить	;;;	to teach (s.o. sth)	
выучить	;;;	to learn (sth)	
поспать	;;;	to sleep	
посметь	;;;	to dare	
послать	;;;	to send	
посеять	;;;	to sow	
порвать	;;;	to tear	
вырасти	;;;	to grow	
напоить	;;;	to give to drink	
поплыть	;;;	to sail; swim	
заорать	;;;	to start yelling	
понести	;;;	to carry	
полезть	;;;	to climb	
солгать	;;;	to lie, tell lies, tell a lie	
залаять	;;;	to bark	
покрыть	;;;	to cover	
созреть	;;;	to ripen, mature	
позвать	;;;	to call (s.o.); summon	
сожрать	;;;	to eat (very coll), gobble up	
поехать	;;;	to go (by transport)	
содрать	;;;	to tear; thrash; fleece (coll)	
погреть	;;;	to heat	
согнуть	;;;	to bend	
погнать	;;;	to drive; hunt, persecute, chase	
соврать	;;;	to tell lies; talk nonsense	
повести	;;;	to lead	
повезти	;;;	to transport; (+d) be lucky	
побрить	;;;	to shave	
сходить	;;;	to go there and back	
утонуть	;;;	to drown	
остричь	;;;	to cut, clip	
оробеть	;;;	to be timid	
спутать	;;;	to confuse, mix up	
спалить	;;;	to burn, scorch; singe	
смешать	;;;	to mix	
сломать	;;;	to break, fracture	
скушать	;;;	to eat	
украсть	;;;	to steal	
скосить	;;;	to mow; twist	
сделать	;;;	to do, make	
связать	;;;	to tie; knit	
свиться	;;;	to wind, twine, twist	
увидать	;;;	to see (coll)	
свалить	;;;	to topple; heap up	
сбегать	;;;	to run there and back, run somewhere (and return)	
ячейка	;;;	cell	
ястреб	;;;	hawk	
ярость	;;;	rage	
японец	;;;	Japanese man	
янтарь	;;;	amber	
январь	;;;	January	
яблоня	;;;	apple-tree	
яблоко	;;;	apple	
юность	;;;	youth	
юбилей	;;;	jubilee, anniversary	
эшелон	;;;	echelon; special train	
эффект	;;;	effect	
этакий	;;;	such (= такой) (coll)	
эпизод	;;;	episode	
экипаж	;;;	carriage; crew	
эгоизм	;;;	egoism, selfishness	
щупать	;;;	to feel, touch (sth), probe	
щетина	;;;	bristles, bristly surface; stubble (of beard)	
щедрый	;;;	generous	
щадить	;;;	to spare	
шутить	;;;	to joke	
шумный	;;;	noisy	
шуметь	;;;	to make a noise	
штучка	;;;	thing, object (coll)	
широта	;;;	width	
широко	;;;	widely, broadly	
ширина	;;;	width; gauge	
шипеть	;;;	to hiss	
шинель	;;;	greatcoat	
шестой	;;;	sixth	
шерсть	;;;	wool; hair (of animal)	
шелуха	;;;	skin, peel, husk	
шелест	;;;	rustling	
шахтёр	;;;	miner	
шаткий	;;;	unsteady	
шарить	;;;	to grope, fumble	
шагать	;;;	to step, stride; to take a step	
шагать	;;;	to stride out	
шаблон	;;;	cliche; routine; pattern	
чуткий	;;;	sensitive	
чуждый	;;;	(+d) alien (to); (+g) devoid (of)	
чудный	;;;	wonderful	
чтение	;;;	reading	
чихать	;;;	to sneeze	
читать	;;;	to read	
чистый	;;;	clean, pure	
чистка	;;;	cleaning; purge (political)	
чинить	;;;	to repair	
четыре	;;;	four	
чёткий	;;;	clear, precise	
честно	;;;	honestly	
чесать	;;;	to scratch	
чёртов	;;;	devil’s (adj)	
чертёж	;;;	technical drawing	
чёрный	;;;	black	
чердак	;;;	attic	
чепуха	;;;	nonsense	
чаяние	;;;	hope; expectation	
частый	;;;	frequent	
чайный	;;;	tea (adj)	
чайник	;;;	teapot; kettle	
цитата	;;;	quotation	
ценный	;;;	valuable	
ценить	;;;	to value	
цемент	;;;	cement	
целина	;;;	virgin soil, virgin land	
цветок	;;;	flower	
цвести	;;;	to flower, flourish	
царица	;;;	tsarina, empress	
царить	;;;	to reign	
худший	;;;	worst	
хромой	;;;	lame	
хрипло	;;;	hoarsely	
хребет	;;;	spine; ridge; mountain range	
хотеть	;;;	to want	
хорошо	;;;	well; it is good	
хоккей	;;;	(ice-)hockey	
хозяин	;;;	master, boss, owner	
ходить	;;;	to go there and back	
ходить	;;;	to walk about	
ходить	;;;	to walk around	
хмурый	;;;	gloomy	
хлопья	;;;	flakes	
хищник	;;;	beast of prey; bird of prey; predator	
хитрый	;;;	cunning	
хирург	;;;	surgeon	
хижина	;;;	shack, cabin	
футбол	;;;	football	
фонтан	;;;	fountain	
фонарь	;;;	lamp	
флейта	;;;	flute	
филиал	;;;	branch (of organization)	
физика	;;;	physics	
фигура	;;;	figure	
фермер	;;;	farmer	
фашист	;;;	Fascist	
фашизм	;;;	Fascism	
фарфор	;;;	porcelain	
фактор	;;;	factor	
уютный	;;;	cosy	
ущелье	;;;	ravine	
учёный	;;;	learned, scholarly; (as noun) scholar, scientist	
ученик	;;;	pupil	
учение	;;;	learning, study, instruction	
участь	;;;	fate, lot (in life)	
утрата	;;;	loss	
утечка	;;;	leak	
устный	;;;	oral	
устало	;;;	wearily	
уснуть	;;;	to fall asleep	
услуга	;;;	service, favour	
усилие	;;;	effort	
усатый	;;;	with a moustache; whiskered	
урожай	;;;	harvest	
ураган	;;;	hurricane	
упрямо	;;;	stubbornly	
управа	;;;	(coll) control, means of control; (hist) management, administration, justice	
упорно	;;;	persistently	
упадок	;;;	decline	
уныние	;;;	dejection, gloom	
унылый	;;;	sad, cheerless	
умысел	;;;	intention	
умница	;;;	clever person (coll)	
умение	;;;	ability	
умелый	;;;	skilful	
улыбка	;;;	smile	
узелок	;;;	small knot; small bundle	
ужасно	;;;	terribly	
удочка	;;;	fishing rod	
удобно	;;;	comfortably; conveniently; it’s convenient	
удачно	;;;	successfully	
угрюмо	;;;	gloomily	
угроза	;;;	threat	
уголок	;;;	corner, nook	
угодье	;;;	usable land	
угодно	;;;	to your liking	
уговор	;;;	agreement; persuasion	
убыток	;;;	loss	
уборка	;;;	tidying up; harvest	
убогий	;;;	wretched	
убитый	;;;	killed	
убийца	;;;	murderer	
тянуть	;;;	to pull, drag	
тяжкий	;;;	heavy, serious	
тяжело	;;;	heavily; gravely; it is hard, painful	
тюрьма	;;;	prison	
тысяча	;;;	thousand	
тыкать	;;;	to prod, jab (sth into sth)	
тщетно	;;;	in vain	
тушить	;;;	to extinguish; stew	
турнир	;;;	tournament	
турист	;;;	tourist; hiker	
туризм	;;;	tourism; hiking	
тундра	;;;	tundra (treeless northern wastes)	
туалет	;;;	toilet	
трясти	;;;	to shake	
тряпьё	;;;	rags	
тряпка	;;;	rag	
трудно	;;;	(it is) difficult	
трубка	;;;	tube, pipe; telephone receiver	
трофей	;;;	trophy; booty	
трость	;;;	cane, walking-stick	
тройка	;;;	three; group of three; troika	
триумф	;;;	triumph	
триста	;;;	three hundred	
трижды	;;;	thrice, three times	
третий	;;;	third	
трение	;;;	friction	
тренер	;;;	trainer, coach	
трезво	;;;	soberly	
трасса	;;;	route, course (of road etc.)	
точный	;;;	exact, precise	
точить	;;;	to sharpen; gnaw at, corrode	
тотчас	;;;	immediately	
тополь	;;;	poplar	
топить	;;;	to stoke; heat; (p) sink (sth), drown (s.o.)	
топать	;;;	to stamp (one’s feet); (coll) go (=идти)	
тонуть	;;;	to drown	
тонуть	;;;	to sink; drown	
тонкий	;;;	thin, slender; fine, subtle	
только	;;;	only	
толчок	;;;	push; jolt	
толком	;;;	clearly; properly (coll)	
токарь	;;;	turner, lathe operator	
тишина	;;;	quiet, silence	
техник	;;;	technician	
тесный	;;;	tight	
терять	;;;	to lose	
террор	;;;	terror	
термин	;;;	term (specialist word)	
тереть	;;;	to rub	
тёплый	;;;	warm	
теперь	;;;	now	
теория	;;;	theory	
тёмный	;;;	dark	
телега	;;;	cart	
творец	;;;	creator	
твёрдо	;;;	firmly	
тащить	;;;	to drag	
талант	;;;	talent	
тайный	;;;	secret (adj)	
тайник	;;;	hiding-place	
тайком	;;;	secretly	
сюртук	;;;	frock-coat	
сыпать	;;;	to pour, strew	
съёмка	;;;	shooting (of film); surveying; taking away	
сушить	;;;	to dry (sth)	
сухарь	;;;	piece of dried bread; rusk	
сурово	;;;	severely	
супруг	;;;	spouse (husband)	
сундук	;;;	trunk, chest	
сумрак	;;;	dusk	
сулить	;;;	to promise (sth)	
судьба	;;;	fate	
судить	;;;	to judge; (+a) try (s.o.)	
сугубо	;;;	especially; exclusively	
сугроб	;;;	snowdrift	
стычка	;;;	skirmish; squabble	
стыдно	;;;	it is shameful; (+d of person X) X is ashamed	
струна	;;;	string (of instrument)	
строка	;;;	line (of text)	
строго	;;;	strictly	
стричь	;;;	to cut, clip	
стрела	;;;	arrow	
страна	;;;	country	
стоять	;;;	to stand; p: to stand for a while	
сторож	;;;	watchman	
столик	;;;	small table, restaurant table	
стойко	;;;	steadfastly	
стойка	;;;	bar, counter; stance	
стоить	;;;	to cost, to be worth	
стихия	;;;	element, elemental force; chaos	
стирка	;;;	washing (of clothes)	
стимул	;;;	stimulus	
стенка	;;;	wall, partition, side	
стекло	;;;	glass (material)	
стачка	;;;	strike (= забастовка)	
статья	;;;	article (newspaper, journal)	
статуя	;;;	statue	
старый	;;;	old	
старик	;;;	old man	
старец	;;;	elder	
станок	;;;	machine, machine tool	
стакан	;;;	glass, tumbler	
стадия	;;;	stage (of development)	
ставка	;;;	rate; stake (gambling); headquarters (mil)	
ссылка	;;;	internal exile (inside Russia)	
срочно	;;;	urgently	
спящий	;;;	sleeping	
спустя	;;;	later (= через)	
справа	;;;	on the right	
способ	;;;	way, method	
сплошь	;;;	completely	
спичка	;;;	match, match stick	
список	;;;	list	
спинка	;;;	back (of chair etc.)	
спешно	;;;	urgently, hurriedly	
спешка	;;;	haste	
сперва	;;;	at first (coll)	
сочный	;;;	juicy, rich	
состав	;;;	composition, make-up	
сосать	;;;	to suck	
сорока	;;;	magpie	
сорняк	;;;	weed	
сопеть	;;;	to snuffle	
сонный	;;;	sleepy	
солома	;;;	straw	
солнце	;;;	sun	
солдат	;;;	soldier	
совхоз	;;;	state farm, sovkhoz	
совсем	;;;	completely	
совать	;;;	to thrust, poke (sth into sth)	
собака	;;;	dog	
снимок	;;;	photograph	
снаряд	;;;	shell (mil)	
смутно	;;;	vaguely, dimly	
смирно	;;;	quietly	
смешок	;;;	chuckle	
смешно	;;;	comical(ly)	
смерть	;;;	death	
смелый	;;;	brave, bold	
слышно	;;;	audible, audibly	
случай	;;;	case, occurrence, chance	
служба	;;;	service	
сложно	;;;	complicated(ly)	
словцо	;;;	word; apt remark, witticism (coll)	
словом	;;;	in short	
словно	;;;	as if	
слепой	;;;	blind	
следом	;;;	behind	
слегка	;;;	slightly	
сладко	;;;	sweetly	
слабый	;;;	weak	
скучно	;;;	boring	
скупой	;;;	miserly	
скорый	;;;	fast	
скорее	;;;	quicker; rather	
скорбь	;;;	grief	
сквозь	;;;	through	
скачок	;;;	leap	
скамья	;;;	bench	
сказка	;;;	fairy-tale	
сияние	;;;	radiance	
сирота	;;;	orphan	
сирень	;;;	lilac	
сирена	;;;	siren	
синева	;;;	blue colour, blueness	
символ	;;;	symbol	
сильно	;;;	strongly; very much	
силуэт	;;;	silhouette	
сидеть	;;;	to sit (p: sit for a while)	
сигнал	;;;	signal	
сигара	;;;	cigar	
сжатый	;;;	compressed	
сестра	;;;	sister	
сессия	;;;	session; examinations	
серный	;;;	sulphuric	
сердце	;;;	heart	
сервиз	;;;	service, set (of dishes)	
секция	;;;	section	
сектор	;;;	sector	
секрет	;;;	secret	
сейчас	;;;	now, right now	
седина	;;;	grey hair	
сделка	;;;	deal, transaction	
святой	;;;	sacred; saint	
сводка	;;;	report, bulletin	
свитер	;;;	sweater	
свинья	;;;	pig	
свинец	;;;	lead (metal)	
свечка	;;;	small candle	
светло	;;;	it’s light	
сверху	;;;	from above	
свёкла	;;;	beet	
свежий	;;;	fresh	
сажать	;;;	to plant, seat	
рюкзак	;;;	rucksack	
рычать	;;;	to growl	
рыцарь	;;;	knight	
рыхлый	;;;	friable, crumbly; (coll) podgy, flabby	
рыться	;;;	to dig, rummage (in)	
рыдать	;;;	to sob	
рыбный	;;;	fish (adj)	
ручной	;;;	hand (adj); tame	
рудник	;;;	mine (for minerals)	
ругать	;;;	to abuse, scold	
рубить	;;;	to chop	
рубаха	;;;	shirt	
росток	;;;	sprout, shoot	
рослый	;;;	tall, strapping	
ронять	;;;	to drop	
романс	;;;	romance (song)	
родной	;;;	native; own; (as noun, in pl) relatives, relations	
родник	;;;	spring (water source)	
родина	;;;	homeland, native land	
рогожа	;;;	matting	
ровный	;;;	level; even, equal	
робкий	;;;	timid	
робеть	;;;	to be timid	
ржавый	;;;	rusty	
решето	;;;	sieve	
решать	;;;	to decide; solve	
речной	;;;	river (adj)	
рецепт	;;;	recipe; prescription	
ресурс	;;;	resource	
ремонт	;;;	repair; redecoration	
ремень	;;;	belt	
рельеф	;;;	relief (geog, art)	
рекорд	;;;	record	
резьба	;;;	carving	
резкий	;;;	sharp	
резерв	;;;	reserve	
резать	;;;	to cut	
резать	;;;	to kill	
редкий	;;;	rare	
реветь	;;;	to roar, howl	
ребята	;;;	children, boys (coll)	
рваный	;;;	torn	
расчёт	;;;	calculation	
расход	;;;	expenditure	
распад	;;;	disintegration	
раскол	;;;	split, schism	
раскат	;;;	rumble, roll, peal	
расизм	;;;	racism	
раньше	;;;	earlier	
ранний	;;;	early	
ранить	;;;	to wound, injure	
ракета	;;;	rocket	
разряд	;;;	discharge; category	
разрыв	;;;	break, gap; shell-burst	
разрез	;;;	cut, section	
разный	;;;	various, different	
размер	;;;	size, scale, extent	
размах	;;;	scope, range, scale	
разлад	;;;	discord; disorder	
раздел	;;;	division; section	
разгар	;;;	height, climax	
развод	;;;	divorce	
разбой	;;;	banditry	
разбег	;;;	run	
радуга	;;;	rainbow	
радист	;;;	radio operator	
равный	;;;	equal (adj)	
работа	;;;	work	
пьяный	;;;	drunk	
пьянка	;;;	binge, booze-up (coll)	
пышный	;;;	luxuriant	
пылать	;;;	to blaze	
путать	;;;	to confuse, mix up	
пустяк	;;;	trifle	
пустой	;;;	empty	
пускай	;;;	let (= пусть) (coll)	
пузырь	;;;	bubble	
пугать	;;;	to frighten	
птичка	;;;	small bird; tick	
птичий	;;;	bird’s	
птенец	;;;	nestling, fledgling	
пряник	;;;	biscuit or cake with spices	
прямой	;;;	straight, direct	
прыжок	;;;	jump	
прутик	;;;	twig, switch; small rod	
прочно	;;;	solidly	
прочий	;;;	other	
проход	;;;	passage; passageway	
против	;;;	against; opposite	
просто	;;;	simply	
прорыв	;;;	breach	
пророк	;;;	prophet	
промеж	;;;	between (coll)	
промах	;;;	miss; blunder	
пролив	;;;	strait	
прокат	;;;	hire	
проект	;;;	project	
проезд	;;;	thoroughfare; journey	
провод	;;;	wire	
провал	;;;	failure, collapse	
пробка	;;;	cork; plug; fuse; traffic jam	
пробел	;;;	blank, gap	
пробег	;;;	run, race	
причём	;;;	and furthermore	
причал	;;;	mooring	
приход	;;;	arrival	
притом	;;;	besides, in addition	
приток	;;;	tributary; inflow	
пример	;;;	example	
прилив	;;;	rising tide; influx	
приказ	;;;	command, order	
призыв	;;;	call, appeal; call-up	
приезд	;;;	arrival	
привет	;;;	greeting	
прибор	;;;	piece of apparatus, gadget, instrument	
пресса	;;;	the press	
прения	;;;	debate, discussion	
премия	;;;	bonus; prize	
прежде	;;;	before	
предок	;;;	ancestor	
предел	;;;	limit	
прадед	;;;	great-grandfather	
правый	;;;	right; right-wing	
правда	;;;	truth	
поэзия	;;;	poetry	
пощада	;;;	mercy	
пошлый	;;;	vulgar; trivial, banal	
почерк	;;;	handwriting	
почему	;;;	why	
похоже	;;;	it looks like; it seems (= кажется)	
потому	;;;	that is why because	
потеха	;;;	fun, amusement	
потеря	;;;	loss	
посуда	;;;	crockery, dishes	
порция	;;;	portion	
порода	;;;	kind, type, breed; rock (geological)	
помощь	;;;	help	
помост	;;;	platform, rostrum; scaffold	
помимо	;;;	apart from	
помеха	;;;	hindrance	
поляна	;;;	glade, clearing, forest meadow	
польза	;;;	use; benefit	
полоса	;;;	strip	
полный	;;;	full	
по́лно	;;;	that’s enough; full	
полно́	;;;	lots (of) (coll)	
ползти	;;;	to crawl	
полено	;;;	log	
покуда	;;;	while (coll) (= пока)	
покров	;;;	cover, shroud	
поклон	;;;	bow (greeting)	
поздно	;;;	late	
позади	;;;	behind	
подъём	;;;	rise	
подчас	;;;	sometimes	
подход	;;;	approach	
подряд	;;;	in succession; contract	
поднос	;;;	tray	
подлый	;;;	mean, underhand	
подлец	;;;	scoundrel	
подвиг	;;;	feat, heroic deed	
подвал	;;;	cellar, basement	
подача	;;;	giving; serve (tennis)	
погром	;;;	pogrom, massacre	
погреб	;;;	cellar	
погоня	;;;	pursuit	
погода	;;;	weather	
поверх	;;;	above	
победа	;;;	victory	
пляска	;;;	dance	
плохой	;;;	bad	
плотно	;;;	tightly	
плести	;;;	to weave	
пленум	;;;	plenary session	
плёнка	;;;	film, (recording) tape	
платье	;;;	dress	
платок	;;;	shawl, kerchief	
платёж	;;;	payment	
плакат	;;;	poster	
плавно	;;;	smoothly	
плавки	;;;	swimming trunks	
пищать	;;;	to squeak, squeal; cheep	
питать	;;;	to feed	
письмо	;;;	letter	
писать	;;;	to write	
пилить	;;;	to saw; (coll) nag	
пиджак	;;;	jacket	
пещера	;;;	cave	
пешком	;;;	on foot	
печень	;;;	liver	
печать	;;;	seal, stamp; print, printing	
печаль	;;;	sorrow	
пехота	;;;	infantry	
перрон	;;;	platform (railway station)	
период	;;;	period	
перина	;;;	feather-bed, duvet	
перила	;;;	handrail, banisters	
переть	;;;	to shove, barge, push (coll)	
первый	;;;	first	
пенсия	;;;	pension	
пейзаж	;;;	landscape	
певица	;;;	singer f	
пахать	;;;	to plough	
патрон	;;;	cartridge	
партия	;;;	party (political)	
парень	;;;	lad, boy	
папаша	;;;	dad	
паника	;;;	panic	
панель	;;;	pavement; panelling, panel	
память	;;;	memory	
пальто	;;;	overcoat	
пальма	;;;	palm tree	
палуба	;;;	deck (of a ship)	
палить	;;;	to burn, scorch; singe	
палата	;;;	chamber; ward	
пазуха	;;;	bosom	
падать	;;;	to fall	
ошибка	;;;	mistake	
оценка	;;;	assessment	
охрана	;;;	protection; guard	
охотно	;;;	willingly	
офицер	;;;	officer	
отъезд	;;;	departure	
отчего	;;;	why	
оттуда	;;;	from there	
оттого	;;;	for that reason	
отсюда	;;;	from here; hence	
отпуск	;;;	leave (from work)	
отнюдь	;;;	not at all	
отныне	;;;	henceforth	
отмена	;;;	abolition, cancellation	
откуда	;;;	from where	
отклик	;;;	response	
отдача	;;;	return; performance, dedication (at work)	
отвага	;;;	courage	
острый	;;;	sharp	
остров	;;;	island	
остриё	;;;	point, spike	
особый	;;;	special	
основа	;;;	base, foundation	
осмотр	;;;	inspection	
осенью	;;;	in autumn	
осадок	;;;	sediment; deposition; after-taste	
оружие	;;;	arms, weapons	
орудие	;;;	instrument; implement; (field) gun, piece of ordnance	
о́рган	;;;	organ (biol, political)	
орга́н	;;;	organ (musical instrument)	
оратор	;;;	orator, speaker	
опушка	;;;	edge (of a forest)	
оправа	;;;	mounting, frame	
оплата	;;;	payment	
опилки	;;;	sawdust; metal filings	
опасно	;;;	dangerously	
опаска	;;;	caution (coll)	
окурок	;;;	cigarette end	
окошко	;;;	small window	
окорок	;;;	ham, gammon	
озимый	;;;	winter of crops	
однако	;;;	however	
одеяло	;;;	blanket	
одетый	;;;	dressed; wearing	
одежда	;;;	clothes	
огурец	;;;	cucumber	
ограда	;;;	fence	
огород	;;;	kitchen-garden (for vegetables)	
овация	;;;	ovation	
обычно	;;;	usually	
обычай	;;;	custom	
объект	;;;	object; construction site, building	
община	;;;	community	
оборот	;;;	turn, revolution; turnover; reverse (of page etc.); turn of phrase	
облако	;;;	cloud	
обиход	;;;	use; custom, practice	
обилие	;;;	abundance	
обидно	;;;	it hurts, it’s annoying	
обедня	;;;	mass (church service)	
нянька	;;;	nurse (coll)	
нюхать	;;;	to smell, sniff (sth)	
нырять	;;;	to dive	
нужный	;;;	necessary	
нудный	;;;	tedious	
ноябрь	;;;	November	
ночной	;;;	night (adj)	
ночлег	;;;	spending the night, night’s lodging	
носить	;;;	to carry (around); wear	
ноздря	;;;	nostril	
ноготь	;;;	fingernail, toenail	
нищета	;;;	poverty	
ничуть	;;;	not in the least (coll)	
ничего	;;;	nothing; all right, not too bad; never mind	
никуда	;;;	nowhere	
низкий	;;;	low	
нижний	;;;	lower	
неясно	;;;	unclearly	
нечего	;;;	there is nothing	
нехотя	;;;	unwillingly; unintentionally	
неужто	;;;	really? (coll)	
нервно	;;;	nervously	
немало	;;;	not a little, a good many	
нельзя	;;;	it is not allowed; it is impossible	
нелепо	;;;	absurdly; it’s absurd	
некуда	;;;	there is nowhere	
некого	;;;	there is no-one	
нежный	;;;	tender, gentle	
нежели	;;;	than (old word) (= чем)	
неделя	;;;	week	
небось	;;;	probably (coll)	
начало	;;;	beginning	
научно	;;;	scientifically	
наугад	;;;	at random	
натура	;;;	nature, character	
натиск	;;;	onslaught; pressure	
насыпь	;;;	embankment	
насчёт	;;;	about, concerning	
наспех	;;;	hastily	
наряду	;;;	equally, alongside	
наружу	;;;	outside	
налицо	;;;	present, visible	
налево	;;;	to the left	
наклон	;;;	incline, lean	
наивно	;;;	naively	
надзор	;;;	supervision; surveillance	
наглый	;;;	impudent	
наверх	;;;	upwards	
навеки	;;;	for ever	
мясной	;;;	meat (adj)	
мягкий	;;;	soft; gentle	
мычать	;;;	to moo; bellow	
мучить	;;;	to torment	
мутный	;;;	turbid, clouded	
мускул	;;;	muscle	
мундир	;;;	uniform	
музыка	;;;	music	
мудрый	;;;	wise	
мудрец	;;;	wise man	
мстить	;;;	to take revenge (on s.o. for sth)	
мрачно	;;;	gloomily	
мрамор	;;;	marble	
мощный	;;;	powerful	
мораль	;;;	morals, morality; moral (of a story)	
монтаж	;;;	assembling, installation, mounting	
монета	;;;	coin	
момент	;;;	moment; feature (of a situation)	
мольба	;;;	entreaty	
молоко	;;;	milk	
молния	;;;	lightning	
мокрый	;;;	wet	
мозоль	;;;	corn (on foot), callous	
модный	;;;	fashionable	
модель	;;;	model (of sth)	
могила	;;;	grave	
многое	;;;	much	
многий	;;;	many	
мнимый	;;;	imaginary	
мнение	;;;	opinion	
мишень	;;;	target	
митинг	;;;	political meeting	
миссия	;;;	mission	
мирный	;;;	peace, peaceful	
минута	;;;	minute	
микроб	;;;	microbe	
мигать	;;;	to blink, wink	
мешать	;;;	to mix	
мешать	;;;	to disturb, hinder, prevent; (+a) stir	
метить	;;;	(+a) to mark; (в +a) aim (at)	
метель	;;;	snowstorm	
метать	;;;	to throw, cast	
металл	;;;	metal	
мерить	;;;	to measure; try on (clothing)	
менять	;;;	to change	
меньше	;;;	less	
мелочь	;;;	trifle, minor matter; small change (coins)	
мелкий	;;;	small, petty, fine	
медный	;;;	copper (adj)	
медаль	;;;	medal	
мебель	;;;	furniture	
машина	;;;	machine; car	
махать	;;;	to wave	
махать	;;;	to wave (for a while)	
матрос	;;;	sailor	
мастер	;;;	master	
массив	;;;	massif, mountain-range; large area (of sth)	
манить	;;;	to beckon, lure	
манера	;;;	manner	
манёвр	;;;	manoeuvre	
мамаша	;;;	mother (coll)	
мазать	;;;	to grease, smear	
магнит	;;;	magnet	
люстра	;;;	chandelier	
люлька	;;;	cradle	
любовь	;;;	love	
любить	;;;	to like, love; p: to fall in love with	
льдина	;;;	block of ice	
льгота	;;;	privilege, advantage	
лысина	;;;	bald patch	
лыжный	;;;	ski (adj)	
лыжник	;;;	skier	
лучший	;;;	better; best	
лунный	;;;	lunar	
лошадь	;;;	horse	
лоскут	;;;	rag, scrap	
лопата	;;;	spade	
ломать	;;;	to break, fracture	
ломать	;;;	to break	
локоть	;;;	elbow	
лозунг	;;;	slogan	
ложный	;;;	FALSE	
логика	;;;	logic	
ловкий	;;;	dexterous, skilful, smart	
ловить	;;;	to catch	
лишний	;;;	extra, spare	
лишать	;;;	to deprive (s.o. of sth)	
личный	;;;	personal	
литься	;;;	to pour	
листок	;;;	small sheet (of paper); small leaf, leaflet	
листва	;;;	foliage	
лирика	;;;	lyric poetry	
лизать	;;;	to lick	
ливень	;;;	downpour	
лживый	;;;	mendacious	
лечить	;;;	to treat, cure	
лётчик	;;;	pilot, airman	
летний	;;;	summer (adj)	
лететь	;;;	to fly	
летать	;;;	to fly around	
лесной	;;;	forest (adj); forestry (adj)	
лесник	;;;	forester, forest ranger	
лепить	;;;	to model, mould	
лениво	;;;	lazily	
лекция	;;;	lecture	
лезвие	;;;	blade	
лежать	;;;	to lie, (p) lie for a while	
ледник	;;;	glacier	
лёгкое	;;;	lung	
лёгкий	;;;	light, easy	
лебедь	;;;	swan	
лапоть	;;;	bast sandal	
лайнер	;;;	liner	
лазить	;;;	to climb	
ладонь	;;;	palm (of the hand)	
ладить	;;;	to get on with (s.o.)	
лагерь	;;;	camp	
лавина	;;;	avalanche	
кушать	;;;	to eat	
кушать	;;;	to eat (polite usage)	
кусать	;;;	to bite; sting	
куртка	;;;	(short) jacket	
курица	;;;	hen	
курить	;;;	to smoke	
курган	;;;	barrow, burial mound	
кулисы	;;;	wings (theatre)	
кузнец	;;;	blacksmith	
кудато	;;;	somewhere	
кувшин	;;;	jug, pitcher	
кстати	;;;	incidentally, by the way; opportunely	
крючок	;;;	hook	
крышка	;;;	lid	
крутой	;;;	steep; severe	
крупно	;;;	on a large scale	
кружок	;;;	circle, club	
кружка	;;;	mug, tankard	
кругом	;;;	around	
крошка	;;;	crumb	
кролик	;;;	rabbit	
критик	;;;	critic	
кризис	;;;	crisis	
кривой	;;;	squint	
кресло	;;;	armchair	
крепко	;;;	firmly	
кратко	;;;	briefly	
кратер	;;;	crater	
красть	;;;	to steal	
краска	;;;	paint	
крайне	;;;	extremely	
кошмар	;;;	nightmare	
костюм	;;;	suit; costume	
костёр	;;;	bonfire	
космос	;;;	cosmos, space	
косить	;;;	to mow; twist	
корыто	;;;	tub; trough	
корпус	;;;	corps; building; body, frame	
корона	;;;	crown	
король	;;;	king	
корова	;;;	cow	
корень	;;;	root	
копыто	;;;	hoof	
копать	;;;	to dig	
коньяк	;;;	cognac, brandy	
коньки	;;;	skates	
кончик	;;;	tip, point	
контур	;;;	contour; outline; electrical circuit	
консул	;;;	consul	
конный	;;;	horse (adj), equestrian	
конвой	;;;	escort	
компас	;;;	compass	
комета	;;;	comet	
кольцо	;;;	ring (i.e. small hoop)	
колхоз	;;;	collective farm	
колпак	;;;	cap	
колоть	;;;	to chop; stab	
колесо	;;;	wheel	
колено	;;;	knee	
козырь	;;;	trump	
коечто	;;;	something, a thing or two	
коекто	;;;	somebody; certain people	
коекак	;;;	anyhow, carelessly; somehow or other, somehow	
коегде	;;;	here and there	
кодекс	;;;	code, codex	
коготь	;;;	claw	
коврик	;;;	rug	
кобыла	;;;	mare	
кобель	;;;	male dog	
кнопка	;;;	button, knob; drawing-pin	
книжка	;;;	(small) book	
клятва	;;;	oath	
клюква	;;;	cranberry, cranberries	
клумба	;;;	flower-bed	
клубок	;;;	ball (of wool etc.)	
клочок	;;;	tuft, scrap	
кличка	;;;	nickname; name (of pet animal)	
клинок	;;;	blade	
климат	;;;	climate	
клиент	;;;	client	
клетка	;;;	cage; cell (biol)	
класть	;;;	to put	
кладка	;;;	laying	
китель	;;;	military jacket, high-necked tunic	
китаец	;;;	Chinaman	
кислый	;;;	sour	
кирпич	;;;	brick	
кипеть	;;;	to boil	
кипеть	;;;	to boil, be boiling	
кинжал	;;;	dagger	
кидать	;;;	to throw	
кивать	;;;	to nod	
кверху	;;;	upwards	
кашель	;;;	cough	
качать	;;;	to rock, shake, swing	
каучук	;;;	rubber	
катить	;;;	to roll (sth)	
карниз	;;;	cornice; ledge	
карман	;;;	pocket	
карета	;;;	horse-drawn carriage	
караул	;;;	guard, watch	
карать	;;;	to punish	
каприз	;;;	caprice	
капкан	;;;	trap	
капать	;;;	to drip	
канава	;;;	ditch	
камера	;;;	chamber, room, cell	
камень	;;;	stone	
калека	;;;	cripple	
каждый	;;;	each, every	
каблук	;;;	heel	
кабина	;;;	cabin	
кабала	;;;	slavery; servitude	
истина	;;;	truth	
искоса	;;;	sideways (coll)	
искать	;;;	to search for, to look for	
ирония	;;;	irony	
иногда	;;;	sometimes	
именно	;;;	namely, exactly	
имение	;;;	estate	
измена	;;;	betrayal	
издали	;;;	from a distance	
играть	;;;	to play	
иголка	;;;	needle	
зыбкий	;;;	unsteady, unstable	
зрение	;;;	eyesight, vision	
зрелый	;;;	mature, ripe	
зрачок	;;;	pupil (of eye)	
зонтик	;;;	umbrella	
золото	;;;	gold	
значок	;;;	badge	
знаток	;;;	expert	
знание	;;;	knowledge	
злость	;;;	spite, bad temper	
злодей	;;;	villain	
зимний	;;;	winter (adj)	
земной	;;;	earthly, terrestrial	
земляк	;;;	person from same area	
зелень	;;;	greenery	
зевать	;;;	to yawn	
здание	;;;	building	
звонок	;;;	bell, ring; telephone call	
звонко	;;;	ringingly, clearly	
звезда	;;;	star	
звание	;;;	title; calling	
заявка	;;;	claim, official demand	
защита	;;;	defence	
захват	;;;	seizure, capture	
засуха	;;;	drought	
застой	;;;	stagnation	
зарево	;;;	glow	
зараза	;;;	infection; (coll) pest	
запрос	;;;	official request	
запрет	;;;	ban	
запись	;;;	recording; written record	
заочно	;;;	in one’s absence; externally (of study for a degree)	
заодно	;;;	together; (coll) at the same time	
заново	;;;	anew	
за́мок	;;;	castle	
замо́к	;;;	lock	
замена	;;;	replacement	
залежь	;;;	(mineral) deposit	
задний	;;;	rear (adj)	
задача	;;;	task, problem	
завтра	;;;	tomorrow	
завеса	;;;	screen	
забота	;;;	care, trouble	
забава	;;;	amusement	
жуткий	;;;	terrible	
журнал	;;;	magazine, periodical; journal, register	
житель	;;;	inhabitant	
жирный	;;;	fat, fatty	
жилище	;;;	dwelling, habitation	
жидкий	;;;	liquid; thin, feeble	
живьём	;;;	alive (coll)	
жертва	;;;	victim	
жёрнов	;;;	millstone	
жёлтый	;;;	yellow	
железо	;;;	iron	
желать	;;;	to want, wish (for)	
жевать	;;;	to chew	
жгучий	;;;	burning	
жаркий	;;;	hot	
жарить	;;;	to fry; roast	
жалоба	;;;	complaint (about)	
жалкий	;;;	pitiful	
жалеть	;;;	to pity, feel sorry for; (o +pr) regret	
жадный	;;;	greedy	
ерунда	;;;	nonsense; trifling matter (coll)	
ейбогу	;;;	truly, indeed (coll)	
ездить	;;;	to travel there and back	
ездить	;;;	to travel	
единый	;;;	single, sole; united	
дядька	;;;	uncle; man, bloke (coll)	
дьякон	;;;	deacon	
дьявол	;;;	devil	
дышать	;;;	to breathe	
дымный	;;;	smoky	
дымить	;;;	to smoke	
душный	;;;	stuffy	
душить	;;;	to strangle, suffocate, stifle	
душить	;;;	to strangle; perfume	
дурной	;;;	bad, evil	
дурить	;;;	to be naughty, fool about (coll)	
думать	;;;	to think	
дубина	;;;	cudgel, club; blockhead, idiot	
дружок	;;;	friend (coll)	
дружно	;;;	in harmony, simultaneously	
дружба	;;;	friendship	
другой	;;;	different, other	
доярка	;;;	milkmaid	
доступ	;;;	access (to)	
досада	;;;	annoyance	
дорого	;;;	dearly	
дорога	;;;	road	
допрос	;;;	interrogation	
доллар	;;;	dollar	
долина	;;;	valley	
должно	;;;	one ought to	
должен	;;;	ought, obliged, must	
долгий	;;;	long (in time)	
доктор	;;;	doctor	
доклад	;;;	report	
дождик	;;;	shower (rain)	
добыча	;;;	booty; mining	
добрый	;;;	good, kind	
диплом	;;;	diploma, degree	
диалог	;;;	dialogue	
джинсы	;;;	jeans	
деяние	;;;	act, action (bookish)	
дёшево	;;;	cheaply	
деталь	;;;	detail; component (of machine)	
десять	;;;	ten	
десант	;;;	landing (mil, by air or sea)	
дерево	;;;	tree	
деньги	;;;	money	
делить	;;;	to divide, share	
делать	;;;	to do, make	
декрет	;;;	decree	
декада	;;;	ten-day period	
девять	;;;	nine	
девица	;;;	girl	
девать	;;;	to put (coll)	
дворец	;;;	palace	
двойка	;;;	the number two; fail (mark in exam)	
двести	;;;	two hundred	
дверца	;;;	small door, car door	
дважды	;;;	twice	
дарить	;;;	to give, present (sth to s.o.)	
данный	;;;	given	
данные	;;;	data; qualities	
дальше	;;;	further	
далеко	;;;	far	
давний	;;;	long-ago (adj)	
давить	;;;	to press, put pressure on	
давать	;;;	to give (sth to s.o.)	
густой	;;;	thick, dense	
гулять	;;;	to take a walk; (coll) take time off	
гудеть	;;;	to start hooting/humming	
гудеть	;;;	to hum; hoot	
губить	;;;	to destroy, ruin	
грядка	;;;	bed (for plants), flowerbed	
грызть	;;;	to gnaw	
грусть	;;;	sadness	
группа	;;;	group	
грубый	;;;	coarse, rude	
грохот	;;;	crash; rumble	
громко	;;;	loudly	
грозно	;;;	threateningly	
графин	;;;	carafe, decanter	
график	;;;	graph; schedule	
гранит	;;;	granite	
градус	;;;	degree (°)	
горячо	;;;	hot(ly)	
горько	;;;	bitter(ly)	
горшок	;;;	pot	
горсть	;;;	handful	
горный	;;;	mountain (adj); mining	
горком	;;;	town committee	
горечь	;;;	bitterness	
гореть	;;;	to burn, be alight	
гордый	;;;	proud	
гонять	;;;	to drive, make (s.o.) run	
голубь	;;;	pigeon, dove	
голова	;;;	head	
годный	;;;	suitable	
гнилой	;;;	rotten, decayed	
гнездо	;;;	nest	
глухой	;;;	deaf; indistinct, muffled; remote (of place)	
глупый	;;;	stupid, silly	
глоток	;;;	gulp, mouthful	
глобус	;;;	globe	
глазок	;;;	small eye; peephole	
гладко	;;;	smoothly	
гитара	;;;	guitar	
гибкий	;;;	flexible	
гибель	;;;	ruin, destruction	
геолог	;;;	geologist	
гектар	;;;	hectare (10,000 square metres, 2.5 acres)	
гвоздь	;;;	nail	
гасить	;;;	to put out, extinguish; cancel	
газета	;;;	newspaper	
гадать	;;;	to guess; tell fortunes	
гавань	;;;	harbour	
вязать	;;;	to tie; knit	
высший	;;;	highest, supreme	
выступ	;;;	projection; ledge	
высота	;;;	height	
высоко	;;;	high (up); highly; it is high	
выпуск	;;;	output; issue	
выемка	;;;	taking out; collection (of letters)	
выдача	;;;	issue, giving out	
выгода	;;;	advantage	
выборы	;;;	election	
вулкан	;;;	volcano	
втроём	;;;	as a threesome	
второй	;;;	second	
всякий	;;;	any	
вскоре	;;;	soon	
всегда	;;;	always	
вредно	;;;	harmful	
вражда	;;;	enmity	
впрямь	;;;	indeed (coll)	
впредь	;;;	henceforth, in future	
вполне	;;;	fully, entirely	
вплоть	;;;	right up to	
вперёд	;;;	forward; in advance	
вотвот	;;;	just about to, on the point of	
восход	;;;	rise	
восток	;;;	east	
восемь	;;;	eight	
ворота	;;;	gate, gates	
ворона	;;;	crow	
вопрос	;;;	question	
воочию	;;;	with one’s own eyes, for os	
вообще	;;;	in general	
вонять	;;;	to stink (of)	
вольно	;;;	freely	
вокруг	;;;	around	
вокзал	;;;	(main) station	
войска	;;;	troops, army	
возить	;;;	to transport (around/there and back)	
воздух	;;;	air	
водоём	;;;	reservoir	
водный	;;;	water (adj)	
водить	;;;	to lead, (p) to lead about	
внятно	;;;	distinctly, clearly, audibly	
внучка	;;;	granddaughter	
внутрь	;;;	inside; inwards	
внутри	;;;	inside	
внешне	;;;	outwardly	
вместо	;;;	instead of	
вместе	;;;	together	
влиять	;;;	to influence	
власть	;;;	power	
вкусно	;;;	tasty	
виться	;;;	to wind, twine, twist	
висеть	;;;	to hang, be hanging	
винить	;;;	to accuse (s.o. of sth)	
видный	;;;	eminent	
видимо	;;;	evidently	
видеть	;;;	to see	
видать	;;;	to see (coll)	
взятка	;;;	bribe	
взятие	;;;	taking, capture	
взгляд	;;;	look, view	
взамен	;;;	in exchange (for), instead (of)	
вещица	;;;	little thing, knick-knack	
вешать	;;;	to hang	
вешать	;;;	to weigh	
вечный	;;;	eternal	
ветхий	;;;	ancient, dilapidated	
весьма	;;;	very, extremely	
весной	;;;	in spring	
весить	;;;	to weigh (intrans)	
весело	;;;	merrily, cheerfully	
верхом	;;;	on horseback	
верста	;;;	verst (slightly over a kilometre)	
версия	;;;	version	
верный	;;;	faithful, correct, reliable, sure	
верить	;;;	to believe (+d) s.o. or sth, (в +a ) in s.o. or sth	
велеть	;;;	to order (s.o. to do sth)	
ведьма	;;;	witch	
ведать	;;;	to manage, be in charge of; (+a) know	
вдвоём	;;;	together (as a twosome)	
вглубь	;;;	into the depths	
вблизи	;;;	close by	
ватный	;;;	quilted; cotton wool (adj)	
ватага	;;;	band, gang	
варить	;;;	to boil, cook	
варить	;;;	to boil, cook by boiling	
валять	;;;	to drag; to roll	
валюта	;;;	currency; foreign currency	
валить	;;;	to topple; heap up	
важный	;;;	important	
бюджет	;;;	budget	
быстро	;;;	quickly	
бывший	;;;	former	
бывать	;;;	to be (repeatedly)	
бывало	;;;	used to, would (repetition) (particle) (coll)	
бурьян	;;;	weeds, tall weeds	
бурный	;;;	stormy	
буржуй	;;;	bourgeois (noun) (coll)	
бумага	;;;	paper	
буксир	;;;	tugboat; tow-rope	
буйный	;;;	wild, unruly	
будить	;;;	to wake, rouse	
будить	;;;	to awaken	
брызги	;;;	spray	
брусок	;;;	bar, ingot	
брошка	;;;	brooch	
бросок	;;;	throw; bound	
бронза	;;;	bronze	
бритва	;;;	razor	
брести	;;;	to plod along	
бревно	;;;	log, beam	
братец	;;;	old man, mate (form of address)	
боязнь	;;;	fear	
боязно	;;;	afraid (coll)	
борьба	;;;	struggle	
борода	;;;	beard	
больше	;;;	more	
больно	;;;	painfully; it is painful	
болото	;;;	marsh	
болеть	;;;	to be ill; to hurt	
болван	;;;	blockhead, idiot	
бойкий	;;;	smart, lively	
боевой	;;;	fighting, battle	
бодрый	;;;	cheerful, in good form	
богато	;;;	richly	
близко	;;;	it is near, it is not far; near, close; closely	
благой	;;;	good	
биться	;;;	to fight; to beat	
биолог	;;;	biologist	
библия	;;;	bible; the Bible	
бешено	;;;	madly, furiously	
беседа	;;;	talk, discussion	
беречь	;;;	to look after	
берёза	;;;	birch	
бензин	;;;	petrol	
белила	;;;	whitewash	
белеть	;;;	to grow white, be white	
бездна	;;;	abyss; (coll) (+g) great quantity	
бежать	;;;	to run	
бедный	;;;	poor	
беглый	;;;	quick, fleeting	
бегать	;;;	to run there and back, run somewhere (and return)	
бегать	;;;	to run around	
башмак	;;;	shoe	
батька	;;;	dad, father (coll)	
барьер	;;;	barrier	
барыня	;;;	lady	
бархат	;;;	velvet	
банкир	;;;	banker	
бандит	;;;	bandit	
балкон	;;;	balcony	
баланс	;;;	balance (econ)	
атеист	;;;	atheist	
артист	;;;	artiste, performer	
аромат	;;;	scent, aroma	
аренда	;;;	lease	
аптека	;;;	chemist’s, drugstore	
апрель	;;;	April	
анкета	;;;	questionnaire, form	
анализ	;;;	analysis	
альбом	;;;	album	
алтарь	;;;	altar	
аккорд	;;;	chord	
азбука	;;;	alphabet	
адский	;;;	hellish	
август	;;;	August	
авария	;;;	breakdown; accident	
учесть	;;;	to take into account; to take into consideration, bear in mind	
устать	;;;	to tire	
успеть	;;;	to have time, to be in time	
усеять	;;;	to strew, dot, litter (sth with sth)	
унести	;;;	to carry away	
узнать	;;;	to recognize; find out	
уехать	;;;	to go away, leave (by transport)	
удрать	;;;	to run away, do a bunk (coll)	
увлечь	;;;	to carry away; fascinate, distract	
увести	;;;	to lead away	
увезти	;;;	to take away (by transport)	
убрать	;;;	to take away; tidy; p: tidy up	
ткнуть	;;;	to prod, jab (sth into sth)	
счесть	;;;	(+a +inst) consider (sth/s.o. to be sth)	
сунуть	;;;	to thrust, poke (sth into sth)	
спасти	;;;	to save	
снести	;;;	to demolish; take down, take off; carry away	
слезть	;;;	to climb down, climb off	
скрыть	;;;	to hide, conceal	
свести	;;;	to take (s.o. somewhere); bring together; (c +g) take down, away	
потечь	;;;	to flow; begin to flow	
попить	;;;	to have a drink	
выпить	;;;	to drink, have an alcoholic drink	
испечь	;;;	to bake	
помыть	;;;	to wash	
пожить	;;;	to live; p: live for a while	
пожечь	;;;	to burn up	
съесть	;;;	to eat	
поесть	;;;	to eat a little	
подуть	;;;	to blow	
завыть	;;;	to howl	
побыть	;;;	to stay for a while	
побить	;;;	to beat, hit	
суметь	;;;	to know how to; be able to, manage to	
сгнить	;;;	to rot	
ясный	;;;	clear	
яркий	;;;	bright	
якорь	;;;	anchor	
якобы	;;;	allegedly	
ягода	;;;	berry	
явный	;;;	obvious, overt	
юрист	;;;	lawyer	
юноша	;;;	(a) youth	
южный	;;;	southern	
этика	;;;	ethics	
эпоха	;;;	epoch, age	
экран	;;;	screen	
щётка	;;;	brush	
щенок	;;;	puppy	
щёлка	;;;	chink	
щедро	;;;	generously	
шутка	;;;	joke	
шумно	;;;	noisily	
штурм	;;;	storm, assault	
штука	;;;	thing (coll)	
штраф	;;;	fine	
шторм	;;;	gale	
штора	;;;	(window) blind	
штаны	;;;	trousers	
штамп	;;;	stamp, punch; cliche	
шпора	;;;	spur	
шпион	;;;	spy	
шпага	;;;	sword	
шофёр	;;;	driver	
шоссе	;;;	highway	
шорох	;;;	rustle	
шляпа	;;;	hat (with brim)	
шкура	;;;	skin, hide	
школа	;;;	school	
шишка	;;;	(pine/fir) cone; bump; (coll) big noise, VIP	
ширма	;;;	screen	
шибко	;;;	very (coll)	
шесть	;;;	six	
шёпот	;;;	whisper	
шашка	;;;	sabre; (pl) draughts, checkers (board game)	
шахта	;;;	mine, pit	
шарик	;;;	(small) ball	
шапка	;;;	hat (without brim)	
шалаш	;;;	cabin (made of branches)	
шайка	;;;	tub; gang	
шайба	;;;	washer; (hockey) puck	
чуять	;;;	to scent, smell; sense, feel	
чутьё	;;;	scent; instinct, intuition	
чулок	;;;	stocking	
чулан	;;;	store-room, box-room	
чужой	;;;	someone else’s; foreign	
чудно	;;;	wonderfully	
чудак	;;;	eccentric person, crank	
чугун	;;;	cast iron	
чтобы	;;;	in order to	
чтото	;;;	something; (coll) somewhat, somehow	
чтить	;;;	to honour	
чисто	;;;	purely, cleanly	
число	;;;	number; date	
чётко	;;;	clearly, distinctly, precisely	
честь	;;;	honour	
черта	;;;	feature, trait; line	
череп	;;;	skull	
через	;;;	across, via, after	
червь	;;;	worm	
чейто	;;;	someone’s	
чашка	;;;	cup	
часть	;;;	part	
часто	;;;	often	
чайка	;;;	seagull	
цыган	;;;	gypsy	
цифра	;;;	figure, number	
центр	;;;	centre	
целый	;;;	whole	
целое	;;;	the whole; integer	
хутор	;;;	farm; Ukrainian hamlet	
худой	;;;	thin; bad	
хохот	;;;	loud laughter, guffaw	
хомут	;;;	horse’s collar; burden, yoke	
холод	;;;	cold	
хмуро	;;;	gloomily, sullenly	
хмель	;;;	hops (for beer); tipsiness	
хитро	;;;	cunningly	
химия	;;;	chemistry	
химик	;;;	chemist	
хилый	;;;	puny, decrepit	
хвост	;;;	tail	
халат	;;;	dressing-gown; overall, white coat	
фрукт	;;;	fruit, piece of fruit	
фронт	;;;	front (war)	
фраза	;;;	phrase	
форма	;;;	form	
фокус	;;;	focus; trick	
фланг	;;;	flank	
фирма	;;;	firm, company	
финиш	;;;	finish	
финал	;;;	final (sport); finale	
фильм	;;;	film	
физик	;;;	physicist	
ферма	;;;	farm	
фасад	;;;	façade	
факел	;;;	torch	
уютно	;;;	cosily	
ущерб	;;;	damage	
учить	;;;	to teach (s.o. sth)	
учить	;;;	to learn (sth)	
учёба	;;;	study, studying	
утром	;;;	in the morning	
устье	;;;	mouth, estuary	
устой	;;;	foundation, support	
устав	;;;	regulations, statutes	
успех	;;;	success	
упрёк	;;;	reproach	
умный	;;;	intelligent	
уметь	;;;	to know how to; be able to, manage to	
умело	;;;	skilfully	
улица	;;;	street	
уклон	;;;	slope; deviation, bias	
уклад	;;;	organization, structure (of life, society)	
узкий	;;;	narrow	
удача	;;;	success	
уголь	;;;	coal	
тучка	;;;	small cloud	
туфля	;;;	shoe, house shoe, slipper	
турок	;;;	Turk	
тупой	;;;	blunt; stupid	
тупик	;;;	cul-de-sac, dead-end	
тумба	;;;	pedestal; bollard	
туман	;;;	fog, mist	
тулуп	;;;	sheepskin coat	
тугой	;;;	tight	
труба	;;;	pipe	
тропа	;;;	path	
треть	;;;	third	
трест	;;;	trust; group of companies	
треск	;;;	crack; crash	
тракт	;;;	highway; route	
трава	;;;	grass; herb	
тощий	;;;	emaciated	
точно	;;;	exactly; punctually	
точка	;;;	dot, point; full stop	
тоска	;;;	melancholy, depression, ennui; (по +d) yearning (for)	
топот	;;;	sound of footsteps, patter	
топор	;;;	axe	
тонна	;;;	ton (1,000 kilogrammes)	
тонко	;;;	thinly; delicately; subtly	
толща	;;;	thickness	
толпа	;;;	crowd	
тогда	;;;	then, at that time	
товар	;;;	commodity, article	
тлеть	;;;	to rot; smoulder	
ткань	;;;	cloth	
тихий	;;;	quiet, calm	
титул	;;;	title	
тираж	;;;	number of copies; draw (lottery)	
тётка	;;;	aunt; (coll) woman	
тесто	;;;	pastry, dough	
тесно	;;;	tightly; crowded	
тепло	;;;	warmly; it is warm; warmth	
темно	;;;	(it’s) dark	
текст	;;;	text	
тезис	;;;	thesis, proposition	
театр	;;;	theatre	
таять	;;;	to melt	
тахта	;;;	divan	
танец	;;;	dance	
талон	;;;	coupon	
такси	;;;	taxi	
такой	;;;	such	
таков	;;;	such [pronoun]	
также	;;;	as well	
тайно	;;;	secretly	
тайна	;;;	secret, mystery	
тайга	;;;	taiga (northern forest)	
таить	;;;	to conceal	
табак	;;;	tobacco	
сюжет	;;;	subject, plot	
сытый	;;;	replete, full	
сырьё	;;;	raw material(s)	
сырой	;;;	damp; raw	
сынок	;;;	sonny (form of address)	
съезд	;;;	congress	
счёты	;;;	abacus	
сцена	;;;	stage (theatre); scene	
схема	;;;	diagram	
сфера	;;;	sphere	
сущий	;;;	real, absolute (coll)	
сухой	;;;	dry	
сутки	;;;	24 hours	
сумма	;;;	sum	
сумка	;;;	bag, handbag	
сукно	;;;	cloth	
сукин	;;;	bitch’s (poss adj)	
суета	;;;	bustle, fuss	
судья	;;;	judge; referee	
судно	;;;	vessel, craft	
стужа	;;;	icy cold, severe frost (coll)	
струя	;;;	jet, stream	
строй	;;;	system, structure; military formation	
страх	;;;	fear	
столь	;;;	so	
столб	;;;	pole, pillar	
стиль	;;;	style	
степь	;;;	steppe	
стена	;;;	wall	
ствол	;;;	trunk (tree); barrel (gun)	
старт	;;;	start (sport)	
сталь	;;;	steel	
стадо	;;;	herd	
ссора	;;;	quarrel	
среди	;;;	among	
среда	;;;	Wednesday; environment, milieu	
сразу	;;;	at once	
спуск	;;;	descent; slope; release	
спрос	;;;	demand (opposite of supply)	
спорт	;;;	sport	
сплав	;;;	alloy	
спирт	;;;	alcohol, spirit	
спина	;;;	back [noun]	
спать	;;;	to sleep	
сотый	;;;	hundredth	
сотня	;;;	a hundred	
сосуд	;;;	vessel	
сосна	;;;	pine-tree	
сосед	;;;	neighbour	
сорок	;;;	forty	
сопка	;;;	knoll, mound; volcano	
сокол	;;;	falcon	
созыв	;;;	calling, summoning (of meeting)	
совет	;;;	advice; council	
собор	;;;	cathedral	
сноха	;;;	daughter-in-law (of husband’s father)	
снова	;;;	again	
снизу	;;;	from below	
смысл	;;;	sense, meaning	
смотр	;;;	inspection, review	
смола	;;;	tar, pitch	
сметь	;;;	to dare	
смета	;;;	estimate	
смесь	;;;	mixture	
смена	;;;	changing; shift (e.g in factory); replacement	
смело	;;;	boldly	
слюна	;;;	saliva	
слыть	;;;	to have the reputation of, be considered	
слуга	;;;	servant	
слово	;;;	word	
слива	;;;	plum	
слеза	;;;	tear	
слева	;;;	on the left	
слать	;;;	to send	
слава	;;;	glory, fame	
слабо	;;;	weakly	
скула	;;;	cheekbone	
скука	;;;	boredom	
скрип	;;;	squeak, creak	
скоро	;;;	soon	
сколь	;;;	so	
склон	;;;	slope	
склад	;;;	warehouse, store	
сквер	;;;	public garden	
скала	;;;	crag, rock face, cliff	
сиять	;;;	to shine	
синяк	;;;	bruise	
синий	;;;	dark blue	
сзади	;;;	from behind	
сеять	;;;	to sow	
сетка	;;;	net; string-bag	
серый	;;;	grey	
серия	;;;	series	
семья	;;;	family	
сезон	;;;	season	
седой	;;;	grey (of hair)	
седло	;;;	saddle	
север	;;;	north	
сдвиг	;;;	shift, displacement; change, improvement	
сдача	;;;	handing over; change (money returned)	
связь	;;;	connection, link, communication	
свыше	;;;	from above; (+g) more than	
свист	;;;	whistling	
свеча	;;;	candle	
сверх	;;;	above	
сбоку	;;;	from the side	
сахар	;;;	sugar	
сарай	;;;	shed	
сапог	;;;	boot; jackboot	
самый	;;;	the very, most	
самка	;;;	female (animal)	
салют	;;;	salute; firework display (in honour of s.o. or sth)	
рядом	;;;	alongside	
рюмка	;;;	wineglass	
рычаг	;;;	lever	
рынок	;;;	market	
рыжий	;;;	red-haired	
рывок	;;;	jerk; spurt	
рыбка	;;;	small fish	
рыбак	;;;	fisherman	
ручка	;;;	small hand; handle; pen	
ручей	;;;	brook, stream	
русый	;;;	light brown (hair)	
русло	;;;	bed (of river), channel	
рукав	;;;	sleeve	
ружьё	;;;	gun, rifle	
рубль	;;;	rouble	
рубка	;;;	felling; chopping; deck cabin	
рубеж	;;;	boundary	
рояль	;;;	(grand) piano	
роман	;;;	novel; love affair, romance	
рокот	;;;	roar, rumble	
рознь	;;;	difference; discord, disagreement	
рожок	;;;	small horn; horn (instrument)	
родня	;;;	relatives	
ровно	;;;	evenly; precisely	
робко	;;;	timidly	
речка	;;;	small river	
рельс	;;;	rail	
резко	;;;	sharply, abruptly	
резец	;;;	cutting tool; incisor (tooth)	
режим	;;;	regime; rules, regulations; diet	
редко	;;;	rarely	
ребро	;;;	rib; edge	
рвать	;;;	to tear	
расти	;;;	to grow	
ранее	;;;	earlier	
рамка	;;;	frame	
район	;;;	region	
разум	;;;	reason, intellect	
разом	;;;	at once, at one go; in a flash (coll)	
разве	;;;	really	
радио	;;;	radio	
равно	;;;	equal, alike (adv)	
пятый	;;;	fifth	
пятно	;;;	spot	
пьеса	;;;	play (theatre)	
пытка	;;;	torture	
пшено	;;;	millet	
пчела	;;;	bee	
пушка	;;;	cannon	
пучок	;;;	bundle; bun (hairdo)	
путём	;;;	by means of	
пусть	;;;	let	
пусто	;;;	(it’s) empty; emptily	
пурга	;;;	blizzard	
пункт	;;;	point	
пульт	;;;	control panel; music-stand	
пульс	;;;	pulse	
птица	;;;	bird	
прямо	;;;	directly, straight	
прядь	;;;	lock of hair	
прочь	;;;	away	
просо	;;;	millet	
проза	;;;	prose	
проба	;;;	test, trial	
приют	;;;	shelter, refuge	
принц	;;;	prince	
приём	;;;	reception; method, device	
право	;;;	right; law	
поэма	;;;	long poem	
почти	;;;	almost	
почта	;;;	post office; post, mail	
почин	;;;	initiative	
почёт	;;;	esteem, respect	
почём	;;;	how much?; how? (coll)	
почва	;;;	soil	
поход	;;;	campaign; walking tour, expedition; cruise	
потом	;;;	then, next	
поток	;;;	stream, flow	
посол	;;;	ambassador	
после	;;;	after	
посев	;;;	sowing	
порыв	;;;	gust; impulse	
порох	;;;	gunpowder	
порок	;;;	vice; defect	
порой	;;;	at times, occasionally	
порог	;;;	threshold	
помёт	;;;	dung, droppings	
поляк	;;;	Pole	
полюс	;;;	pole (geog)	
полый	;;;	hollow	
полка	;;;	shelf	
полёт	;;;	flight	
покой	;;;	peace, quiet	
поить	;;;	to give to drink	
поиск	;;;	search	
позор	;;;	disgrace	
пожар	;;;	fire	
поезд	;;;	train	
подол	;;;	hem	
погон	;;;	shoulder-strap	
повод	;;;	cause, grounds	
повар	;;;	cook	
плыть	;;;	to sail; swim	
плохо	;;;	badly	
плоть	;;;	flesh	
плита	;;;	stove, cooker; slab	
плечо	;;;	shoulder	
племя	;;;	tribe	
плата	;;;	payment	
пласт	;;;	layer; stratum	
пламя	;;;	flame	
пирог	;;;	pie	
пират	;;;	pirate	
пеший	;;;	pedestrian, foot (adj)	
печка	;;;	stove	
петух	;;;	cock	
петля	;;;	loop; hinge	
песок	;;;	sand	
песня	;;;	song	
перец	;;;	pepper	
перед	;;;	in front of, before	
пепел	;;;	ash, ashes	
пение	;;;	singing	
пекло	;;;	scorching heat; hell (coll)	
певец	;;;	singer	
пашня	;;;	ploughed field	
пачка	;;;	packet, pack	
пауза	;;;	pause	
пасха	;;;	Easter	
пасть	;;;	maw, jaws (of animal)	
пасти	;;;	to graze; to shepherd	
парус	;;;	sail	
парта	;;;	school desk	
паром	;;;	ferry	
парад	;;;	parade	
папка	;;;	file, folder	
палка	;;;	stick	
палец	;;;	finger; toe	
палач	;;;	executioner	
пакет	;;;	packet; bag (paper or plastic)	
очерк	;;;	essay, study	
очень	;;;	very	
охота	;;;	desire; hunting	
отчёт	;;;	report	
отход	;;;	departure	
отсек	;;;	compartment	
отряд	;;;	detachment (organized group of soldiers or workers)	
отрыв	;;;	tearing off; isolation (from)	
отрез	;;;	cut	
отпор	;;;	repulse, rebuff	
отлив	;;;	ebb, falling tide; tinge, tint, play of colours	
откос	;;;	slope	
отказ	;;;	refusal	
отзыв	;;;	opinion, response; review, criticism	
отдых	;;;	rest; holiday	
отдел	;;;	section, department	
ответ	;;;	answer	
отвал	;;;	slag-heap, dump	
отбор	;;;	selection	
отбой	;;;	beating off, repulsion; retreat	
остро	;;;	sharply, intensely	
остов	;;;	framework	
особо	;;;	specially; separately	
особа	;;;	person; personage	
осень	;;;	autumn	
орден	;;;	medal, decoration; order (society)	
орать	;;;	to start yelling	
орать	;;;	to howl, yell	
опять	;;;	again	
опрос	;;;	survey; questioning	
опора	;;;	support	
опера	;;;	opera	
опека	;;;	guardianship, trusteeship; surveillance, care	
олень	;;;	deer	
округ	;;;	okrug, region	
около	;;;	near; about	
оковы	;;;	fetters	
океан	;;;	ocean	
озеро	;;;	lake	
огонь	;;;	fire; light	
овраг	;;;	ravine, gully	
овощи	;;;	vegetables	
обыск	;;;	(official) search	
объём	;;;	volume, capacity, size	
общий	;;;	general (adj)	
обход	;;;	evasion, going round	
обувь	;;;	footwear	
обряд	;;;	rite, ceremony	
обрыв	;;;	precipice	
обрез	;;;	cut edge	
образ	;;;	manner, way, shape, image	
обмен	;;;	exchange	
обман	;;;	deceit, deception	
облик	;;;	look, appearance, image	
обида	;;;	offence, insult	
обзор	;;;	survey, review	
нынче	;;;	now (= теперь); today (coll)	
нужно	;;;	(it is) necessary	
нужда	;;;	want, need	
ночью	;;;	at night	
нотка	;;;	note (sound)	
носок	;;;	sock; toe of boot	
носик	;;;	small nose; toe (of shoe); spout	
норма	;;;	norm	
номер	;;;	number; hotel room	
ножка	;;;	leg; stem (of wineglass, mushroom)	
ножик	;;;	small knife, penknife	
новый	;;;	new	
нищий	;;;	destitute; beggar	
ничто	;;;	nothing	
ничей	;;;	nobody’s	
нитка	;;;	thread	
никто	;;;	nobody	
никак	;;;	in no way; by no means	
низко	;;;	low	
нигде	;;;	nowhere	
нечто	;;;	something (=что-то)	
нефть	;;;	oil, petroleum	
нести	;;;	to carry	
немой	;;;	dumb, silent, mute	
немец	;;;	German (noun)	
некто	;;;	someone, a certain	
некий	;;;	a certain	
недра	;;;	depths, bowels (of the earth)	
негде	;;;	there is nowhere	
наяву	;;;	while awake; for real	
нация	;;;	nation	
наука	;;;	science; scholarship	
насос	;;;	pump	
наряд	;;;	attire, costume; order, warrant	
народ	;;;	(the) people	
напор	;;;	pressure	
намёк	;;;	hint, allusion	
налог	;;;	tax	
налёт	;;;	raid; thin coating	
накал	;;;	intense heat; intensity	
назло	;;;	out of spite; (+d) to spite (s.o.)	
назад	;;;	back, ago	
нажим	;;;	pressure; clamp	
навык	;;;	skill, technique	
навоз	;;;	manure	
навес	;;;	awning	
набор	;;;	set, collection; recruitment	
набок	;;;	awry, on one side	
набат	;;;	alarm bell	
мятеж	;;;	rebellion	
мягко	;;;	softly	
мышца	;;;	muscle	
мышка	;;;	armpit; mouse	
мысль	;;;	thought	
мчать	;;;	to rush, speed along	
мусор	;;;	litter	
му́ка	;;;	torment	
мука́	;;;	flour	
музей	;;;	museum	
мужик	;;;	(Russian) peasant	
мотор	;;;	motor, engine	
мотив	;;;	motive; motif	
моряк	;;;	sailor	
мороз	;;;	frost	
морда	;;;	snout, muzzle; (coll) face	
монах	;;;	monk	
молча	;;;	in silence, without speaking	
молот	;;;	hammer	
молва	;;;	rumour(s)	
можно	;;;	it is possible	
много	;;;	much, many, a lot	
миска	;;;	bowl	
мирно	;;;	peacefully	
мираж	;;;	mirage	
минус	;;;	minus; disadvantage	
милый	;;;	nice, dear	
мешок	;;;	bag, sack	
мечта	;;;	dream, daydream	
метро	;;;	metro, underground	
метод	;;;	method	
метла	;;;	broom	
метко	;;;	accurately	
месяц	;;;	month; moon	
месть	;;;	revenge	
место	;;;	place	
мести	;;;	to sweep	
менее	;;;	less	
мелко	;;;	finely; pettily	
между	;;;	between	
медик	;;;	doctor; medical specialist	
мачта	;;;	mast	
масса	;;;	mass	
масло	;;;	butter; oil	
маска	;;;	mask	
марка	;;;	postage stamp; brand, trade mark	
мамин	;;;	mother’s (possessive adj)	
малыш	;;;	child (coll)	
малый	;;;	small	
майор	;;;	major	
лютый	;;;	fierce	
любой	;;;	any (any you like)	
лучше	;;;	better	
ломка	;;;	breaking	
ложка	;;;	spoon	
лодка	;;;	boat, rowing boat	
ловля	;;;	catching	
ловко	;;;	skilfully, deftly	
лично	;;;	personally	
лихой	;;;	dashing, daring; skilful (coll)	
линия	;;;	line	
линза	;;;	lens	
лимон	;;;	lemon	
лидер	;;;	leader	
летом	;;;	in summer	
лента	;;;	ribbon, tape	
лезть	;;;	to climb	
легко	;;;	easily; it is easy	
левый	;;;	left; left-wing	
лгать	;;;	to lie, tell lies, tell a lie	
лаять	;;;	to bark	
ласка	;;;	caress; weasel	
лампа	;;;	lamp	
лакей	;;;	lackey; servant	
ладно	;;;	harmoniously; all right (unenthusiastic agreement)	
лавка	;;;	bench; small shop	
кучка	;;;	small heap; small group	
кухня	;;;	kitchen	
кутёж	;;;	drinking-bout	
кусок	;;;	piece	
курсы	;;;	course, courses (of study)	
купол	;;;	cupola	
купец	;;;	merchant	
кумир	;;;	idol	
культ	;;;	cult	
кулак	;;;	fist; kulak (rich peasant)	
кукла	;;;	doll	
кузов	;;;	body (of vehicle); basket	
кудри	;;;	curls	
кубок	;;;	goblet, bowl	
кубик	;;;	child’s building brick	
ктото	;;;	someone	
крыша	;;;	roof	
крыть	;;;	to cover	
крыса	;;;	rat	
крыло	;;;	wing	
круто	;;;	steeply; sharply	
крупа	;;;	groats (grain)	
крона	;;;	crown (of tree); crown (currency)	
кроме	;;;	except, besides	
кровь	;;;	blood	
криво	;;;	crookedly, squint	
крест	;;;	cross	
кошка	;;;	cat (f)	
кочка	;;;	hummock	
кофта	;;;	blouse	
котёл	;;;	boiler	
кость	;;;	bone	
косой	;;;	slanting, oblique, squint; cross-eyed, squinting	
корма	;;;	stern (of ship)	
корка	;;;	crust; rind	
копьё	;;;	spear	
копия	;;;	copy	
конус	;;;	cone	
конец	;;;	end	
конёк	;;;	small horse; hobby	
комод	;;;	chest of drawers	
комар	;;;	mosquito	
колос	;;;	ear (of corn)	
колея	;;;	rut	
койка	;;;	bunk, berth	
козёл	;;;	goat	
когда	;;;	when	
ковёр	;;;	carpet	
князь	;;;	prince	
книга	;;;	book	
кляча	;;;	nag (horse)	
клоун	;;;	clown	
класс	;;;	class; classroom	
кишка	;;;	gut, intestine	
кисть	;;;	bunch (fruit); brush; tassel; hand	
кефир	;;;	kefir, yoghurt-type drink	
кепка	;;;	cloth cap (soft, with peak)	
каюта	;;;	cabin (ship)	
каток	;;;	skating-rink; roller	
катер	;;;	cutter, launch (boat)	
касса	;;;	cash desk; ticket-office	
каска	;;;	helmet	
карта	;;;	map, card	
карий	;;;	brown, hazel (of eyes); chestnut (of horses)	
капля	;;;	drop	
канун	;;;	eve	
канат	;;;	rope, cable	
канал	;;;	canal; channel	
камыш	;;;	reed, rush	
камин	;;;	fireplace	
калач	;;;	kalach (small white loaf)	
какой	;;;	what (kind of)	
каков	;;;	what, what kind of	
както	;;;	somehow; (coll) once, at one time	
казнь	;;;	execution	
казна	;;;	(State) Treasury	
казак	;;;	Cossack	
кадры	;;;	staff, personnel	
ихний	;;;	their (very coll) (= их)	
исход	;;;	outcome, end	
исток	;;;	source	
испуг	;;;	fright	
искра	;;;	spark	
иначе	;;;	otherwise	
иметь	;;;	to have (with non-concrete object)	
икона	;;;	icon	
извне	;;;	from outside	
изпод	;;;	from under	
идиот	;;;	idiot	
идеал	;;;	ideal	
игрок	;;;	player	
зреть	;;;	to ripen, mature	
зорко	;;;	sharp-sightedly, vigilantly	
знать	;;;	to know	
знамя	;;;	banner	
злоба	;;;	spite, malice	
зимой	;;;	in winter	
зерно	;;;	grain, seed	
земля	;;;	earth, land	
здесь	;;;	here	
зверь	;;;	wild animal	
звено	;;;	link	
звать	;;;	to call (s.o.); summon	
зачем	;;;	why, for what	
заход	;;;	sunset; call (at a place)	
затея	;;;	venture, undertaking; game, escapade; embellishment	
затем	;;;	after that, then	
заряд	;;;	charge, cartridge	
запах	;;;	smell	
запас	;;;	stock, supply; reserve	
запад	;;;	west	
залог	;;;	deposit, guarantee, pledge	
залив	;;;	bay	
закон	;;;	law	
закат	;;;	sunset	
заказ	;;;	order (for sth)	
задор	;;;	fervour, vigour	
загар	;;;	suntan	
завод	;;;	factory	
забор	;;;	fence	
жутко	;;;	dreadfully	
жулик	;;;	petty thief; cheat	
жрать	;;;	to eat (very coll), gobble up	
житие	;;;	life, biography	
жильё	;;;	accommodation	
жилой	;;;	dwelling (adj), residential	
жилка	;;;	vein	
жизнь	;;;	life	
живот	;;;	belly, stomach	
живой	;;;	alive, lively	
жерло	;;;	mouth, muzzle	
жених	;;;	fiancé	
жёлоб	;;;	gutter, chute	
ждать	;;;	to wait (for)	
жатва	;;;	reaping, harvest	
жарко	;;;	hotly; it’s hot	
жалко	;;;	pitifully; it’s a pity; (+g) be sorry for	
жажда	;;;	thirst	
жадно	;;;	greedily	
ехать	;;;	to go (by transport)	
ересь	;;;	heresy	
ежели	;;;	if (obs or coll)	
едкий	;;;	acrid, pungent; sarcastic	
еврей	;;;	Jew	
дырка	;;;	small hole	
дымок	;;;	puff of smoke	
дымка	;;;	haze	
дуэль	;;;	duel	
душно	;;;	stuffy	
дурно	;;;	bad(ly)	
дурак	;;;	fool	
дудка	;;;	pipe, fife	
дрянь	;;;	rubbish (coll)	
дрожь	;;;	trembling	
дрова	;;;	firewood	
драть	;;;	to tear; thrash; fleece (coll)	
драма	;;;	drama	
драка	;;;	fight, brawl	
дочка	;;;	daughter (intimate form)	
доход	;;;	income	
досуг	;;;	leisure	
доска	;;;	board	
домой	;;;	home, homewards	
домна	;;;	blast furnace	
домик	;;;	cottage	
долой	;;;	down with	
долго	;;;	for a long time	
дождь	;;;	rain	
довод	;;;	argument (for sth)	
добро	;;;	good, good deeds; goods (coll)	
днище	;;;	bottom (of vessel)	
длина	;;;	length	
дикий	;;;	wild	
диван	;;;	divan, couch	
денёк	;;;	day (dim)	
делец	;;;	wheeler-dealer	
девка	;;;	girl (coll)	
дебют	;;;	debut	
дверь	;;;	door	
даром	;;;	free, gratis	
далее	;;;	further	
давно	;;;	(since) long ago	
давай	;;;	let’s (do sth)	
густо	;;;	thickly; densely	
гулко	;;;	resonantly; with an echoing sound	
гудок	;;;	hooter, car horn; hooting	
грязь	;;;	mud; dirt	
гряда	;;;	ridge; bed (garden)	
груша	;;;	pear	
грудь	;;;	breast	
груда	;;;	heap, pile	
грубо	;;;	coarsely	
гроза	;;;	thunderstorm	
грипп	;;;	influenza	
грива	;;;	mane	
греть	;;;	to heat	
грань	;;;	border, verge; facet, edge	
грамм	;;;	gram(me)	
гость	;;;	guest	
горох	;;;	peas	
город	;;;	town, city	
горло	;;;	throat	
горка	;;;	hillock	
гордо	;;;	proudly	
гонка	;;;	race	
голый	;;;	naked	
голос	;;;	voice; vote	
голод	;;;	hunger	
гнуть	;;;	to bend	
гнить	;;;	to rot	
гнать	;;;	to drive; hunt, persecute, chase	
глыба	;;;	large lump (of rock, ice etc.)	
глушь	;;;	backwoods, the sticks	
глухо	;;;	indistinctly	
глупо	;;;	stupidly	
глубь	;;;	depth	
глина	;;;	clay	
глава	;;;	head, chief; chapter	
герой	;;;	hero	
гений	;;;	genius	
гдето	;;;	somewhere	
гараж	;;;	garage	
гамма	;;;	scale; gamut, range	
вялый	;;;	flabby, limp	
вьюга	;;;	snowstorm	
вышка	;;;	tower; turret	
выход	;;;	exit, way out	
вызов	;;;	summons; challenge	
вывод	;;;	conclusion, deduction	
выбор	;;;	choice	
вчера	;;;	yesterday	
втрое	;;;	three times (as much)	
всюду	;;;	everywhere	
вслух	;;;	aloud	
вслед	;;;	after	
всего	;;;	in all, altogether; only	
врозь	;;;	separately	
вроде	;;;	like, such as	
время	;;;	time	
врать	;;;	to tell lies; talk nonsense	
ворох	;;;	heap, pile	
ворот	;;;	collar; winch	
вопль	;;;	wail, howl	
волос	;;;	(a) hair	
волна	;;;	wave	
война	;;;	war	
возле	;;;	by, near	
вожжа	;;;	rein	
вождь	;;;	leader	
вожак	;;;	guide, leader	
водка	;;;	vodka	
вовсе	;;;	at all	
вновь	;;;	anew, again; newly	
внизу	;;;	below	
влечь	;;;	to draw; attract	
влево	;;;	to the left	
влага	;;;	damp, moisture	
вклад	;;;	contribution	
вишня	;;;	cherry	
вихрь	;;;	whirlwind	
висок	;;;	temple (ear to forehead)	
вилка	;;;	fork; (two-pin) plug	
визит	;;;	official visit	
видно	;;;	evident, visible	
взрыв	;;;	explosion	
взнос	;;;	payment; fee; subscription	
вздох	;;;	sigh	
вздор	;;;	nonsense (coll)	
взвод	;;;	platoon	
веять	;;;	to blow (wind), flutter	
вечно	;;;	eternally, always	
вечер	;;;	evening	
ветка	;;;	branch	
ветер	;;;	wind	
ветвь	;;;	branch	
весть	;;;	piece of news	
вести	;;;	to lead	
весна	;;;	spring (season)	
весло	;;;	oar	
верно	;;;	faithfully, truly; it is true	
венок	;;;	wreath, garland	
веник	;;;	brush, bundle of twigs (for sweeping floor or beating body in sauna)	
венец	;;;	crown, wreath; halo	
везти	;;;	to transport; (+d) be lucky	
везде	;;;	everywhere	
ведро	;;;	bucket	
вдруг	;;;	suddenly	
вдоль	;;;	along	
вдова	;;;	widow	
вдвое	;;;	double	
вдали	;;;	in the distance	
ввысь	;;;	upwards	
ввиду	;;;	in view of	
вверх	;;;	upwards	
вахта	;;;	watch (on ship); special work shift	
ванна	;;;	bath	
вальс	;;;	waltz	
валун	;;;	boulder	
важно	;;;	it is important	
вагон	;;;	carriage, coach, wagon	
бытие	;;;	existence	
былой	;;;	former, past	
бухта	;;;	bay	
буфет	;;;	snackbar	
бурый	;;;	greyish-brown	
бурно	;;;	stormily; energetically	
булка	;;;	small loaf	
букет	;;;	bouquet	
буква	;;;	letter (of alphabet)	
будто	;;;	as though, allegedly	
будни	;;;	weekdays	
будка	;;;	booth	
бугор	;;;	mound	
брюхо	;;;	paunch (coll)	
брюки	;;;	trousers	
броня	;;;	reservation, booking	
броня	;;;	armour-plating	
бровь	;;;	eyebrow; brow	
брить	;;;	to shave	
брешь	;;;	breach	
бремя	;;;	burden	
брать	;;;	to take	
брань	;;;	swearing, abuse	
бочка	;;;	barrel	
босой	;;;	barefoot	
борец	;;;	fighter; wrestler	
бомба	;;;	bomb	
более	;;;	more	
бокал	;;;	wineglass	
бойня	;;;	slaughter-house	
бойко	;;;	boldly, briskly	
божий	;;;	God’s	
бодро	;;;	cheerfully, heartily	
богач	;;;	rich man	
блюдо	;;;	dish, course (of meal)	
блоха	;;;	flea	
блеск	;;;	shine	
бланк	;;;	form (document)	
благо	;;;	good (thing), benefit; (coll) since, seeing that	
битый	;;;	beaten; broken; whipped	
битва	;;;	battle	
биржа	;;;	exchange; stock exchange биржа труда labour exchange	
билет	;;;	ticket	
бетон	;;;	concrete	
берёт	;;;	beret	
берег	;;;	bank, shore	
бельё	;;;	linen	
белый	;;;	white	
белка	;;;	squirrel	
бедро	;;;	hip; thigh	
бедно	;;;	poorly, cheaply	
башня	;;;	tower	
башка	;;;	head	
басня	;;;	fable	
барин	;;;	landowner, barin; gentleman	
баржа	;;;	barge	
баран	;;;	ram (sheep)	
барак	;;;	hut	
банка	;;;	jar, can	
банда	;;;	band, gang	
балка	;;;	beam, girder; gully	
балет	;;;	ballet	
базис	;;;	basis	
базар	;;;	bazaar, market	
багаж	;;;	luggage	
бабка	;;;	grandmother; old woman (coll)	
бабий	;;;	women’s (coll; sexist)	
ахать	;;;	to gasp	
атака	;;;	attack	
архив	;;;	archive(s)	
армия	;;;	army	
арест	;;;	arrest	
арена	;;;	arena	
арбуз	;;;	water melon	
ангел	;;;	angel	
амбар	;;;	barn; storehouse	
алмаз	;;;	(uncut) diamond	
аллея	;;;	avenue	
акция	;;;	share (in company)	
акула	;;;	shark	
актив	;;;	the activists; assets (financial)	
актёр	;;;	actor	
азарт	;;;	excitement, fervour	
адрес	;;;	address	
агент	;;;	agent	
автор	;;;	author	
авось	;;;	perhaps	
аванс	;;;	advance (payment)	
убить	;;;	to kill; to murder	
съ;;;	to eat		
съ;;;	to travel there and back		
стать	;;;	to become; to stand; p: begin	
сойти	;;;	to go down (from)	
со;;;	to screw up one’s eyes, narrow one’s eyes		
со;;;	to be kept		
со;;;	to create		
со;;;	to count		
со;;;	to lie, tell lies, tell a lie		
со;;;	to ripen, mature		
со;;;	to eat (very coll), gobble up		
со;;;	to tear; thrash; fleece (coll)		
со;;;	to bend		
со;;;	to tell lies; talk nonsense		
снять	;;;	to take off; photograph; rent	
смыть	;;;	to wash off	
сжечь	;;;	to burn	
сжать	;;;	to squeeze	
сесть	;;;	to sit down; get into (transport)	
сдать	;;;	to hand in, hand over; rent, let; surrender, give up; i: take (exam); p: to pass (exam)	
сбить	;;;	to knock down; confuse; whip, whisk; distract, beat	
сшить	;;;	to sew	
спеть	;;;	to sing	
смять	;;;	to crumple, crush	
смочь	;;;	to be able	
сжать	;;;	to squeeze; to harvest	
ящик	;;;	box, crate	
ясно	;;;	clearly; it is clear	
ясли	;;;	creche	
ярый	;;;	furious, raging; fervent, rabid	
ярко	;;;	brightly	
яйцо	;;;	egg	
язык	;;;	language; tongue	
ядро	;;;	nucleus; ball	
явно	;;;	clearly, obviously	
юный	;;;	young	
юмор	;;;	humour	
юбка	;;;	skirt	
эфир	;;;	air (broadcasting); ether	
этот	;;;	this	
этап	;;;	stage, phase	
этак	;;;	this way, thus; approximately (coll)	
этаж	;;;	floor, storey	
экий	;;;	what (a) (=какой) (coll)	
щука	;;;	pike (fish)	
щепа	;;;	splinter, chip	
щель	;;;	chink, fissure, slot	
щека	;;;	cheek	
шуба	;;;	fur coat	
штык	;;;	bayonet	
штат	;;;	staff (of institution); state (of the USA, Australia)	
штаб	;;;	staff (mil); HQ	
шрам	;;;	scar	
шоры	;;;	blinkers	
шнур	;;;	cord; lace; flex, cable	
шлюз	;;;	lock, sluice	
шкаф	;;;	cupboard	
шить	;;;	to sew	
шёлк	;;;	silk	
шарф	;;;	scarf	
шанс	;;;	chance	
чуть	;;;	hardly, just	
чума	;;;	plague	
чудо	;;;	marvel, miracle	
член	;;;	member	
чёрт	;;;	devil	
чего	;;;	why (coll)	
чаща	;;;	thicket	
чаша	;;;	cup; chalice	
часы	;;;	watch, clock	
чаёк	;;;	tea (dim), nice cup of tea	
цирк	;;;	circus	
цикл	;;;	cycle	
цепь	;;;	chain	
цена	;;;	price	
цель	;;;	target, purpose	
цвет	;;;	colour; blossom; prime	
царь	;;;	tsar	
хуже	;;;	worse	
худо	;;;	bad, badly	
храм	;;;	temple, church	
хотя	;;;	although	
хоть	;;;	even if, if only, even, although	
холм	;;;	hill	
хлеб	;;;	bread	
хлам	;;;	junk	
хата	;;;	peasant house	
хаос	;;;	chaos	
фунт	;;;	pound (money or weight)	
фото	;;;	photo	
фонд	;;;	fund; stock	
флот	;;;	fleet	
флаг	;;;	flag	
фара	;;;	headlamp	
факт	;;;	fact	
фаза	;;;	phase	
учёт	;;;	calculation; stock-taking; registration	
уход	;;;	departure; (за +inst) caring (for), maintenance (of)	
утюг	;;;	iron (for ironing)	
утро	;;;	morning	
утка	;;;	duck; hoax	
уста	;;;	mouth; lips (poetic)	
усик	;;;	whisker; antenna, feeler	
урок	;;;	lesson	
урод	;;;	freak, monster	
уран	;;;	uranium	
упор	;;;	prop	
умно	;;;	intelligently	
укор	;;;	reproach	
укол	;;;	jab, injection	
указ	;;;	decree	
уйма	;;;	lots (of) (coll)	
узор	;;;	pattern	
узел	;;;	knot; junction; bundle	
ужин	;;;	supper	
ужас	;;;	horror	
удар	;;;	blow, strike	
угол	;;;	corner	
тяга	;;;	locomotion; (к +d) thirst for, attraction towards	
тьфу	;;;	(euphemism for spitting; expressing dislike or scorn) yuk!, ugh!, pah! (coll)	
тьма	;;;	darkness	
туша	;;;	carcass	
туча	;;;	storm cloud	
туда	;;;	there (thither)	
туго	;;;	tight(ly); difficult, hardly	
трюм	;;;	hold (of ship)	
трюк	;;;	stunt; trick, ruse	
трус	;;;	coward	
труп	;;;	corpse	
труд	;;;	labour	
трос	;;;	rope, cable	
трон	;;;	throne	
трое	;;;	three, threesome	
тост	;;;	toast	
торт	;;;	cake	
толк	;;;	sense, point; understanding	
тоже	;;;	too	
тото	;;;	that’s it, that’s right	
тихо	;;;	quiet	
тигр	;;;	tiger	
тёща	;;;	mother-in-law (wife’s mother)	
течь	;;;	to flow; begin to flow	
течь	;;;	leak	
тётя	;;;	aunt	
тень	;;;	shade; shadow	
темп	;;;	rate, speed	
тема	;;;	subject, topic, theme	
тело	;;;	body	
твой	;;;	your (familiar)	
тара	;;;	packaging	
танк	;;;	tank (mil)	
такт	;;;	rhythm, time; tact	
сюда	;;;	here (hither)	
счёт	;;;	bill, account; count, score	
суша	;;;	(dry) land (opposite of sea)	
сухо	;;;	drily	
суть	;;;	essence	
сука	;;;	bitch	
стыд	;;;	shame	
стул	;;;	chair	
стук	;;;	knock	
стоп	;;;	stop!	
стон	;;;	groan	
стол	;;;	table	
сток	;;;	flow; drain	
стих	;;;	line of poetry	
стая	;;;	flock, pack	
стан	;;;	figure (human); camp	
стаж	;;;	period of service, period of work or training	
срок	;;;	period (of time); (last) date, deadline	
срез	;;;	cut; cut edge	
срам	;;;	shame	
спор	;;;	argument	
спад	;;;	fall, slump	
союз	;;;	union	
соус	;;;	sauce	
сорт	;;;	grade, quality	
соль	;;;	salt	
снег	;;;	snow	
смех	;;;	laughter, laugh	
слух	;;;	hearing; rumour	
слон	;;;	elephant	
слой	;;;	layer, stratum	
след	;;;	footprint; trace, vestige	
скот	;;;	cattle	
сито	;;;	sieve	
сила	;;;	strength, force	
сеть	;;;	net; network	
серп	;;;	sickle	
сера	;;;	sulphur	
сено	;;;	hay	
сени	;;;	entrance hall (of peasant hut)	
семя	;;;	seed	
семь	;;;	seven	
село	;;;	village	
себя	;;;	self [(a) pronoun]	
свой	;;;	one’s own	
свод	;;;	arch, vault (roof); collection of texts	
свет	;;;	light; world	
сбыт	;;;	sale	
сбор	;;;	collection, gathering	
сани	;;;	sledge	
сало	;;;	fat, lard	
сажа	;;;	soot	
рыть	;;;	to dig	
рысь	;;;	trot; lynx	
рыба	;;;	fish	
руль	;;;	steering-wheel; helm	
рука	;;;	hand; arm	
руда	;;;	ore	
роща	;;;	small wood, copse	
рота	;;;	company (of soldiers)	
рост	;;;	growth, increase; height	
роса	;;;	dew	
роль	;;;	role	
роза	;;;	rose	
рожь	;;;	rye	
рожа	;;;	face (very coll)	
ритм	;;;	rhythm	
риск	;;;	risk	
речь	;;;	speech	
река	;;;	river	
рейс	;;;	journey (of vehicle)	
раса	;;;	race (ethnic)	
рано	;;;	early; it is early	
ранг	;;;	rank	
рана	;;;	wound	
рама	;;;	frame	
ради	;;;	for the sake of	
пять	;;;	five	
пята	;;;	heel	
пыль	;;;	dust	
путь	;;;	way, journey	
пуск	;;;	starting up, launch	
пуля	;;;	bullet	
пруд	;;;	pond	
приз	;;;	prize	
прах	;;;	dust	
пояс	;;;	belt, waist	
поэт	;;;	poet	
пост	;;;	post (job)	
порт	;;;	port	
пора	;;;	it is time; time, season	
полк	;;;	regiment	
поле	;;;	field	
пола	;;;	flap (of coat etc.)	
пока	;;;	while	
поза	;;;	pose	
поди	;;;	probably (coll)	
пляж	;;;	beach	
плюс	;;;	plus; advantage	
плуг	;;;	plough	
плот	;;;	raft	
плод	;;;	fruit	
плен	;;;	captivity	
плащ	;;;	raincoat; cloak	
плач	;;;	weeping	
план	;;;	plan	
пища	;;;	food	
пить	;;;	to have a drink	
пить	;;;	to drink, have an alcoholic drink	
пила	;;;	saw	
пиво	;;;	beer	
печь	;;;	to bake	
печь	;;;	stove	
петь	;;;	to sing	
перо	;;;	feather	
пень	;;;	tree-stump	
пена	;;;	foam	
парк	;;;	park; depot	
пара	;;;	pair, couple	
папа	;;;	dad; Pope	
паёк	;;;	ration	
очко	;;;	point (in scoring); (pl) glasses, spectacles	
очки	;;;	glasses, spectacles	
очаг	;;;	hearth	
отец	;;;	father	
осёл	;;;	donkey	
орех	;;;	nut	
орёл	;;;	eagle	
опыт	;;;	experience; experiment	
омут	;;;	pool, deep place in river; whirlpool	
окоп	;;;	trench	
окно	;;;	window	
один	;;;	one	
огон	;;;	light	
овца	;;;	sheep	
овёс	;;;	oats	
обои	;;;	wallpaper	
обоз	;;;	string of carts; military transport	
обед	;;;	meal; dinner	
няня	;;;	nurse	
ныть	;;;	to whine, complain; ache	
ныне	;;;	now; today (=теперь)	
нуль	;;;	zero	
нрав	;;;	nature, disposition (of person)	
ноша	;;;	burden	
ночь	;;;	night	
ноты	;;;	sheet music	
нота	;;;	note (music, diplomatic)	
нора	;;;	burrow	
ноль	;;;	zero	
нога	;;;	leg/foot	
нить	;;;	thread	
ниже	;;;	lower, below	
нива	;;;	field, cornfield	
нету	;;;	there isn’t/aren’t (= нет) (coll)	
нерв	;;;	nerve	
негр	;;;	negro	
нёбо	;;;	sky, heaven	
небо	;;;	serious	
нате	;;;	here you are, take it (coll)	
нары	;;;	bunk, plank-bed	
надо	;;;	it is necessary	
мять	;;;	to crumple, crush	
мясо	;;;	meat	
мышь	;;;	mouse	
мыть	;;;	to wash	
мыло	;;;	soap	
муха	;;;	fly	
муть	;;;	sediment	
мрак	;;;	darkness, gloom	
мощь	;;;	power, might	
мочь	;;;	to be able	
мост	;;;	bridge	
море	;;;	sea	
мозг	;;;	brain	
мода	;;;	fashion	
мина	;;;	mine, shell (mil)	
мимо	;;;	past	
миля	;;;	mile	
метр	;;;	metre (measurement)	
мера	;;;	measure	
мель	;;;	shoal, (sand)bank	
медь	;;;	copper (noun)	
мгла	;;;	haze, gloom	
маяк	;;;	lighthouse; beacon	
мать	;;;	mother	
матч	;;;	match (game)	
марш	;;;	march	
март	;;;	March (month)	
мама	;;;	mother; mummy	
мало	;;;	few; not much	
люди	;;;	people	
лыжи	;;;	skis	
лупа	;;;	magnifying glass	
луна	;;;	moon	
лужа	;;;	puddle	
ложь	;;;	lie, lies	
лишь	;;;	only (=только)	
лицо	;;;	face; person	
лихо	;;;	dashingly, with spirit (coll)	
лифт	;;;	lift, elevator	
лить	;;;	to pour	
литр	;;;	litre	
лист	;;;	leaf (of plant); sheet (of paper)	
лиса	;;;	fox	
липа	;;;	lime tree	
либо	;;;	or	
лето	;;;	summer; (after numbers) years	
лень	;;;	laziness	
лапа	;;;	paw	
куча	;;;	heap	
куст	;;;	bush	
курс	;;;	course, course of study; rate of exchange	
кура	;;;	hen (coll) (=курица)	
купе	;;;	compartment (train)	
куда	;;;	where (whither)	
круг	;;;	circle	
крик	;;;	cry, shout	
крах	;;;	crash; failure	
кран	;;;	tap; crane	
край	;;;	edge; region, area	
краб	;;;	crab	
кофе	;;;	coffee	
косо	;;;	squint, askew	
коса	;;;	plait; scythe	
корм	;;;	fodder	
кора	;;;	bark, rind, crust	
конь	;;;	horse	
коли	;;;	if (coll)	
коза	;;;	goat	
кожа	;;;	skin; leather	
ковш	;;;	scoop, ladle	
кнут	;;;	whip, knout	
ключ	;;;	key; spring, source	
клуб	;;;	club	
клоп	;;;	bedbug	
клок	;;;	rag, shred, tuft	
клин	;;;	wedge	
клён	;;;	maple	
клей	;;;	glue	
клад	;;;	treasure	
кипа	;;;	pile, stack	
кино	;;;	cinema	
каша	;;;	kasha (porridge made of buckwheat, semolina or oatmeal)	
кафе	;;;	café	
кара	;;;	punishment	
кадр	;;;	frame; cadre	
кабы	;;;	if (coll)	
июнь	;;;	June	
июль	;;;	July	
итог	;;;	sum, total	
итак	;;;	so, so then	
иной	;;;	other	
иней	;;;	hoar-frost	
икра	;;;	caviare; calf (of leg)	
изба	;;;	peasant cottage	
изза	;;;	from behind; because of	
идти	;;;	to go (on foot)	
идол	;;;	idol	
идея	;;;	idea	
игра	;;;	game	
игла	;;;	needle	
зять	;;;	son-in-law; brother-in-law	
зона	;;;	zone	
зола	;;;	ashes, cinders	
зной	;;;	hot weather	
знак	;;;	sign	
змея	;;;	snake	
злой	;;;	evil, wicked; bad-tempered, fierce	
зима	;;;	winter	
звук	;;;	sound	
звон	;;;	ringing	
заяц	;;;	hare	
зато	;;;	in compensation, on the other hand	
заря	;;;	dawn; sunset	
заём	;;;	loan	
загс	;;;	registry office	
жить	;;;	to live; p: live for a while	
жила	;;;	vein	
живо	;;;	quickly; vividly	
жечь	;;;	to burn	
жечь	;;;	to burn up	
жест	;;;	gesture	
жена	;;;	wife	
жать	;;;	to squeeze; to harvest	
жара	;;;	heat, hot weather	
жанр	;;;	genre	
жаль	;;;	it’s a pity	
есть	;;;	to eat	
есть	;;;	to eat a little	
если	;;;	if	
ёлка	;;;	fir tree	
едва	;;;	hardly, scarcely, only just	
дядя	;;;	uncle	
дыра	;;;	hole	
душа	;;;	soul	
духи	;;;	perfume	
дуть	;;;	to blow	
дура	;;;	idiot, stupid woman	
дума	;;;	thought; duma (Russian parliament)	
дуга	;;;	arc, curve	
друг	;;;	friend	
дочь	;;;	daughter	
дома	;;;	at home	
доля	;;;	portion, share; lot, fate	
долг	;;;	debt; (sg only) duty	
днём	;;;	by day; in the afternoon	
дичь	;;;	game, wildfowl	
дитя	;;;	child	
диск	;;;	disk; discus	
дико	;;;	wildly; absurd	
дети	;;;	children	
день	;;;	day	
дело	;;;	matter, business	
двор	;;;	yard, court	
двое	;;;	two	
дача	;;;	dacha, holiday cottage	
дата	;;;	date	
дань	;;;	tribute, homage	
дама	;;;	lady	
даль	;;;	distance	
даже	;;;	even	
гуща	;;;	dregs; thicket	
гусь	;;;	goose	
губа	;;;	lip	
груз	;;;	load; cargo	
грош	;;;	half-kopeck, farthing	
гром	;;;	thunder	
гроб	;;;	coffin	
гриб	;;;	mushroom	
грех	;;;	sin	
грек	;;;	Greek (man)	
граф	;;;	count (title)	
град	;;;	hail; (poet) city	
горе	;;;	grief, sorrow	
горб	;;;	hump	
гора	;;;	mountain, hill	
гнёт	;;;	oppression	
гнев	;;;	anger	
глаз	;;;	eye	
гипс	;;;	plaster (of Paris)	
гимн	;;;	hymn, anthem	
герб	;;;	coat of arms	
выше	;;;	higher, above	
выть	;;;	to howl	
вход	;;;	entrance	
вред	;;;	harm	
врач	;;;	doctor	
враз	;;;	all together (coll)	
враг	;;;	enemy	
воск	;;;	wax	
воля	;;;	will; freedom, liberty	
волк	;;;	wolf	
воин	;;;	warrior	
вода	;;;	water	
внук	;;;	grandson	
вниз	;;;	down	
вкус	;;;	taste	
вишь	;;;	look!	
винт	;;;	screw; propeller	
вино	;;;	wine	
вина	;;;	guilt	
визг	;;;	scream	
взор	;;;	look, glance	
вещь	;;;	thing	
веха	;;;	landmark; stake, marker	
весь	;;;	all	
весы	;;;	scales	
верх	;;;	top	
вера	;;;	faith, belief	
вена	;;;	vein	
веко	;;;	eyelid	
веер	;;;	fan	
ведь	;;;	you know (expecting agreement)	
ввод	;;;	bringing in	
вата	;;;	cotton wool	
ваза	;;;	vase	
бюро	;;;	office	
быть	;;;	to stay for a while	
быть	;;;	to be; there is, there are	
быль	;;;	true story, fact	
буря	;;;	storm, gale	
бунт	;;;	revolt, rebellion	
брус	;;;	beam (of wood or metal)	
бред	;;;	delirium; rubbish	
брат	;;;	brother	
брак	;;;	marriage; (no pl) defective product(s), reject(s)	
борщ	;;;	borsch, beetroot soup	
борт	;;;	side (of a ship)	
боль	;;;	pain	
боец	;;;	fighter, soldier	
блин	;;;	pancake	
близ	;;;	near	
бить	;;;	to beat, hit	
бинт	;;;	bandage	
беда	;;;	misfortune	
баян	;;;	bayan, Russian accordion	
батя	;;;	dad, father (coll) (= батюшка)	
баня	;;;	bath-house	
банк	;;;	bank (for money)	
балл	;;;	mark (exam)	
база	;;;	base; depot	
баба	;;;	peasant woman; (coll) old woman, woman	
атом	;;;	atom	
арка	;;;	arch	
араб	;;;	Arab	
алый	;;;	scarlet	
азот	;;;	nitrogen	
уйти	;;;	to leave (on foot)	
у;;;	to drown		
у;;;	to improve os; improve one’s knowledge (of)		
у;;;	to perfect, improve		
у;;;	to hear		
у;;;	to steal		
у;;;	to see one another, see each other		
у;;;	to see		
у;;;	to see (coll)		
лечь	ложиться	;;;	to lie down
деть	девать	;;;	to put (coll)
дать	давать	;;;	to give (sth to s.o.)
яма	;;;	pit, hole	
эхо	;;;	echo	
это	;;;	this, that, it	
эра	;;;	era	
щит	;;;	shield	
шут	;;;	jester, clown	
шум	;;;	noise, din	
шов	;;;	seam	
шея	;;;	neck	
шеф	;;;	boss, chief	
шар	;;;	sphere	
шаг	;;;	step	
что	;;;	what, that	
чин	;;;	rank	
чем	;;;	than	
чек	;;;	cheque; receipt	
чей	;;;	whose	
час	;;;	hour	
чай	;;;	tea	
цех	;;;	section of factory, shop	
хор	;;;	chorus; choir	
ход	;;;	movement	
хам	;;;	boor (coll)	
фон	;;;	background	
фея	;;;	fairy	
уют	;;;	comfort, cosiness	
ухо	;;;	ear	
уха	;;;	fish-soup	
ура	;;;	hurrah, hurray	
уже	;;;	already	
увы	;;;	alas!	
тюк	;;;	bale	
тыл	;;;	rear (military)	
тут	;;;	here (like здесь)	
тур	;;;	round (sport)	
тсс	;;;	shh! keep quiet!	
три	;;;	three	
тот	;;;	that	
тон	;;;	tone, musical tone; colour tone, tint	
том	;;;	volume (book)	
ток	;;;	electric current	
тиф	;;;	typhus	
тип	;;;	type; (coll) bloke, fellow	
тем	;;;	(by) so much	
там	;;;	there	
так	;;;	so	
таз	;;;	basin; pelvis	
сыр	;;;	cheese	
сын	;;;	son	
суп	;;;	soup	
сук	;;;	bough	
суд	;;;	court (of law); trial	
сто	;;;	hundred	
сон	;;;	sleep; dream	
сок	;;;	juice	
сей	;;;	this (=этот) (bookish; used in set phrases)	
сев	;;;	sowing	
сам	;;;	self	
сад	;;;	garden	
ряд	;;;	row, line, series	
рот	;;;	mouth	
род	;;;	family, kin; birth, origin; sort, kind; gender	
рог	;;;	horn	
рис	;;;	rice	
рёв	;;;	roar	
рай	;;;	paradise	
раз	;;;	once; a time	
рад	;;;	glad (short adj)	
раб	;;;	slave	
пыл	;;;	heat, ardour	
пух	;;;	down, fluff	
пуд	;;;	pood (16.38 kg)	
про	;;;	about (=о +pr) (coll)	
при	;;;	in the presence/time of; attached to	
пот	;;;	sweat	
поп	;;;	priest (coll)	
пол	;;;	floor; sex	
под	;;;	under	
пир	;;;	feast	
пёс	;;;	dog (coll)	
пар	;;;	steam	
ось	;;;	axis; axle	
оно	;;;	it	
они	;;;	they	
она	;;;	she	
око	;;;	eye (bookish, poetic)	
ого	;;;	oho!	
оба	;;;	both	
нос	;;;	nose	
нож	;;;	knife	
низ	;;;	bottom, lower part	
нет	;;;	no; (+g) there is no	
наш	;;;	our	
над	;;;	above	
мяч	;;;	ball (for games)	
мыс	;;;	cape, promontory	
муж	;;;	husband	
мох	;;;	moss	
мол	;;;	he/she/they said	
мой	;;;	my	
миф	;;;	myth	
мир	;;;	world; peace	
миг	;;;	moment	
меч	;;;	sword	
мех	;;;	fur	
мел	;;;	chalk; whitewash	
меж	;;;	between	
мёд	;;;	honey	
мах	;;;	swing, stroke	
май	;;;	May	
люк	;;;	hatch, hatchway, manhole	
луч	;;;	ray, beam	
лук	;;;	onions	
луг	;;;	meadow	
лоб	;;;	forehead	
лес	;;;	wood, forest	
лёд	;;;	ice	
лев	;;;	lion	
лак	;;;	varnish	
лад	;;;	harmony, tune; manner	
кто	;;;	who	
кот	;;;	tomcat	
ком	;;;	lump, ball	
кол	;;;	stake (wood)	
кой	;;;	which (coll)	
кит	;;;	whale	
как	;;;	how, as, like	
ишь	;;;	look (drawing attention to sth) (coll)	
имя	;;;	(first) name	
или	;;;	or	
иго	;;;	yoke (oppression)	
ива	;;;	willow	
ибо	;;;	for (because)	
зуб	;;;	tooth	
зря	;;;	for nothing, pointlessly (coll)	
зло	;;;	evil	
зал	;;;	hall	
зад	;;;	back, rear; rump, backside	
жук	;;;	beetle	
жир	;;;	fat, grease	
жар	;;;	heat	
ещё	;;;	still, yet	
ель	;;;	fir; spruce	
еле	;;;	barely, only just	
еда	;;;	food	
его	;;;	his, its	
дым	;;;	smoke	
дух	;;;	spirit; breath	
дуб	;;;	oak	
дом	;;;	house	
дно	;;;	bottom (of sea, river, well, vessel)	
для	;;;	for	
дед	;;;	grandfather	
два	;;;	two	
дар	;;;	gift	
гул	;;;	rumble	
гол	;;;	goal (sport)	
год	;;;	year	
где	;;;	where	
газ	;;;	gas	
гад	;;;	swine, rat (of person) (coll)	
вуз	;;;	university, institute (higher education establishment)	
всё	;;;	all; all the time	
вот	;;;	here, there (pointing)	
вор	;;;	thief	
вон	;;;	out, away; over there	
вол	;;;	ox	
вой	;;;	howl; wailing	
вне	;;;	outside	
вид	;;;	view, look; species	
вес	;;;	weight	
век	;;;	century; age, era	
ваш	;;;	your	
вал	;;;	billow; rampart; gross output (econ)	
быт	;;;	way of life, everyday life	
бык	;;;	bull	
бор	;;;	pine wood, coniferous forest	
бок	;;;	side	
бой	;;;	battle	
бог	;;;	God	
боб	;;;	bean	
бич	;;;	whip; scourge	
бес	;;;	demon	
без	;;;	without	
бег	;;;	running; race	
бас	;;;	bass	
бар	;;;	bar	
бал	;;;	ball (dance)	
бак	;;;	cistern, tank	
али	;;;	or (coll) (= или)	
акт	;;;	act (of play); document	
ага	;;;	ah (yes), aha	
уже	;;;	already; really	
уже	уж	;;;	already; really
яд	;;;	poison	
юг	;;;	south	
эх	;;;	eh! oh! (expressing regret, annoyance, reproach, amazement)	
эй	;;;	hey! (attracting attention)	
щи	;;;	cabbage soup	
хм	;;;	hm! (expressing hesitation)	
фу	;;;	(expressing disgust) ugh!	
ух	;;;	ooh!	
ус	;;;	whisker	
ум	;;;	mind, intellect	
уж	;;;	already; really	
ты	;;;	you (familiar)	
то	;;;	that; then	
по	;;;	along; around; according to	
ох	;;;	oh, ah (expressing regret, annoyance)	
от	;;;	from	
он	;;;	he	
ой	;;;	o; oh (expressing surprise or fright)	
ну	;;;	well	
но	;;;	but	
ни	;;;	not a	
не	;;;	not	
на	;;;	(+pr) on, at; (+a) onto, to	
мы	;;;	we	
ли	;;;	whether [question word]	
их	;;;	their	
из	;;;	out of, from	
за	;;;	(+a) for; (+inst) behind	
же	;;;	emphasizes preceding word	
ёж	;;;	hedgehog	
её	;;;	her	
до	;;;	up to; until	
да	;;;	yes; and, but	
вы	;;;	you (polite/pl)	
бы	;;;	would (conditional particle)	
ах	;;;	ah!, oh!	
ай	;;;	oh! (expressing fear, surprise)	
аж	;;;	even (coll) (= даже)	
ад	;;;	hell	
я	;;;	I	
у	;;;	by; at (used in ‘have’ construction)	
с	;;;	(+inst) with; (+g) from, off	
о	;;;	about, concerning	
к	;;;	towards, to	
и	;;;	and	
в	;;;	(+pr) in; (+a) into, to	
а	;;;	and, but (slight contrast)	
`;

// Function to parse the database string into an object
function parseDb(dbString) {
  const db = {};
  const lines = dbString.trim().split('\n');
  lines.forEach(line => {
    const [russian, english] = line.split(';;;').map(s => s.trim());
    db[russian] = english;
  });
  return db;
}

const db = parseDb(dbString);

// Function to match the longest root word and identify the suffix
function matchWord(input) {
  let longestMatch = "";
  let suffix = "";
  for (const word in db) {
    if (input.startsWith(word) && word.length > longestMatch.length) {
      longestMatch = word;
      suffix = input.slice(word.length);
    }
  }
  return { root: longestMatch, suffix: suffix };
}

// Function to display the results
function displayResult(input) {
  const match = matchWord(input);
  const rootDefinition = db[match.root] || "Unknown root word";
  const suffixDefinition = "Some suffix definition"; // Define how to get suffix definition

  if (match.root) {
    document.getElementById("output").innerHTML = `
      ${match.root}: ${rootDefinition}<br>
      ${match.suffix}: ${suffixDefinition}<br>
    `;
  } else {
    document.getElementById("output").innerHTML = "No match found";
  }
}

// Event listener for user input
document.getElementById("inputButton").addEventListener("click", function() {
  const userInput = document.getElementById("userInput").value;
  displayResult(userInput);
});
