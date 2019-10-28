import {
	Tag,
	Col,
	Icon,
	Cell,
	CellGroup,
	Swipe,
	Toast,
	SwipeItem,
	GoodsAction,
	GoodsActionBigBtn,
	GoodsActionMiniBtn,
	Actionsheet,
	Sku,
	Card, Button, SwipeCell, Dialog, Tab, Tabs, Row, Checkbox, CheckboxGroup, SubmitBar, NavBar, Tabbar, TabbarItem, Panel, List, Step, Steps, Field,
	Badge, BadgeGroup, Popup, Stepper, RadioGroup, Radio, Picker, Uploader, Info
} from 'vant'
import 'vant/lib/index.css'

const components = [
	Tag,
	Col,
	Icon,
	Cell,
	CellGroup,
	Swipe,
	SwipeItem,
	GoodsAction,
	GoodsActionBigBtn,
	GoodsActionMiniBtn,
	Actionsheet,
	Sku,
	Card,
	Button,
	SwipeCell,
	Dialog,
	Tab, Tabs, Toast, Row, Checkbox, CheckboxGroup, SubmitBar, NavBar, Tabbar, TabbarItem, Panel, List, Step, Steps, Field,
	Badge, BadgeGroup, Popup, Stepper, RadioGroup, Radio, Picker, Uploader, Info
]

export default (Vue) => {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}
