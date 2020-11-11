*&---------------------------------------------------------------------*
*& Report ZCXGTEST
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT zcxgtest.
*** 字母到对应的ASCII码 -- 我改个注释看看 by yangjulei
DATA : c.
FIELD-SYMBOLS : <n> TYPE x.
DATA : rn TYPE i.
c = 'c'.
ASSIGN c TO <n> CASTING.
MOVE <n> TO rn.
WRITE rn.

*** ASCII到字母
DATA : i TYPE i VALUE 17152.
DATA : x TYPE x.
FIELD-SYMBOLS : <fc> TYPE c.
ASSIGN i TO <n> CASTING.
MOVE <n> TO c.
MOVE i TO x.
*ASSIGN x TO <fc> CASTING.
*MOVE <fc> TO c.

WRITE c.
BREAK-POINT.
