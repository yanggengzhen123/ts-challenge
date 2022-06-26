/*
 * @Author: yanggengzhen 15017290625@163.com
 * @Date: 2022-06-26 22:16:21
 * @LastEditors: yanggengzhen 15017290625@163.com
 * @LastEditTime: 2022-06-26 22:22:10
 * @FilePath: \ts-challenge\type-challenge\13.3060unshift\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Unshift<T extends unknown[], U> = [U,...T]