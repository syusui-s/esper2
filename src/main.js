import KeyboardMaps from './conf/keyboard_map.js';
import { StrokeTableInputMethod } from './model/input_method.js';
import { StrokeTable } from './model/stroke_table.js';
import { KeyEvent } from './model/key_event.js';

const keyboardMap = KeyboardMaps.findById('dvorak_jp106');

const strokeTable = StrokeTable.fromGoogleIMEFormat(`
-	ー
,	、
;-	〜
;[	『
;]	』
;d	←
;h	↓
;n	→
;t	↑
.	。
[	「
]	」
~	〜
a	あ
b,	ぼう
b;	ばん
b:	ばい
b.	べい
ba	ば
bb	っ	b
be	べ
bi	び
bj	べん
bk	ぶん
bn,	びょう
bn;	びゃん
bn:	びゃい
bn.	びぇい
bna	びゃ
bne	びぇ
bni	びぃ
bnj	びぇん
bnk	びゅん
bno	びょ
bnp	びゅう
bnq	びょん
bnu	びゅ
bnx	びぃん
bo	ぼ
bp	ぶう
bq	ぼん
bu	ぶ
bx	びん
bya	びゃ
bye	びぇ
byi	びぃ
byo	びょ
byu	びゅ
c,	こう
c;	かん
c:	かい
c.	けい
ca	か
cc	っ	c
ce	け
ch,	ちょう
ch;	ちゃん
ch:	ちゃい
ch.	ちぇい
cha	ちゃ
che	ちぇ
chi	ち
chj	ちぇん
chk	ちゅん
cho	ちょ
chp	ちゅう
chq	ちょん
chu	ちゅ
chx	ちぃん
ci	き
cj	けん
ck	くん
cn,	きょう
cn,	きょう
cn;	きゃん
cn:	きゃい
cn.	きぇい
cna	きゃ
cne	きぇ
cni	きぃ
cnj	きぇん
cnk	きゅん
cno	きょ
cnp	きゅう
cnq	きょん
cnu	きゅ
cnx	きぃん
co	こ
cp	くう
cq	こん
cu	く
cx	きん
cya	ちゃ
cye	ちぇ
cyi	ちぃ
cyo	ちょ
cyu	ちゅ
d,	どう
d;	だん
d:	だい
d.	でい
da	だ
dd	っ	d
de	で
dha	でゃ
dhe	でぇ
dhi	でぃ
dho	でょ
dhu	でゅ
dhx	でぃん
dra	でゃ
dre	でぇ
dri	でぃ
dro	でょ
dru	でゅ
drx	でぃん
di	ぢ
dj	でん
dk	づん
dn,	ぢょう
dn;	ぢゃん
dn:	ぢゃい
dn.	ぢぇい
dna	ぢゃ
dne	ぢぇ
dni	ぢぃ
dnj	ぢぇん
dnk	ぢゅん
dno	ぢょ
dnp	ぢゅう
dnq	ぢょん
dnu	ぢゅ
dnx	ぢぃん
do	ど
dp	づう
dq	どん
du	づ
dwa	どぁ
dwe	どぇ
dwi	どぃ
dwo	どぉ
dwu	どぅ
dx	ぢん
dya	ぢゃ
dye	ぢぇ
dyi	ぢぃ
dyo	ぢょ
dyu	ぢゅ
e	え
f,	ふぉう
f;	ふぁん
f:	ふぁい
f.	ふぇい
fa	ふぁ
fe	ふぇ
ff	っ	f
fi	ふぃ
fj	ふぇん
fk	ふん
fna	ふゃ
fne	ふぇ
fni	ふぃ
fno	ふょ
fnu	ふゅ
fo	ふぉ
fp	ふゅう
fq	ふぉん
fu	ふ
fx	ふぃん
fya	ふゃ
fye	ふぇ
fyi	ふぃ
fyo	ふょ
fyu	ふゅ
g,	ごう
g;	がん
g:	がい
g.	げい
ga	が
ge	げ
gg	っ	g
gi	ぎ
gj	げん
gk	ぐん
gn,	ぎょう
gn;	ぎゃん
gn:	ぎゃい
gn.	ぎぇい
gna	ぎゃ
gne	ぎぇ
gni	ぎぃ
gnj	ぎぇん
gnk	ぎゅん
gno	ぎょ
gnp	ぎゅう
gnq	ぎょん
gnu	ぎゅ
gnx	ぎぃん
go	ご
gp	ぐう
gq	ごん
gu	ぐ
gwa	ぐぁ
gwe	ぐぇ
gwi	ぐぃ
gwo	ぐぉ
gwu	ぐぅ
gx	ぎん
gya	ぎゃ
gye	ぎぇ
gyi	ぎぃ
gyo	ぎょ
gyu	ぎゅ
h,	ほう
h;	はん
h:	はい
h.	へい
ha	は
he	へ
hh	っ	h
hi	ひ
hj	へん
hk	ふん
hn,	ひょう
hn;	ひゃん
hn:	ひゃい
hn.	ひぇい
hna	ひゃ
hne	ひぇ
hni	ひぃ
hnj	ひぇん
hnk	ひゅん
hno	ひょ
hnp	ひゅう
hnq	ひょん
hnu	ひゅ
hnx	ひぃん
ho	ほ
hp	ふう
hq	ほん
hra	ふぁ
hre	ふぇ
hri	ふぃ
hro	ふぉ
hru	ふゅ
hr,	ふぉう
hr;	ふぁん
hr:	ふぁい
hr.	ふぇい
hrp	ふゅう
hrq	ふぉん
hrx	ふぃん
hu	ふ
hx	ひん
hya	ひゃ
hye	ひぇ
hyi	ひぃ
hyo	ひょ
hyu	ひゅ
i	い
j,	じょう
j;	じゃん
j:	じゃい
j.	じぇい
ja	じゃ
je	じぇ
ji	じ
jj	っ	j
jk	じゅん
jn	ん
jo	じょ
jp	じゅう
jq	じょん
ju	じゅ
jx	じん
k,	こう
k;	かん
k:	かい
k.	けい
ka	か
ke	け
kha	きゃ
khe	きぇ
khi	きぃ
kho	きょ
khu	きゅ
ki	き
kj	けん
kk	っ	k
ko	こ
kp	くう
kq	こん
ku	く
kwa	くぁ
kwe	くぇ
kwi	くぃ
kwo	くぉ
kx	きん
ky,	きょう
ky;	きゃん
ky:	きゃい
ky.	きぇい
kya	きゃ
kye	きぇ
kyi	きぃ
kyj	きぇん
kyk	きゅん
kyo	きょ
kyp	きゅう
kyq	きょん
kyu	きゅ
kyx	きぃん
la	ぁ
le	ぇ
lha	ゃ
lho	ょ
lhu	ゅ
li	ぃ
lka	ヵ
lke	ヶ
ll	っ
lo	ぉ
ltsu	っ
ltu	っ
lu	ぅ
lwa	ゎ
lya	ゃ
lye	ぇ
lyi	ぃ
lyo	ょ
lyu	ゅ
m,	もう
m;	まん
m:	まい
m.	めい
ma	ま
me	め
mi	み
mj	めん
mk	むん
mm	っ	m
mn,	みょう
mn;	みゃん
mn:	みゃい
mn.	みぇい
mna	みゃ
mne	みぇ
mni	みぃ
mnj	みぇん
mnk	みゅん
mno	みょ
mnp	みゅう
mnq	みょん
mnu	みゅ
mnx	みぃん
mo	も
mp	むう
mq	もん
mu	む
mx	みん
mya	みゃ
mye	みぇ
myi	みぃ
myo	みょ
myu	みゅ
n	ん
n,	のう
n;	なん
n:	ない
n.	ねい
na	な
ne	ね
nh,	にょう
nh;	にゃん
nh:	にゃい
nh.	にぇい
nha	にゃ
nhe	にぇ
nhi	にぃ
nhj	にぇん
nhk	にゅん
nho	にょ
nhp	にゅう
nhq	にょん
nhu	にゅ
nhx	にぃん
ni	に
nj	ねん
nk	ぬん
nn	ん
no	の
np	ぬう
nq	のん
nu	ぬ
nx	にん
nya	にゃ
nye	にぇ
nyi	にぃ
nyo	にょ
nyu	にゅ
o	お
p,	ぽう
p;	ぱん
p:	ぱい
p.	ぺい
pa	ぱ
pe	ぺ
ph,	ぴょう
ph;	ぴゃん
ph:	ぴゃい
ph.	ぴぇい
pha	ぴゃ
phe	ぴぇ
phi	ぴぃ
phj	ぴぇん
phk	ぴゅん
pho	ぴょ
php	ぴゅう
phq	ぴょん
phu	ぴゅ
phx	ぴぃん
pi	ぴ
pj	ぺん
pk	ぷん
pn,	ぴょう
pn:	ぴゃい
pn.	ぴぇい
pna	ぴゃ
pne	ぴぇ
pni	ぴぃ
pno	ぴょ
pnp	ぴゅう
pnu	ぴゅ
po	ぽ
pp	っ	p
pq	ぽん
pu	ぷ
px	ぴん
py,	ぴょう
pya	ぴゃ
pye	ぴぇ
pyi	ぴぃ
pyo	ぴょ
pyu	ぴゅ
qa	くぁ
qe	くぇ
qi	くぃ
qo	くぉ
qq	っ	q
qu	く
r,	ろう
r;	らん
r:	らい
r.	れい
ra	ら
re	れ
rh,	りょう
rh;	りゃん
rh:	りゃい
rh.	りぇい
rha	りゃ
rhe	りぇ
rhi	りぃ
rhj	りぇん
rhk	りゅん
rho	りょ
rhp	りゅう
rhq	りょん
rhu	りゅ
rhx	りぃん
ri	り
rj	れん
rk	るん
ro	ろ
rp	るう
rq	ろん
rr	っ	r
ru	る
rx	りん
rya	りゃ
rye	りぇ
ryi	りぃ
ryo	りょ
ryu	りゅ
s,	そう
s;	さん
s:	さい
s.	せい
sa	さ
se	せ
sh,	しょう
sh;	しゃん
sh:	しゃい
sh.	しぇい
sha	しゃ
she	しぇ
shi	しぃ
shj	しぇん
shk	しゅん
sho	しょ
shp	しゅう
shq	しょん
shu	しゅ
shx	しぃん
si	し
sj	せん
sk	すん
so	そ
sp	すう
sq	そん
ss	っ	s
su	す
sx	しん
sya	しゃ
sye	しぇ
syi	しぃ
syo	しょ
syu	しゅ
t,	とう
t;	たん
t:	たい
t.	てい
ta	た
tch	っ	ch
te	て
thi	てぃ
thx	てぃん
ti	ち
tj	てん
tk	つん
tn,	ちょう
tn;	ちゃん
tn:	ちゃい
tn.	ちぇい
tna	ちゃ
tne	ちぇ
tni	ちぃ
tnj	ちぇん
tnk	ちゅん
tno	ちょ
tnp	ちゅう
tnq	ちょん
tnu	ちゅ
tnx	ちぃん
to	と
tp	つう
tq	とん
tsa	つゃ
tse	つぇ
tsi	つぃ
tso	つょ
tsu	つ
tt	っ	t
tu	つ
twa	とぁ
twe	とぇ
twi	とぃ
two	とぉ
twu	とぅ
tx	ちん
tya	ちゃ
tye	ちぇ
tyi	ちぃ
tyo	ちょ
tyu	ちゅ
u	う
v;	ヴァン
va	ヴァ
ve	ヴェ
vi	ヴィ
vj	ヴェン
vk	ヴン
vo	ヴォ
vq	ヴォン
vu	ヴ
vv	っ	v
vx	ヴィン
w;	わん
w:	わい
w.	うぇい
wa	わ
we	うぇ
wha	うぁ
whe	うぇ
whi	うぃ
who	うぉ
whu	う
wi	うぃ
wj	うぇん
wo	を
wu	う
wx	うぃん
wye	ゑ
wyi	ゐ
xa	ぁ
xe	ぇ
xi	ぃ
xka	ヵ
xke	ヶ
xn	ん
xo	ぉ
xtsu	っ
xtu	っ
xu	ぅ
xwa	ゎ
xx	っ	x
xya	ゃ
xye	ぇ
xyi	ぃ
xyo	ょ
xyu	ゅ
y,	よう
y;	やん
y:	やい
y.	いぇい
ya	や
ye	いぇ
yi	い
yk	ゆん
yo	よ
yp	ゆう
yq	よん
yu	ゆ
yy	っ	y
z,	ぞう
z;	ざん
z:	ざい
z.	ぜい
z[	『
z]	』
za	ざ
ze	ぜ
zh,	じょう
zh;	じゃん
zh:	じゃい
zh.	じぇい
zha	じゃ
zhe	じぇ
zhi	じぃ
zhj	じぇん
zhk	じゅん
zho	じょ
zhp	じゅう
zhq	じょん
zhu	じゅ
zhx	じぃん
sn,	じょう
sn;	じゃん
sn:	じゃい
sn.	じぇい
sna	じゃ
sne	じぇ
sni	じぃ
snj	じぇん
snk	じゅん
sno	じょ
snp	じゅう
snq	じょん
snu	じゅ
snx	じぃん
zi	じ
zj	ぜん
zk	ずん
zl	→
zo	ぞ
zp	ずう
zq	ぞん
zu	ず
zx	じん
zz	っ	z
`);

console.log(strokeTable);

const inputMethod = new StrokeTableInputMethod(keyboardMap, strokeTable);

/**
 * @param {KeyboardEvent | KeyboardEvent & {fromRet: boolean}} ev
 */
const handler = ev => {
  if ('fromRet' in ev) {
    return;
  }

  if (ev.key === ' ') {
    return;
  }

  ev.stopPropagation();

  const keyEvent = KeyEvent.fromKeyboardEvent(ev)
  if (keyEvent != null) {
    inputMethod.consume(keyEvent);
    console.log(inputMethod.takeOutput());
  }
  console.log(inputMethod);

  /** @type {object} */
  const copied = Object.assign({}, ev);
  delete copied.isTrusted;

  copied.key = 'j';
  copied.code = 'keyJ';
  copied.data = 'j';

  copied.keyCode = 74;
  copied.which = 74;

  /** @type {KeyboardEvent} */
  const constructor = ev.constructor;
  const newEvent = new constructor(ev.type, copied);
  newEvent.fromRet = true;

  // TODO currentTargetとtargetの違い

  ev.target.dispatchEvent(newEvent);

};

//window.addEventListener('keypress', handler, true);
window.addEventListener('keydown', handler, true);
//window.addEventListener('keyup', handler, true);
