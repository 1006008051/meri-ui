/*
 * @Author: wangyongcun
 * @Date: 2022-10-12 20:59:56
 * @LastEditors: wangyongcun
 * @LastEditTime: 2022-10-12 19:27:45
 * @Description: 复制构建之后的文件到相应的文件下
 */

import { mkdirSync, existsSync, writeFile } from 'fs';
export default (from = './', to = [], reg = /.css/) => {
    from = from.replace(/\\/g, '/');
    return {
        name: 'copyFile',
        transform(code: string, path: string) {
            console.log(path.includes('.less'), 154654654)
            if (!path.includes('?') && reg.test(path) && path.includes(from)) {
                to.forEach(t => {
                    let toPath = path.replace(from, t);
                    try {
                        let pathArr = toPath.split('/').slice(0, -1);
                        let _path = pathArr.join('/');
                        if (!existsSync(_path)) {
                            _path = '';
                            for (let i = 0; i < pathArr.length; i++) {
                                _path += `${pathArr[i]}/`;
                                if (!existsSync(_path)) mkdirSync(_path);
                            }
                        }
                    } catch (err) { }
                    if (path.includes('.less')) toPath = toPath.replace(reg, '.css');
                    writeFile(toPath, code, (err: any) => {
                        if (err) return console.error(err);
                    });
                })
            }
        }
    }
}