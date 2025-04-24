const _0x45b20c = _0x2dbf;
(function (_0x574c80, _0x24b408) {
    const _0x5471bf = _0x2dbf, _0x413f02 = _0x574c80();
    while (!![]) {
        try {
            const _0x43a483 = -parseInt(_0x5471bf(0xe4)) / 0x1 * (parseInt(_0x5471bf(0x10e)) / 0x2) + parseInt(_0x5471bf(0x2a2)) / 0x3 + parseInt(_0x5471bf(0x7e)) / 0x4 * (-parseInt(_0x5471bf(0xa1)) / 0x5) + parseInt(_0x5471bf(0x2be)) / 0x6 + -parseInt(_0x5471bf(0xec)) / 0x7 + parseInt(_0x5471bf(0x295)) / 0x8 * (parseInt(_0x5471bf(0x23a)) / 0x9) + parseInt(_0x5471bf(0x2a6)) / 0xa * (parseInt(_0x5471bf(0x1dc)) / 0xb);
            if (_0x43a483 === _0x24b408)
                break;
            else
                _0x413f02['push'](_0x413f02['shift']());
        } catch (_0x4f9db6) {
            _0x413f02['push'](_0x413f02['shift']());
        }
    }
}(_0x3670, 0x9296a));
let contestants = [], chosenContestants = [], scene, top2 = ![], top3 = ![], top4 = ![], top5 = ![], lsftc = ![], episodeNumber = 0x1, maxiAdvantageQueen = null, semiPairs = [
        [],
        []
    ], sverigeImmunity = ![], premiereType = _0x45b20c(0x2e9), immunityQueen = null, immunityEpisode = null, trackRecord = new Map(), episodeChallenges = [];
function initializeTrackRecord() {
    const _0x2ab5a8 = _0x45b20c;
    trackRecord[_0x2ab5a8(0x24b)](), episodeChallenges = [], chosenContestants[_0x2ab5a8(0x1fb)](_0x1575fd => {
        const _0x520413 = _0x2ab5a8;
        trackRecord[_0x520413(0x1a3)](_0x1575fd['name'], []);
    });
}
function updateTrackRecord(_0x2cb3b4, _0x26b36c) {
    const _0x2407e3 = _0x45b20c;
    !trackRecord[_0x2407e3(0xbf)](_0x2cb3b4[_0x2407e3(0x232)]) && trackRecord[_0x2407e3(0x1a3)](_0x2cb3b4['name'], []);
    let _0x49f8d3 = trackRecord[_0x2407e3(0xee)](_0x2cb3b4[_0x2407e3(0x232)]);
    _0x49f8d3[_0x2407e3(0x1c6)](_0x26b36c), trackRecord[_0x2407e3(0x1a3)](_0x2cb3b4['name'], _0x49f8d3);
}
function getPlacementColor(_0x2733b8) {
    const _0xe41dab = _0x45b20c;
    switch (_0x2733b8) {
    case 'WIN':
        return _0xe41dab(0x1c9);
    case _0xe41dab(0x23f):
        return _0xe41dab(0xae);
    case 'DOUBLEWIN':
        return _0xe41dab(0x107);
    case 'RUNNER\x20UP':
        return _0xe41dab(0x26d);
    case _0xe41dab(0x20e):
        return '#FFD100';
    case _0xe41dab(0xe7):
        return _0xe41dab(0xae);
    case _0xe41dab(0x131):
        return _0xe41dab(0x1ca);
    case _0xe41dab(0x2b6):
        return '#FFAE00';
    case _0xe41dab(0x1e8):
        return _0xe41dab(0x170);
    case _0xe41dab(0x1e3):
        return 'lightblue';
    case 'SAFE':
        return _0xe41dab(0x250);
    case _0xe41dab(0x254):
        return _0xe41dab(0x11a);
    case 'BTM2':
        return _0xe41dab(0x1f6);
    case _0xe41dab(0x2c6):
        return _0xe41dab(0x230);
    case _0xe41dab(0x108):
        return _0xe41dab(0x16a);
    default:
        return _0xe41dab(0x1c4);
    }
}
function displayTrackRecord() {
    const _0x1f190e = _0x45b20c;
    scene[_0x1f190e(0x13d)](), scene[_0x1f190e(0x267)]('Track\x20Record');
    const _0x1fd415 = document['createElement'](_0x1f190e(0x21c));
    _0x1fd415[_0x1f190e(0x13a)]['width'] = _0x1f190e(0x276), _0x1fd415[_0x1f190e(0x13a)][_0x1f190e(0x21b)] = _0x1f190e(0x135), _0x1fd415[_0x1f190e(0x13a)][_0x1f190e(0x229)] = _0x1f190e(0x25d), _0x1fd415[_0x1f190e(0x13a)]['backgroundColor'] = _0x1f190e(0xb8), _0x1fd415[_0x1f190e(0x13a)]['borderRadius'] = _0x1f190e(0x1fc);
    const _0x4ff9c7 = _0x1fd415[_0x1f190e(0x129)](), _0x18293d = _0x4ff9c7['insertCell']();
    _0x18293d[_0x1f190e(0x1cd)] = _0x1f190e(0x1f0), _0x18293d[_0x1f190e(0x13a)][_0x1f190e(0xa2)] = _0x1f190e(0x1fc), _0x18293d['style'][_0x1f190e(0x24a)] = _0x1f190e(0xdb), _0x18293d[_0x1f190e(0x13a)][_0x1f190e(0x143)] = _0x1f190e(0x17d);
    for (let _0x4ca682 = 0x1; _0x4ca682 <= episodeNumber; _0x4ca682++) {
        const _0x35188 = _0x4ff9c7['insertCell']();
        _0x35188[_0x1f190e(0x1cd)] = 'EP' + _0x4ca682, _0x35188[_0x1f190e(0x13a)][_0x1f190e(0xa2)] = _0x1f190e(0x1fc), _0x35188['style']['fontWeight'] = _0x1f190e(0xdb), _0x35188['style'][_0x1f190e(0x143)] = _0x1f190e(0x17d), _0x35188[_0x1f190e(0x13a)][_0x1f190e(0xfc)] = _0x1f190e(0x226);
    }
    const _0xf8508a = Array[_0x1f190e(0x220)](trackRecord[_0x1f190e(0x151)]())['sort']((_0x2872ba, _0x2aed7d) => {
        const _0x4bac84 = _0x1f190e, _0x3d32f3 = _0x2872ba[0x1]['indexOf']('ELIM'), _0x4121c0 = _0x2aed7d[0x1][_0x4bac84(0x209)](_0x4bac84(0x108));
        if (_0x3d32f3 === -0x1 !== (_0x4121c0 === -0x1))
            return _0x3d32f3 === -0x1 ? -0x1 : 0x1;
        if (_0x3d32f3 !== -0x1 && _0x4121c0 !== -0x1)
            return _0x4121c0 - _0x3d32f3;
        const _0x51e6f9 = _0x2872ba[0x1][_0x4bac84(0x2eb)] - 0x1, _0x3dd047 = _0x2aed7d[0x1][_0x4bac84(0x2eb)] - 0x1;
        if (_0x51e6f9 !== _0x3dd047)
            return _0x3dd047 - _0x51e6f9;
        const _0x10390f = {
                'WIN': 0x1,
                'WINNER': 0x1,
                'TOP2': 0x2,
                'RUNNER\x20UP': 0x2,
                'LOST\x20R3': 0x2,
                'HIGH': 0x3,
                'LOST\x20R2': 0x3,
                'LOST\x20R1': 0x3,
                'ELIMINATED': 0x3,
                'SAFE': 0x4,
                'LOW': 0x5,
                'BTM2': 0x6,
                'ELIM': 0x7
            }, _0x27550f = _0x2872ba[0x1][_0x51e6f9], _0x35a8df = _0x2aed7d[0x1][_0x3dd047];
        return (_0x10390f[_0x27550f] || 0x4) - (_0x10390f[_0x35a8df] || 0x4);
    });
    _0xf8508a['forEach'](([_0x47e18e, _0x1297c4]) => {
        const _0xce10b8 = _0x1f190e, _0x34526b = _0x1fd415['insertRow'](), _0x37206c = _0x34526b['insertCell']();
        _0x37206c['textContent'] = _0x47e18e, _0x37206c['style'][_0xce10b8(0xa2)] = _0xce10b8(0x1fc), _0x37206c['style'][_0xce10b8(0x143)] = _0xce10b8(0x15b), _0x1297c4[_0xce10b8(0x1fb)]((_0x109cb0, _0x5d1b20) => {
            const _0x4b6363 = _0xce10b8, _0x5df9e2 = _0x34526b[_0x4b6363(0xda)](), _0x253fb1 = _0x5d1b20 + 0x1;
            _0x5df9e2[_0x4b6363(0x1cd)] = _0x109cb0;
            const _0x5c0bae = Array['from'](trackRecord[_0x4b6363(0x10f)]())['filter'](_0x343345 => _0x343345[_0x5d1b20] === 'WIN')[_0x4b6363(0x2eb)], _0x1a66a4 = Array[_0x4b6363(0x220)](trackRecord[_0x4b6363(0x10f)]())[_0x4b6363(0xe6)](_0x3dac1d => _0x3dac1d[_0x5d1b20] === 'BTM2')[_0x4b6363(0x2eb)], _0x244490 = Array[_0x4b6363(0x220)](trackRecord[_0x4b6363(0x10f)]())[_0x4b6363(0xd4)](_0x558c7d => _0x558c7d[_0x5d1b20] === _0x4b6363(0x108));
            if (_0x109cb0 === 'WIN' && _0x5c0bae > 0x1)
                _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0x19d)] = getPlacementColor(_0x4b6363(0x140));
            else
                _0x109cb0 === 'BTM2' && _0x1a66a4 > 0x1 && !_0x244490 ? _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0x19d)] = getPlacementColor(_0x4b6363(0x2c6)) : _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0x19d)] = getPlacementColor(_0x109cb0);
            _0x253fb1 === 0x1 && immunityQueen && _0x47e18e === immunityQueen[_0x4b6363(0x232)] && (_0x5df9e2[_0x4b6363(0x13a)]['border'] = _0x4b6363(0x279)), _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0xa2)] = '10px', _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0xfc)] = _0x4b6363(0x226), _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0xff)] = [
                _0x4b6363(0x17c),
                _0x4b6363(0x140),
                _0x4b6363(0x131)
            ][_0x4b6363(0x12b)](_0x109cb0) ? _0x4b6363(0x162) : _0x4b6363(0x217), _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0x143)] = _0x4b6363(0x15b), _0x5df9e2[_0x4b6363(0x13a)][_0x4b6363(0x24a)] = [
                _0x4b6363(0x17c),
                _0x4b6363(0x140),
                _0x4b6363(0x108),
                _0x4b6363(0x23f),
                'RUNNER\x20UP',
                _0x4b6363(0x131)
            ][_0x4b6363(0x12b)](_0x109cb0) ? _0x4b6363(0xdb) : _0x4b6363(0xfd);
        });
    }), scene[_0x1f190e(0x251)][_0x1f190e(0x116)](_0x1fd415);
}
const possibleMaxis = [
    _0x45b20c(0xed),
    'RUNWAY',
    _0x45b20c(0x14f),
    'BALL',
    _0x45b20c(0x1d3),
    _0x45b20c(0x221),
    _0x45b20c(0x258),
    _0x45b20c(0x98),
    'BRANDING',
    'GIRL\x20GROUPS'
];
function updateFinaleFormatBools() {
    const _0x1e4a04 = _0x45b20c, _0x217cfc = document[_0x1e4a04(0xd5)]('finale-format')?.[_0x1e4a04(0x22b)];
    top2 = _0x217cfc === _0x1e4a04(0x1ce), top3 = _0x217cfc === _0x1e4a04(0x139), top4 = _0x217cfc === _0x1e4a04(0x216), top5 = _0x217cfc === _0x1e4a04(0x297), lsftc = _0x217cfc === _0x1e4a04(0x1e0);
}
function _0x3670() {
    const _0x289202 = [
        'fairy\x20tales',
        'Jaida\x20Essence\x20Hall',
        '\x20has\x20won\x20a\x20special\x20advantage\x20for\x20the\x20maxi\x20challenge!',
        'popoverListenerAdded',
        'inline-block',
        'Luxx\x20Noir\x20London',
        'had\x20a\x20bad\x20performance.',
        'error',
        'A\x20Ball!\x20The\x20categories\x20are:\x20',
        'Monét\x20X\x20Change',
        'backgroundColor',
        'createBigText',
        'Eureka\x20O\x27Hara',
        'data-queen-index',
        'clean',
        'had\x20a\x20bad\x20runway.',
        'set',
        'Aiden\x20Zhane',
        'Orion\x20Story',
        'Nina\x20Flowers',
        'random',
        'Victoria\x20\x27Porkchop\x27\x20Parker',
        '\x22></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'Trixie\x20Mattel',
        'Tammie\x20Brown',
        'An\x20acting\x20challenge\x20where\x20the\x20queens\x20must\x20perform\x20in\x20a\x20parody\x20skit\x20based\x20on\x20a\x20popular\x20TV\x20show.',
        'Vivacious',
        'left',
        'Jasmine\x20Kennedie',
        'flopped',
        'Jax',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        'className',
        'Lipsyncing\x20to\x20\x22',
        'Adore\x20Delano',
        'beforeend',
        'Angeria\x20Paris\x20VanMicheals',
        '<b>',
        '.cog-menu-btn',
        'Mystique\x20Summers',
        '\x22\x20alt=\x22',
        'Alexis\x20Michelle',
        'createDocumentFragment',
        'Valentina',
        '105px',
        '150px',
        'Kandy\x20Muse',
        'Kandy\x20Ho',
        'Honey\x20Davenport',
        '#FFFFFF',
        'Continue...',
        'push',
        'Lucky\x20Starzzz',
        'A\x20girl\x20groups\x20challenge!\x20The\x20queens\x20must\x20write\x20lyrics\x20and\x20perform\x20an\x20original\x20song\x20as\x20',
        'royalblue',
        'sienna',
        'animate',
        'pink',
        'textContent',
        'top2',
        'slayed\x20the\x20runway!',
        'Hershii\x20LiqCour-Jeté',
        'Ariel\x20Versace',
        'justifyContent',
        'RUSICAL',
        'Denali',
        'Amethyst',
        'Kylie\x20Sonique\x20Love',
        'Judging\x20Panel',
        'Tyra\x20Sanchez',
        'Monica\x20Beverly\x20Hillz',
        'Alyssa\x20Hunter',
        '0\x200\x2020px\x20gold',
        '517cLJbcJ',
        'Sapphira\x20Cristal',
        'Nicole\x20Paige\x20Brooks',
        'Phi\x20Phi\x20O\x27Hara',
        'lsftc',
        '_runnerUpQueen',
        '💋\x20Lip\x20Sync\x20For\x20The\x20Crown',
        'HIGH',
        'Princess\x20Poppy',
        'Shannel',
        'Morphine\x20Love\x20Dion',
        'json',
        'LOST\x20R1',
        ',\x20you\x20are\x20the\x20WINNER\x20of\x20the\x20season!\x20👑',
        'slayed',
        'April\x20Carrión',
        'Maxi\x20Challenge\x20Results',
        'type',
        'Two\x20queens\x20stand\x20before\x20me.\x20Prior\x20to\x20tonight,\x20you\x20were\x20asked\x20to\x20prepare\x20a\x20lip\x20sync\x20performance\x20to\x20\x22',
        'lipsync',
        'Queen',
        'The\x20queens\x20will\x20compete\x20in\x20a\x20mini\x20challenge',
        '</span>\x0a\x20\x20\x20\x20',
        '.queen-select:checked',
        'Jinkx\x20Monsoon',
        'Superhero',
        'tomato',
        'Hormona\x20Lisa',
        'Robbie\x20Turner',
        'had\x20a\x20good\x20runway.',
        'for',
        'forEach',
        '10px',
        'June\x20Jambalaya',
        'Kim\x20Chi',
        'position',
        'borderRadius',
        'MainTitle',
        'Joey\x20Jay',
        'Trinity\x20The\x20Tuck',
        'outcome',
        'Venus\x20D-Lite',
        'Jade\x20Jolie',
        'modal-queen-image',
        'Kahanna\x20Montrese',
        'indexOf',
        'info',
        'Blair\x20St.\x20Clair',
        'It\x27s\x20time\x20for\x20Snatch\x20Game!\x20The\x20queens\x20must\x20impersonate\x20celebrities\x20in\x20a\x20hilarious\x20game\x20show.',
        'isArray',
        'LOST\x20R3',
        'Xunami\x20Muse',
        'Tamisha\x20Iman',
        'The\x20Final\x20Decision...',
        'Ra\x27Jah\x20O\x27Hara',
        'score',
        'src',
        'Kameron\x20Michaels',
        'top4',
        '#000',
        'alt',
        'Proceed',
        'chosenQueens',
        'borderCollapse',
        'table',
        'LaLa\x20Ri',
        'Robin\x20Fierce',
        '.modal-body',
        'from',
        'SNATCH\x20GAME',
        'Thorgy\x20Thor',
        '8px',
        'MainBlock\x20not\x20found\x20in\x20the\x20document.',
        'Raja',
        'center',
        'Invalid\x20data\x20format',
        'deg)',
        'marginTop',
        'Naysha\x20Lopez',
        'value',
        ';\x20width:\x20105px;\x20height:\x20105px;',
        'Vanessa\x20Vanjie',
        'Current\x20Cast',
        'Loosey\x20LaDuca',
        'hotpink',
        'floor',
        'name',
        '</b>,\x20I\x27m\x20sorry\x20my\x20dears\x20but\x20you\x27re\x20up\x20for\x20elimination.',
        ',\x20you\x27re\x20safe.',
        'Rosé',
        'Arrietty',
        'You\x20can\x20only\x20select\x20a\x20maximum\x20of\x2018\x20queens.',
        'Kalorie\x20Karbdashian\x20Williams',
        'Luscious\x20Lady',
        '86706XNmjSL',
        './data/songs.txt',
        'show-runway-btn',
        'onclick',
        'onfinish',
        'WINNER',
        'Olivia\x20Lux',
        'Ladies,\x20I\x27ve\x20made\x20my\x20decision...',
        'Elliott\x20with\x202\x20Ts',
        'flopped\x20the\x20runway.',
        'classList',
        'BALL',
        '</b>,\x20you\x20are\x20the\x20winner\x20of\x20this\x20week\x27s\x20challenge!',
        'Miss\x20Fame',
        '#FF1493',
        'Mimi\x20Imfurst',
        'fontWeight',
        'clear',
        'cover',
        '\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span>',
        'Show\x20result',
        'Good\x20luck...\x20and\x20DON\x27T\x20fuck\x20it\x20up!',
        'white',
        '_MainBlock',
        'queen-select',
        'showResults()',
        'LOW',
        ',\x20thank\x20you\x20for\x20an\x20incredible\x20season.\x20Now\x20sashay\x20away\x20💔',
        'had\x20a\x20great\x20performance!',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'IMPROV',
        'stats',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Season\x20Info</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Original\x20Season:\x20',
        'createImage',
        'contestant-card',
        '20px',
        'Show\x20Result',
        'transform',
        'search',
        'Alexis\x20Mateo',
        'Manila\x20Luzon',
        'Marcia\x20Marcia\x20Marcia',
        '1001',
        'offsetHeight',
        'border',
        'createHeader',
        'Executive\x20Realness',
        'Sidekick',
        'alignItems',
        'Raven',
        '\x20has\x20won\x20the\x20mini\x20challenge\x20and\x20earned\x20immunity\x20for\x20this\x20episode!',
        'silver',
        'block',
        'We\x20Have\x20a\x20Winner!',
        'Jewels\x20Sparkles',
        'Alisa\x20Summers',
        ',\x20sashay\x20away...',
        'Sahara\x20Davenport',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cog-menu-btn\x22\x20title=\x22Options\x22><i\x20class=\x22fas\x20fa-ellipsis-v\x22></i></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cog-popover\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22view-info\x22><i\x20class=\x22fas\x20fa-info-circle\x22></i>\x20View\x20Info</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22remove-queen\x22><i\x20class=\x22fas\x20fa-trash\x22></i>\x20Remove</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Malaysia\x20Babydoll\x20Foxx',
        '100%',
        'Lady\x20Camden',
        'find',
        '3px\x20solid\x20fuchsia',
        'Lip\x20Sync\x20For\x20Your\x20Life',
        'createBold',
        'splice',
        'split',
        'Megami',
        'fixed',
        'Error:\x20Cannot\x20proceed\x20with\x20lip\x20sync.',
        'BRANDING',
        'Phoenix',
        'setAttribute',
        'Bianca\x20Del\x20Rio',
        'Plasma',
        'Coco\x20Montrese',
        '_winnerQueen',
        'Brooke\x20Lynn\x20Hytes',
        'Tina\x20Burner',
        'Acid\x20Betty',
        'Derrick\x20Barry',
        'Lip\x20Sync\x20For\x20The\x20Win',
        'Mirage',
        'Pandora\x20Boxx',
        '</b>\x20-\x20',
        'Darienne\x20Lake',
        'RUNNER\x20UP',
        'Ivy\x20Winters',
        'Kori\x20King',
        'rotate(',
        '32PpPcks',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Runway:\x20',
        'top5',
        'Daya\x20Betty',
        'startEpisode()',
        'Milk',
        'For\x20the\x20final\x20lip\x20sync...',
        'Kelly\x20Mantle',
        'Symone',
        'A\x27keria\x20C.\x20Davenport',
        'Chad\x20Michaels',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Stats</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Acting:\x20',
        '.close-modal',
        '1549320vBuKGH',
        'Laganja\x20Estranja',
        'Mini\x20Challenge',
        'RUNWAY',
        '76030uuFDUH',
        'input',
        'bad',
        '\x20from\x20your\x20cast?',
        'createParagraph',
        'comedy',
        'Sasha\x20Velour',
        'Jorgeous',
        'Dida\x20Ritz',
        'matches',
        'Ongina',
        'Asia\x20O\x27Hara',
        'Vivienne\x20Pinay',
        'Resort\x20Wear',
        'Gottmik',
        'toLowerCase',
        'LOST\x20R2',
        'Shuga\x20Cain',
        '32px',
        'contains',
        'width',
        'Kerri\x20Colby',
        'Jackie\x20Cox',
        'queen-select-',
        '5193564SVBleM',
        'Charlie\x20Hides',
        'queen',
        'seasons',
        '60px',
        'The\x20winner\x20of\x20this\x20season\x20is...',
        'Maddy\x20Morphosis',
        'The\x20time\x20has\x20come...\x20for\x20you\x20to\x20lip\x20sync...\x20FOR.\x20YOUR.\x20LIFE!',
        'DOUBLEWIN-BTM',
        'corner-popup\x20',
        'Anetra',
        ',\x20you\x27re\x20a\x20WINNER\x20baby!',
        'Stacy\x20Layne\x20Matthews',
        'premiereLipsyncResult()',
        'scrollIntoView',
        'judgingPanel()',
        'Morgan\x20McMichaels',
        'insertBefore',
        '.remove-queen',
        'search-results',
        'eliminationResult()',
        'HTTP\x20error!\x20status:\x20',
        'flex',
        '_maxiPerformances',
        'Nina\x20West',
        'Cynthia\x20Lee\x20Fontaine',
        'Nina\x20Bo\x27nina\x20Brown',
        'translate3d(',
        'glitter\x202s\x20linear\x20infinite',
        'Two\x20queens\x20stand\x20before\x20me...',
        '</b>,\x20you\x20will\x20all\x20receive\x20critiques.',
        'Joella',
        'Maxi\x20Challenge',
        'Kahmora\x20Hall',
        'goToTop',
        'Yuhua\x20Hamasaki',
        'SAFE',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Dance:\x20',
        'Naomi\x20Smalls',
        'Widow\x20Von\x27Du',
        'queens',
        'min',
        'No\x20queens\x20selected!',
        'regular',
        'Penny\x20Tration',
        'length',
        'Shangela',
        'Gia\x20Gunn',
        'display',
        'Jan',
        'The\x20time\x20has\x20come...',
        'runway',
        'boxShadow',
        '.cog-popover',
        '</b>,\x20you\x20represent\x20the\x20tops\x20and\x20bottoms\x20of\x20the\x20week.',
        'Suzie\x20Toot',
        '32jSkKQn',
        'Removed\x20',
        'Plastique\x20Tiara',
        'Evening\x20Gown',
        'The\x20time\x20has\x20come...\x20for\x20you\x20to\x20lip\x20sync...\x20FOR\x20THE\x20WIN!',
        'Plane\x20Jane',
        'dance',
        'Jessica\x20Wild',
        '.search-results',
        'A\x20standup\x20comedy\x20challenge.\x20The\x20queens\x20must\x20write\x20and\x20perform\x20their\x20own\x20comedy\x20routines.',
        ',\x20you\x20put\x20up\x20a\x20good\x20fight.\x20Now,\x20sashay\x20to\x20safety.',
        'A\x20surprise\x20challenge\x20awaits!',
        'Mercedes\x20Iman\x20Diamond',
        'They\x27re\x20about\x20to\x20lip\x20sync\x20for\x20their\x20<b>lives</b>...\x20and\x20a\x20spot\x20in\x20the\x20final\x20two!',
        'Heidi\x20N\x20Closet',
        'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20',
        'change',
        '.deselect-all-btn',
        'Farrah\x20Moan',
        'design',
        'Swimsuit',
        'top',
        'highs',
        'Detox',
        'Bosco',
        'Aja',
        'STANDUP',
        'A\x20Rusical\x20based\x20on\x20',
        '100px',
        'Willam',
        'Rebecca\x20Glasscock',
        'all\x200.5s\x20ease',
        'DOMContentLoaded',
        'pop\x20icons',
        'Delta\x20Work',
        '233390LrmVxL',
        'padding',
        'Shea\x20Couleé',
        'warn',
        '.contestant-modal',
        '5px\x20solid\x20gold',
        'Rock\x20M.\x20Sakura',
        'start-simulation',
        'Evening\x20Wear',
        '.delete-selected-btn',
        'Monique\x20Heart',
        'div#MainBlock',
        '</b>',
        'yellow',
        'Track\x20Record:\x20',
        'trim',
        'click',
        'Trinity\x20K.\x20Bonet',
        'createElement',
        'Choose\x20Assassin',
        '</b>,\x20congratulations!\x20You\x20are\x20the\x20top\x202\x20of\x20the\x20week.\x20You\x20will\x20lip\x20sync...\x20FOR\x20THE\x20WIN!',
        'Salina\x20EsTitties',
        'Utica\x20Queen',
        'rgba(255,\x20255,\x20255,\x200.1)',
        'had\x20a\x20good\x20performance.',
        'You\x27re\x20both\x20winners\x20baby!\x20You\x27ve\x20each\x20earned\x20a\x20cash\x20tip\x20of\x20$5000!',
        'createButton',
        'Runway\x20Presentation',
        'Tempest\x20DuJour',
        'Geneva\x20Karr',
        'has',
        'black',
        'Unknown',
        'For\x20the\x20final\x20challenge...',
        'getName',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Comedy:\x20',
        'toggle',
        '#FF69B4',
        'Jasmine\x20Masters',
        'border-color:\x20',
        '\x20vs\x20',
        '.no-queens-message',
        'reality\x20TV\x20scandals',
        'addEventListener',
        'Nymphia\x20Wind',
        'gold',
        'querySelectorAll',
        'Vanessa\x20Vanjie\x20Mateo',
        'Crystal\x20Methyd',
        'Amanda\x20Tori\x20Meating',
        'querySelector',
        'some',
        'getElementById',
        '.view-info',
        'body',
        'big',
        'Roxxxy\x20Andrews',
        'insertCell',
        'bold',
        'GIRL\x20GROUPS',
        'The\x20Vixen',
        'Tatianna',
        '1000',
        '\x20and\x20',
        'Shantay\x20you\x20BOTH\x20stay!',
        'Jaymes\x20Mansfield',
        'acting',
        '1AeuIRs',
        'img',
        'filter',
        'TOP2',
        'Jade\x20Sotomayor',
        'The\x20time\x20has\x20come...\x20for\x20you\x20to\x20lip\x20sync...\x20FOR\x20THE\x20CROWN!',
        'Kennedy\x20Davenport',
        'Dawn',
        '1811376CesXUc',
        'ACTING',
        'get',
        'Jiggly\x20Caliente',
        'Scarlet\x20Envy',
        'none',
        'Sugar',
        'Bob\x20The\x20Drag\x20Queen',
        'paper',
        'onerror',
        'LOST\x20R',
        'Milan',
        'animation',
        'join',
        'height',
        'image',
        'textAlign',
        'normal',
        'Gigi\x20Goode',
        'color',
        'BeBe\x20Zahara\x20Benet',
        'forwards',
        ')\x20to\x20start\x20the\x20simulation.',
        'Kenya\x20Olivera',
        '\x22\x20width=\x2250\x22\x20height=\x2250\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>',
        'fa-info-circle',
        'button',
        'darkblue',
        'ELIM',
        'gap',
        'Final\x20Performance',
        'select',
        'Bad\x20Girls',
        'drag\x20herstory',
        '1090586STBIvq',
        'values',
        'Based\x20on\x20all\x20of\x20your\x20performances\x20throughout\x20this\x20competition...',
        'inputRightKey',
        'Lashauwn\x20Beyond',
        'Dance\x20Queens',
        '_maxiChallengeType',
        'zIndex',
        'appendChild',
        'Error\x20loading\x20songs:',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>',
        'Irene\x20The\x20Alien',
        'lightpink',
        'Peppermint',
        'mainChallenge()',
        'cyan',
        'pointerEvents',
        'getAttribute',
        'twist-sverige',
        'firstChild',
        'checked',
        'Serena\x20ChaCha',
        'show',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Original\x20Placement:\x20',
        'good',
        'had\x20a\x20great\x20runway!',
        'Sam\x20Star',
        'insertRow',
        'Sharon\x20Needles',
        'includes',
        './data/queens.json',
        'focus',
        'Mrs.\x20Kasha\x20Davis',
        'holiday\x20decorations',
        'Dahlia\x20Sin',
        'ELIMINATED',
        'The\x20Vivienne',
        'Silky\x20Nutmeg\x20Ganache',
        'This\x20is\x20it,\x20the\x20ultimate\x20lip\x20sync\x20for\x20the\x20crown!',
        'collapse',
        'Kornbread\x20Jeté',
        'Laila\x20McQueen',
        'Courtney\x20Act',
        'top3',
        'style',
        'text',
        'checkbox',
        'createHorizontalLine',
        ',\x20shantay\x20you\x20stay!',
        'regularSlayers',
        'DOUBLEWIN',
        'ArrowRight',
        'BTM2',
        'borderBottom',
        'Mistress\x20Isabelle\x20Brooks',
        'predefined-cast',
        'Jimbo',
        'slayed\x20the\x20challenge!',
        'corner-popup',
        'candy\x20wrappers',
        'Lana\x20Ja\x27Rae',
        'You\x20must\x20select\x20atleast\x20the\x20same\x20number\x20of\x20queens\x20than\x20the\x20finale\x20needs\x20(',
        'add',
        '\x20to\x20win\x20a\x20special\x20advantage\x20in\x20the\x20main\x20challenge.',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.src=\x27placeholder.webp\x27\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20110px;\x20height:\x20110px;\x20object-fit:\x20cover;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
        'DESIGN',
        'Angeria\x20Paris\x20VanMichaels',
        'entries',
        'Katya',
        'finale-format',
        'MainBlock',
        'trash\x20bags',
        'Mariah\x20Paris\x20Balenciaga',
        'innerHTML',
        '5px\x20solid\x20white',
        'Villain',
        '3px\x20solid\x20',
        '1px\x20solid\x20rgba(255,\x20255,\x20255,\x200.1)',
        'Yvie\x20Oddly',
        'placements',
        'You\x20will\x20lip\x20sync\x20against\x20your\x20partner\x20to\x20the\x20song\x20of\x20your\x20choice.',
        'Girl\x20Power',
        'translate3d(0,0,0)\x20rotate(',
        'Pearl',
        '#FFF',
        'great',
        '\x20WIN',
        'Miz\x20Cracker',
        '\x20queen',
        'Yara\x20Sofia',
        'slice',
        'scrollY',
        'red',
        'btms',
        'Honey\x20Mahogany',
        'sort',
        'lsftcF()',
        'remove',
        '##FF7C00',
        'target',
        ',\x20you\x20are\x20safe.',
        'https://placehold.co/50x50.png',
        'Jaremi\x20Carey',
        'objectFit',
        'DeJa\x20Skye',
        'div',
        'A\x20runway\x20challenge\x20with\x20the\x20theme:\x20\x27Futuristic\x20Eleganza\x27.',
        'margin',
        'map',
        'status',
        'WIN',
        '2px\x20solid\x20rgba(255,\x20255,\x20255,\x200.2)',
        'smooth',
        'Chi\x20Chi\x20DeVayne',
        'improv',
        'Mayhem\x20Miller',
        '.queen-select',
        'Onya\x20Nurve',
        'Jujubee',
        'absolute',
        'findIndex',
        'active',
        ',\x20you\x20are\x20our\x20fierce\x20runner-up.\x20Sashay\x20away\x20with\x20pride\x20💖',
        '.select-actions',
        'Ginger\x20Minj',
        'Queens\x20of\x20Rock',
        'wins',
        'search-result-item',
        '15px',
        'opacity',
        'But\x20only\x20one\x20can\x20be\x20crowned\x20the\x20winner.',
        'Error\x20loading\x20contestants.\x20Please\x20try\x20again.',
        'Latrice\x20Royale'
    ];
    _0x3670 = function () {
        return _0x289202;
    };
    return _0x3670();
}
function updateTwistBools() {
    const _0x32f069 = _0x45b20c;
    sverigeImmunity = !!document[_0x32f069(0xd5)](_0x32f069(0x120))?.['checked'], premiereType = document[_0x32f069(0xd5)]('premiere-format')?.[_0x32f069(0x22b)] || _0x32f069(0x2e9);
}
function setupTwistListeners() {
    const _0x4ffb30 = _0x45b20c, _0x116494 = document[_0x4ffb30(0xd5)]('twist-sverige');
    if (_0x116494)
        _0x116494[_0x4ffb30(0xcc)](_0x4ffb30(0x8e), updateTwistBools);
    updateTwistBools();
}
document[_0x45b20c(0xcc)](_0x45b20c(0x9e), async function () {
    const _0x39664b = _0x45b20c;
    document[_0x39664b(0xd5)](_0x39664b(0x201))['textContent'] = 'Marcia\x27s\x20Drag\x20Race\x20Simulator';
    try {
        const _0x2337ed = await fetch(_0x39664b(0x12c));
        if (!_0x2337ed['ok'])
            throw new Error(_0x39664b(0x2d3) + _0x2337ed['status']);
        const _0x40f7c7 = await _0x2337ed[_0x39664b(0x1e7)]();
        if (!_0x40f7c7?.['queens'] || !Array[_0x39664b(0x20d)](_0x40f7c7['queens']))
            throw new Error(_0x39664b(0x227));
        contestants = _0x40f7c7[_0x39664b(0x2e6)], setupSearch(), displayChosenContestants(), scene = new Scene(document[_0x39664b(0xd5)]('MainBlock'));
    } catch (_0x393398) {
        document[_0x39664b(0xd3)]('.RightBlock\x20p')[_0x39664b(0x1cd)] = _0x39664b(0x191);
    }
    document[_0x39664b(0xd5)](_0x39664b(0x153))[_0x39664b(0xcc)](_0x39664b(0x8e), updateFinaleFormatBools), updateFinaleFormatBools(), setupTwistListeners();
    if (!document[_0x39664b(0xd3)](_0x39664b(0xa5))) {
        const _0x329cf1 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22contestant-modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22close-modal\x22>×</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22\x22\x20alt=\x22Queen\x27s\x20Photo\x22\x20id=\x22modal-queen-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20id=\x22modal-queen-name\x22></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Content\x20will\x20be\x20dynamically\x20populated\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
        document[_0x39664b(0xd7)]['insertAdjacentHTML'](_0x39664b(0x1b6), _0x329cf1);
    }
    const _0x216337 = document[_0x39664b(0xd3)]('.contestant-modal'), _0x5c1946 = _0x216337[_0x39664b(0xd3)](_0x39664b(0x2a1));
    _0x5c1946[_0x39664b(0xcc)](_0x39664b(0xb1), () => {
        const _0x237d3d = _0x39664b;
        _0x216337[_0x237d3d(0x244)][_0x237d3d(0x16f)](_0x237d3d(0x124));
    }), _0x216337[_0x39664b(0xcc)](_0x39664b(0xb1), _0x10d7c1 => {
        const _0x35e37c = _0x39664b;
        _0x10d7c1['target'] === _0x216337 && _0x216337[_0x35e37c(0x244)][_0x35e37c(0x16f)](_0x35e37c(0x124));
    });
    const _0x4253b6 = document['getElementById'](_0x39664b(0x145));
    _0x4253b6 && _0x4253b6[_0x39664b(0xcc)](_0x39664b(0x8e), _0xe3829d => {
        const _0x28bbfc = _0x39664b, _0x33b605 = _0xe3829d['target'][_0x28bbfc(0x22b)];
        _0x33b605 && loadPredefinedCast(_0x33b605);
    });
});
function setupSearch() {
    const _0x37938b = _0x45b20c, _0x4ae9a3 = document[_0x37938b(0xd5)](_0x37938b(0x260));
    let _0xeadfc6 = document[_0x37938b(0xd3)](_0x37938b(0x86));
    !_0xeadfc6 && (_0xeadfc6 = document[_0x37938b(0xb3)](_0x37938b(0x177)), _0xeadfc6[_0x37938b(0x1b3)] = _0x37938b(0x2d1), _0x4ae9a3['parentNode'][_0x37938b(0x116)](_0xeadfc6)), _0x4ae9a3[_0x37938b(0xcc)](_0x37938b(0x2a7), _0x123253 => {
        const _0x622d58 = _0x37938b, _0x4d989f = _0x123253[_0x622d58(0x171)][_0x622d58(0x22b)][_0x622d58(0x2b5)]();
        if (!_0x4d989f) {
            _0xeadfc6[_0x622d58(0x13a)][_0x622d58(0x76)] = _0x622d58(0xf1);
            return;
        }
        const _0x38d21d = contestants[_0x622d58(0xe6)](_0x356c38 => _0x356c38[_0x622d58(0x232)][_0x622d58(0x2b5)]()['includes'](_0x4d989f));
        displaySearchResults(_0x38d21d, _0xeadfc6, _0x4ae9a3);
    }), document[_0x37938b(0xcc)]('click', _0x4a1ba4 => {
        const _0x24d7db = _0x37938b;
        !_0x4ae9a3[_0x24d7db(0x2b9)](_0x4a1ba4[_0x24d7db(0x171)]) && !_0xeadfc6[_0x24d7db(0x2b9)](_0x4a1ba4[_0x24d7db(0x171)]) && (_0xeadfc6['style'][_0x24d7db(0x76)] = _0x24d7db(0xf1));
    });
}
function displaySearchResults(_0x17db5b, _0x299f1d, _0x17d105) {
    const _0x50f6a9 = _0x45b20c;
    _0x299f1d['innerHTML'] = '';
    if (_0x17db5b[_0x50f6a9(0x2eb)] === 0x0) {
        _0x299f1d[_0x50f6a9(0x13a)]['display'] = _0x50f6a9(0xf1);
        return;
    }
    _0x299f1d[_0x50f6a9(0x13a)][_0x50f6a9(0x76)] = 'block';
    const _0x5bb1cd = document[_0x50f6a9(0x1bd)]();
    _0x17db5b[_0x50f6a9(0x1fb)](_0x55036c => {
        const _0x17bc99 = _0x50f6a9, _0x687491 = document[_0x17bc99(0xb3)](_0x17bc99(0x177));
        _0x687491[_0x17bc99(0x1b3)] = _0x17bc99(0x18d), _0x687491[_0x17bc99(0x157)] = _0x17bc99(0x257) + _0x55036c['image'] + _0x17bc99(0x1bb) + _0x55036c[_0x17bc99(0x232)] + _0x17bc99(0x104) + _0x55036c['name'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x687491[_0x17bc99(0xcc)](_0x17bc99(0xb1), () => {
            const _0x42a120 = _0x17bc99;
            chosenContestants[_0x42a120(0x2eb)] < 0x12 && !chosenContestants[_0x42a120(0xd4)](_0x176af9 => _0x176af9[_0x42a120(0x232)] === _0x55036c[_0x42a120(0x232)]) ? (chosenContestants[_0x42a120(0x1c6)](_0x55036c), displayChosenContestants(), _0x17d105['value'] = '', _0x299f1d[_0x42a120(0x13a)][_0x42a120(0x76)] = _0x42a120(0xf1)) : showCornerPopup(_0x42a120(0x237));
        }), _0x5bb1cd[_0x17bc99(0x116)](_0x687491);
    }), _0x299f1d[_0x50f6a9(0x116)](_0x5bb1cd);
}
function addRandomContestant() {
    const _0x42e0fc = _0x45b20c;
    if (!chosenContestants[_0x42e0fc(0x2eb)] >= 0x12) {
        showCornerPopup(_0x42e0fc(0x237));
        return;
    }
    const _0x33663c = contestants[_0x42e0fc(0xe6)](_0x5c7127 => !chosenContestants['some'](_0x58771b => _0x58771b[_0x42e0fc(0x232)] === _0x5c7127[_0x42e0fc(0x232)]));
    if (_0x33663c['length'] === 0x0)
        return;
    const _0x62304a = _0x33663c[Math[_0x42e0fc(0x231)](Math['random']() * _0x33663c['length'])];
    chosenContestants[_0x42e0fc(0x1c6)](_0x62304a), displayChosenContestants();
}
function displayChosenContestants() {
    const _0xdfb422 = _0x45b20c, _0x351183 = document[_0xdfb422(0xd5)](_0xdfb422(0x21a)), _0x1e31d3 = document[_0xdfb422(0xd3)](_0xdfb422(0xca)), _0x4fca35 = document[_0xdfb422(0xd3)](_0xdfb422(0x189));
    _0x351183[_0xdfb422(0x157)] = '';
    if (chosenContestants[_0xdfb422(0x2eb)] === 0x0) {
        if (_0x1e31d3)
            _0x1e31d3[_0xdfb422(0x13a)][_0xdfb422(0x76)] = _0xdfb422(0x26e);
        if (_0x4fca35)
            _0x4fca35[_0xdfb422(0x244)][_0xdfb422(0x16f)](_0xdfb422(0x124));
        return;
    } else {
        if (_0x1e31d3)
            _0x1e31d3[_0xdfb422(0x13a)][_0xdfb422(0x76)] = _0xdfb422(0xf1);
        if (_0x4fca35)
            _0x4fca35['classList'][_0xdfb422(0x14c)](_0xdfb422(0x124));
    }
    const _0x235e29 = document['createDocumentFragment']();
    chosenContestants[_0xdfb422(0x1fb)]((_0x482414, _0x807ba2) => {
        const _0x229f0e = _0xdfb422, _0x21413a = document[_0x229f0e(0xb3)]('div');
        _0x21413a['style'][_0x229f0e(0x1ff)] = 'relative', _0x21413a[_0x229f0e(0x13a)][_0x229f0e(0x76)] = _0x229f0e(0x197);
        const _0x9d8441 = document['createElement'](_0x229f0e(0x177));
        _0x9d8441[_0x229f0e(0x1b3)] = _0x229f0e(0x25c);
        const _0xdc24b9 = document[_0x229f0e(0xb3)](_0x229f0e(0x2a7));
        _0xdc24b9[_0x229f0e(0x1ed)] = _0x229f0e(0x13c), _0xdc24b9[_0x229f0e(0x1b3)] = _0x229f0e(0x252), _0xdc24b9['setAttribute'](_0x229f0e(0x1a0), _0x807ba2), _0xdc24b9['id'] = 'queen-select-' + _0x807ba2;
        const _0x572ea0 = document['createElement']('label');
        _0x572ea0['setAttribute'](_0x229f0e(0x1fa), _0x229f0e(0x2bd) + _0x807ba2), _0x9d8441[_0x229f0e(0x157)] = _0x229f0e(0x257) + _0x482414[_0x229f0e(0xfb)] + _0x229f0e(0x1bb) + _0x482414[_0x229f0e(0x232)] + _0x229f0e(0x14e) + _0x482414[_0x229f0e(0x232)] + _0x229f0e(0x274), _0x9d8441[_0x229f0e(0x2cf)](_0x572ea0, _0x9d8441[_0x229f0e(0x121)]), _0x9d8441['insertBefore'](_0xdc24b9, _0x9d8441['firstChild']);
        const _0x207957 = _0x9d8441[_0x229f0e(0xd3)]('.cog-menu-btn'), _0xf6039f = _0x9d8441[_0x229f0e(0xd3)](_0x229f0e(0x7b));
        _0x207957['addEventListener'](_0x229f0e(0xb1), _0x4ef9c1 => {
            const _0x37af52 = _0x229f0e;
            _0x4ef9c1['stopPropagation'](), document[_0x37af52(0xcf)](_0x37af52(0x7b))['forEach'](_0x1d27ef => {
                const _0x667b8b = _0x37af52;
                if (_0x1d27ef !== _0xf6039f)
                    _0x1d27ef[_0x667b8b(0x244)][_0x667b8b(0x16f)](_0x667b8b(0x124));
            }), _0xf6039f[_0x37af52(0x244)][_0x37af52(0xc5)](_0x37af52(0x124));
        }), _0x9d8441[_0x229f0e(0xd3)]('.view-info')[_0x229f0e(0xcc)](_0x229f0e(0xb1), () => {
            const _0x2b1dd5 = _0x229f0e;
            showContestantInfo(_0x482414), _0xf6039f[_0x2b1dd5(0x244)][_0x2b1dd5(0x16f)](_0x2b1dd5(0x124));
        }), _0x9d8441[_0x229f0e(0xd3)]('.remove-queen')['addEventListener']('click', () => {
            const _0x2ee079 = _0x229f0e;
            chosenContestants[_0x2ee079(0x27c)](_0x807ba2, 0x1), displayChosenContestants();
        }), _0x21413a[_0x229f0e(0x116)](_0x9d8441), _0x235e29[_0x229f0e(0x116)](_0x21413a);
    }), _0x351183['appendChild'](_0x235e29);
    const _0x533ccb = document[_0xdfb422(0xd3)]('.select-all-btn'), _0x946d67 = document['querySelector'](_0xdfb422(0x8f)), _0x2452f6 = document['querySelector'](_0xdfb422(0xaa));
    _0x533ccb && _0x533ccb[_0xdfb422(0xcc)](_0xdfb422(0xb1), () => {
        const _0x4816b7 = _0xdfb422;
        document['querySelectorAll'](_0x4816b7(0x182))['forEach'](_0x14e509 => {
            const _0x3cc066 = _0x4816b7;
            _0x14e509[_0x3cc066(0x122)] = !![];
        });
    }), _0x946d67 && _0x946d67[_0xdfb422(0xcc)](_0xdfb422(0xb1), () => {
        const _0x397fde = _0xdfb422;
        document['querySelectorAll'](_0x397fde(0x182))['forEach'](_0x248d21 => {
            const _0x17851e = _0x397fde;
            _0x248d21[_0x17851e(0x122)] = ![];
        });
    }), _0x2452f6 && _0x2452f6[_0xdfb422(0xcc)]('click', () => {
        const _0x503763 = _0xdfb422, _0x11ce6a = Array[_0x503763(0x220)](document[_0x503763(0xcf)](_0x503763(0x1f3)))[_0x503763(0x17a)](_0x178339 => parseInt(_0x178339[_0x503763(0x11f)]('data-queen-index')))[_0x503763(0x16d)]((_0x26c423, _0x476568) => _0x476568 - _0x26c423);
        if (_0x11ce6a[_0x503763(0x2eb)] === 0x0) {
            showCornerPopup(_0x503763(0x2e8), 'info');
            return;
        }
        confirm(_0x503763(0x8d) + _0x11ce6a['length'] + _0x503763(0x166) + (_0x11ce6a[_0x503763(0x2eb)] > 0x1 ? 's' : '') + _0x503763(0x2a9)) && (showCornerPopup(_0x503763(0x7f) + _0x11ce6a['length'] + _0x503763(0x166) + (_0x11ce6a[_0x503763(0x2eb)] > 0x1 ? 's' : '') + '\x20from\x20your\x20cast.', _0x503763(0x20a)), _0x11ce6a[_0x503763(0x1fb)](_0x52c718 => {
            const _0x5625c0 = _0x503763;
            chosenContestants[_0x5625c0(0x27c)](_0x52c718, 0x1);
        }), displayChosenContestants());
    }), !displayChosenContestants[_0xdfb422(0x196)] && (document[_0xdfb422(0xcc)]('click', function (_0x4137ad) {
        const _0x3f6628 = _0xdfb422;
        document[_0x3f6628(0xcf)](_0x3f6628(0x7b))[_0x3f6628(0x1fb)](_0xdc42da => {
            const _0x58aebe = _0x3f6628;
            if (!_0xdc42da['parentNode'][_0x58aebe(0x2b9)](_0x4137ad['target']))
                _0xdc42da['classList'][_0x58aebe(0x16f)](_0x58aebe(0x124));
        });
    }), displayChosenContestants[_0xdfb422(0x196)] = !![]);
}
function handleImageError(_0x2863c0) {
    const _0x1ec01f = _0x45b20c;
    _0x2863c0[_0x1ec01f(0xf5)] = null, _0x2863c0[_0x1ec01f(0x214)] = _0x1ec01f(0x173);
}
function getOrdinalSuffix(_0x85c1cd) {
    const _0x1323d0 = [
            'th',
            'st',
            'nd',
            'rd'
        ], _0x164e09 = _0x85c1cd % 0x64;
    return _0x1323d0[(_0x164e09 - 0x14) % 0xa] || _0x1323d0[_0x164e09] || _0x1323d0[0x0];
}
function getOrdinalSuffixWithNumber(_0x2d8759) {
    const _0x31332f = [
            'th',
            'st',
            'nd',
            'rd'
        ], _0xac6f4c = _0x2d8759 % 0x64;
    return _0x2d8759 + (_0x31332f[(_0xac6f4c - 0x14) % 0xa] || _0x31332f[_0xac6f4c] || _0x31332f[0x0]);
}
function showSimulationError(_0x58dc6f) {
    const _0x307f02 = _0x45b20c;
    showCornerPopup(_0x58dc6f, _0x307f02(0x19a));
}
function showCornerPopup(_0x427384, _0x4733da = _0x45b20c(0x20a)) {
    const _0x536c94 = _0x45b20c;
    let _0x4b637b = document[_0x536c94(0xd5)](_0x536c94(0x148));
    !_0x4b637b && (_0x4b637b = document[_0x536c94(0xb3)](_0x536c94(0x177)), _0x4b637b['id'] = 'corner-popup', document['body'][_0x536c94(0x116)](_0x4b637b)), _0x4b637b[_0x536c94(0x13a)][_0x536c94(0xf8)] = _0x536c94(0xf1), _0x4b637b[_0x536c94(0x265)], _0x4b637b[_0x536c94(0x1b3)] = _0x536c94(0x2c7) + _0x4733da, _0x4b637b[_0x536c94(0x157)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20' + (_0x4733da === _0x536c94(0x19a) ? 'fa-exclamation-circle' : _0x536c94(0x105)) + _0x536c94(0x24d) + _0x427384 + _0x536c94(0x1f2), _0x4b637b[_0x536c94(0x13a)]['animation'] = 'slideIn\x200.5s\x20forwards,\x20slideOut\x200.5s\x20forwards\x202.5s';
}
function randomInt(_0x3bc364, _0x3916fb) {
    const _0x127463 = _0x45b20c;
    return Math[_0x127463(0x231)](Math[_0x127463(0x1a7)]() * (_0x3916fb - _0x3bc364 + 0x1)) + _0x3bc364;
}
class Scene {
    constructor(_0x501cac = undefined) {
        const _0x46142d = _0x45b20c;
        _0x501cac == undefined ? this['_MainBlock'] = document[_0x46142d(0xd5)](_0x46142d(0x154)) : this[_0x46142d(0x251)] = _0x501cac;
    }
    [_0x45b20c(0x1a1)]() {
        const _0x3a67bf = _0x45b20c;
        this[_0x3a67bf(0x251)][_0x3a67bf(0x157)] = '';
        let _0x4ceb83 = document[_0x3a67bf(0xd3)]('.toTop');
        _0x4ceb83 && window[_0x3a67bf(0xcc)]('scroll', _0x2cba52 => {
            const _0x1152a9 = _0x3a67bf;
            window[_0x1152a9(0x169)] > 0x64 ? _0x4ceb83['classList'][_0x1152a9(0x14c)](_0x1152a9(0x187)) : _0x4ceb83[_0x1152a9(0x244)][_0x1152a9(0x16f)](_0x1152a9(0x187));
        });
    }
    [_0x45b20c(0x267)](_0x44164f) {
        const _0xd0ddad = _0x45b20c;
        let _0x1c87cd = document['getElementById'](_0xd0ddad(0x201));
        _0x1c87cd[_0xd0ddad(0x157)] = _0x44164f;
    }
    ['createBigText'](_0x5cb4f8) {
        const _0x3ff816 = _0x45b20c;
        let _0x1b3b85 = document[_0x3ff816(0xb3)](_0x3ff816(0xd8)), _0x47035c = document[_0x3ff816(0xb3)]('p');
        _0x1b3b85['innerHTML'] = _0x5cb4f8, _0x47035c[_0x3ff816(0x116)](_0x1b3b85), this['_MainBlock']['appendChild'](_0x47035c);
    }
    [_0x45b20c(0x2aa)](_0x11dda2, _0xa535e6 = '') {
        const _0x575cf9 = _0x45b20c;
        let _0x15d714 = document['createElement']('p');
        _0x15d714[_0x575cf9(0x157)] = _0x11dda2, _0x15d714[_0x575cf9(0x283)]('id', _0xa535e6), this[_0x575cf9(0x251)][_0x575cf9(0x116)](_0x15d714);
    }
    [_0x45b20c(0x27b)](_0x3bc85c, _0x3480d8 = '', _0x1f8766 = '') {
        const _0x139e99 = _0x45b20c;
        let _0x1cc608 = document[_0x139e99(0xb3)]('p'), _0x5bcc5b = document['createElement']('b');
        _0x5bcc5b[_0x139e99(0x157)] = _0x3bc85c, _0x5bcc5b['setAttribute']('id', _0x3480d8), _0x1cc608[_0x139e99(0x283)]('id', _0x1f8766), _0x1cc608[_0x139e99(0x116)](_0x5bcc5b), this[_0x139e99(0x251)][_0x139e99(0x116)](_0x1cc608);
    }
    [_0x45b20c(0xbb)](_0x31b9cb, _0x3e7f3c, _0x598615 = '') {
        const _0x44a9cc = _0x45b20c;
        let _0x3ee3bc = document[_0x44a9cc(0xb3)](_0x44a9cc(0x106));
        _0x3ee3bc['innerHTML'] = _0x31b9cb, _0x3ee3bc[_0x44a9cc(0x283)](_0x44a9cc(0x23d), _0x3e7f3c), _0x3ee3bc[_0x44a9cc(0x283)]('id', _0x598615), this[_0x44a9cc(0x251)][_0x44a9cc(0x116)](_0x3ee3bc);
        if (_0x31b9cb == _0x44a9cc(0x219) || _0x31b9cb == _0x44a9cc(0x24e) || _0x31b9cb == _0x44a9cc(0xb4)) {
            let _0x472f32 = document[_0x44a9cc(0xd5)](_0x44a9cc(0x111));
            _0x472f32 && (_0x472f32[_0x44a9cc(0x12d)](), _0x472f32['addEventListener']('keydown', _0x3143fa => {
                const _0x5e9bba = _0x44a9cc;
                let _0x18a8df = _0x3143fa['key'];
                _0x18a8df === _0x5e9bba(0x141) && document[_0x5e9bba(0xd3)]('button[onclick=\x27' + _0x3e7f3c + '\x27]') == _0x3ee3bc && (_0x3143fa[_0x5e9bba(0x171)][_0x5e9bba(0x16f)](), _0x3ee3bc[_0x5e9bba(0xb1)](), this['goToTop']());
            }, { 'once': !![] }), document[_0x44a9cc(0xcc)]('click', _0x157943 => {
                const _0x5a11af = _0x44a9cc;
                _0x157943[_0x5a11af(0x171)][_0x5a11af(0x2af)](_0x5a11af(0xac)) == ![] && _0x157943[_0x5a11af(0x171)][_0x5a11af(0x2af)](_0x5a11af(0x10b)) == ![] && _0x472f32[_0x5a11af(0x12d)]();
            }));
        }
    }
    [_0x45b20c(0x13d)]() {
        const _0x4c70dd = _0x45b20c;
        let _0x5b4b12 = document[_0x4c70dd(0xb3)]('hr');
        this['_MainBlock']['appendChild'](_0x5b4b12);
    }
    [_0x45b20c(0x25b)](_0x5bef4e, _0x3d52c3 = _0x45b20c(0xc0)) {
        const _0x428d64 = _0x45b20c;
        let _0x55d149 = document['createElement'](_0x428d64(0xe5));
        _0x55d149[_0x428d64(0x214)] = _0x5bef4e, _0x55d149[_0x428d64(0x283)](_0x428d64(0x13a), _0x428d64(0xc8) + _0x3d52c3 + _0x428d64(0x22c)), this[_0x428d64(0x251)][_0x428d64(0x116)](_0x55d149);
    }
    [_0x45b20c(0x2e0)]() {
        const _0x45357f = _0x45b20c;
        this[_0x45357f(0x251)][_0x45357f(0x2cc)]({ 'behavior': _0x45357f(0x17e) });
    }
}
document[_0x45b20c(0xd5)](_0x45b20c(0xa8))[_0x45b20c(0xcc)](_0x45b20c(0xb1), function () {
    const _0x52ce02 = _0x45b20c;
    updateFinaleFormatBools(), updateTwistBools();
    const _0x3af6e0 = document[_0x52ce02(0xd5)]('finale-format')?.[_0x52ce02(0x22b)];
    let _0x286c22 = 0x2;
    if (_0x3af6e0 === 'top3')
        _0x286c22 = 0x3;
    if (_0x3af6e0 === _0x52ce02(0x216))
        _0x286c22 = 0x4;
    if (_0x3af6e0 === _0x52ce02(0x297))
        _0x286c22 = 0x5;
    if (_0x3af6e0 === _0x52ce02(0x1e0))
        _0x286c22 = 0x4;
    if (chosenContestants['length'] < _0x286c22) {
        showCornerPopup(_0x52ce02(0x14b) + _0x286c22 + _0x52ce02(0x102), 'error');
        return;
    }
    showSimulationCast();
});
function showSimulationCast() {
    const _0x42fcc1 = _0x45b20c, _0x30d9d9 = document[_0x42fcc1(0xd5)](_0x42fcc1(0x154));
    if (!_0x30d9d9) {
        showCornerPopup(_0x42fcc1(0x224), _0x42fcc1(0x19a));
        return;
    }
    scene = new Scene(_0x30d9d9), scene['clean'](), scene['createHeader'](_0x42fcc1(0x22e)), chosenContestants[_0x42fcc1(0x1fb)](_0x33399b => {
        const _0x22fa2e = _0x42fcc1;
        scene['createImage'](_0x33399b[_0x22fa2e(0xfb)], _0x22fa2e(0xc0)), scene[_0x22fa2e(0x2aa)](_0x33399b[_0x22fa2e(0x232)]);
    }), initializeTrackRecord(), scene['createButton'](_0x42fcc1(0x219), _0x42fcc1(0x299)), contestants = chosenContestants[_0x42fcc1(0x168)]();
}
function startEpisode() {
    const _0x3e46f3 = _0x45b20c, _0x3b6359 = chosenContestants[_0x3e46f3(0x2eb)];
    if (top2 && _0x3b6359 == 0x2 || top3 && _0x3b6359 == 0x3 || top4 && _0x3b6359 == 0x4 || top5 && _0x3b6359 == 0x5 || lsftc && _0x3b6359 == 0x4)
        finale();
    else {
        episodeNumber > 0x1 && (immunityQueen = null);
        if (episodeNumber === 0x1)
            switch (premiereType) {
            case 'regularShantay':
                miniChallenge();
                break;
            case 'regularSlayers':
                miniChallenge();
                break;
            default:
                miniChallenge();
            }
        else
            miniChallenge();
    }
}
function miniChallenge() {
    const _0xb75f92 = _0x45b20c;
    scene[_0xb75f92(0x1a1)](), scene[_0xb75f92(0x267)](_0xb75f92(0x2a4));
    const _0x2438fa = episodeNumber === 0x1 && sverigeImmunity, _0x8035a9 = !_0x2438fa && randomInt(0x0, 0x1) === 0x1;
    scene[_0xb75f92(0x2aa)](_0xb75f92(0x1f1) + (_0x8035a9 ? _0xb75f92(0x14d) : '.'));
    const _0x2d5d65 = randomInt(0x0, chosenContestants[_0xb75f92(0x2eb)] - 0x1), _0x43e633 = chosenContestants[_0x2d5d65];
    scene[_0xb75f92(0x25b)](_0x43e633['image'], 'royalblue'), _0x2438fa ? (immunityQueen = _0x43e633, scene[_0xb75f92(0x2aa)](_0x43e633[_0xb75f92(0x232)] + _0xb75f92(0x26c))) : (immunityQueen = null, _0x8035a9 ? (maxiAdvantageQueen = _0x43e633, scene[_0xb75f92(0x2aa)](_0x43e633[_0xb75f92(0x232)] + _0xb75f92(0x195))) : (maxiAdvantageQueen = null, scene['createParagraph'](_0x43e633[_0xb75f92(0x232)] + '\x20won\x20the\x20mini-challenge!'))), scene[_0xb75f92(0xbb)](_0xb75f92(0x219), _0xb75f92(0x11c));
}
function _0x2dbf(_0x3e8b33, _0x17f5a1) {
    const _0x367078 = _0x3670();
    return _0x2dbf = function (_0x2dbfbb, _0x20bade) {
        _0x2dbfbb = _0x2dbfbb - 0x76;
        let _0x4ce7c6 = _0x367078[_0x2dbfbb];
        return _0x4ce7c6;
    }, _0x2dbf(_0x3e8b33, _0x17f5a1);
}
function getMaxiChallengeDescription(_0x41ad54) {
    const _0x3c25b8 = _0x45b20c;
    switch (_0x41ad54) {
    case _0x3c25b8(0xed):
        return _0x3c25b8(0x1ac);
    case _0x3c25b8(0x2a5):
        return _0x3c25b8(0x178);
    case 'DESIGN':
        const _0x26a0a1 = [
            _0x3c25b8(0x155),
            _0x3c25b8(0xf4),
            'flowers',
            _0x3c25b8(0x149),
            'denim',
            _0x3c25b8(0x12f)
        ];
        return 'A\x20design\x20challenge\x20using\x20' + _0x26a0a1[randomInt(0x0, _0x26a0a1['length'] - 0x1)] + '.';
    case _0x3c25b8(0x245):
        const _0x1f698d = [
                [
                    _0x3c25b8(0x268),
                    _0x3c25b8(0xa9),
                    _0x3c25b8(0x239)
                ],
                [
                    _0x3c25b8(0x1f5),
                    _0x3c25b8(0x159),
                    _0x3c25b8(0x269)
                ],
                [
                    _0x3c25b8(0x2b3),
                    _0x3c25b8(0x92),
                    _0x3c25b8(0x81)
                ]
            ], _0xf8af0f = _0x1f698d[randomInt(0x0, _0x1f698d[_0x3c25b8(0x2eb)] - 0x1)];
        return _0x3c25b8(0x19b) + _0xf8af0f[_0x3c25b8(0xf9)](',\x20') + '.';
    case 'RUSICAL':
        const _0x460fcb = [
            'Broadway\x20divas',
            _0x3c25b8(0x9f),
            _0x3c25b8(0x10d),
            _0x3c25b8(0xcb),
            _0x3c25b8(0x193)
        ];
        return _0x3c25b8(0x99) + _0x460fcb[randomInt(0x0, _0x460fcb[_0x3c25b8(0x2eb)] - 0x1)] + '.';
    case 'SNATCH\x20GAME':
        return _0x3c25b8(0x20c);
    case 'IMPROV':
        return 'An\x20improv\x20challenge\x20where\x20the\x20queens\x20must\x20act\x20out\x20unscripted\x20scenes\x20with\x20wild\x20prompts.';
    case _0x3c25b8(0x98):
        return _0x3c25b8(0x87);
    case _0x3c25b8(0x281):
        return 'A\x20branding\x20challenge\x20where\x20the\x20queens\x20must\x20create\x20and\x20market\x20their\x20own\x20product.';
    case _0x3c25b8(0xdc):
        const _0xb899e0 = [
            'Pop\x20Divas',
            _0x3c25b8(0x15f),
            _0x3c25b8(0x10c),
            _0x3c25b8(0x18b),
            _0x3c25b8(0x113)
        ];
        return _0x3c25b8(0x1c8) + _0xb899e0[randomInt(0x0, _0xb899e0[_0x3c25b8(0x2eb)] - 0x1)] + '.';
    default:
        return _0x3c25b8(0x89);
    }
}
function mainChallenge() {
    const _0xfbcf5e = _0x45b20c;
    scene[_0xfbcf5e(0x1a1)](), scene[_0xfbcf5e(0x267)](_0xfbcf5e(0x2de));
    const _0x54fa83 = possibleMaxis[randomInt(0x0, possibleMaxis[_0xfbcf5e(0x2eb)] - 0x1)];
    currentChallengeType = _0x54fa83;
    const _0x80e011 = getMaxiChallengeDescription(_0x54fa83);
    scene[_0xfbcf5e(0x2aa)](_0xfbcf5e(0x1b8) + _0x54fa83 + _0xfbcf5e(0x28f) + _0x80e011);
    let _0x54fd35 = chosenContestants[_0xfbcf5e(0xe6)](_0xab66ae => {
        const _0x4a4f41 = _0xfbcf5e, _0x2863a7 = trackRecord[_0x4a4f41(0xee)](_0xab66ae[_0x4a4f41(0x232)]) || [];
        return !_0x2863a7[_0x4a4f41(0x12b)](_0x4a4f41(0x108));
    })[_0xfbcf5e(0x17a)](_0x5b6ba3 => {
        const _0x30e65b = _0xfbcf5e;
        let _0x27d234 = 0x5;
        if (_0x5b6ba3['stats'])
            switch (_0x54fa83) {
            case _0x30e65b(0xed):
                _0x27d234 = _0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0xe3)];
                break;
            case _0x30e65b(0x2a5):
                _0x27d234 = _0x5b6ba3[_0x30e65b(0x259)]['runway'];
                break;
            case _0x30e65b(0x14f):
                _0x27d234 = _0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0x91)];
                break;
            case _0x30e65b(0x245):
                _0x27d234 = (_0x5b6ba3[_0x30e65b(0x259)]['runway'] + _0x5b6ba3['stats'][_0x30e65b(0x91)]) / 0x2;
                break;
            case 'RUSICAL':
                _0x27d234 = (_0x5b6ba3['stats']['acting'] + _0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0x84)]) / 0x2;
                break;
            case _0x30e65b(0x221):
                _0x27d234 = _0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0x180)];
                break;
            case _0x30e65b(0x258):
                _0x27d234 = _0x5b6ba3['stats']['improv'];
                break;
            case _0x30e65b(0x98):
                _0x27d234 = _0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0x2ab)];
                break;
            case _0x30e65b(0x281):
                _0x27d234 = _0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0x2ab)];
                break;
            case _0x30e65b(0xdc):
                _0x27d234 = (_0x5b6ba3[_0x30e65b(0x259)][_0x30e65b(0x84)] + _0x5b6ba3[_0x30e65b(0x259)]['comedy']) / 0x2;
                break;
            default:
                _0x27d234 = 0x5;
            }
        const _0xed77e9 = _0x27d234 + randomInt(-0x2, 0x2);
        let _0x6599d8;
        if (_0xed77e9 >= 0xa)
            _0x6599d8 = _0x30e65b(0x147);
        else {
            if (_0xed77e9 >= 0x8)
                _0x6599d8 = _0x30e65b(0x256);
            else {
                if (_0xed77e9 >= 0x6)
                    _0x6599d8 = _0x30e65b(0xb9);
                else {
                    if (_0xed77e9 >= 0x4)
                        _0x6599d8 = _0x30e65b(0x199);
                    else
                        _0x6599d8 = 'flopped\x20the\x20challenge.';
                }
            }
        }
        return {
            'queen': _0x5b6ba3,
            'score': _0xed77e9,
            'outcome': _0x6599d8,
            'message': _0x5b6ba3[_0x30e65b(0x232)] + '\x20' + _0x6599d8
        };
    });
    _0x54fd35['sort']((_0x31d61d, _0x4bf245) => _0x4bf245[_0xfbcf5e(0x213)] - _0x31d61d[_0xfbcf5e(0x213)]);
    const _0x48a66c = [
        _0xfbcf5e(0x147),
        _0xfbcf5e(0x256),
        _0xfbcf5e(0xb9),
        _0xfbcf5e(0x199),
        'flopped\x20the\x20challenge.'
    ];
    for (const _0x22eaa9 of _0x48a66c) {
        const _0x24f6d1 = _0x54fd35[_0xfbcf5e(0xe6)](_0x39d717 => _0x39d717[_0xfbcf5e(0x204)] === _0x22eaa9);
        if (_0x24f6d1[_0xfbcf5e(0x2eb)] === 0x0)
            continue;
        const _0x7bfeb5 = _0x24f6d1[_0xfbcf5e(0x17a)](_0x1669d3 => _0x1669d3[_0xfbcf5e(0x2c0)][_0xfbcf5e(0x232)]);
        let _0x1819a3 = _0x7bfeb5[_0xfbcf5e(0xf9)](',\x20') + '\x20' + _0x22eaa9;
        const _0x1b4438 = document['createElement'](_0xfbcf5e(0x177));
        _0x1b4438[_0xfbcf5e(0x13a)][_0xfbcf5e(0x76)] = _0xfbcf5e(0x2d4), _0x1b4438[_0xfbcf5e(0x13a)][_0xfbcf5e(0x1d2)] = _0xfbcf5e(0x226), _0x1b4438['style'][_0xfbcf5e(0x26a)] = _0xfbcf5e(0x226), _0x1b4438[_0xfbcf5e(0x13a)][_0xfbcf5e(0x109)] = _0xfbcf5e(0x2b8), _0x24f6d1[_0xfbcf5e(0x1fb)](_0x45444f => {
            const _0x55b162 = _0xfbcf5e;
            let _0x3b1e10 = _0x55b162(0xc0);
            if (_0x45444f[_0x55b162(0x204)][_0x55b162(0x12b)](_0x55b162(0x1ea)))
                _0x3b1e10 = _0x55b162(0x107);
            else {
                if (_0x45444f[_0x55b162(0x204)][_0x55b162(0x12b)](_0x55b162(0x163)))
                    _0x3b1e10 = 'royalblue';
                else {
                    if (_0x45444f[_0x55b162(0x204)]['includes'](_0x55b162(0x126)))
                        _0x3b1e10 = _0x55b162(0xc0);
                    else {
                        if (_0x45444f[_0x55b162(0x204)][_0x55b162(0x12b)]('bad'))
                            _0x3b1e10 = _0x55b162(0x1cc);
                        else {
                            if (_0x45444f['outcome'][_0x55b162(0x12b)](_0x55b162(0x1b0)))
                                _0x3b1e10 = _0x55b162(0x1f6);
                        }
                    }
                }
            }
            const _0x1863bf = document['createElement'](_0x55b162(0xe5));
            _0x1863bf[_0x55b162(0x214)] = _0x45444f[_0x55b162(0x2c0)][_0x55b162(0xfb)], _0x1863bf[_0x55b162(0x218)] = _0x45444f[_0x55b162(0x2c0)][_0x55b162(0x232)], _0x1863bf[_0x55b162(0x13a)]['border'] = _0x55b162(0x15a) + _0x3b1e10, _0x1863bf[_0x55b162(0x13a)][_0x55b162(0x200)] = _0x55b162(0x2c2), _0x1863bf['style']['width'] = _0x55b162(0x1bf), _0x1863bf[_0x55b162(0x13a)][_0x55b162(0xfa)] = _0x55b162(0x1bf), _0x1863bf['style']['objectFit'] = _0x55b162(0x24c), _0x1863bf[_0x55b162(0xf5)] = function () {
                const _0x44c471 = _0x55b162;
                this[_0x44c471(0x214)] = 'placeholder.webp';
            }, _0x1b4438[_0x55b162(0x116)](_0x1863bf);
        });
        const _0x2cac12 = document[_0xfbcf5e(0xb3)]('p');
        _0x2cac12[_0xfbcf5e(0x13a)][_0xfbcf5e(0x2ba)] = '100%', _0x2cac12[_0xfbcf5e(0x13a)][_0xfbcf5e(0x229)] = '8px', _0x2cac12[_0xfbcf5e(0x13a)][_0xfbcf5e(0x24a)] = _0xfbcf5e(0xdb), _0x2cac12[_0xfbcf5e(0x13a)][_0xfbcf5e(0xfc)] = _0xfbcf5e(0x226), _0x2cac12[_0xfbcf5e(0x157)] = _0x1819a3, scene[_0xfbcf5e(0x251)][_0xfbcf5e(0x116)](_0x1b4438), scene['_MainBlock'][_0xfbcf5e(0x116)](_0x2cac12);
    }
    _0x54fa83 !== 'RUNWAY' ? (window['_maxiPerformances'] = _0x54fd35, window[_0xfbcf5e(0x114)] = _0x54fa83, document['getElementById'](_0xfbcf5e(0x23c)) && document['getElementById'](_0xfbcf5e(0x23c))['remove'](), scene[_0xfbcf5e(0xbb)]('Show\x20Runway', 'showRunwayPresentation()', _0xfbcf5e(0x23c))) : scene[_0xfbcf5e(0xbb)](_0xfbcf5e(0x219), _0xfbcf5e(0x2cd));
}
function showRunwayPresentation() {
    const _0x12dbe5 = _0x45b20c, _0x3c90d7 = document[_0x12dbe5(0xd5)](_0x12dbe5(0x23c));
    if (_0x3c90d7)
        _0x3c90d7['disabled'] = !![];
    scene['createHorizontalLine'](), scene['createHeader'](_0x12dbe5(0xbc));
    let _0x3ee91d = chosenContestants['filter'](_0x3dcd5e => {
        const _0xeb4bcf = _0x12dbe5, _0x266a27 = trackRecord['get'](_0x3dcd5e[_0xeb4bcf(0x232)]) || [];
        return !_0x266a27[_0xeb4bcf(0x12b)](_0xeb4bcf(0x108));
    })[_0x12dbe5(0x17a)](_0x34b894 => {
        const _0x42a6b0 = _0x12dbe5;
        let _0x47248d = _0x34b894[_0x42a6b0(0x259)] && _0x34b894[_0x42a6b0(0x259)][_0x42a6b0(0x79)] !== undefined ? _0x34b894[_0x42a6b0(0x259)][_0x42a6b0(0x79)] : 0x5;
        const _0x44336c = _0x47248d + randomInt(-0x2, 0x2);
        let _0x1adb79;
        if (_0x44336c >= 0xa)
            _0x1adb79 = _0x42a6b0(0x1cf);
        else {
            if (_0x44336c >= 0x8)
                _0x1adb79 = _0x42a6b0(0x127);
            else {
                if (_0x44336c >= 0x6)
                    _0x1adb79 = _0x42a6b0(0x1f9);
                else {
                    if (_0x44336c >= 0x4)
                        _0x1adb79 = _0x42a6b0(0x1a2);
                    else
                        _0x1adb79 = _0x42a6b0(0x243);
                }
            }
        }
        return {
            'queen': _0x34b894,
            'score': _0x44336c,
            'outcome': _0x1adb79,
            'message': _0x34b894[_0x42a6b0(0x232)] + '\x20' + _0x1adb79
        };
    });
    _0x3ee91d['sort']((_0x2ffa24, _0x37deb8) => _0x37deb8[_0x12dbe5(0x213)] - _0x2ffa24['score']);
    const _0x26da9b = [
        'slayed\x20the\x20runway!',
        _0x12dbe5(0x127),
        'had\x20a\x20good\x20runway.',
        'had\x20a\x20bad\x20runway.',
        'flopped\x20the\x20runway.'
    ];
    for (const _0x382e7e of _0x26da9b) {
        const _0x5df9eb = _0x3ee91d[_0x12dbe5(0xe6)](_0xb7ef07 => _0xb7ef07[_0x12dbe5(0x204)] === _0x382e7e);
        if (_0x5df9eb[_0x12dbe5(0x2eb)] === 0x0)
            continue;
        const _0x4c238d = _0x5df9eb['map'](_0x1d7d16 => _0x1d7d16[_0x12dbe5(0x2c0)]['name']);
        let _0x132c48 = _0x4c238d['join'](',\x20') + '\x20' + _0x382e7e;
        const _0x5ea8d5 = document[_0x12dbe5(0xb3)]('div');
        _0x5ea8d5[_0x12dbe5(0x13a)][_0x12dbe5(0x76)] = _0x12dbe5(0x2d4), _0x5ea8d5['style']['justifyContent'] = _0x12dbe5(0x226), _0x5ea8d5['style'][_0x12dbe5(0x26a)] = _0x12dbe5(0x226), _0x5ea8d5[_0x12dbe5(0x13a)]['gap'] = '32px', _0x5df9eb[_0x12dbe5(0x1fb)](_0x3234cb => {
            const _0x38cfc9 = _0x12dbe5;
            let _0x410100 = 'black';
            if (_0x3234cb[_0x38cfc9(0x204)][_0x38cfc9(0x12b)]('slayed'))
                _0x410100 = _0x38cfc9(0x107);
            else {
                if (_0x3234cb['outcome'][_0x38cfc9(0x12b)]('great'))
                    _0x410100 = _0x38cfc9(0x1c9);
                else {
                    if (_0x3234cb[_0x38cfc9(0x204)][_0x38cfc9(0x12b)](_0x38cfc9(0x126)))
                        _0x410100 = _0x38cfc9(0xc0);
                    else {
                        if (_0x3234cb['outcome']['includes'](_0x38cfc9(0x2a8)))
                            _0x410100 = 'pink';
                        else {
                            if (_0x3234cb['outcome']['includes'](_0x38cfc9(0x1b0)))
                                _0x410100 = _0x38cfc9(0x1f6);
                        }
                    }
                }
            }
            const _0x28d787 = document[_0x38cfc9(0xb3)]('img');
            _0x28d787[_0x38cfc9(0x214)] = _0x3234cb[_0x38cfc9(0x2c0)][_0x38cfc9(0xfb)], _0x28d787['alt'] = _0x3234cb[_0x38cfc9(0x2c0)][_0x38cfc9(0x232)], _0x28d787[_0x38cfc9(0x13a)][_0x38cfc9(0x266)] = '3px\x20solid\x20' + _0x410100, _0x28d787[_0x38cfc9(0x13a)]['borderRadius'] = _0x38cfc9(0x2c2), _0x28d787[_0x38cfc9(0x13a)]['width'] = _0x38cfc9(0x1bf), _0x28d787['style'][_0x38cfc9(0xfa)] = '105px', _0x28d787['style'][_0x38cfc9(0x175)] = _0x38cfc9(0x24c), _0x28d787[_0x38cfc9(0xf5)] = function () {
                const _0x417195 = _0x38cfc9;
                this[_0x417195(0x214)] = 'placeholder.webp';
            }, _0x5ea8d5[_0x38cfc9(0x116)](_0x28d787);
        });
        const _0x1eb750 = document[_0x12dbe5(0xb3)]('p');
        _0x1eb750[_0x12dbe5(0x13a)][_0x12dbe5(0x2ba)] = _0x12dbe5(0x276), _0x1eb750['style'][_0x12dbe5(0x229)] = _0x12dbe5(0x223), _0x1eb750[_0x12dbe5(0x13a)][_0x12dbe5(0x24a)] = 'bold', _0x1eb750['style'][_0x12dbe5(0xfc)] = _0x12dbe5(0x226), _0x1eb750[_0x12dbe5(0x157)] = _0x132c48, scene[_0x12dbe5(0x251)][_0x12dbe5(0x116)](_0x5ea8d5), scene[_0x12dbe5(0x251)][_0x12dbe5(0x116)](_0x1eb750);
    }
    let _0x34b623 = window['_maxiPerformances'];
    _0x3ee91d[_0x12dbe5(0x1fb)](_0xaceb8b => {
        const _0x149f59 = _0x12dbe5, _0xfe5509 = _0x34b623[_0x149f59(0x278)](_0x6f38ce => _0x6f38ce['queen']['name'] === _0xaceb8b[_0x149f59(0x2c0)][_0x149f59(0x232)]);
        if (_0xfe5509)
            _0xfe5509[_0x149f59(0x213)] += _0xaceb8b[_0x149f59(0x213)];
    }), _0x34b623[_0x12dbe5(0x16d)]((_0x4fa8dc, _0x63b2) => _0x63b2['score'] - _0x4fa8dc['score']), window[_0x12dbe5(0x2d5)] = _0x34b623, scene[_0x12dbe5(0xbb)](_0x12dbe5(0x219), _0x12dbe5(0x2cd));
}
function judgingPanel() {
    const _0x598111 = _0x45b20c;
    scene[_0x598111(0x1a1)](), scene[_0x598111(0x267)](_0x598111(0x1d7));
    let _0x1e87fe = window['_maxiPerformances'] || [];
    !_0x1e87fe[_0x598111(0x2eb)] && (_0x1e87fe = chosenContestants[_0x598111(0x17a)](_0x38db0b => ({
        'queen': _0x38db0b,
        'score': 0x5,
        'outcome': '',
        'message': ''
    })));
    _0x1e87fe['sort']((_0x355db9, _0x57bffd) => _0x57bffd[_0x598111(0x213)] - _0x355db9[_0x598111(0x213)]);
    const _0x1a9d59 = chosenContestants[_0x598111(0x2eb)];
    let _0x1e65ee = [];
    if (_0x1a9d59 <= 0x3)
        _0x1e65ee = _0x1e87fe;
    else {
        if (_0x1a9d59 === 0x4)
            _0x1e65ee = _0x1e87fe;
        else {
            if (_0x1a9d59 === 0x5)
                _0x1e65ee = _0x1e87fe;
            else {
                if (_0x1a9d59 === 0x6)
                    _0x1e65ee = _0x1e87fe;
                else {
                    const _0x1d9b90 = _0x1e87fe[_0x598111(0x168)](0x0, 0x3), _0x1236a8 = _0x1e87fe[_0x598111(0x168)](-0x3);
                    _0x1e65ee = [
                        ..._0x1d9b90,
                        ..._0x1236a8
                    ];
                }
            }
        }
    }
    const _0x203876 = _0x1e65ee[_0x598111(0x168)]()[_0x598111(0x16d)](() => Math[_0x598111(0x1a7)]() - 0.5), _0xb73fe5 = document['createElement']('div');
    _0xb73fe5[_0x598111(0x13a)][_0x598111(0x76)] = _0x598111(0x2d4), _0xb73fe5['style'][_0x598111(0x1d2)] = _0x598111(0x226), _0xb73fe5['style'][_0x598111(0x109)] = '32px', _0x203876[_0x598111(0x1fb)](_0x42bee9 => {
        const _0x1d605a = _0x598111;
        scene[_0x1d605a(0x25b)](_0x42bee9[_0x1d605a(0x2c0)][_0x1d605a(0xfb)], _0x1d605a(0x11d));
    }), scene[_0x598111(0x251)]['appendChild'](_0xb73fe5);
    const _0x13bffa = _0x203876[_0x598111(0x17a)](_0x49ceae => _0x49ceae[_0x598111(0x2c0)][_0x598111(0x232)])[_0x598111(0xf9)](',\x20');
    _0x1a9d59 <= 0x6 ? scene[_0x598111(0x2aa)](_0x598111(0x1b8) + _0x13bffa + _0x598111(0x2dc)) : scene['createParagraph'](_0x598111(0x1b8) + _0x13bffa + _0x598111(0x7c)), scene[_0x598111(0xbb)](_0x598111(0x219), _0x598111(0x253));
}
function showResults() {
    const _0x58e62e = _0x45b20c;
    scene['clean'](), scene[_0x58e62e(0x267)](_0x58e62e(0x1ec));
    let _0x474a61 = window[_0x58e62e(0x2d5)] || [];
    (!_0x474a61 || !Array[_0x58e62e(0x20d)](_0x474a61) || _0x474a61[_0x58e62e(0x2eb)] === 0x0) && (_0x474a61 = chosenContestants['map'](_0x3790ba => ({
        'queen': _0x3790ba,
        'score': randomInt(0x0, 0xa),
        'outcome': '',
        'message': ''
    })));
    _0x474a61 = _0x474a61[_0x58e62e(0x17a)](_0x4bc9e1 => ({
        ..._0x4bc9e1,
        'score': _0x4bc9e1[_0x58e62e(0x213)] || 0x5
    })), _0x474a61['sort']((_0x27b90c, _0x102fbf) => _0x102fbf['score'] - _0x27b90c['score']);
    if (episodeNumber === 0x1 && premiereType === _0x58e62e(0x13f)) {
        const _0xf11b60 = _0x474a61[_0x58e62e(0x168)](0x0, 0x2), _0x462aa6 = document['createElement']('div');
        _0x462aa6[_0x58e62e(0x13a)][_0x58e62e(0x76)] = _0x58e62e(0x2d4), _0x462aa6[_0x58e62e(0x13a)][_0x58e62e(0x1d2)] = _0x58e62e(0x226), _0x462aa6[_0x58e62e(0x13a)][_0x58e62e(0x109)] = _0x58e62e(0x2b8), _0xf11b60[_0x58e62e(0x1fb)](_0x187d43 => {
            const _0x558b8f = _0x58e62e;
            updateTrackRecord(_0x187d43[_0x558b8f(0x2c0)], 'TOP2'), scene['createImage'](_0x187d43[_0x558b8f(0x2c0)][_0x558b8f(0xfb)], _0x558b8f(0xce));
        }), scene['_MainBlock'][_0x58e62e(0x116)](_0x462aa6);
        const _0x43b883 = _0xf11b60['map'](_0x2c9335 => _0x2c9335[_0x58e62e(0x2c0)][_0x58e62e(0x232)])[_0x58e62e(0xf9)]('\x20and\x20');
        scene['createParagraph'](_0x58e62e(0x1b8) + _0x43b883 + _0x58e62e(0xb5));
        const _0x2c0d24 = Math[_0x58e62e(0x2e7)](0x3, Math[_0x58e62e(0x231)]((_0x474a61['length'] - 0x2) / 0x3)), _0x5d7613 = _0x474a61[_0x58e62e(0x168)](0x2, 0x2 + _0x2c0d24);
        if (_0x5d7613[_0x58e62e(0x2eb)] > 0x0) {
            const _0x552aaa = document[_0x58e62e(0xb3)](_0x58e62e(0x177));
            _0x552aaa[_0x58e62e(0x13a)][_0x58e62e(0x76)] = _0x58e62e(0x2d4), _0x552aaa[_0x58e62e(0x13a)][_0x58e62e(0x1d2)] = _0x58e62e(0x226), _0x552aaa['style']['gap'] = _0x58e62e(0x2b8), _0x5d7613[_0x58e62e(0x1fb)](_0x2e00d5 => {
                const _0x551f03 = _0x58e62e;
                updateTrackRecord(_0x2e00d5[_0x551f03(0x2c0)], _0x551f03(0x1e3)), scene[_0x551f03(0x25b)](_0x2e00d5[_0x551f03(0x2c0)][_0x551f03(0xfb)], _0x551f03(0x1c9));
            }), scene[_0x58e62e(0x251)][_0x58e62e(0x116)](_0x552aaa);
            const _0x3b1e58 = _0x5d7613[_0x58e62e(0x17a)](_0x6a5c4a => _0x6a5c4a[_0x58e62e(0x2c0)][_0x58e62e(0x232)])['join']('\x20and\x20');
            scene[_0x58e62e(0x2aa)](_0x3b1e58 + _0x58e62e(0x172));
        }
        _0x474a61[_0x58e62e(0x168)](0x2 + _0x2c0d24)['forEach'](_0x498b11 => {
            const _0x14536b = _0x58e62e;
            updateTrackRecord(_0x498b11[_0x14536b(0x2c0)], _0x14536b(0x2e2));
        }), displayTrackRecord(), scene['createButton'](_0x58e62e(0x219), 'topTwoLipsync()');
        return;
    }
    const _0x670ef5 = chosenContestants['length'], _0x1eaf1f = _0x474a61[0x0];
    updateTrackRecord(_0x1eaf1f[_0x58e62e(0x2c0)], _0x58e62e(0x17c)), scene[_0x58e62e(0x25b)](_0x1eaf1f[_0x58e62e(0x2c0)]['image'], _0x58e62e(0xce)), scene[_0x58e62e(0x2aa)](_0x58e62e(0x1b8) + _0x1eaf1f[_0x58e62e(0x2c0)][_0x58e62e(0x232)] + _0x58e62e(0x246));
    let _0x54c32e = _0x474a61['filter'](_0x8140de => _0x8140de !== _0x1eaf1f);
    if (_0x670ef5 <= 0x3) {
        const _0xeb5fbc = _0x54c32e, _0x497a6e = document['createElement'](_0x58e62e(0x177));
        _0x497a6e[_0x58e62e(0x13a)][_0x58e62e(0x76)] = _0x58e62e(0x2d4), _0x497a6e[_0x58e62e(0x13a)][_0x58e62e(0x1d2)] = _0x58e62e(0x226), _0x497a6e['style'][_0x58e62e(0x109)] = _0x58e62e(0x2b8), _0xeb5fbc[_0x58e62e(0x1fb)](_0x4707d5 => {
            const _0x2c9985 = _0x58e62e;
            updateTrackRecord(_0x4707d5[_0x2c9985(0x2c0)], _0x2c9985(0x142)), scene[_0x2c9985(0x25b)](_0x4707d5[_0x2c9985(0x2c0)][_0x2c9985(0xfb)], 'tomato');
        }), scene[_0x58e62e(0x251)][_0x58e62e(0x116)](_0x497a6e);
        const _0x3d0c45 = _0xeb5fbc[_0x58e62e(0x17a)](_0x28c9df => _0x28c9df[_0x58e62e(0x2c0)][_0x58e62e(0x232)])['join'](_0x58e62e(0xe0));
        scene[_0x58e62e(0x2aa)]('<b>' + _0x3d0c45 + _0x58e62e(0x233));
    } else {
        if (_0x670ef5 >= 0x4) {
            const _0x543554 = _0x54c32e[_0x58e62e(0x168)](0x0, Math[_0x58e62e(0x2e7)](0x2, Math[_0x58e62e(0x231)]((_0x670ef5 - 0x1) / 0x3))), _0x790f2 = document[_0x58e62e(0xb3)](_0x58e62e(0x177));
            _0x790f2['style'][_0x58e62e(0x76)] = _0x58e62e(0x2d4), _0x790f2[_0x58e62e(0x13a)][_0x58e62e(0x1d2)] = _0x58e62e(0x226), _0x790f2[_0x58e62e(0x13a)]['gap'] = '32px', _0x543554['forEach'](_0xe68480 => {
                const _0x23fc0a = _0x58e62e;
                updateTrackRecord(_0xe68480[_0x23fc0a(0x2c0)], _0x23fc0a(0x1e3)), scene[_0x23fc0a(0x25b)](_0xe68480[_0x23fc0a(0x2c0)]['image'], 'royalblue');
            }), scene[_0x58e62e(0x251)][_0x58e62e(0x116)](_0x790f2);
            const _0x17fdbd = _0x543554[_0x58e62e(0x17a)](_0x3c1fe3 => _0x3c1fe3[_0x58e62e(0x2c0)]['name'])[_0x58e62e(0xf9)](_0x58e62e(0xe0));
            scene[_0x58e62e(0x2aa)](_0x17fdbd + _0x58e62e(0x234));
            const _0x48f6e3 = Math['max'](_0x54c32e[_0x58e62e(0x2eb)] - 0x3, _0x543554[_0x58e62e(0x2eb)]);
            _0x54c32e[_0x58e62e(0x168)](_0x543554[_0x58e62e(0x2eb)], _0x48f6e3)['forEach'](_0x204bc1 => {
                const _0x574ecd = _0x58e62e;
                updateTrackRecord(_0x204bc1[_0x574ecd(0x2c0)], _0x574ecd(0x2e2));
            });
            const _0x4518ad = _0x54c32e[_0x58e62e(0x168)](_0x48f6e3);
            if (_0x4518ad[_0x58e62e(0x2eb)] === 0x3) {
                const _0x1c002d = _0x4518ad[0x0];
                updateTrackRecord(_0x1c002d[_0x58e62e(0x2c0)], _0x58e62e(0x254)), scene[_0x58e62e(0x25b)](_0x1c002d[_0x58e62e(0x2c0)][_0x58e62e(0xfb)], _0x58e62e(0x1cc)), scene[_0x58e62e(0x2aa)](_0x1c002d[_0x58e62e(0x2c0)][_0x58e62e(0x232)] + ',\x20you\x27re\x20safe.');
                const _0x4f7dbf = _0x4518ad[_0x58e62e(0x168)](0x1), _0x206200 = document[_0x58e62e(0xb3)](_0x58e62e(0x177));
                _0x206200[_0x58e62e(0x13a)][_0x58e62e(0x76)] = _0x58e62e(0x2d4), _0x206200['style'][_0x58e62e(0x1d2)] = _0x58e62e(0x226), _0x206200[_0x58e62e(0x13a)]['gap'] = _0x58e62e(0x2b8), _0x4f7dbf[_0x58e62e(0x1fb)](_0x4d7bf1 => {
                    const _0x380893 = _0x58e62e;
                    updateTrackRecord(_0x4d7bf1['queen'], _0x380893(0x142)), scene[_0x380893(0x25b)](_0x4d7bf1['queen']['image'], _0x380893(0x1f6));
                }), scene[_0x58e62e(0x251)][_0x58e62e(0x116)](_0x206200);
                const _0x367600 = _0x4f7dbf['map'](_0x597995 => _0x597995[_0x58e62e(0x2c0)][_0x58e62e(0x232)])[_0x58e62e(0xf9)]('\x20and\x20');
                scene[_0x58e62e(0x2aa)]('<b>' + _0x367600 + '</b>,\x20I\x27m\x20sorry\x20my\x20dears\x20but\x20you\x27re\x20up\x20for\x20elimination.');
            } else {
                const _0x408ac1 = _0x4518ad, _0x4361dc = document[_0x58e62e(0xb3)](_0x58e62e(0x177));
                _0x4361dc['style'][_0x58e62e(0x76)] = _0x58e62e(0x2d4), _0x4361dc['style']['justifyContent'] = _0x58e62e(0x226), _0x4361dc[_0x58e62e(0x13a)]['gap'] = _0x58e62e(0x2b8), _0x408ac1[_0x58e62e(0x1fb)](_0x196d34 => {
                    const _0x22a3c7 = _0x58e62e;
                    updateTrackRecord(_0x196d34['queen'], _0x22a3c7(0x142)), scene[_0x22a3c7(0x25b)](_0x196d34[_0x22a3c7(0x2c0)][_0x22a3c7(0xfb)], _0x22a3c7(0x1f6));
                }), scene[_0x58e62e(0x251)][_0x58e62e(0x116)](_0x4361dc);
                const _0x220fa9 = _0x408ac1[_0x58e62e(0x17a)](_0x456e04 => _0x456e04[_0x58e62e(0x2c0)][_0x58e62e(0x232)])['join'](_0x58e62e(0xe0));
                scene[_0x58e62e(0x2aa)](_0x58e62e(0x1b8) + _0x220fa9 + _0x58e62e(0x233));
            }
        }
    }
    displayTrackRecord(), scene['createButton'](_0x58e62e(0x219), 'bottomLipsync()');
}
function bottomLipsync() {
    const _0x3d4da3 = _0x45b20c;
    scene[_0x3d4da3(0x1a1)](), scene['createHeader'](_0x3d4da3(0x78)), nextStep();
}
async function loadSongs() {
    const _0xeaa512 = _0x45b20c;
    try {
        const _0xd3710f = await fetch(_0xeaa512(0x23b));
        if (!_0xd3710f['ok'])
            throw new Error(_0xeaa512(0x2d3) + _0xd3710f[_0xeaa512(0x17b)]);
        const _0x297537 = await _0xd3710f[_0xeaa512(0x13b)]();
        return _0x297537[_0xeaa512(0x27d)]('\x0a')[_0xeaa512(0xe6)](_0xec2303 => _0xec2303[_0xeaa512(0xb0)]()['length'] > 0x0);
    } catch (_0x330e1e) {
        return console[_0xeaa512(0x19a)](_0xeaa512(0x117), _0x330e1e), [];
    }
}
async function nextStep() {
    const _0x458647 = _0x45b20c;
    scene['clean'](), scene[_0x458647(0x267)](_0x458647(0x27a));
    const _0x196328 = window[_0x458647(0x2d5)][_0x458647(0x168)](-0x2)[_0x458647(0xe6)](_0x4c4f65 => !immunityQueen || _0x4c4f65['queen'][_0x458647(0x232)] !== immunityQueen[_0x458647(0x232)]);
    if (_0x196328[_0x458647(0x2eb)] !== 0x2) {
        scene[_0x458647(0x2aa)](_0x458647(0x280)), showCornerPopup(_0x458647(0x280), _0x458647(0x19a));
        return;
    }
    const _0x3dbf86 = await loadSongs(), _0x9f76a7 = _0x3dbf86[randomInt(0x0, _0x3dbf86[_0x458647(0x2eb)] - 0x1)];
    scene['createParagraph'](_0x458647(0x1ee) + _0x9f76a7 + '\x22.'), scene[_0x458647(0x2aa)](_0x458647(0x2c5));
    const _0x487c2b = document[_0x458647(0xb3)]('div');
    _0x487c2b['style'][_0x458647(0x76)] = _0x458647(0x2d4), _0x487c2b[_0x458647(0x13a)]['justifyContent'] = _0x458647(0x226), _0x487c2b['style']['gap'] = _0x458647(0x2b8), _0x196328[_0x458647(0x1fb)](_0x3a3168 => {
        const _0x50da17 = _0x458647;
        scene[_0x50da17(0x25b)](_0x3a3168[_0x50da17(0x2c0)][_0x50da17(0xfb)], _0x50da17(0x1f6));
    }), scene[_0x458647(0x251)]['appendChild'](_0x487c2b), scene[_0x458647(0x2aa)](_0x458647(0x24f)), scene['createButton'](_0x458647(0x25e), _0x458647(0x2d2));
}
function eliminationResult() {
    const _0x40d8b1 = _0x45b20c;
    scene['clean'](), scene[_0x40d8b1(0x267)]('The\x20Result');
    const _0x9ec1b5 = window[_0x40d8b1(0x2d5)]['slice'](-0x2)[_0x40d8b1(0xe6)](_0x48f019 => !immunityQueen || _0x48f019['queen'][_0x40d8b1(0x232)] !== immunityQueen[_0x40d8b1(0x232)]), _0x17dbe9 = _0x9ec1b5['map'](_0x51d843 => ({
            'queen': _0x51d843['queen'],
            'score': (_0x51d843[_0x40d8b1(0x2c0)][_0x40d8b1(0x259)]?.['lipsync'] || 0x5) + randomInt(-0x2, 0x2)
        }));
    _0x17dbe9[_0x40d8b1(0x16d)]((_0x35f760, _0x431f29) => _0x431f29[_0x40d8b1(0x213)] - _0x35f760[_0x40d8b1(0x213)]);
    if (episodeNumber === 0x1)
        switch (premiereType) {
        case 'regularShantay':
            scene[_0x40d8b1(0x25b)](_0x17dbe9[0x0][_0x40d8b1(0x2c0)][_0x40d8b1(0xfb)], _0x40d8b1(0x230)), scene[_0x40d8b1(0x25b)](_0x17dbe9[0x1][_0x40d8b1(0x2c0)]['image'], 'hotpink'), scene[_0x40d8b1(0x2aa)]('Ladies,\x20I\x27ve\x20made\x20my\x20decision...'), scene[_0x40d8b1(0x2aa)](_0x40d8b1(0xe1)), _0x17dbe9[_0x40d8b1(0x1fb)](_0x3cb043 => {
                const _0x476bb0 = _0x40d8b1, _0x310de4 = trackRecord[_0x476bb0(0xee)](_0x3cb043[_0x476bb0(0x2c0)][_0x476bb0(0x232)]);
                _0x310de4[_0x310de4['length'] - 0x1] = _0x476bb0(0x142), trackRecord[_0x476bb0(0x1a3)](_0x3cb043['queen']['name'], _0x310de4);
            }), episodeNumber++, displayTrackRecord(), scene[_0x40d8b1(0xbb)](_0x40d8b1(0x219), _0x40d8b1(0x299));
            return;
        }
    scene['createImage'](_0x17dbe9[0x0][_0x40d8b1(0x2c0)][_0x40d8b1(0xfb)], _0x40d8b1(0x1f6)), scene[_0x40d8b1(0x2aa)](_0x17dbe9[0x0][_0x40d8b1(0x2c0)]['name'] + ',\x20shantay\x20you\x20stay.'), scene[_0x40d8b1(0x25b)](_0x17dbe9[0x1][_0x40d8b1(0x2c0)]['image'], _0x40d8b1(0x16a)), scene[_0x40d8b1(0x2aa)](_0x17dbe9[0x1][_0x40d8b1(0x2c0)]['name'] + _0x40d8b1(0x272));
    const _0x1ba5b1 = _0x17dbe9[0x1][_0x40d8b1(0x2c0)];
    let _0x36d368 = trackRecord['get'](_0x1ba5b1['name']) || [];
    _0x36d368[_0x36d368[_0x40d8b1(0x2eb)] - 0x1] === _0x40d8b1(0x142) ? _0x36d368[_0x36d368[_0x40d8b1(0x2eb)] - 0x1] = _0x40d8b1(0x108) : _0x36d368[_0x40d8b1(0x1c6)](_0x40d8b1(0x108));
    trackRecord['set'](_0x1ba5b1['name'], _0x36d368), chosenContestants = chosenContestants[_0x40d8b1(0xe6)](_0x4c251e => _0x4c251e[_0x40d8b1(0x232)] !== _0x1ba5b1[_0x40d8b1(0x232)]);
    const _0x1046ab = _0x1ba5b1['name'];
    window[_0x40d8b1(0x2d5)] = window[_0x40d8b1(0x2d5)]?.[_0x40d8b1(0xe6)](_0x387292 => _0x387292[_0x40d8b1(0x2c0)][_0x40d8b1(0x232)] !== _0x1046ab) || [], displayTrackRecord(), episodeNumber++, scene[_0x40d8b1(0xbb)]('Proceed', _0x40d8b1(0x299));
}
async function topTwoLipsync() {
    const _0xfaac1c = _0x45b20c;
    scene[_0xfaac1c(0x1a1)](), scene['createHeader'](_0xfaac1c(0x28c));
    const _0x4285fe = window[_0xfaac1c(0x2d5)][_0xfaac1c(0x168)](0x0, 0x2), _0x4c37b5 = await loadSongs(), _0xdb656b = _0x4c37b5[randomInt(0x0, _0x4c37b5['length'] - 0x1)];
    scene[_0xfaac1c(0x2aa)](_0xfaac1c(0x1ee) + _0xdb656b + '\x22.'), scene['createParagraph'](_0xfaac1c(0x82));
    const _0x514959 = document[_0xfaac1c(0xb3)]('div');
    _0x514959['style']['display'] = _0xfaac1c(0x2d4), _0x514959[_0xfaac1c(0x13a)][_0xfaac1c(0x1d2)] = _0xfaac1c(0x226), _0x514959[_0xfaac1c(0x13a)]['gap'] = _0xfaac1c(0x2b8), _0x4285fe[_0xfaac1c(0x1fb)](_0x5ab3ac => {
        const _0x56862f = _0xfaac1c;
        scene['createImage'](_0x5ab3ac[_0x56862f(0x2c0)]['image'], _0x56862f(0xce));
    }), scene[_0xfaac1c(0x251)][_0xfaac1c(0x116)](_0x514959), scene[_0xfaac1c(0x2aa)](_0xfaac1c(0x24f)), scene[_0xfaac1c(0xbb)](_0xfaac1c(0x25e), _0xfaac1c(0x2cb));
}
function premiereLipsyncResult() {
    const _0x426628 = _0x45b20c;
    scene['clean'](), scene[_0x426628(0x267)]('The\x20Result');
    const _0x45d178 = window[_0x426628(0x2d5)][_0x426628(0x168)](0x0, 0x2), _0x40f65a = _0x45d178['map'](_0x500237 => ({
            'queen': _0x500237[_0x426628(0x2c0)],
            'score': (_0x500237['queen']['stats']?.[_0x426628(0x1ef)] || 0x5) + randomInt(-0x2, 0x2)
        }));
    _0x40f65a[_0x426628(0x16d)]((_0x1bf978, _0x2fdd59) => _0x2fdd59[_0x426628(0x213)] - _0x1bf978[_0x426628(0x213)]);
    const _0x1abc82 = Math['abs'](_0x40f65a[0x0]['score'] - _0x40f65a[0x1][_0x426628(0x213)]) <= 0x1;
    if (_0x1abc82)
        scene[_0x426628(0x25b)](_0x40f65a[0x0][_0x426628(0x2c0)]['image'], 'darkblue'), scene[_0x426628(0x25b)](_0x40f65a[0x1][_0x426628(0x2c0)][_0x426628(0xfb)], 'darkblue'), scene[_0x426628(0x2aa)](_0x426628(0x241)), scene['createParagraph'](_0x426628(0xba)), _0x40f65a[_0x426628(0x1fb)](_0x3a51a1 => {
            const _0x1e63df = _0x426628, _0x4ab8d6 = trackRecord[_0x1e63df(0xee)](_0x3a51a1['queen'][_0x1e63df(0x232)]);
            _0x4ab8d6[_0x4ab8d6[_0x1e63df(0x2eb)] - 0x1] = _0x1e63df(0x17c), trackRecord[_0x1e63df(0x1a3)](_0x3a51a1[_0x1e63df(0x2c0)][_0x1e63df(0x232)], _0x4ab8d6);
        });
    else {
        scene['createImage'](_0x40f65a[0x0][_0x426628(0x2c0)]['image'], _0x426628(0xce)), scene['createParagraph'](_0x40f65a[0x0][_0x426628(0x2c0)][_0x426628(0x232)] + ',\x20you\x27re\x20a\x20winner\x20baby!\x20You\x27ve\x20earned\x20a\x20cash\x20tip\x20of\x20$5000!'), scene[_0x426628(0x25b)](_0x40f65a[0x1][_0x426628(0x2c0)][_0x426628(0xfb)], _0x426628(0x26d)), scene[_0x426628(0x2aa)](_0x40f65a[0x1]['queen'][_0x426628(0x232)] + _0x426628(0x88));
        const _0x36cfcb = trackRecord[_0x426628(0xee)](_0x40f65a[0x0][_0x426628(0x2c0)]['name']);
        _0x36cfcb[_0x36cfcb['length'] - 0x1] = _0x426628(0x17c), trackRecord[_0x426628(0x1a3)](_0x40f65a[0x0][_0x426628(0x2c0)][_0x426628(0x232)], _0x36cfcb);
    }
    displayTrackRecord(), episodeNumber++, scene[_0x426628(0xbb)](_0x426628(0x219), _0x426628(0x299));
}
async function finale() {
    const _0x5ee8e8 = _0x45b20c;
    scene['clean'](), scene['createHeader']('Grand\x20Finale');
    const _0x1ae3cf = chosenContestants;
    scene[_0x5ee8e8(0x19e)]('Our\x20finalists\x20are...');
    const _0x571964 = document[_0x5ee8e8(0xb3)](_0x5ee8e8(0x177));
    _0x571964[_0x5ee8e8(0x13a)][_0x5ee8e8(0x76)] = _0x5ee8e8(0x2d4), _0x571964[_0x5ee8e8(0x13a)][_0x5ee8e8(0x1d2)] = 'center', _0x571964[_0x5ee8e8(0x13a)]['gap'] = _0x5ee8e8(0x2b8), _0x571964[_0x5ee8e8(0x13a)]['marginTop'] = _0x5ee8e8(0x25d), _0x1ae3cf[_0x5ee8e8(0x1fb)](_0x2662e0 => {
        const _0x20f8ce = _0x5ee8e8;
        scene['createImage'](_0x2662e0[_0x20f8ce(0xfb)], _0x20f8ce(0xce));
    }), scene['_MainBlock']['appendChild'](_0x571964);
    const _0x4fd11c = _0x1ae3cf[_0x5ee8e8(0x17a)](_0x391660 => _0x391660[_0x5ee8e8(0x232)])['join'](',\x20');
    scene[_0x5ee8e8(0x2aa)]('<b>' + _0x4fd11c + _0x5ee8e8(0xad)), scene[_0x5ee8e8(0x13d)]();
    if (lsftc) {
        scene['createBigText'](_0x5ee8e8(0x29b)), scene['createParagraph']('The\x20queens\x20will\x20lipsync\x20to\x20the\x20finale!'), semiPairs = [
            [
                _0x1ae3cf[0x0],
                _0x1ae3cf[0x3]
            ],
            [
                _0x1ae3cf[0x1],
                _0x1ae3cf[0x2]
            ]
        ];
        const _0x1155c9 = document[_0x5ee8e8(0xb3)](_0x5ee8e8(0x177));
        scene[_0x5ee8e8(0x2aa)]('The\x20wheel\x20has\x20chosen\x20your\x20pairs...'), scene[_0x5ee8e8(0x25b)](semiPairs[0x0][0x0][_0x5ee8e8(0xfb)], 'gold'), scene[_0x5ee8e8(0x25b)](semiPairs[0x0][0x1][_0x5ee8e8(0xfb)], _0x5ee8e8(0xce)), scene['createParagraph'](semiPairs[0x0][0x0][_0x5ee8e8(0x232)] + _0x5ee8e8(0xc9) + semiPairs[0x0][0x1][_0x5ee8e8(0x232)]);
        const _0x147541 = await loadSongs(), _0x5bdbb5 = _0x147541[randomInt(0x0, _0x147541[_0x5ee8e8(0x2eb)] - 0x1)];
        scene[_0x5ee8e8(0x2aa)](_0x5ee8e8(0x1b4) + _0x5bdbb5 + '\x22'), scene['createImage'](semiPairs[0x1][0x0][_0x5ee8e8(0xfb)], _0x5ee8e8(0xce)), scene[_0x5ee8e8(0x25b)](semiPairs[0x1][0x1]['image'], 'gold'), scene['createParagraph'](semiPairs[0x1][0x0][_0x5ee8e8(0x232)] + _0x5ee8e8(0xc9) + semiPairs[0x1][0x1][_0x5ee8e8(0x232)]);
        const _0x45e202 = _0x147541[randomInt(0x0, _0x147541['length'] - 0x1)];
        scene[_0x5ee8e8(0x2aa)](_0x5ee8e8(0x1b4) + _0x45e202 + '\x22'), scene['createHorizontalLine'](), scene[_0x5ee8e8(0x2aa)](_0x5ee8e8(0x15e)), scene['createParagraph'](_0x5ee8e8(0xe9)), _0x1155c9[_0x5ee8e8(0x13a)]['display'] = _0x5ee8e8(0x2d4), _0x1155c9[_0x5ee8e8(0x13a)]['justifyContent'] = _0x5ee8e8(0x226), _0x1155c9[_0x5ee8e8(0x13a)][_0x5ee8e8(0x109)] = _0x5ee8e8(0x2b8), semiPairs[_0x5ee8e8(0x1fb)](_0x13e2bd => {
            const _0x18f305 = _0x5ee8e8, _0x2a072e = document[_0x18f305(0xb3)](_0x18f305(0x177));
            _0x2a072e[_0x18f305(0x13a)][_0x18f305(0x76)] = _0x18f305(0x2d4), _0x2a072e[_0x18f305(0x13a)][_0x18f305(0x1d2)] = _0x18f305(0x226), _0x2a072e[_0x18f305(0x13a)][_0x18f305(0x109)] = _0x18f305(0x2b8), _0x13e2bd['forEach'](_0x42d7bf => {
                const _0x35b1e1 = _0x18f305;
                scene[_0x35b1e1(0x25b)](_0x42d7bf['image'], _0x35b1e1(0xce));
            }), _0x1155c9['appendChild'](_0x2a072e);
        });
    } else {
        scene[_0x5ee8e8(0x19e)](_0x5ee8e8(0xc2)), scene[_0x5ee8e8(0x2aa)]('The\x20queens\x20will\x20write\x20and\x20perform\x20their\x20own\x20verse\x20to\x20RuPaul\x27s\x20latest\x20hit!');
        let _0x3a6f8f = _0x1ae3cf[_0x5ee8e8(0x17a)](_0x3ae7d3 => {
            const _0x4a8e77 = _0x5ee8e8, _0x1e3e63 = trackRecord[_0x4a8e77(0xee)](_0x3ae7d3[_0x4a8e77(0x232)]), _0x439081 = _0x1e3e63[_0x4a8e77(0xe6)](_0x430d67 => _0x430d67 === 'WIN')[_0x4a8e77(0x2eb)], _0x25bc00 = _0x1e3e63[_0x4a8e77(0xe6)](_0x822056 => _0x822056 === _0x4a8e77(0x1e3))['length'], _0x1643c0 = _0x1e3e63[_0x4a8e77(0xe6)](_0x7feef5 => _0x7feef5 === _0x4a8e77(0x142))[_0x4a8e77(0x2eb)], _0x1b7138 = _0x3ae7d3[_0x4a8e77(0x259)] || {}, _0x1b44fd = ((_0x1b7138['acting'] || 0x5) + (_0x1b7138[_0x4a8e77(0x2ab)] || 0x5) + (_0x1b7138[_0x4a8e77(0x84)] || 0x5) + (_0x1b7138[_0x4a8e77(0x91)] || 0x5) + (_0x1b7138['improv'] || 0x5) + (_0x1b7138[_0x4a8e77(0x79)] || 0x5)) / 0x6, _0x5f43d0 = _0x439081 * 0x2 + _0x25bc00 * 0x1 - _0x1643c0 * 0x1;
            return {
                'queen': _0x3ae7d3,
                'score': _0x1b44fd + _0x5f43d0 + randomInt(-0x1, 0x1),
                'wins': _0x439081,
                'highs': _0x25bc00,
                'btms': _0x1643c0
            };
        });
        _0x3a6f8f['sort']((_0x2cc4ed, _0x2afeff) => _0x2afeff[_0x5ee8e8(0x213)] - _0x2cc4ed[_0x5ee8e8(0x213)]), scene[_0x5ee8e8(0x13d)](), scene['createHeader'](_0x5ee8e8(0x10a)), _0x3a6f8f[_0x5ee8e8(0x1fb)](_0x57e806 => {
            const _0x1b28b3 = _0x5ee8e8;
            scene[_0x1b28b3(0x25b)](_0x57e806[_0x1b28b3(0x2c0)]['image']), scene[_0x1b28b3(0x27b)]('' + _0x57e806[_0x1b28b3(0x2c0)][_0x1b28b3(0x232)]), scene[_0x1b28b3(0x2aa)](_0x1b28b3(0xaf) + _0x57e806[_0x1b28b3(0x18c)] + _0x1b28b3(0x164) + (_0x57e806[_0x1b28b3(0x18c)] !== 0x1 ? 's' : '') + ',\x20' + _0x57e806['highs'] + '\x20HIGH' + (_0x57e806[_0x1b28b3(0x94)] !== 0x1 ? 's' : '') + ',\x20' + _0x57e806[_0x1b28b3(0x16b)] + '\x20BTM2' + (_0x57e806[_0x1b28b3(0x16b)] !== 0x1 ? 's' : ''));
        });
    }
    scene[_0x5ee8e8(0xbb)]('Proceed', lsftc ? _0x5ee8e8(0x16e) : 'crownWinner()');
}
async function lsftcF() {
    const _0x5525e1 = _0x45b20c;
    scene['clean'](), scene[_0x5525e1(0x267)](_0x5525e1(0x1e2));
    let _0x32eff4 = 0x1, _0xafc20c = [];
    for (let [_0x56e34f, _0x49c331] of semiPairs) {
        scene[_0x5525e1(0x267)](_0x56e34f[_0x5525e1(0x232)] + '\x20vs\x20' + _0x49c331['name']), scene[_0x5525e1(0x2aa)](_0x5525e1(0x8b)), scene[_0x5525e1(0x25b)](_0x56e34f[_0x5525e1(0xfb)], _0x5525e1(0xce));
        const _0x6f4433 = finalScores['find'](_0xeaf44 => _0xeaf44[_0x5525e1(0x2c0)][_0x5525e1(0x232)] === _0x56e34f[_0x5525e1(0x232)])[_0x5525e1(0x213)], _0x58a8b6 = finalScores['find'](_0x234c72 => _0x234c72['queen'][_0x5525e1(0x232)] === _0x49c331[_0x5525e1(0x232)])[_0x5525e1(0x213)], _0x44fc2f = _0x6f4433 >= _0x58a8b6 ? _0x56e34f : _0x49c331, _0xfb8db4 = _0x44fc2f === _0x56e34f ? _0x49c331 : _0x56e34f;
        scene['createBold'](_0x44fc2f[_0x5525e1(0x232)] + _0x5525e1(0x13e)), scene[_0x5525e1(0x25b)](_0xfb8db4[_0x5525e1(0xfb)], 'sienna'), scene['createParagraph'](_0xfb8db4['name'] + _0x5525e1(0x255)), updateTrackRecord(_0xfb8db4, _0x5525e1(0xf6) + _0x32eff4), finalScores = finalScores[_0x5525e1(0xe6)](_0x304fa8 => _0x304fa8[_0x5525e1(0x2c0)][_0x5525e1(0x232)] !== _0xfb8db4['name']), _0xafc20c['push'](_0x44fc2f), _0x32eff4++, scene['createHorizontalLine']();
    }
    const [_0x4377bd, _0x55ca6a] = _0xafc20c, _0x3f8c09 = finalScores[_0x5525e1(0x278)](_0x5855c3 => _0x5855c3['queen'][_0x5525e1(0x232)] === _0x4377bd[_0x5525e1(0x232)])[_0x5525e1(0x213)], _0x196c17 = finalScores[_0x5525e1(0x278)](_0x25d5f2 => _0x25d5f2[_0x5525e1(0x2c0)][_0x5525e1(0x232)] === _0x55ca6a[_0x5525e1(0x232)])[_0x5525e1(0x213)];
    scene['createHeader']('Final\x20Showdown:\x20' + _0x4377bd[_0x5525e1(0x232)] + '\x20vs\x20' + _0x55ca6a[_0x5525e1(0x232)]), scene[_0x5525e1(0x2aa)](_0x5525e1(0x134)), scene[_0x5525e1(0x25b)](_0x4377bd[_0x5525e1(0xfb)]), scene[_0x5525e1(0x25b)](_0x55ca6a['image']);
    const _0x3f6e8a = _0x3f8c09 >= _0x196c17 ? _0x4377bd : _0x55ca6a, _0x7f6236 = _0x3f6e8a === _0x4377bd ? _0x55ca6a : _0x4377bd;
    scene[_0x5525e1(0x19e)](_0x3f6e8a['name'] + _0x5525e1(0x1e9)), scene[_0x5525e1(0x2aa)](_0x7f6236[_0x5525e1(0x232)] + _0x5525e1(0x188)), updateTrackRecord(_0x7f6236, 'RUNNER-UP'), updateTrackRecord(_0x3f6e8a, 'WINNER'), finalScores = finalScores[_0x5525e1(0xe6)](_0x34dd56 => _0x34dd56[_0x5525e1(0x2c0)][_0x5525e1(0x232)] !== _0x7f6236[_0x5525e1(0x232)]), crownedQueen = _0x3f6e8a;
}
async function lsftcF() {
    const _0xb3933d = _0x45b20c;
    showCornerPopup('The\x20lipsync\x20isn\x27t\x20implemented,\x20sorry!', _0xb3933d(0xa4)), announceWinner();
}
function announceWinner() {
    const _0x422927 = _0x45b20c;
    scene['clean'](), scene['createHeader'](_0x422927(0x211));
    const _0x8ca96c = chosenContestants[_0x422927(0x168)](0x0, 0x2), _0x1752ee = _0x8ca96c[_0x422927(0x17a)](_0x296de5 => ({
            'queen': _0x296de5,
            'score': (_0x296de5['stats']?.[_0x422927(0x1ef)] || 0x5) + randomInt(-0x1, 0x1)
        }));
    _0x1752ee['sort']((_0x9dcec6, _0x13505a) => _0x13505a[_0x422927(0x213)] - _0x9dcec6[_0x422927(0x213)]);
    const _0xbcb824 = _0x1752ee[0x0][_0x422927(0x2c0)], _0x1cabf5 = _0x1752ee[0x1][_0x422927(0x2c0)];
    _0x8ca96c[_0x422927(0x1fb)](_0x42f64c => {
        const _0x39cf6e = _0x422927;
        let _0x5f4f8a = _0x42f64c === _0xbcb824 ? 'WINNER' : _0x39cf6e(0x291);
        updateTrackRecord(_0x42f64c, _0x5f4f8a);
    });
    const _0x134101 = document[_0x422927(0xb3)](_0x422927(0x177));
    _0x134101[_0x422927(0x13a)]['display'] = _0x422927(0x2d4), _0x134101[_0x422927(0x13a)][_0x422927(0x1d2)] = 'center', _0x134101[_0x422927(0x13a)][_0x422927(0x109)] = _0x422927(0x9a), _0x134101[_0x422927(0x13a)][_0x422927(0x179)] = '20px\x200', _0x8ca96c['forEach'](_0x4d4728 => {
        const _0x406a02 = _0x422927, _0x4beb62 = document[_0x406a02(0xb3)]('div');
        _0x4beb62[_0x406a02(0x13a)][_0x406a02(0xfc)] = _0x406a02(0x226);
        const _0xd11737 = document[_0x406a02(0xb3)](_0x406a02(0xe5));
        _0xd11737[_0x406a02(0x214)] = _0x4d4728[_0x406a02(0xfb)], _0xd11737['style'][_0x406a02(0x2ba)] = _0x406a02(0x1c0), _0xd11737[_0x406a02(0x13a)][_0x406a02(0xfa)] = '150px', _0xd11737[_0x406a02(0x13a)][_0x406a02(0x175)] = _0x406a02(0x24c), _0xd11737['style'][_0x406a02(0x266)] = _0x406a02(0x158), _0xd11737['style']['transition'] = _0x406a02(0x9d), _0x4beb62['appendChild'](_0xd11737), _0x134101[_0x406a02(0x116)](_0x4beb62);
    }), scene[_0x422927(0x251)][_0x422927(0x116)](_0x134101), scene['createParagraph'](_0x422927(0x2db)), scene['createParagraph'](_0x422927(0x190)), scene['createButton']('Continue...', 'revealWinnerPart1()'), window[_0x422927(0x287)] = _0xbcb824, window['_runnerUpQueen'] = _0x1cabf5;
}
function revealWinnerPart1() {
    const _0x4546ea = _0x45b20c;
    scene[_0x4546ea(0x13d)](), scene[_0x4546ea(0x2aa)](_0x4546ea(0x110)), scene['createButton'](_0x4546ea(0x1c5), 'revealWinnerPart2()');
}
function revealWinnerPart2() {
    const _0x1d011c = _0x45b20c, _0x2b117f = window['_winnerQueen'], _0x2e4217 = window[_0x1d011c(0x1e1)];
    scene[_0x1d011c(0x2aa)](_0x1d011c(0x2c3)), scene[_0x1d011c(0xbb)]('Reveal\x20Winner', 'revealWinnerFinal()');
}
function revealWinnerFinal() {
    const _0x59237b = _0x45b20c, _0x4a0798 = window[_0x59237b(0x287)], _0x3cfb9d = window['_runnerUpQueen'];
    scene['clean'](), scene[_0x59237b(0x267)](_0x59237b(0x26f));
    const _0x153aee = document['createElement'](_0x59237b(0x177));
    _0x153aee[_0x59237b(0x13a)][_0x59237b(0x1ff)] = _0x59237b(0x27f), _0x153aee[_0x59237b(0x13a)][_0x59237b(0x93)] = '0', _0x153aee[_0x59237b(0x13a)][_0x59237b(0x1ae)] = '0', _0x153aee['style']['width'] = _0x59237b(0x276), _0x153aee[_0x59237b(0x13a)][_0x59237b(0xfa)] = _0x59237b(0x276), _0x153aee[_0x59237b(0x13a)][_0x59237b(0x11e)] = 'none', _0x153aee['style'][_0x59237b(0x115)] = _0x59237b(0xdf), document['body']['appendChild'](_0x153aee);
    for (let _0x5411a3 = 0x0; _0x5411a3 < 0x96; _0x5411a3++) {
        const _0x47d1ab = document[_0x59237b(0xb3)](_0x59237b(0x177));
        _0x47d1ab['style'][_0x59237b(0x1ff)] = _0x59237b(0x185), _0x47d1ab[_0x59237b(0x13a)][_0x59237b(0x2ba)] = '15px', _0x47d1ab['style']['height'] = _0x59237b(0x18e), _0x47d1ab[_0x59237b(0x13a)][_0x59237b(0x19d)] = [
            '#FFD700',
            _0x59237b(0xc6),
            '#4169E1',
            '#9370DB',
            _0x59237b(0x248)
        ][Math[_0x59237b(0x231)](Math['random']() * 0x5)], _0x47d1ab[_0x59237b(0x13a)][_0x59237b(0x1ae)] = Math['random']() * 0x64 + 'vw', _0x47d1ab[_0x59237b(0x13a)]['top'] = -0x14 + 'px', _0x47d1ab[_0x59237b(0x13a)][_0x59237b(0x25f)] = _0x59237b(0x294) + Math[_0x59237b(0x1a7)]() * 0x168 + 'deg)', _0x47d1ab[_0x59237b(0x13a)][_0x59237b(0x18f)] = Math[_0x59237b(0x1a7)](), _0x153aee[_0x59237b(0x116)](_0x47d1ab);
        const _0x45535c = _0x47d1ab[_0x59237b(0x1cb)]([
            {
                'transform': _0x59237b(0x160) + Math[_0x59237b(0x1a7)]() * 0x168 + _0x59237b(0x228),
                'opacity': 0x1
            },
            {
                'transform': _0x59237b(0x2d9) + (Math[_0x59237b(0x1a7)]() * 0xc8 - 0x64) + 'px,100vh,0)\x20rotate(' + Math[_0x59237b(0x1a7)]() * 0x2d0 + _0x59237b(0x228),
                'opacity': 0x0
            }
        ], {
            'duration': Math[_0x59237b(0x1a7)]() * 0x7d0 + 0xbb8,
            'delay': Math[_0x59237b(0x1a7)]() * 0x3e8,
            'fill': _0x59237b(0x101)
        });
        _0x45535c[_0x59237b(0x23e)] = () => _0x47d1ab['remove']();
    }
    const _0x434af2 = document[_0x59237b(0xb3)]('div');
    _0x434af2[_0x59237b(0x13a)][_0x59237b(0xf8)] = _0x59237b(0x2da), _0x434af2[_0x59237b(0x13a)][_0x59237b(0xa2)] = _0x59237b(0x25d), _0x434af2[_0x59237b(0x13a)][_0x59237b(0x1ff)] = 'relative', _0x434af2['style'][_0x59237b(0x115)] = _0x59237b(0x264);
    const _0x2f329b = document[_0x59237b(0xb3)](_0x59237b(0xe5));
    _0x2f329b[_0x59237b(0x214)] = _0x4a0798[_0x59237b(0xfb)], _0x2f329b['style'][_0x59237b(0x266)] = _0x59237b(0xa6), _0x2f329b[_0x59237b(0x13a)][_0x59237b(0x7a)] = _0x59237b(0x1db), _0x2f329b[_0x59237b(0x13a)][_0x59237b(0x2ba)] = _0x59237b(0x1c0), _0x2f329b['style'][_0x59237b(0xfa)] = _0x59237b(0x1c0), _0x2f329b['style'][_0x59237b(0x175)] = _0x59237b(0x24c), _0x434af2[_0x59237b(0x116)](_0x2f329b), scene[_0x59237b(0x251)][_0x59237b(0x116)](_0x434af2), scene[_0x59237b(0x19e)](_0x4a0798['name'] + _0x59237b(0x2c9)), scene[_0x59237b(0x2aa)]('You\x20are\x20the\x20winner\x20of\x20this\x20season!'), scene['createHorizontalLine'](), scene[_0x59237b(0x25b)](_0x3cfb9d[_0x59237b(0xfb)], _0x59237b(0x26d)), scene['createParagraph'](_0x3cfb9d[_0x59237b(0x232)] + ',\x20you\x27re\x20a\x20winner\x20baby,\x20just\x20not\x20today.\x20Now,\x20sashay\x20away...'), displayTrackRecord(), scene['createButton']('Start\x20New\x20Season', 'location.reload()'), setTimeout(() => {
        const _0x133833 = _0x59237b;
        _0x153aee[_0x133833(0x16f)]();
    }, 0x1388);
}
function showContestantInfo(_0x224d2e) {
    const _0x4162bd = _0x45b20c, _0x302d57 = document[_0x4162bd(0xd3)](_0x4162bd(0xa5)), _0x26e4bb = document[_0x4162bd(0xd5)](_0x4162bd(0x207)), _0x587845 = document[_0x4162bd(0xd5)]('modal-queen-name'), _0x5d39fe = document[_0x4162bd(0xd3)](_0x4162bd(0x21f));
    _0x26e4bb[_0x4162bd(0x214)] = _0x224d2e['image'], _0x587845['textContent'] = _0x224d2e[_0x4162bd(0x232)];
    const _0x40c902 = Array[_0x4162bd(0x20d)](_0x224d2e[_0x4162bd(0x2c1)]) ? _0x224d2e['seasons']['join'](',\x20') : _0x224d2e['season'] || 'Unknown', _0x25f786 = Array[_0x4162bd(0x20d)](_0x224d2e[_0x4162bd(0x15d)]) ? _0x224d2e['placements'][_0x4162bd(0xf9)](',\x20') : _0x224d2e['placement'] || _0x4162bd(0xc1);
    _0x5d39fe[_0x4162bd(0x157)] = _0x4162bd(0x25a) + _0x40c902 + _0x4162bd(0x125) + _0x25f786 + _0x4162bd(0x2a0) + (_0x224d2e['stats']?.['acting'] || 0x5) + _0x4162bd(0xc4) + (_0x224d2e['stats']?.[_0x4162bd(0x2ab)] || 0x5) + _0x4162bd(0x2e3) + (_0x224d2e[_0x4162bd(0x259)]?.[_0x4162bd(0x84)] || 0x5) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Design:\x20' + (_0x224d2e['stats']?.[_0x4162bd(0x91)] || 0x5) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Improv:\x20' + (_0x224d2e[_0x4162bd(0x259)]?.[_0x4162bd(0x180)] || 0x5) + _0x4162bd(0x296) + (_0x224d2e[_0x4162bd(0x259)]?.['runway'] || 0x5) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Lip\x20Sync:\x20' + (_0x224d2e[_0x4162bd(0x259)]?.[_0x4162bd(0x1ef)] || 0x5) + _0x4162bd(0x1b2), _0x302d57['classList']['add'](_0x4162bd(0x124));
}
document[_0x45b20c(0xd3)](_0x45b20c(0x2a1))['addEventListener']('click', () => {
    const _0x568bf0 = _0x45b20c;
    document['querySelector'](_0x568bf0(0xa5))['classList']['remove'](_0x568bf0(0x124));
}), document[_0x45b20c(0xd3)]('.contestant-modal')[_0x45b20c(0xcc)](_0x45b20c(0xb1), _0x74a4d3 => {
    const _0x3524fe = _0x45b20c;
    _0x74a4d3[_0x3524fe(0x171)] === document[_0x3524fe(0xd3)]('.contestant-modal') && document[_0x3524fe(0xd3)]('.contestant-modal')[_0x3524fe(0x244)][_0x3524fe(0x16f)](_0x3524fe(0x124));
});
function createContestantCard(_0x3756de) {
    const _0xee60e4 = _0x45b20c, _0xa991c1 = document[_0xee60e4(0xb3)](_0xee60e4(0x177));
    _0xa991c1[_0xee60e4(0x1b3)] = 'contestant-card', _0xa991c1[_0xee60e4(0x157)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22queen-select\x22\x20id=\x22select-' + _0x3756de['id'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22select-' + _0x3756de['id'] + _0xee60e4(0x1a9) + _0x3756de[_0xee60e4(0xfb)] + _0xee60e4(0x1bb) + _0x3756de['getName']() + _0xee60e4(0x118) + _0x3756de[_0xee60e4(0xc3)]() + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cog-menu-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-ellipsis-v\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cog-popover\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22view-info\x22><i\x20class=\x22fas\x20fa-info-circle\x22></i>View\x20Info</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22remove-queen\x22><i\x20class=\x22fas\x20fa-trash\x22></i>Remove</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
    const _0x3add1f = _0xa991c1['querySelector'](_0xee60e4(0x1b9)), _0x40cadd = _0xa991c1[_0xee60e4(0xd3)](_0xee60e4(0x7b));
    return _0x3add1f[_0xee60e4(0xcc)](_0xee60e4(0xb1), _0x3b1c6f => {
        const _0x325c2e = _0xee60e4;
        _0x3b1c6f['stopPropagation'](), document[_0x325c2e(0xcf)](_0x325c2e(0x7b))['forEach'](_0x343fc6 => {
            const _0x2b7423 = _0x325c2e;
            if (_0x343fc6 !== _0x40cadd)
                _0x343fc6[_0x2b7423(0x244)][_0x2b7423(0x16f)]('show');
        }), _0x40cadd[_0x325c2e(0x244)][_0x325c2e(0xc5)](_0x325c2e(0x124));
    }), _0xa991c1[_0xee60e4(0xd3)](_0xee60e4(0xd6))[_0xee60e4(0xcc)](_0xee60e4(0xb1), () => {
        const _0x9343b8 = _0xee60e4;
        showContestantInfo(_0x3756de), _0x40cadd['classList'][_0x9343b8(0x16f)]('show');
    }), _0xa991c1[_0xee60e4(0xd3)](_0xee60e4(0x2d0))[_0xee60e4(0xcc)](_0xee60e4(0xb1), () => {
        const _0x2a6cdc = _0xee60e4, _0x1b30d0 = chosenContestants[_0x2a6cdc(0x186)](_0x7bef7 => _0x7bef7[_0x2a6cdc(0x232)] === _0x3756de[_0x2a6cdc(0x232)]);
        _0x1b30d0 !== -0x1 && (chosenContestants[_0x2a6cdc(0x27c)](_0x1b30d0, 0x1), displayChosenContestants());
    }), _0xa991c1;
}
const predefinedCasts = {
    'season1': [
        'Akashia',
        _0x45b20c(0x100),
        _0x45b20c(0xe8),
        'Nina\x20Flowers',
        _0x45b20c(0x2b0),
        _0x45b20c(0x9c),
        'Shannel',
        _0x45b20c(0x1ab),
        _0x45b20c(0x1a8)
    ],
    'season2': [
        _0x45b20c(0x1d8),
        _0x45b20c(0x26b),
        'Jujubee',
        'Tatianna',
        _0x45b20c(0x28e),
        _0x45b20c(0x85),
        _0x45b20c(0x273),
        _0x45b20c(0x2ce),
        _0x45b20c(0x1d6),
        _0x45b20c(0x1ba),
        'Nicole\x20Paige\x20Brooks',
        _0x45b20c(0x2ec)
    ],
    'season3': [
        _0x45b20c(0x225),
        'Manila\x20Luzon',
        'Alexis\x20Mateo',
        _0x45b20c(0x167),
        'Carmen\x20Carrera',
        _0x45b20c(0x2ec),
        _0x45b20c(0xa0),
        _0x45b20c(0x2ca),
        _0x45b20c(0x156),
        'India\x20Ferrah',
        _0x45b20c(0x249),
        _0x45b20c(0x282),
        _0x45b20c(0x205)
    ],
    'season4': [
        _0x45b20c(0x12a),
        _0x45b20c(0x29f),
        _0x45b20c(0x174),
        'Latrice\x20Royale',
        _0x45b20c(0x103),
        _0x45b20c(0x2ae),
        _0x45b20c(0x9b),
        _0x45b20c(0xef),
        _0x45b20c(0xf7),
        'Madame\x20LaQueer',
        'The\x20Princess',
        _0x45b20c(0x112),
        _0x45b20c(0x271)
    ],
    'season5': [
        _0x45b20c(0x1f4),
        'Alaska',
        _0x45b20c(0xd9),
        _0x45b20c(0x95),
        _0x45b20c(0x286),
        'Alyssa\x20Edwards',
        _0x45b20c(0x292),
        _0x45b20c(0x206),
        'Lineysha\x20Sparx',
        _0x45b20c(0x16c),
        _0x45b20c(0x2b2),
        _0x45b20c(0x1d9),
        _0x45b20c(0x123),
        _0x45b20c(0x2ea)
    ],
    'season6': [
        _0x45b20c(0x284),
        _0x45b20c(0x1b5),
        _0x45b20c(0x138),
        _0x45b20c(0x290),
        'BenDeLaCreme',
        'Joslyn\x20Fox',
        _0x45b20c(0xb2),
        _0x45b20c(0x2a3),
        'Milk',
        _0x45b20c(0x2ed),
        _0x45b20c(0x1eb),
        _0x45b20c(0x1ad),
        'Magnolia\x20Crawford',
        _0x45b20c(0x29c)
    ],
    'season7': [
        'Violet\x20Chachki',
        _0x45b20c(0x18a),
        _0x45b20c(0x161),
        _0x45b20c(0xea),
        _0x45b20c(0x152),
        _0x45b20c(0x1aa),
        _0x45b20c(0x247),
        'Jaidynn\x20Diore\x20Fierce',
        'Max',
        _0x45b20c(0x1c2),
        _0x45b20c(0x12e),
        _0x45b20c(0xc7),
        'Sasha\x20Belle',
        _0x45b20c(0xbd)
    ],
    'season8': [
        _0x45b20c(0xf3),
        _0x45b20c(0x1fe),
        _0x45b20c(0x2e4),
        'Chi\x20Chi\x20DeVayne',
        'Derrick\x20Barry',
        _0x45b20c(0x222),
        _0x45b20c(0x1f8),
        _0x45b20c(0x28a),
        _0x45b20c(0x22a),
        _0x45b20c(0x2d7),
        'Dax\x20ExclamationPoint',
        _0x45b20c(0x137)
    ],
    'season9': [
        _0x45b20c(0x2ac),
        _0x45b20c(0x11b),
        _0x45b20c(0xa3),
        _0x45b20c(0x203),
        _0x45b20c(0x1bc),
        _0x45b20c(0x2d8),
        'Valentina',
        _0x45b20c(0x90),
        _0x45b20c(0x97),
        _0x45b20c(0x2d7),
        _0x45b20c(0x19f),
        _0x45b20c(0x2bf),
        'Kimora\x20Blac',
        _0x45b20c(0xe2)
    ],
    'season10': [
        'Aquaria',
        _0x45b20c(0x19f),
        _0x45b20c(0x215),
        _0x45b20c(0x2b1),
        _0x45b20c(0x165),
        _0x45b20c(0x19c),
        _0x45b20c(0xdd),
        'Monique\x20Heart',
        _0x45b20c(0x20b),
        _0x45b20c(0x181),
        'Dusty\x20Ray\x20Bottoms',
        _0x45b20c(0x2e1),
        _0x45b20c(0x238),
        _0x45b20c(0xd0)
    ],
    'season11': [
        _0x45b20c(0x15c),
        _0x45b20c(0x288),
        'A\x27keria\x20C.\x20Davenport',
        _0x45b20c(0x133),
        _0x45b20c(0x2d6),
        _0x45b20c(0x2b7),
        _0x45b20c(0x80),
        _0x45b20c(0x212),
        _0x45b20c(0xf0),
        _0x45b20c(0x1d1),
        _0x45b20c(0x8a),
        _0x45b20c(0x1c3),
        _0x45b20c(0x208),
        'Soju'
    ],
    'season12': [
        _0x45b20c(0x194),
        _0x45b20c(0xd1),
        _0x45b20c(0xfe),
        _0x45b20c(0x2bc),
        _0x45b20c(0x8c),
        _0x45b20c(0x2e5),
        _0x45b20c(0x77),
        'Brita',
        _0x45b20c(0x1a4),
        'Nicky\x20Doll',
        _0x45b20c(0xa7),
        _0x45b20c(0x130)
    ],
    'season13': [
        _0x45b20c(0x29d),
        _0x45b20c(0x1c1),
        _0x45b20c(0x2b4),
        _0x45b20c(0x235),
        _0x45b20c(0x240),
        _0x45b20c(0xb7),
        _0x45b20c(0x289),
        'Denali',
        _0x45b20c(0x242),
        _0x45b20c(0x21d),
        _0x45b20c(0x202),
        _0x45b20c(0x210),
        _0x45b20c(0x2df)
    ],
    'season14': [
        'Willow\x20Pill',
        _0x45b20c(0x277),
        _0x45b20c(0x1b7),
        _0x45b20c(0x96),
        'Daya\x20Betty',
        'DeJa\x20Skye',
        'Jorgeous',
        _0x45b20c(0x1af),
        'Kerri\x20Colby',
        _0x45b20c(0x2c4),
        _0x45b20c(0x1a5),
        _0x45b20c(0x1da),
        _0x45b20c(0x136),
        _0x45b20c(0x1fd)
    ],
    'season15': [
        'Sasha\x20Colby',
        _0x45b20c(0x2c8),
        _0x45b20c(0x198),
        _0x45b20c(0x144),
        _0x45b20c(0x22f),
        _0x45b20c(0x263),
        _0x45b20c(0x275),
        _0x45b20c(0xb6),
        'Spice',
        _0x45b20c(0x1b1),
        'Aura\x20Mayari',
        _0x45b20c(0xf2),
        _0x45b20c(0x21e),
        _0x45b20c(0x1d5),
        _0x45b20c(0x1e4),
        _0x45b20c(0x119)
    ],
    'season16': [
        _0x45b20c(0xcd),
        _0x45b20c(0x1dd),
        _0x45b20c(0x83),
        'Q',
        _0x45b20c(0x1e6),
        _0x45b20c(0xeb),
        'Mhi\x27ya\x20Iman\x20Le\x27Paige',
        _0x45b20c(0x285),
        _0x45b20c(0x20f),
        _0x45b20c(0x27e),
        _0x45b20c(0xbe),
        _0x45b20c(0xd2),
        _0x45b20c(0x28d),
        _0x45b20c(0x1d0)
    ],
    'season17': [
        _0x45b20c(0x183),
        _0x45b20c(0x270),
        'Lexi\x20Love',
        _0x45b20c(0x128),
        _0x45b20c(0x7d),
        _0x45b20c(0x14a),
        'Lydia\x20B\x20Kollins',
        _0x45b20c(0x236),
        _0x45b20c(0x293),
        'Acacia\x20Forgot',
        'Crystal\x20Envy',
        _0x45b20c(0x1f7),
        _0x45b20c(0x2dd),
        _0x45b20c(0x1c7)
    ],
    'allstars1': [
        _0x45b20c(0x29f),
        _0x45b20c(0x26b),
        'Jujubee',
        _0x45b20c(0x1e5),
        _0x45b20c(0x1a6),
        _0x45b20c(0x1ab),
        _0x45b20c(0x192),
        _0x45b20c(0x262),
        'Alexis\x20Mateo',
        _0x45b20c(0x28e),
        _0x45b20c(0x249)
    ],
    'allstars2': [
        'Alaska',
        _0x45b20c(0x95),
        _0x45b20c(0x152),
        _0x45b20c(0xd9),
        'Alyssa\x20Edwards',
        _0x45b20c(0xde),
        _0x45b20c(0x1df),
        _0x45b20c(0x18a),
        _0x45b20c(0x286),
        'Adore\x20Delano'
    ],
    'allstars3': [
        'Trixie\x20Mattel',
        _0x45b20c(0xea),
        _0x45b20c(0x2ec),
        _0x45b20c(0x100),
        _0x45b20c(0x2ce),
        _0x45b20c(0x17f),
        _0x45b20c(0x97),
        'DeLa',
        _0x45b20c(0x29a),
        _0x45b20c(0x222)
    ],
    'allstars4': [
        _0x45b20c(0x203),
        _0x45b20c(0x19c),
        _0x45b20c(0xab),
        _0x45b20c(0x2e4),
        _0x45b20c(0x262),
        _0x45b20c(0x1be),
        _0x45b20c(0x192),
        _0x45b20c(0x2ed),
        _0x45b20c(0x90),
        _0x45b20c(0xc7)
    ],
    'allstars5': [
        'Shea\x20Couleé',
        _0x45b20c(0x184),
        _0x45b20c(0x165),
        _0x45b20c(0x20b),
        _0x45b20c(0x261),
        'India\x20Ferrah',
        _0x45b20c(0x156),
        'Mayhem\x20Miller',
        _0x45b20c(0x2b0),
        _0x45b20c(0x28b)
    ],
    'allstars6': [
        _0x45b20c(0x1d6),
        _0x45b20c(0x212),
        _0x45b20c(0x19f),
        _0x45b20c(0x18a),
        _0x45b20c(0xb2),
        _0x45b20c(0x28e),
        _0x45b20c(0x77),
        _0x45b20c(0xf0),
        _0x45b20c(0x29e),
        _0x45b20c(0x167),
        _0x45b20c(0x133),
        _0x45b20c(0xef),
        _0x45b20c(0x123)
    ],
    'allstars7': [
        _0x45b20c(0x1f4),
        'Monét\x20X\x20Change',
        _0x45b20c(0xa3),
        'Trinity\x20The\x20Tuck',
        'Raja',
        _0x45b20c(0x132),
        _0x45b20c(0x194),
        _0x45b20c(0x15c)
    ],
    'allstars8': [
        _0x45b20c(0x1c1),
        'Lala\x20Ri',
        'Jessica\x20Wild',
        _0x45b20c(0x1bc),
        _0x45b20c(0x8c),
        _0x45b20c(0x12e),
        'Darienne\x20Lake',
        'Jaymes\x20Mansfield',
        _0x45b20c(0x208),
        _0x45b20c(0x1d9),
        'Naysha\x20Lopez',
        _0x45b20c(0x146)
    ],
    'allstars9': [
        _0x45b20c(0x150),
        _0x45b20c(0xd9),
        _0x45b20c(0x22d),
        _0x45b20c(0x2d6),
        _0x45b20c(0x80),
        _0x45b20c(0x2ad),
        _0x45b20c(0x2b4),
        _0x45b20c(0x1e5)
    ],
    'allstars10': [
        'Aja',
        _0x45b20c(0x96),
        _0x45b20c(0x176),
        _0x45b20c(0x119),
        _0x45b20c(0x240),
        _0x45b20c(0x282),
        _0x45b20c(0x2ad),
        _0x45b20c(0x2bb),
        'Lydia\x20B\x20Kollins',
        _0x45b20c(0x144),
        _0x45b20c(0x1de),
        _0x45b20c(0x289),
        _0x45b20c(0x28a),
        _0x45b20c(0x1da),
        _0x45b20c(0x2d7),
        _0x45b20c(0x298),
        _0x45b20c(0x1d4),
        _0x45b20c(0x18a)
    ]
};
function loadPredefinedCast(_0x3a5ec7) {
    const _0x339b2b = predefinedCasts[_0x3a5ec7];
    if (!_0x339b2b)
        return;
    chosenContestants = [], _0x339b2b['forEach'](_0x59ce55 => {
        const _0x3342d6 = _0x2dbf, _0x571313 = contestants['find'](_0x33eded => _0x33eded[_0x3342d6(0x232)] === _0x59ce55);
        _0x571313 && !chosenContestants['some'](_0x52924d => _0x52924d[_0x3342d6(0x232)] === _0x571313[_0x3342d6(0x232)]) && chosenContestants[_0x3342d6(0x1c6)](_0x571313);
    }), displayChosenContestants();
}
document[_0x45b20c(0xcc)]('DOMContentLoaded', function () {
    const _0x1a6fea = _0x45b20c, _0x5d1d86 = document[_0x1a6fea(0xd5)]('predefined-cast');
    _0x5d1d86 && _0x5d1d86[_0x1a6fea(0xcc)](_0x1a6fea(0x8e), _0x5dcdab => {
        const _0x5275ec = _0x1a6fea, _0x114400 = _0x5dcdab['target'][_0x5275ec(0x22b)];
        _0x114400 && loadPredefinedCast(_0x114400);
    });
});