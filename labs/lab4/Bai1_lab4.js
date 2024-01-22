import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
const Bai1_lab4 = (props) => {
    // dữ liệu mẫu testing
    const USERS = [{
      "id": 1,
      "name": "Gwenore",
      "email": "https://robohash.org/magnamutenim.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHdSURBVDjLpZNraxpBFIb3a0ggISmmNISWXmOboKihxpgUNGWNSpvaS6RpKL3Ry//Mh1wgf6PElaCyzq67O09nVjdVlJbSDy8Lw77PmfecMwZg/I/GDw3DCo8HCkZl/RlgGA0e3Yfv7+DbAfLrW+SXOvLTG+SHV/gPbuMZRnsyIDL/OASziMxkkKkUQTJJsLaGn8/iHz6nd+8mQv87Ahg2H9Th/BxZqxEkEgSrq/iVCvLsDK9awtvfxb2zjD2ARID+lVVlbabTgWYTv1rFL5fBUtHbbeTJCb3EQ3ovCnRC6xAgzJtOE+ztheYIEkqbFaS3vY2zuIj77AmtYYDusPy8/zuvunJkDKXM7tYWTiyGWFjAqeQnAD6+7ueNx/FLpRGAru7mcoj5ebqzszil7DggeF/DX1nBN82rzPqrzbRayIsLhJqMPT2N83Sdy2GApwFqRN7jFPL0tF+10cDd3MTZ2AjNUkGCoyO6y9cRxfQowFUbpufr1ct4ZoHg+Dg067zduTmEbq4yi/UkYidDe+kaTcP4ObJIajksPd/eyx3c+N2rvPbMDPbUFPZSLKzcGjKPrbJaDsu+dQO3msfZzeGY2TCvKGYQhdSYeeJjUt21dIcjXQ7U7Kv599f4j/oF55W4g/2e3b8AAAAASUVORK5CYII=",
      "postion": "Graphic Designer"
    }, {
      "id": 2,
      "name": "Reggis",
      "email": "https://robohash.org/deseruntmagnamblanditiis.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKGSURBVDjLpZNPSFRhFMV/33vfzDjOvBmlRkuz0THKIjGN2qSrFkFEBUFBG1fhtkW7aB1UUNDCyIJaRC3aRAXWxkroHxpCRGaY2uS/GWfUGUfffPPe+1poUbvCs77n3HPvuVdorVkP5P8Ujz3ae0IVtj80w80U5l4i7MlO8a8OfvQmTsvAyXvBjR1EG1pZGHvD8PNbs/JCz7u+snKrdS5fCi3ZjuFp8NC4nsbTGldrmq234kx7p4hWtJEd/YxfKKzIJsoq4zEZq4zWdR3bHimWtCgLmH91FYDKvEKlM0QThyhOP8BfLpgYGsb1/Fwe25c0UjknoRxP3OubJjmnKBQ1ExmPZNYjOdaHSvUSbTyMPdWD8M3jC1tgz2Hu7WK5YvdWo1B0RcBnULs5wvPBFAtLJaojgpXxx5QvPCO67Sj2ZDeGr4TK1TP1YoiB6vPE6psAhFy2HQASm8IIDb0DKdo3DOLLvaaq/Qhq5hamX2Mvxpnp/8DgtmtsrGtE6FWeUbDd1TxNSNSEiWaeYWbfo9wapj9ex8OmkK0l2f+JgcQVahsaCf4RviysrCoJAU7JwTd9n13Hb/PlwTlG+l8T2NqCPZ9mvu0ivnAMQztIn/y9ZWO56KIBpRxms3lGvqVRn57Q0NJBKLSDyaFR9IFLNDXvoX6zRXYhj+c4aA1ogVwuOtr1tEhl8tTFLO58TXH1Zjf7dzbgj7fQfOou/sgWPDSy3I+ssphK51ipCIL2tCxkJ8eLyok3bQmKcNAQN54mMdZGEkKsOfUQvw4DSbzS8sZn8iqX/jEl1VJ64uDZ3sqAFQrJgCmkNDFMgWmAYQgMucpb00KAdh2lVhbnM+nR5Hex3m80WCd+AqUYHPPwkaN5AAAAAElFTkSuQmCC",
      "postion": "Teacher"
    }, {
      "id": 3,
      "name": "Sasha",
      "email": "https://robohash.org/velitetipsum.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVDjLpZPNS5VBFIef+77X4lYayfVqpQY3XPiRGogp9rEpa2NRQpAELaJl5LKVJGSrFm36A6RMCpSilu5StETLaGcophTeNMyv+/rOmTMtrp87o4FhOOdwnvObHzMR5xz/s6IAz98vtDnHHeu0UFWxCqKKtYpVh1jdti1WHFZ1uONmSW0UQJ2721ybHf+XyQ9efqvcVGBV4wBvJjoRFcQKRgVjzdZpZbN2v74DY+zebYCMDy1lt3c1fSUQjNgtD6xVALr7U7sCXK7JJdwOkHUAwI3TCV4NzHK9IX8z1zM0S3PdVjy3GOxUYKyizhH1oWcwhe979A6liHjgrTfd6zpH2izRVP6aiqJDhCYD8Dau4ICoH6G5PkHUg2t1Ca7WJrhSmwDAOENhvJSu0YsEJkBEdypwClEP3o38wveh9cVZnBpCFUIRjuSWUFpwiqVghdbeKrJ5tg0ginOOLB8uncyjb2wO0ZAL5bewTrFqURw//kxzorCB5TDNyPcmKh8GBzMmakaO70XoG5sDIJAQ65Sp+XGMCqIGYw2La0tUF51h2azyYbJ/3gMQkYwHHpyvihP1IZAAsUJ+TjEFOcc4fDBJlh8jL/soo9MDfJz4ympIzZYHzlFRfICfv9Mcz4+RljU6Bx8TakggIcl4GXXJRoan+hmdGaMi9lR72ls+rz8kN9DePV4dWt1vxGLEEpNuolYRK+QAn2YaiXgxBsa/ULLnCQsribcAkd1+52RbZMWqvy+tNpl65CY38n8B/ZBP7EKNHesAAAAASUVORK5CYII=",
      "postion": "Business Systems Development Analyst"
    }, {
      "id": 4,
      "name": "Eveleen",
      "email": "https://robohash.org/placeatquisquamesse.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH2SURBVDjLjZNLTxNRGIaJv6ZNWeBwkZFLQtGAC4l/wKULV+7YILeSYukEUhJoSASVuCI0hpAYDSUQCJBSoAaC0wbBUi4aWphpO52Zlpa+nnOqCAptJ3k3M3me73LOlAAoyZfDqQdOEvyO89/vRcGZ5HeWmySFYdWHVOQN0vE58jrLJMFJ82hewVU4+bMfqdPxP9VBn+A4D88wP59PwFqmsH7UgeTJEMlsTuIyI5uRsDfCMcmtAtoyhVmOu5kkHZuFsiNA3XuEi+QCdhxluL0D/SvpoO+vhIksiItNiPqqyXgfIL403gjfoTsIL70gQBdim3VQvz2FFnwOxf8E8kYF0rIVYqcRM70Vgf/Pe/ohwsutOJdcpBpP4Mek+jPEfbWQVzkG+7tNcNsqt68tkcLZTIzM6YZ21IbolgHq9j1o+z04nKhHRnlH2p6A32LCvFD55fIYr960VHgSSqCFVDJBEeugh+zw2jnpc0/5rthuRMBaioWBqrVrFylXOUpankIi0AjJY0DC3wD9oA9rAnc2bat+n++2UkH8XHaTZfGQlg3QdlsIbIVX4KSPAv+60L+SO/PECmJiI1lYM9SQBR7b3einfn6kEMwEIZd5Q48sQQt1Qv/xFqt2Tp5x3B8sBmYC71h926az6njdUR6hMy8O17wqFqb5Bd2o/0SFzIZrAAAAAElFTkSuQmCC",
      "postion": "Food Chemist"
    }, {
      "id": 5,
      "name": "Wanids",
      "email": "https://robohash.org/debitisimpediteligendi.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKDSURBVDjLhZNrSJNRGMc3HeoQL1ObhEMhcWyB5IWScn1KRPoSBBFUFBmpJOQXv4RhXlasRbZFXmDkXLowIxesrSGTodvaLWcEKdTMyWAtQteFsWSLf+e8zlHo6sD/fd7nPOf/e877cg4LAIuKDLZYLG5QKpVuoVDYRHIOnUuIU1NTI1GpVA66hs4lffThI8FB5DEYEAwG4dLrmdyXEH33mkxMbcFoTNYSjVlsmrzNzMSSzYZAIIB3JL5JT8d6WhqjRTYbS3Y7U6NrFhOAxO62AO+zszGt0cDv92NarYa3qAhrBQVYy83Fay4X06OjWzUSl3cDfMnLw6xIhBGBAOayMqyUlmK1pAQf+XwsE5AhJwf3s7LwIiMDQbKjHYAfhYX4XF+PUG0tPlVWIkBga+XlWCWgFQLyFRfjA9mVj8fDOofzN8DlciEej6dULBZDNBplRAedo56UgEgkAo/Hg42NDbjdbjgcDlydkOCyuho/Y9H/A6hZp9MxnTc3NxEKhdA6Vode/RmcHhHhe+QrnE7nTgA1bEM6tEdJ18Noe3QQzQ+rcF13ClMeJTqfnkCjYi/m7JbdAdtqH6/Dc+8Qni08YIyTHgUU5k5oHHK0aRtxSMbF/i52fkrAJfK91Dww04HbpnbcNLagR38RfYZWjMz349yYBBU3WHHmKFMAMf36E3BWJcYTtwJa511oXskxapcRyBUMz/ehRduEA1IeSq6xqhiA2WxGOBz+RiHb/+Dk8D4cVwrQcI8PyZ18nFcfwdBcD5rHG1ErK8bUzGMkL9Pg4CAsFgusVmtKVd/i4oLmGKr792Dy5QSoJwmQSqU2co3xL1V0Z6C0Kx29A91MLpfL/dT7G1NDhMW9KO0jAAAAAElFTkSuQmCC",
      "postion": "Research Assistant III"
    }, {
      "id": 6,
      "name": "Minnie",
      "email": "https://robohash.org/oditrepudiandaeut.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALISURBVDjLpZNpMNRhHMc31ExNmjRTDdVMsxXLkntnTcmxJTKFMK6JnK1KcheKDDZXubbSoRdlNFFNGFTIbeiNsyjHnzI0ZrFk/621+21bx6wx9caLz/Pi+T3fz/Ob56AAoKwH2WAU2QyP+wNO6xKY3WgOsMseKJQvTrm6p0ohplzcuqR4/lsQ0QQmhzA0SxkUW6QPbv47xz9t3zBjd3ZeStu0g+OAFJGUESnUtYLwRqjHjyhqxxFCvVtE+dwxC84vc5ZklmV1dHnhrJUNlW9ty588ZS+wzSHiVwkMwxpAPRm/b0/kcOqF82/m5wyYpIBhwpXfyTCOyAjKLJT0Frji29sktD+xQgeX7ikrGoTVY3nhhJaJZFj/hFA+vD+YeMFOe7QwVhOF6c4yYHYUU53FaEm3Hl8UhNbKBKJdagVC1b0i0zPvyS3eRLayz7Didp+hSteb+fMT3XELwu8lGKtNg6DrNRaIRnQ9DSBlAr2QGsTo2euKlVUkC9t2JFNciUSKCwEFF0LMCi2S8LpjJWJBIwQDl8FrC8KXZ77oyXZDW7aD+qIguBrYsNEOCpv65VsPiE3Kn+y6DjHZgrl+L5AjHpj5HI2hPPPxKeNDH1cOUffKBwgpSk4iitLu5fDd9IOcsU9RS2FPkMPu4HfHoI9rSfalM4yk3aqtCA4HvcPjnTTz5XBkskZlZ0UIxIJ6kEO++D1yDtPSTnq5LJFjlh5/zTvQuVQBk3BtVWYEPc/7qjqvpzwaHRWZ+NHqjLkhD/Dar+FrrsXPqjSGJjNBe5CRSM9ZLbhYDgO2pp0+W8PqZQoLmCHQ+9AJNdFqaHpgg7oEo9E7/keOy24sWEON5q7NNg6jbV0R0APLQGeXQotdggR/HQhbciFszUJrkgWe+x0AK/AeaH6vligGzbdIxopAHmdTFZLjRRNV37YRVWVY1pVG6VD/9xv/AJGzmhVs7+fUAAAAAElFTkSuQmCC",
      "postion": "Programmer I"
    }, {
      "id": 7,
      "name": "Ferdinand",
      "email": "https://robohash.org/magnamporrotempora.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL+SURBVBgZBcFNaJtlAMDx//ORjzZbs7TJkmowbJcdZqr1oNavCiIIMraBh0IY7uZx8+OiVw9SQZgXp3gR3A5OtIigcxMcylyqVPADh0WNpO2bpk2bvm3e5P163sffT1hrATj/2drDwKXjR7JzwyhhGCVEScIoTlzgAOgBBugDO8DHwA0NAJDE8SMPVA7NvTpfAgAAwAuT/DBM8n3fVMMIDgLDf70BX//jPQtc1AAASRyXJ9ICgLU9Q0oItAClIZOS3JeRKClJKZitjnFPPjf54U/OOxIAwETRRE5DnMBBKHAj2AvA9cH1YWcEWwMDwOtX28wdy3F/MVXSAAAmiiYPpyVeAJ5vkFKgAaVAKlAIlIAEEGaf5r99fmm7jgYAMGFYzo8p3FHMMLBIaVESpBEoCQqLUoBVdPcD3r359z5wXgMAxGFYK0+kcH1LDGBBGYG0gAGFRVtJYsGkDHEYH/vi5cd3JQCACYNaJZ/BCy1CghICCUhAAADCgrUQBwEmDAyABnjuzetjWsl0JiUJjUFiAYsFDAIAAUgJkTEMvGEM7ANogDgIS7lcFinAD3xav/2Iu/4npakCTneHk0+d4dDhSW5f/4jfiwUek1uy67Rfm59/6z0NYMJgXOfSWBOxfONT8tLjxXMNPM9jfX2dZvMrVCrL2dOn0FrR6XTkysrK2+12uySeuHClCFw+Mz/7wvHsFs3vv2WhscDVT77kr1/vMF2pUK/X6XQ69Ho9OpubpI9Ut155qXF0aWnJ1SYMnwGeX7nb4k77Z2aq4wD0y6cYDG+xsLBAoVBgMBiwvb3N5fc/YHf8wW+Ac/l8PqNNFD10+umZsTcaj3Ltmkez2QSgtvs5a9KyuLhILpcDwPM8bJIwtXv7STjJxsaGr00UtTZ7Lldu3iXU0/TdAT98d4v6zAz1ep1ut8vq6iqZTIZarUa5XMYPo6PLy8t7juNsitnGpSJwEahhk6KK9qpToz9O3Fsp6kw6LYSA1qhEdnyCaVpYm9go8H3Hcbqe5539H/YvZvvl5HpaAAAAAElFTkSuQmCC",
      "postion": "Help Desk Operator"
    }, {
      "id": 8,
      "name": "Nichol",
      "email": "https://robohash.org/assumendaipsaminima.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFFSURBVCjPhZG/K8RxHMZfdy5OnEEMhhuMJCMldVl0JcOV7Bb2K/+CRakbTOdOsSjWK2WRZMDiR1eK7sJEuYsv98P3/XkM93Uj72d51+vp6aknJP6+yO+z3U/azTGsDt2rQGb5NQBCiHxqz3tUU5LUUFm73uZCi7Rw4lQ1OdVVVUUfaupLa5pJChESud5YcT4e4RPD4TDEDfs8lNz4iRcG0pPxKB7WVp4VYgwMaxXC4JJD1PHb2ibLN7f0oSSEQROdfGL4GEaOLN84rojiJiACAgwfhyPPFsIwhCFaCed1ujB8cmTbSSN4cA5hsMNnuvHJs4UFPYxRqthhK2Hj7KlBkWyADJ9FKryUtA4hAZnE23GZHq65I0KcMTxe8WYvjgIDTKe0M9gboxOjwTsvnpYuD6BtgKl+pZmzUdUoUVDmMhgr9N/cP2kRvjgCZVaBAAAAAElFTkSuQmCC",
      "postion": "Financial Advisor"
    }, {
      "id": 9,
      "name": "Weston",
      "email": "https://robohash.org/earumdoloressequi.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIMSURBVBgZpcHNi05xGMfhz/07hzTDiKZmEmLYeM3iKTKUiFhY2EhZ2NjIBgsWYoUoSWr+B7NhY6GkJBRhYSMvJYRSFDPPi3N+9/01Z2Jvcl0mif9h+46PH92yrXXpe0f9EhCBIvBwFCIUyJ2QkDsewcDsuv3y5adTN67sHytbo61rs+b0p6E5zER/u+PXgLGyUyt1vk8yU91aiSmlXJw/uJKZOnzxPY1SChpVdgQohAcEIkJ4BJ6FZ+EKKhfLh+fh4TRKJBqWDJNQMmTCwkjJMEuYOVaIIhJlFo3ITiN5OI0EmBmWjCIZqTAsQZFgVlFw/tZuTt/cjIqaRnjQSAoxzYxGApIZKRlFYRQGKcGvXLF4cBXHxjdS5R4RTqOMcP4yM6ZJnLy+DSlTRabKmUULVrJqeCMTvTZ7x0ZYoKs0ylzXTDPDAEmYGTkqdq45hCvwcALx+cdH1i0eZbLq8qx7iPXnDswv5UGjAMQUM5Do5QpX8P7bG+rI5Kipvebnrwk2LNnKZN3h8bsH38qI4C8DjClm9HKP7JmhgaXkcFzBlx8fWDh3mOcfH/L47Qs6Tsv2HR8fH1qyaH+4Ex64OxHBz8Ej9KqKKip6uWLF4Go2jezi6YdH3H/1hGXdE7fvXD6zxyTxL9aeS+3W0u19917f/VQFOz5f0CummCT+xchZa3sUfd3wka8X9I4/fgON+TR7PCxMcAAAAABJRU5ErkJggg==",
      "postion": "Accountant IV"
    }, {
      "id": 10,
      "name": "Nerita",
      "email": "https://robohash.org/quoscummaiores.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGASURBVDjLxVO7agJRED3XN4gPkEWwET/AysoqoE3+wcIPCEvEVsgnhJXgF4j+QraJLFjkAyxEsFCwsBYU32bPyF7WkEDAIsMOcxnmzJx5rLpcLrhHArhTQt5jMpl8nE6niqs4Ho84HA5a9/u91t1uRzuo1+tV4hRbcMEPkUjEMQxDgr6Lv81wOAzHcTCfz6umaQ6EgVvxJZ1OY7lcIhqNapAfyPdisUAymUShUGDRluseqNFoJNUzmQxWq9UNXbZCoFIKwWBQqicSCcTjcdi2jel0Wg2weiqVkl4ZFIvFpAoTZrNZ0W63i+FwiF6vh/P5jO12i2KxyHm0Qqy0Xq+Rz+d/nXS73Uaj0YBlWdo3m82EJRNUPOfz26fQhdDmiOXD61MZm83mJilZExviWtgrrvEu8ArWFj8fmrdiScDdUyyz/OcD4ix0Ag5sPB7r1VEZ4K2x0+mgVCqh2WyiVquJP5fLCXPV7/ff3V4efVemraf+qySIjKluIlv9+890d4IvgMkS1vrQFCsAAAAASUVORK5CYII=",
      "postion": "Quality Control Specialist"
    }, {
      "id": 11,
      "name": "Karol",
      "email": "https://robohash.org/liberoiustoqui.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALNSURBVDjLbZJtSFNxFIdvzKSBIfWlKCqMygiMoj5UhItR9CKaHxSNIqhMtIhsZSsrtbISZTE0nbP0w2Yh03xhmK2WKd3EmGV+KIJKiCTIoBesmXXd07mIlS8XDhf+/J/fec65VwGUcdVRGS1lo83RTUeZht+u4SvupvWSjYbc6In3J8IWAYM8qYXeZikvPG+Cx25oL4P67CCeLMvkgI7KcNqdrXTVwLN6ueyAO4VIV2g6Bw1WaM6FtqvQmAPXd7fiSA7/F9DmsPNEYD3AV6wJaBZd499ONw8bcR00U71Xo17C3Jlg32EbDWgri+FhiUbXLel4RaMpfxGNZyJEt0B0O6nJ7MS1v4CKXRE4kxZRGq/hkSmKTBqFG1Yo3LfZUatFz67rmmm0zqfO0kfLRajNgluH5H0MKhL7KNk+n2KzWULgxh4oWG1TRPcVnTWjs9WfMIpuHd7ziK6HylQT1xJNouvBnS5dY+soWm/kwhrEDHKiXyiiO0ynbNmTpR8aRDeIOwPRNQUCgQRVVVeIronSOLi4Nkj+SgNnlsPNIxKw+KsiusOoVbKYg/p2jVSk6LoD1B7dKPBvv9//i/KkbaL7jrwYsC41krNkdLSzUYOKbPc1t7MR3aDohoturL5dgd0898Gbe3g8HpeauvBUR0LkB785LNQeF671ZSzQA2SEil1HRTddFhM59tkEni2dB71eb0jgkPfcvm+9x9cND7XYCL28y49aC4HDMSM9yTOrlUm/spTA5QJrfOqBjwFads4hKDAlsn3rLLgcxaeiTfg2G/qmglcJPKJ3drlcqtPpVP3m6YSeNvD/8yVvLvo4kwIE9gs8JPCNsbOWHTN/fK86AAL9PKnwWepdhgHfFkP/RDhO4H6Bz/5//ihlXn5X2rKRD9YoBk5P523aNB7Eh2l3txhyxgUIXClwwlR7UVMWnLqzdcZHXVs6v9dh/fwPHS3E3E4GyQ4AAAAASUVORK5CYII=",
      "postion": "Health Coach IV"
    }, {
      "id": 12,
      "name": "Oswald",
      "email": "https://robohash.org/quivoluptatibusdolores.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALcSURBVDjLjZFpMNRxGMfVi17UNL3qRdcLRI2jiUgyHdp6ozIlco3Whm1c49gwmyNndGBtLB3uRdPuCrOtnWoPokGMs5WwMth1S9q/Y+PbzjaJqTFefOb34jffzzPP99EBoLMRUY57KZ3ZBrPDJfsgL9BV5wfp5dpb6W37879hOMhuP2mgWHd5pHQP1vLEX5+xKUEueTdzpNwCCqEPiIZUKHg2GCk7gK5s/ZlNCViOu1KVbULM1rOgbivE3AcWhlsFkCSYDWxK4GB3nSpjh658b+diubscqq4KKKVMxN84y/uvgGprQMminJtletiC5UlS+zqbNjMj/JeUPBqGKuOgrIpGXU4AjvgYCyzDTHasE5BtDpKyKOeXGe62WEteehC4pRFo5nshmUFD5Sc2kiTxMI05VHCUZrh9VZDubF731PcKymO9ICuNQgnNCUwPEp4HXECnmIypXg6E0ptIaQkF53MugisCYe1ryVoVZDrrc3olZf8UVpNzERPdbKh/9KGj8hrS6r1Bb/QDheUJOct+48JGxClo517FwgQfC4o0TPe/hqTKGeF8P7ilu0Hx7NJfwdZjGfRMeuC6wlrZLpjs4WJhKB61KcewNMVFax4JIY9OjYVRY2Pl+a7u2vAWmxfeDrSWOekocO8lD9F5ZWDkJGNAFInF8SIQfRTUJpthfjAC3+QCNGWelDVmnNipvYKuXY6TUxBfVdW9jEQZ4NMEUCRqVBf5YkZT3PzX21B9cflNr4dmFQYGa5iof2AeoxV0JFr8bOY+Bu2VEmQhQK5YwcPCcgzWpmFxNFs7XdXrrlnBXPsScj8QykrUJpiO1cQZG+kMZJxRcJNC4BrTAOobzfRqQJx5GcRkPxanRVgY13QwzlkDD+q5Lgw3sCGONOTo9BTfshbEO9yxcmJXWAR/hG1MB97ePw1J8nGIkywhijNbkcaZqKV3jRYl0YcJTYgQ0Q0IUYQ+8S5c7/0vfNrCXhlwpm0AAAAASUVORK5CYII=",
      "postion": "Systems Administrator IV"
    }, {
      "id": 13,
      "name": "Christian",
      "email": "https://robohash.org/aperiamundemagni.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJFSURBVDjLzZLdS9NRGMf3Fwy6jLrPKKerSAsqXzKn0xY4ZrIhbvulKwtrOCdYuWDOza02Ai96AxEEaXixTMkllDdKUjhrrmDMlMFGuLbTXO7N/b6d3+rCYFLQTQ98eTiH83yel/PwAPD+Rbz/A8D2dsupvlIRTjmdluS0XWT7WifJXu4gGUZN0q2tJHWxhSSbpGSrQRJJnKtT5AE0QEaVwMwLYH4eWF4G/H7A50Pu9StExsYQHR1FfGQEsQcPEXQ4ELzdj83T1Yl4+SkJB3iLJ4+AyUnA6QRWVgCPB5iYQE6nQ1CjQYhhEFWrsaFQ4F1jIz6ZzfB33QARlgU5QAnbo11kLSaAZsP6OvI2N4ecVIqQWIwv9fX4RrVaVYWPAwNYZdpBSo6HYweFsvwMaL97aL/TOUM/4HIB4TCwtARWLkeEBsYoJCYSIWAy4bOSAREcC0SLSkt/+4Wspp2fUammtvV6YGEB8HrB0tJJTQ0StbXYGBrCGg2OHT4aiB4QFBf8xpRcwU/KmqcyPfqfADqDRGUlUlYrnhoYdNtlbPs9CVqMFfG6XsHNgnuwdf4C/7tI7E733QI7Po6sxQKnQYk7TiWee4fhCblhf3kFzfZilHXutRVcjs2Ks/vjJ8/409puJK9roTJWw/XBAZfvfn6+ttlLsM92cIDkrhtGjpQfov2+of2uNfQJMe19jJ327P0wB/i7dT1xdV/S6lZh0N2WDx6caftzBTtFHxqbbEW462bymTnPnXedwS4QM1WcK/uXN3P3PwAfNsr5/6zP/QAAAABJRU5ErkJggg==",
      "postion": "Marketing Manager"
    }, {
      "id": 14,
      "name": "Andras",
      "email": "https://robohash.org/animieaquesit.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKqSURBVDjLpVNNT1NBFD3z3uvHo339gFZoCxpqRAlBJayMG4wLl2hYqT/AhQsT1xoTV65cEFeiG5MuJLpAJTEmWo26oBbUhSIfEUhLsLUt0NL2fc44r0UDhh2T3NyZ5M6Zc8+ZSxhj2M8SsM8l3RybSrpblIFCxfBsqaZAOSEKBotvKGdn8aC0ed4OBmIZRm2zkPmxuCiFg/6uK8M9Ps1gxO0Sd6GT//ekmeuaKdY1K3rxjqYK+bIZ101KEsk1ZAo6qhrDSpEiU6LIblCsbVLkKwyFKoNhAdmijtEXa1ivaoIS7josVDWLuBwCYhEfXk3nsbFloN1H4OBknCKBU7IDCMgExbKO8Q85BFp9aAu4GpyEmmo2KMY7vOhs9+FlOo/1ioGQV2hcdNpAW5+Qm76FiY8/EWrzIR7zgmybJ1RVq6kmL4xHvQgHW/D4bQalig6/m8AjqSgtjEMJ9aNPft+okaUdNlbrTQaEq2MaJtwSxcFYAJOpPLIFFauzE1DCA/BFBhCuvYOzNtdg9ldZoaZZsNnouolcqYKudgUn4kEcORRE+vscaiuT/PUArPIzRPsvQVhOgBoaGv+PERvAZLa/+SK/HFbg9zg5RYLuAzKOS68R6T0PqDNIPUrAG6jDVUxBXXnDrTQ4AGVCtbS6rHEfj3XKLBoU0OqxuIAWlFoabrMEJVgD1ZbsYlhczO6h62j7lUAuX1LLv7NLpO/C3aSzNX7SpXg8kkskElfTwXW4Fnkonj47TNyOKVA9u92zA6JnELkFAYnk/Gbia/wz2WuYZu4PXQ31Dt/r6JH5qyner47pp7MYHOkFEf2AfA7pBzfyjNIzewKkRk9l+y8nYqKwDGau22rtmj9RPorcty+Yf377ibTXhJma7p4ZG6lzjXjrdEewfxl2ZqzjD9JZU0+1XOyXAAAAAElFTkSuQmCC",
      "postion": "Geologist III"
    }, {
      "id": 15,
      "name": "Adeline",
      "email": "https://robohash.org/quiautaut.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJOSURBVDjLjZPbaxNBFMarf4cFwb9AIgXBR18Enyw+i1gs4g01kphSlPjQeAtNzNqGNLVpNCGhEvBS21Rr0ZIK6ovFiKbNbXNpdpNsstncUz9nNiauErEDHwMz8/1mzjlz+gD0UZGxh0hFNPAf7SXa3fUpAKparVZoNpvbrVYLvUT2YbFYTEqIEjBAzZIkoVwud1UsFiEIAjKZjAxJp9NgGKYL6Zh3UQA9UK1WUa/X5ZmqVCqhUCiA4zgZUKlUQC+xWq1tCAUM3v6+74hu2cH4eUz6OcwFcvgYEmUANYiiiFF3Aq5XHIJRCeqHLOJbFcg5OW6Mqm495fL2NznYl7OwveYxsZSF6QUHEpIc9+eQgOvuFL6EMjC6wrg4GZZfIwOGbazX8TaPY/qAr5Ms72oOBt8WknwVem8KWmcCY0/S0E1HcXYyhjNMBAYH2waYF8izl3I4eGLqmjLjz9by+PRNxCMS0k0C0c+yMDjj0MwmMOGJ4+Vqtg0Yn+dwf5HH/sG75/4uWzAiwbfCQ+dMYSGQxdhMHMPmMFY+8MgX623AiDu9+YAADg35LErzHU8SGkcSI4+T0DoSuGRnoZ5mcdIUwdC9zd85OHpjQzP+nMOVmZj4NSZBKNVh9LbN6xslnGai8CxmMP+Ol81criwntgugZTysDmovTEXEUVcKV8lt520s5kjJvP4MTpkjyApVXCZmvTWKRqMh6w9A5yO9Xy9ijUgZCi1lL/UEkMUf/+qDHtruAn5BDpAvXKYbOzGTsyW5exWAfgrZQTt3RFu//yfHVsX/fi5tjwAAAABJRU5ErkJggg==",
      "postion": "Chief Design Engineer"
    }, {
      "id": 16,
      "name": "Vivia",
      "email": "https://robohash.org/officiisundeenim.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKmSURBVDjLjZPdS5NRHMf3D+h9XXVZRGBXBpYEdSGUaNkLoZWPmNNEI4tekMg0c+HKGLoldhFuBa2bKSm57WI2Wcryhfm4t/biptNRc29uzu2Z+/acU4+Y3njgy++cH+f7Ob/zJgIg2imTyVRkMBh6dTrdzMjIyG+NRhNRq9UOlUql+KBUnN49f7tjNpvzeLOcN2f8fj/C4TDi8TiSySRisRhsNisUfZ1cv7xD2SuT5P8H+Gf+6na7kcvlkEqlQCA+nw+hUAjZbBa57Aa4DQcM+o/ofvnQKOl6kr8NICsTcyaTAWkcx4GMXS4XotEohaY3VrCZsGJr8ye0o+/R/rRJSQG8+QRf9lYikaCG9fV1CgkEArDb7SD5bJZDMmZHOmGjVWR4tdyt37p/r7FIxJvlS0tLIHI4HNRE9kxAq6urtJ/ejPEAljf6+f4aX2EaRqMRYrFYLiooKMB+Rc6GgCORCDweDxiGmaMAlmXhdDoxMTGBwcFBOpnE5eVlmhdy5GC9Xi8WFxcRDAZRWVkZogAySTARCBHJCXkhmha8mGJdVHbfCi5UXFnbAyASzDsBZcxZtChuou51GW5IStCh7ERJ2SXrni0IIBKFLXS+fYxnnxl8Yfswt6JFj+42rvYcwynmqGVfh1j1/AyG5t9gyCqjVyzV30KPXozCxgNp+pBkMpl8fHwcwSh/lQELrL5ZzHt+YNY5hWm7Cedbj2OUfYedbdjSRwB/37NUKs3reNGu/zSsgueXjUIIYMY5iWnHdxTfOYRubQ26tNXU3DVWLVSQ2v5MbW1teY9aHww0NNdxmjE1Jue/UYjFbUbrQD0qpIfxSltLVyaRjHmAVLT7ezY3N52sa6jtv15TxV6+djFcXlEaLi0/xxYzR2YLGw8mSdm84rwkZP4fYOfdUwjREaAAAAAASUVORK5CYII=",
      "postion": "Administrative Assistant II"
    }, {
      "id": 17,
      "name": "Gordan",
      "email": "https://robohash.org/sintdistinctiodolorem.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHYSURBVDjLjZPLSxtRFMa1f0UXCl0VN66igg80kQZtsLiUWhe14MKFIFHbIEF8BNFFKYVkkT9GKFJooXTToq2gLkQT82oyjzuvO8nXe65mmIkRHfg2c+/3O+d8l9MBoIMkvi6hkNDAA3om9MTz+QAhy7JqnPO667poJ3GOdDr92Q/xAwbIrOs6GGOeFEVBtVpFoVCQkHw+j0wm40Ga5k4C0AXTNGHbNsxv32Hu7YNtp1Cr1VAsFiXAMAxQkWw2ewNpBZDZPjiA+XYebioJ9nIKqqqiVCrdGUlm0gpwzs5hzrwGX1uGMTMLtvrBG6VcLstOcrncPQDOYW3tgCffw0isg4uqnP6J8AhCnVAelUqlPYD/PYE59wZ67BXsL4fg/6ryYhNC82uaJkFtAdbHT+CJFbgbCagjYbDNlDev4zgyH4KQ7gA2n/fMUWWeiAtzBMrgWABAXciAhaibAKAYnXyaGx3/5cSXoIajsH/8hHP8B87llTSSqAMSmQMAfSL2VYtET5WRCLcW3oHt7Aaq+s1+eQAt/EJXh8MNe2kRSmwa/LoQeOsmpFUeQB0ag9I/jIve0G/n6Lhx3x60Ud3L4DbIPhEQo4PHmMVdTW6vD9BNkEesc1O0+t3/AXamvvzW7S+UAAAAAElFTkSuQmCC",
      "postion": "Senior Quality Engineer"
    }, {
      "id": 18,
      "name": "Lonna",
      "email": "https://robohash.org/liberoexsint.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGBSURBVDjLY/j//z8DJZhhcBoQMuUBJxCzkWxAeXl5PYiOm/toTtDEB0U5OTkCqamp/XFxcfvDwsISYOpsbGwUjI2N12tpaQUgazYoKSn5D8QJgRPuqdevf/nKp+MOf3R0tEJISMh/Ly+vBGTL1NXVC1BcADQgobi4eH5ubu59ED9o4r05Hs23WkBsd3f3+XZ2dudhalVUVBxkZGQUUAwoLCx0ADpZAejk/0AnB7g13JTOX/z4lW3pVWmgkw0sLCz+A53sAFIrKSkZgBIG+fn5AZmZmQIgNtDJ+4ODg/eD2Pbl19odK65Ogzp5v7y8/HxxcXEFAQEBBxQD0tPTAxISEhwiIiIcAgICEry9vf8DnexgnnNJKHbGvVcGyedVgE5OUFZW/s/HxzcfJRaATnYAOtkBWRDo5PvAUAa7Qj/xfIV1waUVIDY3N/d9NjY2lMAEObkA6GS4nywtLRUMDAzqgU6uBzrZQTv2DKdX442r6uGnhVhYWAoYGBgEhkBSpqsBAOTifxrCztZUAAAAAElFTkSuQmCC",
      "postion": "Pharmacist"
    }, {
      "id": 19,
      "name": "Carroll",
      "email": "https://robohash.org/beataenobisadipisci.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ4SURBVDjLpZNdaM1xGMc//5fDZqTZ2c6Y9mIkmZelll2hlCVF3FDKlZRyQWJXmsKNCzeLcqdE5D0mL/M2s6HlJSlhs2Rv51iYOZ3z+/2ex8X/zHZJfvX0/J6b7+/zfH/P46kq/3NCgNNt3w6ost2pzBYRnIAVwTnBiWKdTAiHs4oTeX5467y6EEBUd22qmxb/l5ebzn1Y/IfAicQBCi7uBFVwFsSBMdE9mwGThYwBYxhtvIcxbvIEgTEfFGYVg9go1OZEMmAyYLPwth8AY924B85JTsCDviSoRCQiEYkby0AiAUA2J4Cq0nyzX3+mjZ5pG1RV1XOPB1RV9fyTqL7QEdVXOqOc/J7Wbceeq6pGBMYJokoYwMWOIYLA51LnEGEAV58N0T54iEdXBBUh1tXEgrIpZE1E4I+1oEAYeGyqLyH0YePyEmI+rK8rwfcC5lfPxfcD1i5LRF9rZdwD4wQVCH243pXkWeooT1sUVSV8sR/f94i13KHh1Utam0+iRaUsKVwH1OcErKCqxAJoqC2mowXmVFTS3fuJhtpi8p6WUTTcxbyte5lctZD069tMb2vlzurYLh+iqQMIfI+7r1IA9PT24uFx73WKzP0TzF2xgbyPD/BObWFK92WqKgpRT3eHANbayAMfVi2KEwb7WFkT5+GbFCtq4rR+/UxeaRWs3TO+A00zCcSrHPdAlZryqfQPp6lO5NMz8JOywkm8+/wdnZHg18sbFFzbSSY9wC9g5EeAC+jLDZK2Hzz7fmnWSYGxDmMdzgrGCdZZ6ks3MrXzFhUz8gmDGCNJS8+gr4oc9/52nds3lzeODvftCJxX4QL9onBizW175DdAmHVGgBeCfwAAAABJRU5ErkJggg==",
      "postion": "Research Assistant II"
    }, {
      "id": 20,
      "name": "Dwain",
      "email": "https://robohash.org/velplaceatnon.png?size=50x50&set=set1",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEuSURBVDjLpZM9SgRBFIRr/EHXwGVFAxUPYmTgMTyEoblX2NwjGG9i5B0EMTIQFWTBaHTeqyqDHmdX0FlhHzSvO6n+qvp1ZRvL1AqWrLX5w93VuSXBJkhCKovMrpOJk4vr6lcBidg7PgVMWIYkWATEbv9wc/03AZkwiY/3J7i93STcEmxu7yOz6ReQCDFhFTExIRJWgox+gcwot2UUAmY5kzADzkBEL0Er0PUZReUGIhcRNAU5muI/E1JiZzjF4cEbHp+HyIx+C2otdPgqfTodoP5c/w9BgNn8sPD6sgFzFVu76ieIaGYhMtrwWiGVPRkLCLJkYJX0vyms8rQLMigWBqMj2IKZsFSWCbGM83xVtjGZTFzXNeL2spv3+fmf/QnCJu5HZwCA8XhcVct+5y9H3H2zjxE/HwAAAABJRU5ErkJggg==",
      "postion": "Account Representative II"
    }]


    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View >
                <Image
                    style={styles.avt_container}
                    source={{ uri: item.photo }}
                />
            </View>
            <View style={{ width:'80%', alignItems:'center' }}>
                <Text>{item.name}</Text>
                <Text style={{fontSize:12}}>{item.postion}</Text>
            </View>
             <TouchableOpacity style={{width:'10%', color:'green', fontWeight:'500'}}>
              <Text>Call</Text>
             </TouchableOpacity>
           
        </View>
    );

    return (
        <View>
            <View>
                <Text>FlatList</Text>
            </View>

            <FlatList
                data={USERS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Bai1_lab4;
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    // custum avt
    avt_container:{
        borderRadius: 40,
        width:40,
        height:40,
    }
});
