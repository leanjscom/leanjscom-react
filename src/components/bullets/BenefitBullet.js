import React from 'react'
import Bullet from './Bullet'

import { DARKGREY, WHITE } from '../../config/styles'

const images = {
  quality:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIyNDUiPgo8cGF0aCBkPSJtNTUsMjM3IDc0LTIyOCA3NCwyMjhMOSw5NmgyNDAiLz4KPC9zdmc+',
  costeffective:
    'data:image/png;base64,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',
  quick:
    'data:image/png;base64,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',
  chat:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjlweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgMjkgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJNb2JpbGVNZW51IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjg4LjAwMDAwMCwgLTguMDAwMDAwKSIgZmlsbD0iIzRBNEE0QSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODguMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjk5OTk0NDYsOS42MDYwNjg4IEMyMC45OTk5NDQ2LDQuMzA5MTIwMDggMTYuMjg5MDc2OCwwIDEwLjQ5OTk3MjMsMCBDNC43MTA4Njc3NiwwIDAsNC4zMTAzMDg4MSAwLDkuNjA2MDY4OCBDMCwxMi4xODc4MjYxIDEuMTE5MDQ5ODksMTQuNTM1MTA3OCAyLjkzNzcyODQxLDE2LjI2MjMyMiBMMS45MTg5NDYzNywxOS4xOTM1MDQ0IEMxLjcwOTI2NDkxLDE5Ljc5NzEzNzggMi4wMzc0NjE5OCwyMC4xMzYxMzE4IDIuNjQ4MjczMTgsMTkuOTQ4MDc1OSBMNi4zODE1NTEyOCwxOC43OTc2NTk3IEM2LjUyNTEzODIzLDE4Ljc1ODE5MTEgNi42NTYxODk1LDE4LjY4NTA1NDkgNi43NjY3MjMzNiwxOC41ODI4OTkxIEw2Ljc2NTU4MjY5LDE4LjU4Mjg5OTEgQzcuOTY4OTcxOTQsMTkuMDAxOTgzMyA5LjIzMTYxMTY5LDE5LjIxNDQwODEgMTAuNTAyMzYxNiwxOS4yMTIwOSBDMTYuMjg5MTMyMiwxOS4yMTIwOSAyMSwxNC45MDI5NyAyMSw5LjYwNjAyMTI1IEwyMC45OTk5NDQ2LDkuNjA2MDY4OCBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuNzM3MjYzLDE4LjkxMTA2MTggQzI2LjcyNzA4MjUsMTguODY4NTk5IDI2LjcxMzUwNDcsMTguODI2MTMzMSAyNi42OTg3OTcyLDE4Ljc4NjAyODYgQzI4LjEzNzkxMjQsMTcuMTE0NTcwMyAyOSwxNC45ODc4NjM3IDI5LDEyLjY3MjM2NjEgQzI5LDcuNjY3NTMzNDEgMjQuOTcyMzk3NywzLjU0NTk1OTc5IDE5Ljc5MDYyMTUsMyBDMjEuMTY3NDk1MSw0Ljc5Mjk0MDM5IDIxLjk4MDk1MDgsNi45OTYyNTY1MyAyMS45ODA5NTA4LDkuMzc0MjYxNjggQzIxLjk4MDk1MDgsMTQuODgwMzYyNyAxNy42MjUyMDAzLDE5LjQ0NTUyODcgMTIsMjAuMTU3ODczMyBDMTMuNzk2NjA1OSwyMS41NTgwMTI2IDE2LjEwNTc5OTYsMjIuMzk5MDU2NCAxOC42MjQxMzUzLDIyLjM5OTA1NjQgTDE4LjYyNTI2NzgsMjIuNDAwMjM0MSBDMjAuMDY4OTAxMiwyMi40MDM3NzMxIDIxLjUwMTIxMDEsMjIuMTE5NDk2NiAyMi44NDI4NjQ2LDIxLjU2Mjc1MzUgQzIyLjg3NDU0MTUsMjEuNTc2OTA5OCAyMi45MDg0ODMzLDIxLjU5MTA2MzEgMjIuOTQ0Njg3MSwyMS42MDI4NTggTDI2Ljc1MzkwNTIsMjIuOTM4MTM0MyBDMjcuMzUzNTI2OSwyMy4xNDgwOTYzIDI3LjcxNTU2NDgsMjIuODA2MDIyOSAyNy41NTcxNjYsMjIuMTc4NTAxMyBMMjYuNzM3MjYzLDE4LjkxMTA2MTggWiIgaWQ9IkZpbGwtMiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  gift:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJNb2JpbGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsYW5kaW5nLS0tYnVpbGRpbmctTU9CSUxFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTAuMDAwMDAwLCAtMTM0My4wMDAwMDApIiBmaWxsPSIjNEE0QTRBIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMTMzOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIuNDIwNDgzOSwxMi45MzQzNzY4IEwxOC4wODc4NjA4LDEyLjkzNDM3NjggQzE4LjEyOTg0NTIsMTIuOTA4NDc4MSAxOC4xNzE4MzMxLDEyLjg4MTIxODUgMTguMjA4NDAxNywxMi44NTUzMTk5IEMxOS40MDcwMTU1LDEyLjAxNTY4OTQgMTkuNzA0OTg3NCwxMC4zNTEzNjMyIDE4Ljg3MDcwNzgsOS4xNDM1OTYxNCBDMTguMzc1MDAxMSw4LjQyNzk4MDU1IDE3LjU2MTAzOTMsOCAxNi42OTI4ODUxLDggQzE2LjE1MTEzMzksOCAxNS42MjgzNDgyLDguMTY0OTMyMTYgMTUuMTgxMzkwNSw4LjQ3ODQzNzk0IEMxNC43MzE3MjgyLDguNzkzMzA0NjIgMTMuNjU5MDc4MSw5Ljg4MTAyMDc3IDEzLjAwMjE4MDksMTEuMDM1NTM4OSBDMTIuMzQ1MzE4Myw5Ljg4MjM4MTY2IDExLjI3MjYzMzUsOC43OTQ2NTE1NCAxMC44MjI5NzEzLDguNDc4NDM3OTQgQzEwLjM3NjAxMzUsOC4xNjYyOTY1MyA5Ljg1MzIyNzg4LDggOS4zMTE0NzY2Myw4IEM4LjQ0MzMyMjQyLDggNy42MjkzMjU5OSw4LjQyODAxNTQ1IDcuMTM1MDA2MTUsOS4xNDM1OTYxNCBDNi43MzEzODg0Niw5LjcyODM1NzUxIDYuNTc2OTkzNjksMTAuNDM3MTMzOCA2LjcwMTYwNTE0LDExLjEzNzc0NDggQzYuODI2MjE2NiwxMS44MzgzNTU3IDcuMjE0OTI1MjksMTIuNDQ5MDA4OCA3Ljc5NTkyNTM0LDEyLjg1NTIxNTIgQzcuODMyNDkzOTgsMTIuODgxMTEzOSA3Ljg3NDQ3ODQsMTIuOTA3MDEyNSA3LjkxNjQ2NjI5LDEyLjkzNDI3MjEgTDMuNTc5NjgyNTEsMTIuOTM0MjcyMSBDMy4yNjAwNDc1NCwxMi45MzQyNzIxIDMsMTMuMTk0NjE2MiAzLDEzLjUxNzY3MjYgTDMsMTcuODkzMDg4OSBDMywxOC4yMTQ3NzQgMy4yNjAwNDA2LDE4LjQ3NjQ4OTQgMy41Nzk2ODI1MSwxOC40NzY0ODk0IEw0LjA4NzU1OTE0LDE4LjQ3NjQ4OTQgTDQuMDg3NTU5MTQsMjkuNDE2NjAwNiBDNC4wODc1NTkxNCwyOS43Mzk2NDU1IDQuMzQ3NTk5NzQsMzAgNC42NjcyNDE2NSwzMCBMMjEuMzM0MTEwNiwzMCBDMjEuNjUzNzQ1NSwzMCAyMS45MTM3OTMxLDI5LjczOTY1NTkgMjEuOTEzNzkzMSwyOS40MTY2MDA2IEwyMS45MTM3OTMxLDE4LjQ3NjQ4OTQgTDIyLjQyMDMxNzUsMTguNDc2NDg5NCBDMjIuNzQxMzA0NywxOC40NzY0ODk0IDIzLDE4LjIxNjE0NTMgMjMsMTcuODkzMDg4OSBMMjMsMTMuNTE3NjcyNiBDMjMsMTMuMTk0NjI2NiAyMi43NDEzMTUxLDEyLjkzNDI3MjEgMjIuNDIwMzE3NSwxMi45MzQyNzIxIEwyMi40MjA0ODM5LDEyLjkzNDM3NjggWiBNMjEuMzM0Mjc3LDE0LjA5OTc4MTkgTDIxLjg0MDgwMTQsMTQuMDk5NzgxOSBMMjEuODQwODAxNCwxNy4zMDg0MzIyIEwyMS4zMzQyNzcsMTcuMzA4NDMyMiBMMTMuNTgwNTU5NywxNy4zMDk3OTMxIEwxMy41ODA1NTk3LDE0LjEwMTE0MjggTDE0LjIxNTc1MjIsMTQuMTAxMTQyOCBMMjEuMzM0Mjc3LDE0LjA5OTc4MTkgWiBNMTUuODQyMjE5NSw5LjQzNTQzOTQ1IEMxNi4wOTI3ODA4LDkuMjU5NjAyNzggMTYuMzg2Njc1Miw5LjE2NjkxNjExIDE2LjY5MTQwODEsOS4xNjY5MTYxMSBDMTcuMTgwMzUzOCw5LjE2NjkxNjExIDE3LjYzODEyOTIsOS40MDY4MTU1MyAxNy45MTcxMzU1LDkuODEwMzAwMTcgQzE4LjM4NTc2MzMsMTAuNDg5MTAyMSAxOC4yMTkxNjA1LDExLjQyNTUyOTggMTcuNTQ0Njg4LDExLjg5ODUyNDIgQzE2Ljk1MDEzMTEsMTIuMzE1NjE3NyAxNS4yODgyOTgzLDEyLjkzNDQ3MSAxNC4yMTQyNjEzLDEyLjkzNDQ3MSBDMTMuODEwNjQzNiwxMi45MzQ0NzEgMTMuNjU4OTUzMywxMi44NDMxNDUyIDEzLjYzNTkzMSwxMi44MDkwNjczIEMxMy4zNDIwMjk3LDEyLjM4MjQxMjcgMTQuNzg1Nzk1OSwxMC4xNzU2MTczIDE1Ljg0MjIxOTUsOS40MzU0NzA4NiBMMTUuODQyMjE5NSw5LjQzNTQzOTQ1IFogTTguNDU2NzE5NzEsMTEuODk3MTM4OSBDOC4xMzAzMTMyOCwxMS42NjgxNDQgNy45MTA5MTE4MiwxMS4zMjYwMjEzIDcuODQxODQ1MDQsMTAuOTMyMDk3NyBDNy43NzE0MTkxMSwxMC41MzgxNzQyIDcuODU4MDk5MzEsMTAuMTM4ODA3MSA4LjA4NTYzMTM3LDkuODEwMzEwNjQgQzguMzY0NjM0MTMsOS40MDY4NjA4OSA4LjgyMjQxMzA3LDkuMTY2OTI2NTggOS4zMTEzNTg3NSw5LjE2NjkyNjU4IEM5LjYxNjA5NTEzLDkuMTY2OTI2NTggOS45MDg2NTQ2Nyw5LjI1OTYxNjczIDEwLjE2MDU0NzMsOS40MzU0NDk5MiBDMTEuMjE2OTcwOSwxMC4xNzU1OTYzIDEyLjY2MDcxNjQsMTIuMzgyMzkxOCAxMi4zNjY4MzU4LDEyLjgwNzY4NTQgQzEyLjM0MjQ1NzksMTIuODQzMTI0MyAxMi4xOTA3Njc1LDEyLjkzNDQ1IDExLjc4NzE1MzMsMTIuOTM0NDUgQzEwLjcxMTc2NDEsMTIuOTM0NDUgOS4wNTEzMTgxNSwxMi4zMTQyNzA4IDguNDU2NzI2NjQsMTEuODk3MTQyNCBMOC40NTY3MTk3MSwxMS44OTcxMzg5IFogTTQuMTYwNTAyMjYsMTQuMDk5ODUxNyBMMTIuNDIwNzc4NiwxNC4wOTk4NTE3IEwxMi40MjA3Nzg2LDE3LjMwODUwMiBMNC42NjcwNjEzNSwxNy4zMDk4NjI5IEw0LjE2MDUwMjI2LDE3LjMwOTg2MjkgTDQuMTYwNTAyMjYsMTQuMDk5ODUxNyBaIE01LjI0NjcwOTE5LDE4LjQ3NjY2MzkgTDEyLjQyMDcwOTMsMTguNDc2NjYzOSBMMTIuNDIwNzA5MywyOC44MzE5NDM5IEw1LjI0NjcwOTE5LDI4LjgzMTk0MzkgTDUuMjQ2NzA5MTksMTguNDc2NjYzOSBaIE0yMC43NTQ0OTA1LDI4LjgzMTk0MzkgTDEzLjU4MDQ5MDQsMjguODMxOTQzOSBMMTMuNTgwNDkwNCwxOC40NzY2NjM5IEwyMC43NTQ0OTA1LDE4LjQ3NjY2MzkgTDIwLjc1NDQ5MDUsMjguODMxOTQzOSBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi41LDUuOTk5OTY2MDkgQzEyLjc3NTY5ODMsNS45OTk5NjYwOSAxMyw1Ljc0NTYxMjQgMTMsNS40MzI5NjA4NSBMMTMsMC41NjcwMDUyNCBDMTMsMC4yNTMwMzc4MzEgMTIuNzc1NzA0MywwIDEyLjUsMCBDMTIuMjI0Mjk1NywwIDEyLDAuMjU0MzUzNjg3IDEyLDAuNTY3MDA1MjQgTDEyLDUuNDM0MzE3NCBDMTIsNS43NDY5NjIxNyAxMi4yMjMxMjY0LDYgMTIuNSw2IEwxMi41LDUuOTk5OTY2MDkgWiIgaWQ9IkZpbGwtMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi45NjUzNTIxOSw1LjY5Mzg2NDcgQzcuMDYwOTcwNjQsNS44ODgwOTE2NCA3LjI1MzQ4MDQyLDYgNy40NTQ5MTY2LDYgQzcuNTM2NTEwNjYsNiA3LjYxOTM4MDg2LDUuOTgxOTkxMjcgNy42OTU4NzM2Nyw1Ljk0MzQwMjA2IEM3Ljk2NjE1MjM5LDUuODA4MzQxNSA4LjA3NzA4MTE2LDUuNDc5MDQwODMgNy45NDMyMDQ4Nyw1LjIwNjM1Nzg1IEw2LjAzNDY1NDM0LDEuMzA2Mjc2NjkgQzUuOTAwNzg3ODUsMS4wMzM1ODcxMyA1LjU3NDM5ODUyLDAuOTIyOTUzMTEyIDUuMzA0MTI2MzMsMS4wNTY3MzkzMyBDNS4wMzM4NDc2MSwxLjE5MTc5OTg5IDQuOTIyOTE4ODQsMS41MjIzODQ3OSA1LjA1Njc5NTEzLDEuNzkzNzgzNTQgTDYuOTY1MzUyMTksNS42OTM4NjQ3IFoiIGlkPSJGaWxsLTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuNDEyODE5NDYsOS45OTk5OTY0NyBDNC42MzMxNjk0LDkuOTk5OTk2NDcgNC44NDM5NDcyOSw5Ljg3NDU2MzUzIDQuOTQzODM3MjEsOS42NjIyOTQwMiBDNS4wODIwNjc5LDkuMzY3MzIgNC45NTYxNTYxNSw5LjAxNTg0NTIyIDQuNjY0NjM5NDYsOC44NzY2MDQ2NyBMMC44MzY1MTg2MjUsNy4wNTcxNjE4MiBDMC41NDM2MzE5OTUsNi45MTY1NjYyNiAwLjE5NDY0NDQzOSw3LjA0NDc1NTA4IDAuMDU2Mzg5MjIzOCw3LjMzODM1MjkzIEMtMC4wODE4NDE0NjU1LDcuNjMzMzI2OTUgMC4wNDI3MDM4NDk1LDcuOTg0ODAxNzMgMC4zMzU1OTA0OCw4LjEyNDA0MjI5IEw0LjE2MzcxMTMxLDkuOTQzNDg1MTMgQzQuMjQ0NDYwNjIsOS45ODIwODE1MSA0LjMyOTMxNjI1LDEwIDQuNDEyODAxOTQsMTAgTDQuNDEyODE5NDYsOS45OTk5OTY0NyBaIiBpZD0iRmlsbC00Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4zMDQwNTcxLDUuOTQzNDA4MzggQzE3LjM4MTgwNzcsNS45ODE5OTMyOCAxNy40NjMzODI2LDYgMTcuNTQ0OTU3NSw2IEMxNy43NDYzNDYzLDYgMTcuOTM4ODAxMSw1Ljg4NjgyMDA1IDE4LjAzNDQwNjgsNS42OTM4OTg4NyBMMTkuOTQzNzgxMiwxLjc5NDI1Mjk3IEMyMC4wNzYzNDA0LDEuNTIxNTkzODMgMTkuOTY2NzIzNCwxLjE5MTA2NTU5IDE5LjY5NjUwODIsMS4wNTcyOTEwMSBDMTkuNDI2MjkzLDAuOTIyMjQ1NTIgMTkuMDk4NzI3NCwxLjAzNDE0MTM5IDE4Ljk2NjE1MTksMS4zMDY4MDA1MiBMMTcuMDU2Nzc3NSw1LjIwNjQ0NjQyIEMxNi45MjI5NDI1LDUuNDc5MTA4ODUgMTcuMDMzODM1NCw1LjgwODM0OTcyIDE3LjMwNDA1MDUsNS45NDM0MDgzOCBMMTcuMzA0MDU3MSw1Ljk0MzQwODM4IFoiIGlkPSJGaWxsLTUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0Ljk0MzY2NDMsNy4zMzgwMjMwMyBDMjQuODA1NDM4NSw3LjA0MzAxMjA1IDI0LjQ1NjQ1OTcsNi45MTc1NjY5MiAyNC4xNjM1NjI1LDcuMDU2Nzk2NjkgTDIwLjMzNTU3NzEsOC44NzY0Njc0NiBDMjAuMDQyNzAwOCw5LjAxNTcwMDc2IDE5LjkxODE2MzQsOS4zNjcyMjMwOSAyMC4wNTYzODU3LDkuNjYyMjU1MjQgQzIwLjE1NjI5MzEsOS44NzU5MzEyMiAyMC4zNjcwNTMsMTAgMjAuNTg2MDE4MywxMCBDMjAuNjY5NTAxLDEwIDIwLjc1NTcyMzUsOS45ODIwNzkyNyAyMC44MzUxMDAxLDkuOTQzNDc4MDUgTDI0LjY2MzA4NTUsOC4xMjM4MDcyOCBDMjQuOTU3MzI4MSw3Ljk4NDU3Mzk4IDI1LjA4MTg2NTUsNy42MzMwNTE2NSAyNC45NDM2NDMyLDcuMzM4MDE5NSBMMjQuOTQzNjY0Myw3LjMzODAyMzAzIFoiIGlkPSJGaWxsLTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
  calendar:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMjYgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iTW9iaWxlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibGFuZGluZy0tLWJ1aWxkaW5nLU1PQklMRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjAwMDAwMCwgLTE0NzguMDAwMDAwKSIgZmlsbD0iIzRBNEE0QSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0My4wMDAwMDAsIDE0NzEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjIyNTc0ODcsMTIuMzA0OTQwMSBDMjUuNzc5NTQxNCwxMi4zMDQ5NDAxIDI2LjIyODg1MSwxMS44NTU2MzA1IDI2LjIyODg1MSwxMS4zMDE4Mzc3IEwyNi4yMjg4NTEsOC4wMDMxMDIzMiBDMjYuMjI4ODUxLDcuNDQ5MzA5NTkgMjUuNzc5NTQxNCw3IDI1LjIyNTc0ODcsNyBDMjQuNjcxOTU1OSw3IDI0LjIyMjY0NjQsNy40NDkzMDk1OSAyNC4yMjI2NDY0LDguMDAzMTAyMzIgTDI0LjIyMjY0NjQsMTEuMzAxODM3NyBDMjQuMjIyNjQ2NCwxMS44NTU2MzA1IDI0LjY3Mjk5OTIsMTIuMzA0OTQwMSAyNS4yMjU3NDg3LDEyLjMwNDk0MDEgWiBNMTQuNDM4MjUyNiwxMi4zMDQ5NDAxIEMxNC45OTIwNDUzLDEyLjMwNDk0MDEgMTUuNDQxMzU0OSwxMS44NTU2MzA1IDE1LjQ0MTM1NDksMTEuMzAxODM3NyBMMTUuNDQxMzU0OSw4LjAwMzEwMjMyIEMxNS40NDEzNTQ5LDcuNDQ5MzA5NTkgMTQuOTkyMDQ1Myw3IDE0LjQzODI1MjYsNyBDMTMuODg0NDU5OSw3IDEzLjQzNTE1MDMsNy40NDkzMDk1OSAxMy40MzUxNTAzLDguMDAzMTAyMzIgTDEzLjQzNTE1MDMsMTEuMzAxODM3NyBDMTMuNDM1MTUwMywxMS44NTU2MzA1IDEzLjg4MzQxNjYsMTIuMzA0OTQwMSAxNC40MzgyNTI2LDEyLjMwNDk0MDEgWiBNMzEuMDIxODA3Niw5LjQ1MTMxNDU3IEwyNy40MzI1NzM4LDkuNDUxMzE0NTcgTDI3LjQzMjU3MzgsMTEuMzAxODM3NyBDMjcuNDMyNTczOCwxMi41MTkxNDkyIDI2LjQ0MzA2MDIsMTMuNTA4NjYyOCAyNS4yMjU3NDg3LDEzLjUwODY2MjggQzI0LjAwODQzNzIsMTMuNTA4NjYyOCAyMy4wMTg5MjM2LDEyLjUxOTE0OTIgMjMuMDE4OTIzNiwxMS4zMDE4Mzc3IEwyMy4wMTg5MjM2LDkuNDUxMzE0NTcgTDE2LjY0NTA3NzcsOS40NTEzMTQ1NyBMMTYuNjQ1MDc3NywxMS4zMDE4Mzc3IEMxNi42NDUwNzc3LDEyLjUxOTE0OTIgMTUuNjU1NTY0MSwxMy41MDg2NjI4IDE0LjQzODI1MjYsMTMuNTA4NjYyOCBDMTMuMjIwOTQxMSwxMy41MDg2NjI4IDEyLjIzMTQyNzUsMTIuNTE5MTQ5MiAxMi4yMzE0Mjc1LDExLjMwMTgzNzcgTDEyLjIzMTQyNzUsOS40NTEzMTQ1NyBMOC42NDIxOTM5MSw5LjQ1MTMxNDU3IEM3LjkwMzQ1NTg2LDkuNDUxMzE0NTcgNy4zMDQ3MjQxNSwxMC4wNTAwNDYzIDcuMzA0NzI0MTUsMTAuNzg4Nzg0MyBMNy4zMDQ3MjQxNSwxNi4yNzI0MTAzIEwzMi4zNTkyNzc0LDE2LjI3MjQxMDMgTDMyLjM1OTI3NzQsMTAuNzg4Nzg0MyBDMzIuMzU5Mjc3NCwxMC4wNTAwNDYzIDMxLjc2MDU0NTcsOS40NTEzMTQ1NyAzMS4wMjE4MDc2LDkuNDUxMzE0NTcgWiBNNy4zMDQ3MjM2MSwzMC40OTQ1MjgyIEM3LjMwNDcyMzYxLDMxLjIzMzI2NjMgNy45MDM0NTUzMywzMS44MzE5OTggOC42NDIxOTMzNywzMS44MzE5OTggTDMxLjAyMTgwNzYsMzEuODMxOTk4IEMzMS43NjA1NDU3LDMxLjgzMTk5OCAzMi4zNTkyNzc0LDMxLjIzMzI2NjMgMzIuMzU5Mjc3NCwzMC40OTQ1MjgyIEwzMi4zNTkyNzc0LDE3LjM0MjM4NjIgTDcuMzA0NzIzNjEsMTcuMzQyMzg2MiBMNy4zMDQ3MjM2MSwzMC40OTQ1MjgyIFogTTI1LjgyMDM4NzcsMjAuNTE4ODc2OCBMMjkuMjQyNDM3OSwyMC41MTg4NzY4IEwyOS4yNDI0Mzc5LDIzLjk0MDkyNyBMMjUuODIwMzg3NywyMy45NDA5MjcgTDI1LjgyMDM4NzcsMjAuNTE4ODc2OCBaIE0yNS44MjAzODc3LDI1LjQwMDY0MTUgTDI5LjI0MjQzNzksMjUuNDAwNjQxNSBMMjkuMjQyNDM3OSwyOC44MjI2OTE2IEwyNS44MjAzODc3LDI4LjgyMjY5MTYgTDI1LjgyMDM4NzcsMjUuNDAwNjQxNSBaIE0yMC42ODc3MTM4LDIwLjUxODg3NjggTDI0LjEwODY5MzksMjAuNTE4ODc2OCBMMjQuMTA4NjkzOSwyMy45NDA5MjcgTDIwLjY4NzcxMzgsMjMuOTQwOTI3IEwyMC42ODc3MTM4LDIwLjUxODg3NjggWiBNMjAuNjg3NzEzOCwyNS40MDA2NDE1IEwyNC4xMDg2OTM5LDI1LjQwMDY0MTUgTDI0LjEwODY5MzksMjguODIyNjkxNiBMMjAuNjg3NzEzOCwyOC44MjI2OTE2IEwyMC42ODc3MTM4LDI1LjQwMDY0MTUgWiBNMTUuNTU1MDM5OCwyMC41MTg4NzY4IEwxOC45NzcwOSwyMC41MTg4NzY4IEwxOC45NzcwOSwyMy45NDA5MjcgTDE1LjU1NTAzOTgsMjMuOTQwOTI3IEwxNS41NTUwMzk4LDIwLjUxODg3NjggWiBNMTUuNTU1MDM5OCwyNS40MDA2NDE1IEwxOC45NzcwOSwyNS40MDA2NDE1IEwxOC45NzcwOSwyOC44MjI2OTE2IEwxNS41NTUwMzk4LDI4LjgyMjY5MTYgTDE1LjU1NTAzOTgsMjUuNDAwNjQxNSBaIE0xMC40MjE1NjM0LDIwLjUxODg3NjggTDEzLjg0MzYxMzUsMjAuNTE4ODc2OCBMMTMuODQzNjEzNSwyMy45NDA5MjcgTDEwLjQyMTU2MzQsMjMuOTQwOTI3IEwxMC40MjE1NjM0LDIwLjUxODg3NjggWiBNMTAuNDIxNTYzNCwyNS40MDA2NDE1IEwxMy44NDM2MTM1LDI1LjQwMDY0MTUgTDEzLjg0MzYxMzUsMjguODIyNjkxNiBMMTAuNDIxNTYzNCwyOC44MjI2OTE2IEwxMC40MjE1NjM0LDI1LjQwMDY0MTUgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
}

const BenefitBullet = ({ image }) => (
  <Bullet
    color={DARKGREY}
    bg={WHITE}
    size={60}
    hasBorder={true}
    images={images}
    image={image}
  />
)

export default BenefitBullet
