import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    rootWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    pageRoot: {
        // основной габарит страницы
        alignSelf: "flex-start",
        width: 1170,
        marginTop: 160 // учет отступа шапки
    },
    paper: {
        // белый контейнер форм логина/пароля - с большими боковыми отступами
        textAlign: "center",
        color: theme.palette.text.primary, // цвет шрифта
        padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`
    },
    formWrapper: {
        paddingBottom: theme.spacing(2), // Отступ от кнопки формы до комментария под формой
        width: "100%"
    },
    formBottomButton: {
        marginTop: theme.spacing(3) // кнопка формы
    }
}));
