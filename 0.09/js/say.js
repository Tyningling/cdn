var dictaColor = ''; //文字颜色
function dowritedicta(num){
var randid = Math.round(Math.random()*num);
randid = randid >= num ? num-1 : randid;
document.write('<font color="' + dictaColor + '">' + dictumin[randid] + '</font>');
}
var dictumin = new Array(
'无法舍弃两个方中的任何一方，那不是温柔，那不过是软弱罢了。',
'这世上所有的不公平都是因为当事人能力的不足。',
'如果我闭上了双眼，看到的是黑暗的话，那么当我睁开眼睛去看这个世界的时候，是否会是一片光明？',
'你觉得被圈养的鸟儿为什么无法自由地翱翔天际？是因为鸟笼不是属于它的东西。',
'人的生存只有俩种：“美丽的活着”，亦或“为美丽的人活着”。',
'要么变强改变一切，要么一直做被伤害的人。',
'世上根本没有运气 ，所谓的运气不过就是情况与情况的结合 。',
'只要我尚存一丝气息，你便是我永生难忘的梦。',
'真正重要的东西，不管痛苦也好、悲伤也好。都要努力到底，就算失去生命，也要用双手来保护到底。',
'比起做伤害别人的人，做一个被伤害的人，善良的人这样便很幸福。',
'是天使借给魔鬼他的面容，还是魔鬼借给天使他的镰刀。',
'或许前路永夜，即便如此我也要前进，因为星光即使微弱也会为我照亮前路',
'你的所言所行，全都闪烁着光芒，太过刺目，于是我闭上双眼，但内心还是无法停止对你的憧憬。',
'你驻足于春色中，于那独一无二的春色之中',
'在美丽的谎言中，一个走出了深渊，一个走向了天堂。',
'仿佛要消失般的羸弱，但是，仍旧拼命绽放着光芒。怦怦，怦怦，如同心跳一般，这就是生命之灯。',
'星星在你的头顶上闪耀着，与你交互诉说的话语，一句一句地，如同星点般翩然落至眼前。',
'正因为有了音乐，才有了相遇的瞬间，有了相会的感动，有了相逢的人们，有了邂逅的思念。',
'就算悲伤难抑，遍体鳞伤地处于谷底，也不能停止演奏！——宫园薰《四月是你的谎言》',
'你既然已经做出了选择，又何必去问为什么选择。',
'星星为什么看起来如此渺小，是因为它把自己放得太高。',
'要想成为强者，就不要回避心里的恐惧，恐惧并不是弱点。强者，是要让你的敌人比你更恐惧 。',
'有些梦想虽然遥不可及，但不是不可能实现。只要我足够的强。',
'失败的人只有一种。就是在抵达成功之前放弃的人',
'勇敢，不是靠别人为他担心而证明的，强者，要能够使亲人和朋友感觉到安全和放心。',
'弱者没有资格要求公平。',
'浮舟相随：京洛雪浅，阡陌千灯，恍然一梦，长歌命中。',
'从来没有想过这个背影我会用一辈子去眺望。',
'天下皆白，唯我独黑；非攻墨门，兼爱平生。',
'有些时候后悔本身就是一种无法偿还的代价。',
'得到了不该得到的，就会失去不该失去的。',
'秦时古梦情犹在，明月皓空情正浓。羽兰相伴情相随，雪高执手情难离。',
'身锁樊笼凭遗落，飞琼清影曲无弦。弹指尘梦空山语，真意何妨我共兼。',
'记忆在时间中尘封，往事如流水匆匆逝去，生命花瓣在冬夜飘零，犹如停留在叶面的晨露。',
'我们仰望著同一片天空却看著不同的地方。——新海诚《秒速5厘米》',
'一朵花坠落的速度,连时间都放慢了脚步。——《秒速五厘米》',
'秒速5厘米，那是樱花飘落的速度，那么怎样的速度，才能走完我与你之间的距离？',
'总在不停寻觅你的踪影，无论十字路口抑或梦境之中，明知你不在，却依然不停地找寻。',
'只顾仰望着星空的人注定不会留意到自己下一步是否会跨入深渊。',
'如果愿望能够实现，我愿马上去到你身边，已经没有什么是我做不到的了，我会放下一切抱紧你。',
'如果，樱花掉落的速度是每秒5厘米，那么两颗心需要多久才能靠近？我要用什么样的速度，才能与你相遇？',
'我想成为一个温柔的人，因为曾被温柔的人那样对待，深深了解那种被温柔相待的感觉。',
'记忆是一种相聚的方式，放下是一种自由的形式。不必悲伤，不必忧愁，邂逅的回忆都是美好的故事。',
'最近的烦恼是小小的离别带来的寂寞，一瞬间的邂逅与分别，这一个一个的刹那，我想好好珍惜起来。',
'即使这样，我也觉得能遇上你真的太好了。',
'我想要变强。因为我遇到了许多的邂逅、有了想要守护的事物。',
'无论如何思念，也有些东西终究无法企及，那么，忘了就好。',
'若结局非你所愿，就在尘埃落定前奋力一搏。',
'看得见交错的存在，听得见想要沟通的话语，而在今天也细细地品味，名为“邂逅”的那项奇迹。',
'一旦被爱过，去爱过，就无法忘记了。',
'就算有一天，离别的时刻来临，但那也不一定意味着永别。',
'无意义的理想,迟早会在现实面前崩溃。',
'趁着黑暗逃跑的话只是匹夫的夜盗而已。高奏凯歌离去的话，那就是征服王的掠夺。',
'梦存高远 志在争霸 这股热情确实值得赞许 但所谓梦 终有一天是要醒来的。',
'不过傲慢分为两种。一种是能力过于低下，还有一种是志向异常远大的。前者显得非常愚蠢，后者是难得一见的珍贵种类。',
'想要救谁，就意味着救不了其他人。听好，人类能救的，只有自己一方的事物。虽然是理所当然，但这就是正义的伙伴的定义。',
'此世原即如此，面对如斯常事何需悲叹？何须惊讶？',
'真正的恐惧，不是安静的状态，而是变化的动态，指的就是从希望变成绝望的那一瞬间。',
'伤害别人的人，就有要被伤害的觉悟。',
'就算是对我抱有敌意的人，也是被某个人深爱着而降生在这个世界上的。',
'我愿为你戴上罪之王冠，即使背负上所有的罪恶与孤独，绝不让你受伤。',
'最深的痛苦，莫过于回忆幸福的时光。',
'当我无计可施，驻足不前时；当我被黑暗覆盖，被绝望淹没时 谁是我的照明灯？',
'我们总是在注意错过太多，却不注意自己拥有多少。',
'时光再美，怎如初见。',
'花就算凋零了只剩下淡淡的香味，也会向着太阳散发出香气。',
'岁月的暖，漫过时间的河，抚过久闭的心扉，我在时光斑驳深处，聆听到花开的声音。',
'夏之忆，泣凋零，彼日花未名。',
'只能在回忆里看着你，希望记忆中的你不要离我远去。',
'所谓道别啊，单方面是不作数的。',
'隐约雷鸣 阴霾天空 但盼风雨来 能留你在此。',
'隐约雷鸣 阴霾天空 即使天无雨 我亦留此地。',
'但原来你一直都注视着别的世界。',
'永往直前的努力是好事，偶尔也得回眸走过的路。',
'真正强大的人不会在意周围的眼光，靠自己就能毅力不倒。',
'就算活着感受到痛苦，也要重视起生存下去的重量。',
'我失去归宿的现实才是我真正的归宿。',
'如果与你相遇是我的好运，那么其他的事情也一定不坏。',
'你重要的东西，也是我要去珍惜的。',
'如果你死了,我会用我的死来复活你。',
'真正让我难受的，大概是因为让你看到如此狼狈的自己。',
'对于我来说，只要能守护你，就已足矣。',
'我早就闭上了双眼，我的目的只在于黑暗之中。',
'要是喜欢一个人，就要连那个人脏的地方一起喜欢。',
'一定要保护自己的梦想，即使牺牲一切。 ',
'正因为我们看不见，那才可怕。',
'不幸的人总是在创造比自己更不幸的人。',
'梦总是有会醒来的时候，不会醒的梦总有一天会变成悲伤',
'对于世界末日的传说，我不会特别在意。只要喜欢的人在身边，就无所谓……',
'我一直都想证明：努力是能够超越天才的!',
'想哭的时候能哭出来，也是一种坚强。',
'不相信自己的人， 连努力的价值都没有。',
'憧憬是距离理解最遥远的感情。',
'请不要对我温柔……因为我无以回报……',
'其实...根本就没有什么天堂和地狱吧....',
'闭上眼睛想象世界，我能看到什么？',
'没有任何回忆是可以遗忘的。',
'有些事情，可以理解但无法接受！',
'为了所爱的人，就连星星的轨迹我也要改变！》',
'痛苦可以成为两人间的某种牵绊。',
'正因为不会发生，所以才叫奇迹。',
'当你想做一件事，却无能为力的时候，是最痛苦的。',
'无论谁的心中，都有自己的歌。',
'无论身边围着多少人，我永远都是那么孤独。',
'迷茫不仅会害了自己，甚至会害了自己想要守护的人。',
'此时此刻，我竟不知究竟是悲伤，还是快乐。',
'不管夜晚多么黑暗，黎明总是会到来。',
'世界上有些事，还是让它永远成为谜比较好。',
'什么都无所谓只想在你身边，什么都无所谓只想和你说话，什么都无所谓所以请你不要逃避。',
'我不会让任何人看到我软弱的一面。 ',
'人的怨恨是无止尽的。',
'梦想是否无聊并不是别人来决定的，不管是什么样的梦想，自己拼命努力去追寻才是最重要的！',
'我总觉得，他在我身边呢。',
'对别人抱有期待，只能让自己受伤。',
'堕落是不需要理由的。',
'在走廊里摔倒会流鼻血，在人生中摔倒会流眼泪。',
'没有你在的天界，就算我活着也没有任何意义。 ',
'每个人做任何事,都只是为了自己,虽然有人会说,我希望能为哪个人做些什么,但事实上,也只不过是希望看到别人幸福时,自己也有份幸福感罢了。',
'优姬，我想告诉你，美的不是这个世界，而是承载这个世界的美丽的你的眼神。',
'比起牺牲自己的圣人,我更愿意成为不明事理的勇者，而且救你也要救的彻底。',
'重要的，珍惜的，一直在身边，一旦成为理所当然，就难以发现。',
'不动声色，无以言表，扮演温柔。',
'与魔鬼战斗的人，应当小心自己不要成为魔鬼。当你远远凝视深渊时，深渊也在凝视你。——尼采', 
'别向医生和律师提供错误的消息。', 
'也许我是错而你是对，但只有我们一起努力，才能更接近真理。——卡尔·波普尔', 
'如果你怀疑自己，那么你的立足点确实不稳固了。', 
'尊严不值钱，却是我唯一真正拥有的！', 
'没有一个人的记性，好到可以作个成功的说谎者——林肯', 
'所谓科学的论辩，从总体上来说则是没有多大效果的，更不用说论辩几乎总是各持己见的这个事实。——弗洛伊德', 
'自由的保证是什么?是对自己不再感到羞耻。--尼采', 
'彼窃钩者诛，窃国者为诸侯。——庄子', 
'在这个世界上我只确定一件事。那就是人确定的事情越少越好。--毛姆', 
'人们还往往把真理和错误混在一起去教人，而坚持的却是错误。--歌德', 
'以眼还眼，世界只会更盲目。--甘地', 
'在所有的禁欲道德里，人把自己的一部分视为神，加以崇拜，因此被迫把其他部分加以恶魔化。——尼采', 
'法律必须被信仰，否则形同虚设。--伯尔曼', 
'你在活着的同时，也在学习着，无论如何，你活着。--道格拉斯·亚当斯', 
'你自己的代码如果超过6个月不看，再看的时候也一样像是别人写--伊格尔森定律', 
'工作撵跑三个魔鬼：无聊、堕落和贫穷。', 
'我向星星许了个愿。我并不是真的相信它，但是反正也是免费的，而且也没有证据证明它不灵。--加菲猫', 
'不管我们已经观察到多少只白天鹅，都不能确立“所有天鹅皆为白色”的理论。只要看见一只黑天鹅就可以驳倒它。——卡尔·波普尔', 
'计算机就跟比基尼一样，省去了人们许多的胡思乱想。--萨姆·尤因', 
'把理想运用到真实的事物上，便有了文明。', 
'我每天只吃四类食物：早饭、午饭、晚饭和零食。--加菲猫', 
'640K对每一个人来说都已足够--比尔盖茨', 
'坚信比谎言更是真理的敌人。——尼采', 
'世间最庄严的问题是：我能做什么好事？', 
'所谓爱国心，是指你既生为这个国家的国民，对于这个国家，当比对其他一切的国家信仰得高贵优越。--萧伯纳', 
'什么都比不上厄运更能磨练人的德性。——莎士比亚', 
'宗教上最深的误解——认为坏人没有宗教。——尼采', 
'你不问我，我就不会说谎话。', 
'百善孝为先，论心不论迹，论迹贫家无孝子；万恶淫为首，论迹不论心，论心世上少完人', 
'任何有可能出错的事将会出错--墨菲定理', 
'一个人知道自己为什么而活，就可以忍受任何一种生活。——尼采', 
'会玩的人才会学', 
'手段的不纯洁，必然导致目的的不纯洁。--甘地', 
'肚子大不可怕，可怕的是肚子里没有好东西。--加菲猫', 
'疑人先自疑，律人先律己', 
'我不像你一样是一个机器人，让磁盘把我淹没，除非它们是小甜饼，并且只在嘴里。', 
'我爱你，与你无关。--歌德', 
'冬天已经到来，春天还会远吗？--雪莱', 
'财富并非供人拥有，而是供人享受。', 
'喜爱孤独者，非神即兽。--亚里士多德', 
'没有人足够完美，以至可以未经别人同意就支配别人。--林肯', 
'每个人都受两种教育，一种来自别人，另一种更重要的是来自自己。--爱德华·吉本', 
'想了解一个人的个性，那就赋予他权力。--林肯', 
'就算它工作不正常也别担心。如果一切正常，你早该失业了--Mosher的软件工程定律', 
'发现可能性的界限的唯一办法就是越过这个界限，到不可能中去。--阿瑟·克拉克', 
'死会引人哭泣。虽则如此，人生的三分之一却在睡眠中打发掉了。--拜伦', 
'尊重人不应该胜于尊重真理。--柏拉图', 
'不要恐慌--《银河系漫游指南》', 
'成功的骗子，不必再说谎以求生，因为被骗的人，全成为他的拥护者，我再说什么也是枉然。--莎士比亚', 
'我并不同意你的观点，但是我誓死捍卫你说话的权利——伏尔泰', 
'真正的无知不是知识的缺乏，而是拒绝获取知识。——卡尔·波普尔', 
'千里之行始于足下，九层之台起于垒土。', 
'任何人均有其价值', 
'不要向邪恶低头，而是要更勇敢地继续与之对抗。——维吉尔', 
'对骄傲的人不要谦逊，对谦逊的人不要骄傲。--托玛斯·杰弗逊', 
'谁能最恰当地评价一个人，他的敌人还是他自己？', 
'我注意过，即便是那些声称一切都是命中注定的而且我们无力改变的人，在过马路之前都会左右看。--史提芬·霍金', 
'具有新想法的人在其想法实现之前是个怪人。', 
'花代价所换来的一点才智，抵过别人传授的数倍不止。', 
'计算机没什么用。他们只会告诉你答案。--毕加索', 
'善待他人，即是最善待自己。', 
'实现明天理想的唯一障碍是今天的疑虑。', 
'我讨厌星期一。--加菲猫', 
'我们所需要的，不是天才，不是玩世不恭者，不是愤世嫉俗者，不是机敏的策略家，而是真挚的，坦诚的人。要使我们能够找到重返纯朴与真诚的道路，我们的精神包容量足够地充分，我们自身的正直足够地问心无愧了吗？--朋霍费尔', 
'在认识一切事物之后，人才能认识自己，因为事物仅仅是人的界限。——尼采', 
'通往地狱的路，都是由善意铺成的——哈耶克', 
'当某人告诉你：“不是钱，而是原则问题”时，十有八九就是钱的问题——胡巴尔德', 
'为眼睛近视者指引道路是很费力的，因为你不能对他说：“看见十哩外的教堂吗?朝这个方向走。——维特根斯坦', 
'已经集中起来的权力不会由于创造它的那些人的良好愿望而变为无害。--弗里德曼', 
'自由的保证是什么?是对自己不再感到羞耻。——尼采', 
'恐惧比利剑更伤人--《冰与火之歌》', 
'如果我们过于爽快地承认失败，就可能使自己发觉不了我们非常接近于正确。——卡尔·波普尔', 
'渴求美德而非奖赏。', 
'要节约用水，尽量和女友一起洗澡--加菲猫', 
'首先他们无视于你，而后是嘲笑你，接着是批斗你，再来就是你的胜利之日。--甘地', 
'一个人能够洋洋得意地随著军乐队在四列纵队里行进，单凭这一点就足以使我对他轻视。他所以长了一个大脑，只是出于误会；单单一根脊髓就可满足他的全部需要了。文明国家的这种罪恶的渊薮，应当尽快加以消灭。由命令而产生的勇敢行为，毫无意义的暴行，以及在爱国主义名义下一切可恶的胡闹，所有这些都使我深恶痛绝。——爱因斯坦', 
'太阳绝不为它所做的善事后悔，也从不指望任何报酬。', 
);
dowritedicta(dictumin.length);