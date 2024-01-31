import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        flexDirection: 'row',
        padding: "16px",
        alignItems: 'center',
        gap: '12px',
        alignSelf: 'stretch',
    },
    profilebox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2px',
        flex: '1 0 0',
    },
    name: {
        color: '#131313',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: '-0.3px',
    },
    designation: {
        color: '#454545',
        fontFamily: 'Inter',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        letterSpacing: '-0.3px',
    },
    saperator: {
        width: "1px",
        height: "24px",
        opacity: "0.2",
        background: "#734A00"
    },
iconContainer: {
    display: 'flex',
        flexDirection: 'row',
            margin: '12px',
                padding: '12px',
                    gap: '24px',
                        alignItems: "center"
},
isSelected: {
    display: 'flex',
        padding: '16px',
            alignItems: 'center',
                gap: '12px',
                    margin: '8px',
                        alignSelf: 'stretch',
                            borderRadius: '16px',
                                background: '#FFF7E8',
    }
}));

export default useStyles;
