<Carousel \
    photos?: string[], \
    alt?: string, \
    theme: string, \
    width: string, \
    height: string,\
/>

<BorderedInput\
    theme: string,\
    value: string,\
    onChange: () => void, \
    onBlur?: () => void, \
    placeholder?: string, \
    label?: string, \
    type?: React.HTMLInputTypeAttribute, \
    accept?: string, \
    disabled?: boolean, \
    error?: boolean,\
/>

<UnderlinedInput\
    theme: string,\
    value: string,\
    onChange: () => void, \
    onBlur?: () => void, \
    placeholder?: string, \
    label?: string, \
    type?: React.HTMLInputTypeAttribute, \
    accept?: string, \
    disabled?: boolean, \
    error?: boolean,\
/>

<Button\
    theme: string,\
    text: string,\
    onClick?: () => void,\
    disabled?: boolean,\
/>

<Checkbox \
    id?: string,\
    label?: string,\
    checked: boolean,\
    onChange: () => void,\
    readOnly?: boolean,\
/>

<Dropdown \
    list: IOption[{\
        _id?: string,\
        title?: string,\
        search?: string,\
        photo?: string,\
    }],\
    theme: string,\
    title: string,\
    chosen: IOption | IOption[],\
    setChosen: (obj: object) => void,\
    search?: boolean,\
    create?: boolean,\
    onCreate?: () => void,\
    multiple?: boolean,\
    photo?: boolean,\
/>

<ExtendedTabs\
    theme: string,\
    tabs: ITab[{\
        id?: number,\
        isCanClosed?: boolean, // Можно ли закрыть вкладку. Добавляет кнопку закрытия вкладки. (по умолчанию – false)\
        setClose?: React.Dispatch<React.SetStateAction<any>>;\
        isInWindowTitle?: boolean, // Транслируем ли заголовок вкладки в заголовке окна. (по умолчанию – false)\
        setWindowTitle?: () => void,\
        isIconFirst?: boolean, // Ставим ли иконку первой (по умолчанию - false)\
        colorsSettings?: object, // Настройки цвета\
        menu?: object[], // Меню вкладки\
        path: string, // Путь как указан в приложении для выделения активной вкладки\
        name: string, // Название вкладки\
        onClick: () => void,\
        active?: boolean,\
        setActive?: () => void,\
        theme: string,\
    }],\
    setTabs?: React.Dispatch<React.SetStateAction<any>>,\
/>

<Toggler\
    id: string,\
    theme: string,\
    leftText?: string,\
    rightText?: string,\
    checked: boolean,\
    onChange?: () => void,\
    disabled?: boolean,\
/>