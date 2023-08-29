/*
* 安装 npm install @babel/core
* */
 
// 将JS源码转换成语法树
const parser = require("@babel/parser");
// 为parser提供模板引擎
const template = require("@babel/template").default;
// 遍历AST
const traverse = require("@babel/traverse").default;
// 操作节点，比如判断节点类型，生成新的节点等
const t = require("@babel/types");
// 将语法树转换为源代码
const generator = require("@babel/generator").default;

const { is_literal, visual_literal, visual_var_literal, to_dot_form, rm_unused_code,
    rm_unused_branch, simple_calc, multiple_define } = require('./common_plugins');

// 操作文件
const fs = require("fs");
//
const types = require('@babel/types');
const path = require('path');
var util = require('util');

 
var file_path = 'E:\\reverse\\补环境_new\\js_env_01\\'
var jscode = fs.readFileSync(file_path+"Indus-Spire-not-Accursedometience-make-numbe-if-.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode);

//调用插件，处理待处理 js ast 树
traverse(ast, visual_literal);
traverse(ast, visual_var_literal);
traverse(ast, simple_calc);
traverse(ast, multiple_define);

function a1_0x6bf7(_0x3cd9cd, _0x5e9d30) {
    var _0x2ba3f1 = a1_0x2ba3();
    return a1_0x6bf7 = function(_0x6bf7bb, _0x16a135) {
        _0x6bf7bb = _0x6bf7bb - 0x68;
        var _0x3aa58e = _0x2ba3f1[_0x6bf7bb];
        if (a1_0x6bf7['qXKVXX'] === undefined) {
            var _0x512e46 = function(_0x22cbb4) {
                var _0x3521c0 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var _0x1afdd3 = ''
                  , _0x4a968c = '';
                for (var _0x1c5865 = 0x0, _0x1509d9, _0x243d2a, _0x4782ed = 0x0; _0x243d2a = _0x22cbb4['charAt'](_0x4782ed++); ~_0x243d2a && (_0x1509d9 = _0x1c5865 % 0x4 ? _0x1509d9 * 0x40 + _0x243d2a : _0x243d2a,
                _0x1c5865++ % 0x4) ? _0x1afdd3 += String['fromCharCode'](0xff & _0x1509d9 >> (-0x2 * _0x1c5865 & 0x6)) : 0x0) {
                    _0x243d2a = _0x3521c0['indexOf'](_0x243d2a);
                }
                for (var _0xdee0a8 = 0x0, _0x12bd05 = _0x1afdd3['length']; _0xdee0a8 < _0x12bd05; _0xdee0a8++) {
                    _0x4a968c += '%' + ('00' + _0x1afdd3['charCodeAt'](_0xdee0a8)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x4a968c);
            };
            a1_0x6bf7['aSqnkM'] = _0x512e46,
            _0x3cd9cd = arguments,
            a1_0x6bf7['qXKVXX'] = !![];
        }
        var _0x11bc60 = _0x2ba3f1[0x0]
          , _0x690a5b = _0x6bf7bb + _0x11bc60
          , _0x28e96f = _0x3cd9cd[_0x690a5b];
        return !_0x28e96f ? (_0x3aa58e = a1_0x6bf7['aSqnkM'](_0x3aa58e),
        _0x3cd9cd[_0x690a5b] = _0x3aa58e) : _0x3aa58e = _0x28e96f,
        _0x3aa58e;
    }
    ,
    a1_0x6bf7(_0x3cd9cd, _0x5e9d30);
}

function a1_0x2ba3() {
    var _0x5d143d = ['uxvLCNLq', 'q09ps0Lf', 'Aw50zxjY', 'C2vSzG', 'B25ZDhj1', 'igfZigeG', 'CMnOugfY', 'B29RAwu', 'DxnLCKfN', 'Bwf4', 'ug9ZDa', 'x2fZyxa', 'vgv4De5V', 'zxr0Bgvb', 'zgvMyxvS', 'yxjYyxK', 'AxnqCM90', 'DMfSDwvZ', 'sxntzxq', 'DcbqCM9T', 'y3v0Aw5N', 'zxHWB3j0', 'CYbTDxn0', 'CY5JAgrP', 'ywDL', 'BwvZC2fN', 'B3jTrgf0', 'BgL6zvbY', 'y3jLzgvU', 'x3nLDefZ', 'BgfIzwW', 'C2v0uMvX', 'ig9YieHf', 'zw52', 'BgvUz3rO', 'DhjPz2DL', 'yNvZDgvY', 'yw1Z', 'ihrOzsbM', 'CNvU', 'C29SDMvY', 'DcbvAw50', 'uMvZCg9U', 'qvjz', 'igHHCYbU', 'DgLTzxjj', 'DwvZDhm', 'qvjzx0np', 'z09Uvg9R', 'y2HHCKf0', 'B19F', 'C3rYAw5N', 'mZK0odeWteXxz0v4', 'zsbWCM9T', 'CMLIDxrL', 'ChvZAa', 'yxbWBhK', 'tMv0D29Y', 'z2v0rw50', 'AgfSBgvU', 'y29Uy2f0', 'mda6mda6', 'A2v5CW', 'y2XVBMu', 'A2LWrxHW', 'zwrbDa', 'Dd11DgyT', 'v2vIs2L0', 'yvbHEwXV', 'DxjHyMXL', 'x19LEhrL', 'uhjVCgvY', 'BMLUzW', 'B3iGr0vu', 'zwXKig5H', 'CNjHEsb0', 'C2v0', 'otCWnerhzuDttW', 'zMLSDgvY', 'DcbjBNq4', 'B25SB2fK', 'AxnLxq', 'C2vUDa', 'C3rHCNrj', 'txv0yxrP', 'y3vYCMvU', 'x19Nzw5L', 'B3qGywXS', 'C2v0vg9R', 'BNrmAxn0', 'zMLUzfnJ', 'BwLZzsC6', 'D2L0AenY', 'Bg9N', 'DxjUihrO', 'zgf0yq', 'CYbHBIbH', 'Dwn0B3i', 'tgLZDgvU', 'Cg93', 'zM9YBs11', 'AwvUDa', 'y29UDgvU', 'Axn0zw5L', 'AxnLlG', 'B2jHBenH', 'DxbKyxrL', 'zw50CMLL', 'y2f0y2G', 'zxnZxq', 'BMD0Aa', 'mZiXA2j4rwHq', 'ugvYzM9Y', 'AgfZt3DU', 'C3nHz2u', 'Bg9I', 'CMLWDg9Y', 'vhLWzq', 'CIbJyw5U', 'yxjRCW', 'DgLVBG', 'Axb0ihDP', 'B25LCNjV', 'C2nYAxb0', 'zxH0zw5K', 'x2vUDw1L', 'BML0', 'x3DPBgXt', 'C3bSAxq', 'Aw5JBhvK', 't1busu9o', 'Aw1LCG', 'sevbra', 'mZjbCNjH', 'CMvWBgfJ', 'B3j0zwqG', 'y2fSBa', 'BNvTyMvY', 'DgvUDeXV', 'C3rYDwn0', 'uMvSB2fK', 'CLrPBwvn', 'B3qGC3vW', 'qxjYyxKG', 'BgvNywn5', 'ue9tva', 'C2v0u2vJ', 'ifbSzwfZ', 'B25pyNnL', 'CMvMzxjY', 'ChjLDMLV', 'BwfYA3m', 'Aw9Us2v5', 'CMLLC0j5', 'BgvKigjL', 'yMv0yq', 'rg9TywLU', 'C3vIC3rY', 'BIb0AgLZ', 'qwXYzwfK', 'BM9Uzv9Z', 'zw5LCG', 'B3r5Cgvp', 'zgvIDwC', 'yxjHBq', 'y2HHCNnL', 'B25szxnW', 'zwn0Aw9U', 'DMvY', 'mJyYmgTkA2Dcza', 'Dg9izxHt', 'ze9Uy2vm', 'ihrVignV', 'B25qCM90', 'B25uAw1L', 'ywqGrM9Y', 'B2DSzxXN', 'x3jLC3vS', 'zvnJCMLW', 'vvjmu2vH', 'B3jTyw5J', 'Dcb0BYb0', 'qwXStgLZ', 'y2f1C2uG', 'q2HPBgq', 'rMfPBgvK', 'AgfYC2v0', 'CgfYC2u', 'C3rHCNq', 'zxjYB3i', 'ywXS', 'Aw1L', 'CMvHzefZ', 'CM9NyxrV', 'yxjZzxq9', 'ANnVBJSG', 'BLnLyW', 'zgvY', 'y3jLyxrL', 'zeXPC3rL', 'j1bpu1qG', 'AxrOigL0', 'C2v0uhjV', 'BNrLCM5H', 'BgL0EwnO', 'DMvYDhG', 'BMvYCY1N', 'twv0Ag9K', 'BMf2AwDH', 'C29SDMu', 'DenVB2TP', 'yM1PDenH', 'CMvUzxDu', 'CMLIzxjZ', 'ChrJAge', 'igeGChjV', 'B2jZzxj2', 'yxLD', 'ChjLCgvU', 'B29NBgv8', 'DgHYB3C', 'q29VA2LL', 'CNvUtgf0', 'CMvHzhLt', 'C2L0zt1S', 'Bg9HzgLU', 'C3rVCeLU', 'DMfSAwrH', 'y2fZDa', 'igzHAwXL', 'x2LUC3rH', 'u2v0DgXL', 'B25LoYbZ', 'BwLZzq', 'zg9Uzq', 'Dgf0zq', 'rgf0zvrP', 'zgvYigzP', 'z2v0rwXL', 'qxjYyxLD', 'Cg9ZDgjH', 'DgvcAw5K', 'ig51BgW', 'B2zM', 'tM9Ulw9R', 'CNvUt25m', 'rwXLBwvU', 'DxbWB3j0', 'qM9KEsbU', 'u3LTyM9S', 'yM9U', 'x3jLBwfP', 'CMf0zq', 'Cg9ZDe1L', 'AgvHzgvY', 'Dg9tDhjP', 'BIbKzwzP', 'DhjPBq', 'ihrOAxm', 'CKnHC2u', 'zxn0lvvs', 'D3jPDgfI', 'DcaNuhjV', 'DxnFDg9R', 'zc4Gu2H1', 'Bg9JyxrP', 'y2aGyxr0', 'x2vHy2Hf', 'zxjHDg9Y', 'EwfUzgv4', 'BwvUDhnc', 'CYb2ywX1', 'Cg9UC2u', 'zNjVBunO', 'C2vUza', 'x05btuu', 'ufjjtufs', 'BwLZzsbJ', 'x19WCM90', 'EsbYzwfK', 'uMvXDwvZ', 'Ec1KlxrL', 'BMvY', 'DgvYBMfS', 'qM9KEuLU', 'zcbZDgf0', 'vgv4Da', 'x19LC01V', 'CMvZCg9U', 'ywDLpq', 'CMvUzxDj', 'igfUiefY', 'zwrbCNjH', 'BMrZ', 'zNvU', 'igLZig5V', 'zgvKo2nO', 'r2vUzxjH', 'C2nOzwr1', 'zM9YBurH', 'CYbHihjL', 'BYbYywnL', 'Dw1HC2S', 'yxbWBgLJ', 'zw5HyMXL', 'z2v0', 'Ag9VlMfK', 'C29SDxrP', 'B21PDa', 'uMvJyxb0', 'B3bLBG', 'DcbgBg9H', 'C2vHCMnO', 'DMvYC2LV', 'quqGCMvX', 'CIbPCYbU', 'Bgf4', 'BM5VDcbY', 'B3qGCMv0', 'nKfYCMf5', 'zsbJAgfS', 'C3rHCNrL', 'tg9HzgvK', 'yxmGBM90', 'uMvJB3zL', 'yMXVyG', 'BNrYEq', 'ihn0yxr1', 'ihrVigzP', 'BMnLq29U', 'x2jVzhLg', 'x2jVzhLj', 'zwn1CMu', 'Cg9YDgvK', 'Aw5NigLZ', 'zwqU', 'ugfYyw1Z', 'BMv4Da', 'B25SAw5L', 'DgLTzxi', 'zMv0y2G', 'CMfUzg9T', 'revmrvrf', 'qxjYyxLc', 'CMf5', 'B3r8BwvK', 'z2uGC2nY', 'zw91DcbO', 'ywXSzw5N', 'B25Tzw50', 'rNvSBa', 'Awz5', 'lMnVBs9I', 'ihn0yxj0', 'BwvHC3vY', 'B25KCW', 'DhrPBMCG', 'CMvZB2X2', 'CNrtDgfY', 'qsbWCM9T', 'x3n0yxj0', 'C29NB3v8', 'Dw5ZDxbW', 'zsb1C2uG', 'ywXZ', 'AwXLza', 'DcbPCYb1', 'EwfOB28H', 'z2v0u2vJ', 'CYbJB2rL', 'Dg90ExbL', 'jZOG', 'zhzHBMnL', 'CNzLCG', 'AgvKDwXL', 'zM9YrwfJ', 'DcbHignV', 'Dg9Y', 'AxrLCMf0', 'pvrODsWG', 'yM90lwDV', 'CMvTB3zL', 'y3rVCG', 'zxjZ', 'DcbWCM9J', 'zxrYAwvK', 'u291CMnL', 'yNjVD3nL', 're9nq29U', 'yxqGC2fT', 'AguGChjV', 'yMLUz2jV', 'r0vu', 'ywn0zxiG', 'y291BNq', 'rxHWAxj5', 'Dg9Rzw4', 'DwvYEq', 'mdeGr01u', 'Bwf0y2G', 'zxnVBhzL', 'AgvJAW', 'Dc10ExbL', 'Dw5KzwzP', 'CMv0DxjU', 'AgfZ', 'DgvZDa', 'zhvYyxrP', 'zhvSzq', 'yw5Nzq', 'C2HPzNq', 'zw91Da', 'vgLTzw91', 'vg9Rzw5s', 'nf9WzxjM', 'CMXLBMnV', 'p2nHy2HL', 'x2jVzhLu', 'igfSCMvH', 'DgLVBKXV', 'ywrKrxzL', 'u0vdt05e', 'y2HH', 'pvvurI04', 'qM9Uu2vY', 'Aw5PDgLH', 'EvrHz05H', 'Ddy0qxjY', 'Dhj1zq', 'zgf0ys1H', 'BMvK', 'zNvUy3rP', 'BgLZDgvU', 'zgvMAw5L', 'DhLezxnJ', 'x3nLDfnJ', 'B25Jzq', 'DgHLicDU', 'yMLUza', 'zw1PDa', 'mdeGsMfU', 'DgLHBhm', 'yM9KEq', 'CYb0zxH0', 'oefYCMf5', 'vg9Rzw4', 'x2XHyMvS', 'ufvu', 'DcbjBNqZ', 'Dhj5CW', 'BwfW', 'DcbbCNjH', 'B25Zzq', 'zxH0', 'zsbMB3jT', 'y2HKAxi', 'ihvUA25V', 'DgvY', 'psHBxJTD', 'B3jPBMD8', 'y3rLzcb0', 'BMfTzq', 'BNn0CNvJ', 'wc1szxf1', 'zwfZDxjL', 'kf58icK', 'B2TLBIbY', 'DdmYqxjY', 'ChjVy2vZ', 'B3r8yMLU', 'CNjVCG', 'zcbJAgfY', 'ifSG', 'AxjHDgLV', 'A2vU', 'B24U', 'igjLzw4G', 'DgL0Bgu', 'CgLKzxj8', 'oYbTyxGT', 'B2jQzwn0', 'Ec1KlxrV', 'y2fSBgjH', 'CYbIBg9I', 'DwvZDeHL', 'x19HD2fP', 'zwrLBNrP', 'BwfUy2u', 'uK9uta', 'mtCYB2TjC3nN', 'CgfNzxnO', 'DwzMzxi', 'ww91ig11', 'wv9dt09l', 'CIbMB3iG', 'zw50', 'BMqGysbJ', 'yNvMzMvY', 'DxjS', 'CY5IAw5K', 'y2HfBMDP', 'BwfYAW', 'zxCNig9W', 'ywXSyMfJ', 'rMLSzvjL', 'sw5PDgLH', 'zMLUywXS', 'C3vTBwfY', 'yxjdB2rL', 'C2XPy2u', 'ChjVBwLZ', 'y29VA2LL', 'B29W', 'C2vizwfK', 'DhLWzq', 'yNvPBgrd', 'C2L0zt1U', 'BgfPBJTJ', 'DgLVBIbO', 'Ahr0CenS', 'Dg9mB3DL', 'AgfZAa', 'y2fSBeDS', 'yxbWzw5K', 'sgvHzgvY', 'ptSGCgf0', 'x19LEhbV', 'sw52ywXP', 'CgvYzM9Y', 'vw5HyMXL', 'lNnSDxjW', 'igvUDMLY', 'Bwv0Ag9K', 'Aw5N', 'Dcb3AgLS', 'y3DK', 'C3rHy2S', 'DcbjBNqX', 'CNvUt25d', 'mKfYCMf5', 'zcbVDxq', 'Ad0VoYbL', 'y2HHCKnV', 'BgvY', 'BgfPBJSG', 'Cg9SEwzP', 'DMfSDwu', 'B3qGyMvL', 'igvYCM9Y', 'B3v0', 'ChjVDg90', 'AxrLCMfI', 'Aw49', 'Dg90ywW', 'BMnYExb0', 'B3qGyMuG', 'Cg9W', 'zxH0CMfJ', 'rxjYB3i', 'oYbKB21H', 'D24GChjV', 'ywjSzsbP', 'CMvLC2vs', 'DhXTC25I', 'Bw9Kzq', 'BgWGzMfP', 'EhbPCNLd', 'Ec13D3CT', 'CMvLC2vt', 'C3rVCa', 'B3bZ', 'z2XVyMfS', 'ANnVBG', 'zMLYzq', 'C2v0vgLT', 'CMvXDwLY', 'BM90ihjL', 'x29UzxjY', 'yxrPB24V', 'CMvYDw4', 'B2XKx3rV', 'x3n0yxrL', 'DgLVBLn1', 'zsbYzxrY', 'nde1nJe0zgXMBvfS', 'CMf0B3i', 'AM9PBG', 'ihrVA2vU', 'A2LWqxv0', 'AxntzwfY', 'EhbPCMvZ', 'mtm0otaXww1Uv2z5', 'z3bYzxzP', 'CMfJzq', 'zMXVB3i', 'zMLUzenO', 'ywrLza', 'otm1mtKZt2jKqMTn', 'qxv0B2XV', 'DgLTzxjg', 'C2vvuKW', 'CNjHEuj1', 'BwfUy2vu', 'Dg9vChbL', 'yxjNDG', 'ywrLCG', 'oYbWyxrO', 'z2v0t3DU', 'DxmGy29K', 'B250zxH0', 'yxjYyxLc', 'C3qGCgfZ', 'B2DHDgu', 'DcbJB25Z', 'B250Aw1L', 'AxjZDcbH', 'zxnWB25Z', 'Aw4GAgvH', 'B0XVywq', 'CMD1BwvU', 'Dg9Yig9Y', 'C3vIBwL0', 'yNL0zuXL', 'rM9YBurH', 'yM9KEvvZ', 'z2v0qxr0', 'DgvUzxi', 'x2jVzhLb', 'CMfIBgvf', 'Awv2Aw5N', 'AYbYzxf1', 'zgvSzxrL', 'CMvLC2u4', 'y29UC3rY', 'Ag9ZDg5H', 'B2DHDgLV', 'oenSyw1W', 'Dgv4Da', 'ww91ignH', 'rMfJDg9Y', 'yMLUzgLU', 'BgvUz2uG', 'DhLoyw1L', 'z2v0sxrL', 'oYbZyw1L', 'Cg9YDdi', 'DgvUzxjZ', 'Aw5NihrO', 'ywn0B3j5', 'Cg9YDde', 'Dgv4Dc9W', 'Dg9Rzw5f', 'y2vPBa', 'uhjVBwLZ', 'x05btuvF', 'B3rLy3rP', 'ExbL', 'ig5VDcbZ', 'CMvJyxb0', 'ig9IAMvJ', 'u2nOzwr1', 'uM9IDxn0', 'CMvQzwn0', 'BMv4DfrP', 'u2HHmG', 'zgvbDa', 'B3DLzcbM', 'CMvKDwnL', 'y2XLyxju', 'ysb0Aw1L', 'zhKGzxHL', 'vvrgltG', 'mtz3y2jLqNa', 'D2fPDgLU', 'w29IAMvJ', 'y29UzMLN', 'zunVB2TP', 'mJC5mJGXmMHuu0nhza', 'C3rHDhvZ', 'zNjVBvrV', 'tM9Kzq', 'zxD8ywrZ', 'AxnbCNjH', 'zNjVBuPZ', 'Dhj1y3rV', 'y2TvCMW', 'x3nLDhrS', 'x2LUAxrc', 'z2v0qwXS', 'C3rYAxbr', 'vw5LEhbL', 'y291BgqG', 'z2v0vgLT', 'BwvY', 'ngLUDgvY', 'Aw9UigfZ', 'DgGGyhnY', 'yMfPzhvZ', 'C2vuzxH0', 'B29NBgvI', 'DfrVA2vU', 'A2vUuMvZ', 'zxjYB3i6', 'CMv0CNK', 'BwLZzsb3', 'B3rZFhLH', 'u29SDxrP', 'BurHDgeG', 'y2fSBgvK', 'AxqGDhLW', 'DcbLCNjV', 'ide5nZaG', 'C2v0sxrL', 'Aw5KzxHp', 'mtbWuKDou0W', 'B25TzxnZ', 'lM1VBML0', 'AwfWyxj0', 'ChjVDgvJ', 'CMvZDwX0', 'CMLWDej5', 'x19JCMvH', 'igjLihbY', 'igz1BMn0', 'CMvKAxjL', 'BMf2ywLS', 'qMXVyG', 'z2v0vg9R', 'y2XLyxjn', 'ywrKtgLZ', 'x2jVzhLc', 'r2v0', 'lcb0AgLZ', 'C2vuExbL', 'DgHLBG', 'x3n0B3a', 'BwLU', 'zMzLCG', 'BgXIywnR', 'DMLZAwjP', 'AxnwAwv3', 'BgL6zwq', 'B2r5', 'Dg9YigLZ', 'q2fWDgnO', 'yM9KEsbH', 'mtzbCNjH', 'BM93', 'x3n1yNnJ', 'AxnLCYbJ', 'yvbYB3zP', 'uhjVDgvJ', 'Aw1LB3v0', 'B2DHDg9Y', 'B3zPzgvK', 'q2XHC3mG', 'zg93BI4', 'AYbJyw5U', 'zxn0igzH', 't0Tjrq', 'BKnOzwnR', 'C3jJ', 'CgfYzw50'];
    a1_0x2ba3 = function() {
        return _0x5d143d;
    }
    ;
    return a1_0x2ba3();
}

(function(_0x1f5264, _0x3c248d) {
    var _0x17bf7a = a1_0x6bf7
      , _0x3917f1 = _0x1f5264();
    while (!![]) {
        try {
            var _0xc26dba = -parseInt(_0x17bf7a(0x73)) / 0x1 * (-parseInt(_0x17bf7a(0x22e)) / 0x2) + parseInt(_0x17bf7a(0x1f4)) / 0x3 * (-parseInt(_0x17bf7a(0x1d2)) / 0x4) + parseInt(_0x17bf7a(0x1b9)) / 0x5 + parseInt(_0x17bf7a(0xd2)) / 0x6 + -parseInt(_0x17bf7a(0xdf)) / 0x7 * (-parseInt(_0x17bf7a(0x12a)) / 0x8) + parseInt(_0x17bf7a(0xd9)) / 0x9 * (parseInt(_0x17bf7a(0x154)) / 0xa) + -parseInt(_0x17bf7a(0x12f)) / 0xb;
            if (_0xc26dba === _0x3c248d)
                break;
            else
                _0x3917f1['push'](_0x3917f1['shift']());
        } catch (_0x250ba0) {
            _0x3917f1['push'](_0x3917f1['shift']());
        }
    }
}(a1_0x2ba3, 0x22bb8));



const ob_replace_call_expression = {
    VariableDeclarator(path) {
        let { scope, node } = path;
        let { id, init } = node;
        if(!types.isArrayExpression(int)) {
            return;
        }
        for (let element of init.elements) {
            if (!is_literal(element)) {
                return;
            }
        }
        let binding = scope.getBinding(id.name);
        if (binding.referencePaths.length < 2) {
            return;
        }
        let eval_str = path.parentPath.toString();
        // 解密函数位置
        let func_start, func_end, tmp_array = [];
        for (let refer_path of binding.referencePaths) {
            let parent_path = refer_path.findParent(p => p.isCallExpression()) || refer_path.findParent(p => p.isFunctionDeclaration())
            if (!parent_path) {
                return;
            }
            if (parent_path.isFunctionDeclaration()) {
                func_start = parent_path.node.start;
                func_end = parent_path.node.end;
                decode_func_name = parent_path.node.id.name;
            }
            else {
                parent_path = parent_path.parentPath;
                if (!types.isExpressionStatement(parent_path)) {
                    return;
                }
            }
            eval_str += '\n' + parent_path.toString()
            tmp_array.push(parent_path);
        }

        let eval_str_ast = parser.parse(eval_str);
        // 防止检测代码格式化
        eval_str = generator(eval_str_ast, { 'compact': true }).code;
        // 执行自执行函数更新数组，将解密函数定义到本地环境
        eval(eval_str);

        let remove_flag = true;
        _binding = scope.getBinding(decode_func_name);
        for (let refer_path of _binding.referencePaths) {

            let parent_path = refer_path.findParent(p => p.isCallExpression())
            if (!parent_path) {
                continue
            }
            if (decode_func_name !== parent_path.node.callee.name) {
                continue;
            }
            let parent_start = parent_path.node.start;
            let parent_end = parent_path.node.end;
            if (parent_start >= func_start && parent_end <= func_end) {
                continue;
            }

            try {
                let call_return = eval(parent_path.toString());
                console.log(parent_path.toString() + ' => ' + call_return);
                parent_path.replaceWith(types.valueToNode(call_return));
            } catch (e) {
                remove_flag = false;
                console.log(parent_path.toString() + ' => do nothing');
            }
        }
        if (remove_flag) {
            for (let tmp_path of tmp_array) {
                tmp_path.remove();
            }
        }
        path.remove();
        scope.crawl();
    }

}

traverse(ast, ob_replace_call_expression);


// function traverse_all(ast) {
//     // 遍历节点，当遇到下列类型的时候会调用函数
//     traverse(ast, {
//         CallExpression: {
//             enter: [replace_function_to_string]
//         }
//     })
//     traverse(ast, {
//         MemberExpression: {
//             enter: [replace]
//         }
//     })
 
 
// }
// a["length"]转变为a.length
function replace(path)
{
    const node = path.node;
    let property = path.get('property')
    if(t.isStringLiteral(node.property)) {
        let value  = node.property.value;
        console.log(value)
        //原为true,改后的效果把[]变为.
        node.computed = false
        //如果写成path.replaceWith是将整个MemberExpression节点换为value，节点类型也变为Identifier，例：window.btoa变为btoa
        //我们仅需要替换property节点
        property.replaceWith(t.Identifier(value))
        }
}
 
//调用进行解密，在替换原来的
function replace_function_to_string(path)
{//对节点进行处理
  const node = path.node;
  //判断节点类型及函数名，不是则返回
  if (!t.isIdentifier(node.callee,{name:"_0x5c3a"})) return;
  //取实参值
  let first_arg  = node.arguments[0].value;
  let second_arg = node.arguments[1].value;
  //调用本地的_0x5c3a函数
  let value = _0x5c3a(first_arg,second_arg);
  //打印看结果
  console.log(node.callee.name,first_arg,second_arg,value);
  //替换CallExpression节点，为StringLiteral类型的value
  path.replaceWith(t.StringLiteral(value));
}
 
let {code} = generator(ast);
fs.writeFile(file_path+'1_decoded.js', code, (err)=>{});