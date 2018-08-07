import React from 'react'
import Bullet from './Bullet'

import { LIGHTGREY } from '../../config/styles'

const images = {
  team:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjggMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iTW9iaWxlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibGFuZGluZy0tLXRyYWluaW5nLU1PQklMRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyLjAwMDAwMCwgLTM0OC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ni4wMDAwMDAsIDMzNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiwxNy41IEMxNiwxNS41OTQxOTYzIDE3LjU1MDk0NywxNCAxOS41LDE0IEMyMS40NDkwNTMsMTQgMjMsMTUuNTUwOTQ3IDIzLDE3LjUgQzIzLDE5LjQ0OTA1MyAyMS40NDkwNTMsMjEgMTkuNSwyMSBDMTcuNTUwOTQ3LDIxIDE2LDE5LjQwNTc1OTQgMTYsMTcuNSBaIE0yOC41MDAwMDA3LDE4IEMzMC40MDU4MDQsMTggMzIsMTYuNDQ5MDUzIDMyLDE0LjUgQzMyLDEyLjU1MDk0NyAzMC40NDkwNTMzLDExIDI4LjUwMDAwMDcsMTEgQzI2LjU5NDE5NzQsMTEgMjUuMDAwMDAxNCwxMi41NTA5NDcgMjUuMDAwMDAxNCwxNC41IEMyNC45OTgyNjg4LDE2LjQ0OTA1MyAyNi41OTQyNDE3LDE4IDI4LjUwMDAwMDcsMTggWiBNMTEuNSwxOCBDMTMuNDA1ODAzNywxOCAxNSwxNi40NDkwNTMgMTUsMTQuNSBDMTUsMTIuNTUwOTQ3IDEzLjQ0OTA1MywxMSAxMS41LDExIEM5LjU1MDk0NzAzLDExIDgsMTIuNTUwOTQ3IDgsMTQuNSBDOCwxNi40NDkwNTMgOS41NTA5NDcwMywxOCAxMS41LDE4IFogTTMzLjM4NDU3NzcsMjAuNzgwMDYyNCBDMzIuOTE2Nzk1NSwyMC4yNzQzNDQgMzIuMjYyNjQ4OCwyMCAzMS42MDY2MzExLDIwIEwyNS4wMTE4Mzc3LDIwIEMyNC4zMTAxNjQ0LDIwIDIzLjY1NjAxNzgsMjAuMjc2MTYxOSAyMy4yMzM4OTExLDIwLjc4MDA2MjQgQzIzLjE0MDY5OTUsMjAuODcxNTE5NiAyMy4wOTMxOTE2LDIwLjk2Mjk3NjggMjMsMjEuMTAxMDU3OCBMMjMuMjgxMzk5MSwyMS4xMDEwNTc4IEMyNC4zNTc2NzIzLDIxLjEwMTA1NzggMjUuMzg2NDE4OSwyMS41NjAxMzQxIDI2LjEzNTYxODksMjIuMzQwMTk2NSBDMjYuODM3MjkyMiwyMy4xMjAyNTkgMjcuMTY0MzY1NSwyNC4yMjMxNDM5IDI3LjAyMzY1NjYsMjUuMjc3NTUwMyBMMjYuMjI4ODAxMSwzMS4yNDU1NDIyIEMyNi4xMzU2MDk2LDMxLjkzNDE1NjcgMjUuNzEzNDkyMywzMi40ODQ2ODEgMjUuMTUyNTI3OCwzMi44MDU2NjcxIEwyNS4xNTI1Mjc4LDMzLjMxMTM4NTYgQzI1LjE1MjUyNzgsMzMuNjc5MDA0NyAyNS40Nzk2MTA1LDM0IDI1Ljg1NDIwMTEsMzQgTDMwLjc2NTkxNDIsMzQgQzMxLjE0MDUwNDgsMzQgMzEuNDY3NTg3NSwzMy42NzkwMDQ3IDMxLjQ2NzU4NzUsMzMuMzExMzg1NiBMMzEuNDY3NTg3NSwyOS4xODE0ODkzIEwzMi40OTYzMzQxLDI5LjE4MTQ4OTMgQzMyLjg3MDkyNDcsMjkuMTgxNDg5MyAzMy4xNTA0ODA3LDI4LjkwNTMyNzMgMzMuMTk4MDA3NCwyOC41ODQzMjI4IEwzMy45OTI4NjI5LDIyLjYxNjMzMDkgQzM0LjA0MDM3MDksMjEuOTI3NzE2NSAzMy44NTIxNjM0LDIxLjI4NTc0NDIgMzMuMzg0MzcxOCwyMC43ODAwMjU3IEwzMy4zODQ1Nzc3LDIwLjc4MDA2MjQgWiBNMTMuNzYyNTc1NiwzMS4yODM0NTI3IEwxMi45NjU1OTcyLDI1LjI5NjI5NzQgQzEyLjgyNDUyMTksMjQuMjM2NjYzIDEzLjE1MjQ3ODEsMjMuMTc3MDI4NyAxMy44NTYwMDY3LDIyLjM0OTUxMTcgQzE0LjU1OTU1MzksMjEuNTY2OTQ0NSAxNS41OTEwNDgxLDIxLjEwNjM5NDEgMTYuNzE3ODQ5NCwyMS4xMDYzOTQxIEwxNywyMS4xMDYzOTQxIEMxNi45NTIzNjUyLDIxLjAxNDY0MzIgMTYuODU4OTI0NywyMC44NzYxMTg4IDE2Ljc2NTQ4NDIsMjAuNzg0MzY4IEMxNi4yOTY0NTI3LDIwLjI3NzAyNTcgMTUuNjQwNTU5LDIwLjAwMTgwMDggMTQuOTgyNzg5MiwyMC4wMDE4MDA4IEw4LjM2ODUwNjcsMjAgQzcuNjY0OTU5NDIsMjAgNy4wMDkwNjU3NCwyMC4yNzcwNDg3IDYuNTg1ODExNjksMjAuNzgyNTcxOSBDNi4xMTY3ODAxNywyMS4yODk5MTQyIDUuOTI5OTE4MDEsMjEuOTgwNzM1MiA2LjAyMzM0OTA5LDIyLjYyNDc3MzUgTDYuODIwMzI3NDUsMjguNjExOTI4NyBDNi44Njc5NjIzLDI4LjkzMzk1NDggNy4xNDgyODM2NywyOS4yMTEwMDgxIDcuNTIzODc0NzQsMjkuMjExMDA4MSBMOC41NTUzNjg4NiwyOS4yMTEwMDgxIEw4LjU1NTM2ODg2LDMzLjMwOTE3NDQgQzguNTU1MzY4ODYsMzMuNjc3OTczOSA4Ljg4MzMyNTA4LDM0IDkuMjU4OTE2MTQsMzQgTDE0LjE4Mzc0NzEsMzQgQzE0LjU1OTMzODIsMzQgMTQuODg3Mjk0NCwzMy42Nzc5NzM5IDE0Ljg4NzI5NDQsMzMuMzA5MTc0NCBMMTQuODg3Mjk0NCwzMi44MDE4MzIxIEMxNC4yNzcxNzgyLDMyLjUyNjU3OTUgMTMuODU1ODAwMywzMS45Mjc1MjMyIDEzLjc2MjM2OTIsMzEuMjgzNDQzNCBMMTMuNzYyNTc1NiwzMS4yODM0NTI3IFogTTI0LjQwNjg3MDIsMjMuNzg0MzY4MyBDMjMuOTU1MjQ3NCwyMy4yNzcwMjU4IDIzLjMyMzY5OCwyMy4wMDE4MDA4IDIyLjY5MDM0MjIsMjMuMDAxODAwOCBMMTYuMjc3NzQ5NywyMyBDMTUuNjAwMzE1NSwyMyAxNC45Njg3NjYxLDIzLjI3NzA0ODggMTQuNTYxMjIxNywyMy43ODI1Njc1IEMxNC4xNTU0NjU3LDI0LjI4OTkxIDEzLjkyOTY3MjMsMjQuOTgwNzM1OCAxNC4wMTk2MzU2LDI1LjYyNDc2OTcgTDE0Ljc4NzAzMzEsMzEuNjExOTI2OSBDMTQuODMyODk5OSwzMS45MzM5NTMxIDE1LjEwMjgxNjgsMzIuMjExMDExMSAxNS40NjQ0NjczLDMyLjIxMTAxMTEgTDE2LjQ1NzY3NjMsMzIuMjExMDExMSBMMTYuNDU3Njc2MywzNi4zMDkxNzQyIEMxNi40NTc2NzYzLDM2LjY3Nzk3MzggMTYuNzczNDYsMzcgMTcuMTM1MTEwNSwzNyBMMjEuODc3MTUwMSwzNyBDMjIuMjM4ODAwNywzNyAyMi41NTQ1ODQ0LDM2LjY3Nzk3MzggMjIuNTU0NTg0NCwzNi4zMDkxNzQyIEwyMi41NTQ1ODQ0LDMyLjIxMTAxMTEgTDIzLjU0Nzc5MzMsMzIuMjExMDExMSBDMjMuOTA5NDQzOCwzMi4yMTEwMTExIDI0LjE3OTM0MjYsMzEuOTMzOTYyMyAyNC4yMjUyMjc1LDMxLjYxMTkyNjkgTDI0Ljk5MjYyNSwyNS42MjQ3Njk3IEMyNS4wNDAyNTc3LDI0LjkzNTc0IDI0Ljg1ODU1MTgsMjQuMjg5OTEgMjQuNDA2OTE1NCwyMy43ODQzNjM3IEwyNC40MDY4NzAyLDIzLjc4NDM2ODMgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  react:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjUgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJNb2JpbGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsYW5kaW5nLS0tdHJhaW5pbmctTU9CSUxFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQuMDAwMDAwLCAtNDY3LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTgtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYuMDAwMDAwLCA0NTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC41Njc5MDQ2LDYuNDg0OTkyOTQgQzIzLjQ0MDgxNjYsNC42ODYwNDk4MyAyMC42NTYxNDMxLDQuNDIxMTczMzMgMTcuMzcwMjYzNCw1LjA5OTUyMTM1IEMxNy4yNDU1NzUyLDQuNzQ1OTU5NTcgMTcuMTE5NjY2Niw0LjQyMTE3MzMzIDE2Ljk5NDk4NDcsNC4wOTc1NjY0MSBDMTUuODY3ODk2NiwxLjQ0NDA4NDA2IDE0LjI3MjY0OSwwIDEyLjQ4OTI2MTMsMCBDMTAuNzA1NzQ4NCwwIDkuMTA5MTg2NDMsMS40NzQxNTY4NiA3Ljk4MzUzNzk0LDQuMDk3NTY2NDEgQzcuODU4ODQ5NzYsNC40MjIzNTI2NSA3LjczMjk0MTExLDQuNzQ1OTU5NTcgNy42MDgyNTkxOSw1LjA5OTUyMTM1IEM0LjMyMjM3OTUzLDQuNDIxMTczMzMgMS41Mzc4MzEyMiw0LjY4NzIyOTE2IDAuNDEwNjE4MDI5LDYuNDg0OTkyOTQgQy0wLjAyNjk5ODU1MzEsNy4yMjIwNzEzNyAtMC4xMjExMzE4MDgsOC4xMDY1NjU0OCAwLjE2MDAyMTE5OSw5LjEwODUyMDQyIEMwLjUwNDc1NjkxNywxMC4zMTc4MDA4IDEuNDExNzg0ODgsMTEuNjczMzE3NSAyLjcyNTg4NjM5LDEyLjk5OTk5OTcgQzEuNDExNzg0ODgsMTQuMzU2Njk1NyAwLjUwMzUwNTE1MywxNS43MTIyMTI1IDAuMTYwMDIxMTk5LDE2Ljg5MTQ3OSBDLTAuMTIxMTM4MDY3LDE3Ljg2NDY1ODQgLTAuMDI4MjMxNTQwNCwxOC43Nzc5MjggMC40MTA2MTgwMjksMTkuNTE1MDA2NSBDMS4xNjExNzU1MywyMC43MjQyODY4IDIuNjk1MzM3MSwyMS4yNTQwMzk4IDQuNjAzNDAwNDcsMjEuMjU0MDM5OCBDNS41NDIyMjMyMywyMS4yNTQwMzk4IDYuNTQzMzgzODIsMjEuMTM2NTY3MiA3LjYwODEzNDAxLDIwLjkwMDQ3ODEgQzcuNzMyODIyMTksMjEuMjU0MDM5OCA3Ljg1ODczMDg0LDIxLjU3ODgyNjEgNy45ODM0MTI3NiwyMS45MDI0MzMgQzkuMTEwNTAwNzgsMjQuNTU1OTE1MyAxMC43MDU3NDg0LDI2IDEyLjQ4OTEzNjEsMjYgQzE0LjI3MjY0OSwyNiAxNS44NjkyMTEsMjQuNTI1ODQyNSAxNi45OTQ4NTk1LDIxLjkwMjQzMyBDMTcuMTE5NTQ3NywyMS41Nzc2NDY4IDE3LjI0NTQ1NjMsMjEuMjU0MDM5OCAxNy4zNzAxMzgyLDIwLjkwMDQ3ODEgQzE4LjQzMzYzNjcsMjEuMTA2NjMwMSAxOS40NjY1OTIsMjEuMjU0MDM5OCAyMC4zNzQ4NzE4LDIxLjI1NDAzOTggQzIyLjI4NDMxMjEsMjEuMjU0MDM5OCAyMy44MTcyMjE5LDIwLjc1MzA2MjQgMjQuNTY3NjU0MiwxOS41MTUwMDY1IEMyNS4wMDUyNzA4LDE4Ljc3NzkyOCAyNS4wOTk0MDM0LDE3Ljg5MzQzMzkgMjQuODE4MjUxLDE2Ljg5MTQ3OSBDMjQuNDczNTE1MywxNS42ODIxOTg2IDIzLjU2NjQ4NzQsMTQuMzI2NjgxOSAyMi4yNTIzODU5LDEyLjk5OTk5OTcgQzIzLjU2NjQ4NzQsMTEuNjQzMzAzNyAyNC40NzQ3NjcxLDEwLjI4Nzc4NjkgMjQuODE4MjUxLDkuMTA4NTIwNDIgQzI1LjEyOTk2ODQsOC4xMDY1NjU0OCAyNS4wMzcwNjU2LDcuMjIyMDcxMzcgMjQuNTY3NjU0Miw2LjQ4NDk5Mjk0IEwyNC41Njc5MDQ2LDYuNDg0OTkyOTQgWiBNMTIuNSwxLjg1NzE0Mjg2IEMxMy41MzAxMzU3LDEuODU3MTQyODYgMTQuNjE4OTAwOCwzLjIyNzQwODQxIDE1LjM4NDYxNTQsNS40NjUxOTU1MSBDMTQuNDQzMDEyNSw1Ljc0NDkzMjg4IDEzLjQ3MTUwNjMsNi4wODAzOTM5NCAxMi41LDYuNSBDMTEuNTI4NDkzNyw2LjEwODgxNTI2IDEwLjU1Njk4NzUsNS43NDQ5MzI4OCA5LjYxNTM4NDYyLDUuNDY1MTk1NTEgQzEwLjM4MTA5OTIsMy4yMjcyOTY1MSAxMS40Njk4NjQzLDEuODU3MTQyODYgMTIuNSwxLjg1NzE0Mjg2IFogTTE3LjMwNzY5MjMsMTMgQzE3LjMwNzY5MjMsMTMuODA1MjU3MSAxNy4yNzQ4OTQxLDE0LjU3OTA2NjcgMTcuMjEwNTU3MywxNS4zMjE0Mjg2IEMxNi41NjQ2Njk4LDE1LjcyNDA1NzEgMTUuODg1OTcxMiwxNi4xNTY4OTUyIDE1LjE0NDIzNCwxNi41NTk1MjM4IEMxNC40MDEyMDUsMTYuOTYyMTUyNCAxMy42OTA5ODcxLDE3LjMzMzMzMzMgMTIuOTgwNzY5MiwxNy42NDI4NTcxIEMxMi4yNzA1NTEzLDE3LjMwMTg4NTcgMTEuNTI3NTIyNCwxNi45NjIxNTI0IDEwLjgxNzMwNDUsMTYuNTU5NTIzOCBDMTAuMDc0Mjc1NSwxNi4xNTY4OTUyIDkuMzk2ODY4NjcsMTUuNzU0MjY2NyA4Ljc1MDk4MTE3LDE1LjMyMTQyODYgQzguNjg2NjQ0MzIsMTQuNTc5MDY2NyA4LjY1Mzg0NjE1LDEzLjgwNTI1NzEgOC42NTM4NDYxNSwxMyBDOC42NTM4NDYxNSwxMi4xOTQ3NDI5IDguNjg2NjQ0MzIsMTEuNDIwOTMzMyA4Ljc1MDk4MTE3LDEwLjY3ODU3MTQgQzkuMzk2ODY4NjcsMTAuMjc1OTQyOSAxMC4wNzU1NjczLDkuODQzMTA0NzYgMTAuODE3MzA0NSw5LjQ0MDQ3NjE5IEMxMS41NjAzMzM0LDkuMDM3ODQ3NjIgMTIuMjcwNTUxMyw4LjY2NjY2NjY3IDEyLjk4MDc2OTIsOC4zNTcxNDI4NiBDMTMuNjkwOTg3MSw4LjY5ODExNDI5IDE0LjQzNDAxNjEsOS4wMzc4NDc2MiAxNS4xNDQyMzQsOS40NDA0NzYxOSBDMTUuODg3MjYzLDkuODQzMTA0NzYgMTYuNTY0NjY5OCwxMC4yNDU3MzMzIDE3LjIxMDU1NzMsMTAuNjc4NTcxNCBDMTcuMjc2MTUzNiwxMS40MjA5MzMzIDE3LjMwNzY5MjMsMTIuMTk0NzQyOSAxNy4zMDc2OTIzLDEzIFogTTE4LjI2OTIzMDgsMTIuMDcxNDI4NiBDMTguNjA4NTMwNywxMi4zOTE4MDI0IDE4LjkyMDIxNTgsMTIuNjc5NjI2MiAxOS4yMzA3NjkyLDEzIEMxOC45MTkwODQxLDEzLjMyMDM3MzggMTguNjA4NTMwNywxMy42MDgxOTc2IDE4LjI2OTIzMDgsMTMuOTI4NTcxNCBMMTguMjY5MjMwOCwxMyBMMTguMjY5MjMwOCwxMi4wNzE0Mjg2IFogTTE2LjM0NjE1MzgsMTcuNjQyODU3MSBDMTYuMjY5NTIzMSwxNy45NjY3MTcyIDE2LjE1MzgzODUsMTguMjY4NjQxMSAxNi4wMzgxNTM4LDE4LjU3MTQyODYgQzE1LjUwMDMwNzcsMTguNDg1NDAyNyAxNSwxOC4zNzc0NDk0IDE0LjQyMzA3NjksMTguMjY5NTA0NyBDMTQuNzMxMDY5MiwxOC4xODM0Nzg4IDE1LjA3NjYxNTQsMTguMDc1NTI1NSAxNS4zODQ2MTU0LDE3Ljk2NzU4MDggQzE1LjczMTY2OTIsMTcuODU4NzgzMiAxNi4wMzgxNTM4LDE3Ljc1MDgzMjEgMTYuMzQ2MTUzOCwxNy42NDI4Nzg3IEwxNi4zNDYxNTM4LDE3LjY0Mjg1NzEgWiBNMTAuNTc2OTE5MiwxOC4yNjk1MDQ3IEMxMC4wMzkwNzMxLDE4LjM3NzQ1OCA5LjQ5OTY4NDYyLDE4LjQ4NTQxMTQgOC45NjE4Mzg0NiwxOC41NzE0Mjg2IEM4Ljg0NjE1Mzg1LDE4LjI2OTUwNDcgOC43MzA0NjkyMywxNy45NjY3MTcyIDguNjUzODQ2MTUsMTcuNjQyODU3MSBDOC45NjE4Mzg0NiwxNy43NTA4MTA1IDkuMzA3Mzg0NjIsMTcuODU4NzYzOCA5LjYxNTM4NDYyLDE3Ljk2NjcxNzIgQzkuOTIzMzg0NjIsMTguMDc0NjcwNSAxMC4yMjk4ODQ2LDE4LjE2MTUzODQgMTAuNTc2OTIzMSwxOC4yNjk0ODMxIEwxMC41NzY5MTkyLDE4LjI2OTUwNDcgWiBNNi43MzA3NjkyMywxMy45Mjg1NzE0IEM2LjM5MTQ2OTI5LDEzLjYwODE5NzYgNi4wNzk3ODQxNSwxMy4zMjAzNzM4IDUuNzY5MjMwNzcsMTMgQzYuMDgwOTE1OTEsMTIuNjc5NjI2MiA2LjM5MTQ2OTI5LDEyLjM5MTgwMjQgNi43MzA3NjkyMywxMi4wNzE0Mjg2IEw2LjczMDc2OTIzLDEzIEw2LjczMDc2OTIzLDEzLjkyODU3MTQgWiBNOC42NTM4NDYxNSw4LjM1NzE0Mjg2IEM4LjczMDQ3MzA4LDguMDMzMjgyODQgOC44NDYxNTc2OSw3LjczMTM1ODk1IDguOTYxODQyMzEsNy40Mjg1NzE0MyBDOS40OTk2ODg0Niw3LjUxNDU5NzI4IDkuOTk5OTk2MTUsNy42MjI1NTA2MiAxMC41NzY5MjMxLDcuNzMwNDk1MzIgQzEwLjI2ODkzMDgsNy44MTY1MjExOCA5LjkyMzM4MDc3LDcuOTI0NDc0NTIgOS42MTUzODQ2Miw4LjAzMjQxOTIyIEM5LjI2ODMzMDc3LDguMTQxMjE2NzUgOC45NjE4NDIzMSw4LjI0OTE2NzkzIDguNjUzODQ2MTUsOC4zNTcxMjEyNyBMOC42NTM4NDYxNSw4LjM1NzE0Mjg2IFogTTE1LjM4NDYxOTIsOC4wMzI0MTkyMiBDMTUuMDc2NjI1Nyw3LjkyNDQ2NTg4IDE0Ljc2ODYxNjgsNy44Mzg0NDAwMiAxNC40MjMwNzY5LDcuNzMwNDk1MzIgQzE0Ljk2MDkyNTIsNy42MjI1NDE5OSAxNS41MDAzMTIsNy41MTQ1ODg2NSAxNi4wMzgxNjAzLDcuNDI4NTcxNDMgQzE2LjE1Mzg0NTQsNy43MzA0OTUzMiAxNi4yNjk1MzA1LDguMDMzMjgyODQgMTYuMzQ2MTUzOCw4LjM1NzE0Mjg2IEMxNi4wMzgxNjAzLDguMjQ4MzQ1MzIgMTUuNzMxNjUxNCw4LjE0MDM5NDE1IDE1LjM4NDYxMTUsOC4wMzI0NDA4MSBMMTUuMzg0NjE5Miw4LjAzMjQxOTIyIFogTTIuMDY3MTYwMSw3LjQxMjM3ODc4IEMyLjM4MjMyNDUsNi44MTQ3ODcwNSAzLjIxMTU0Nzg5LDYuNSA0LjQxMjkyNjIsNi41IEM1LjA3MTE3ODA1LDYuNSA1Ljg3MjQ3ODM5LDYuNTk0NjgxNjUgNi43MzA3NjkyMyw2Ljc4MjgxNzI4IEM2LjUzMDcyNDUyLDcuNzg5ODg0IDYuMzU4NjE0MzIsOC44NjA5MTU0NiA2LjI0NDYzMzMsOS45OTMzMzAzOSBDNS4zODYzNDI0NSwxMC42NTQ4ODY5IDQuNjE0MTA5NTcsMTEuMzQ3MTY2NSAzLjkyNjc5MDI2LDEyLjA3MTQyODYgQzIuODY4NDYwNDMsMTAuODEyMjgwNCAyLjIzOTI3NjAyLDkuNjQ3ODIwMTIgMi4wMzgwOTI2NSw4LjczNDA1NjI4IEMxLjg2NzEwMzk1LDguMTk5MTcwMTIgMS44OTUwNDQxNyw3Ljc1ODk0MDQ0IDIuMDY3MTQ4NjUsNy40MTIyMDI1IEwyLjA2NzE2MDEsNy40MTIzNzg3OCBaIE0yLjA3MjYxNjcyLDE4LjYwNDMzNzkgQzEuODk5Njc3OTQsMTguMjU4NzEgMS44NzE2MDIyNywxNy44MTk5NjA4IDIuMDE1MzQ0MTksMTcuMjU0OTU4MiBDMi4yNDU1NTU1MSwxNi4zNDU1ODI3IDIuODc3Nzk1NzMsMTUuMjE1NTc3NSAzLjkxMzE5NzU1LDEzLjkyODU3MTQgQzQuNjAyNjk4ODEsMTQuNjE4NTcyMyA1LjQwNzg4MzU2LDE1LjMwODU3MzMgNi4yNDIyNzY2OCwxNS45OTk4MjkyIEM2LjM1NjgyMTc0LDE3LjEyOTgzNDMgNi41MDA1NjM2NywxOC4xOTYwODUzIDYuNzMwNzY5MjMsMTkuMTk5Nzc0MyBDNC4zNDMzMDIxMywxOS43NjQ3NzY5IDIuNTkwNDI2ODgsMTkuNTEzNTI1MiAyLjA3MjY3MTM1LDE4LjYwNDE0OTcgTDIuMDcyNjE2NzIsMTguNjA0MzM3OSBaIE0xMi41LDI0LjE0Mjg1NzEgQzExLjQ2OTg2NDMsMjQuMTQyODU3MSAxMC4zODEwOTkyLDIyLjc3MjU5MTYgOS42MTUzODQ2MiwyMC41MzQ4MDQ1IEMxMC41NTY5ODc1LDIwLjI1NTA2NzEgMTEuNTI4NDkzNywxOS45MTk2MDYxIDEyLjUsMTkuNSBDMTMuNDcxNTA2MywxOS44OTExODQ3IDE0LjQ0MzAxMjUsMjAuMjU1MDY3MSAxNS4zODQ2MTU0LDIwLjUzNDgwNDUgQzE0LjYxODkwMDgsMjIuNzcyNzAzNSAxMy41MzAxMzU3LDI0LjE0Mjg1NzEgMTIuNSwyNC4xNDI4NTcxIFogTTIyLjkyNzA3MDQsMTguNTk3NDQ5MSBDMjIuNDM4NDg0NiwxOS41MzczNTI4IDIwLjY1NTk3NDYsMTkuNzU2NDEzIDE4LjI2OTIzMDgsMTkuMTkyMjIwMiBDMTguNDcwMjgzNiwxOC4xODk5MDY5IDE4LjY0MzI2MTEsMTcuMTIzOTMwNyAxOC43NTc4MTY2LDE1Ljk5Njg2MDkgQzE5LjYyMDQzMjcsMTUuMzM4NDI3IDIwLjM5NjU2MDEsMTQuNjQ5NDE0OSAyMS4wODczNDAyLDEzLjkyODU3MTQgQzIyLjE1MTAwMzQsMTUuMTgxNzc2NCAyMi43ODMzNTg2LDE2LjM0MDc0MDMgMjIuOTg1NTU1OCwxNy4yNTAxOTExIEMyMy4xMjgyMDA5LDE3LjgxNDM4NCAyMy4xMDAxMjI3LDE4LjI1MjUwNDQgMjIuOTI3MTUwOSwxOC41OTc2MzcxIEwyMi45MjcwNzA0LDE4LjU5NzQ0OTEgWiBNMjIuOTgyMjkzNyw4LjczNDA1NjI4IEMyMi43NTIxOTc3LDkuNjQ2NDM1MDYgMjIuMTIwMjc0MiwxMC43ODAxNzIxIDIxLjA4NTM5MSwxMi4wNzE0Mjg2IEMyMC4zOTYyMzUyLDExLjM3OTE0ODkgMTkuNTkxNDUzOCwxMC42ODY4NjkyIDE4Ljc1NzQ3ODYsOS45OTMzMzAzOSBDMTguNjQyOTkwOSw4Ljg1OTU5MzM1IDE4LjQ5OTMyMSw3Ljc4OTgyMTA1IDE4LjI2OTIzMDgsNi43ODI4MTcyOCBDMTkuMTMxMjUwMyw2LjU5MzQ1Mzk4IDE5LjkwNjgzOCw2LjUgMjAuNTk3MTQzMiw2LjUgQzIxLjc3NTY5NjMsNi41IDIyLjYzNzcxNTgsNi44MTQ3ODcwNSAyMi45NTMxLDcuNDEyMzc4NzggQzIzLjA5Nzg5MzQsNy43MjcxNjU4MyAyMy4xMjU5NTIxLDguMTY3MzY0MDQgMjIuOTgyMjgyMiw4LjczNDIzMjU2IEwyMi45ODIyOTM3LDguNzM0MDU2MjggWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMsMTAgQzExLjMzMzMzMzMsMTAgMTAsMTEuMzMzMzMzMyAxMCwxMyBDMTAsMTQuNjY2NjY2NyAxMS4zMzMzMzMzLDE2IDEzLDE2IEMxNC42NjY2NjY3LDE2IDE2LDE0LjY2NjY2NjcgMTYsMTMgQzE2LDExLjMzMzMzMzMgMTQuNjY2NjY2NywxMCAxMywxMCBaIiBpZD0iRmlsbC0yIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
}

const TrainingAspectBullet = ({ image }) => (
  <Bullet
    color="black"
    bg={LIGHTGREY}
    size={60}
    images={images}
    image={image}
    hasBorder={false}
  />
)

export default TrainingAspectBullet