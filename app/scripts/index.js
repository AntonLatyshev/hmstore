import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import header from "./header"
import carousel from "./carousel"
import pluso from "./pluso"
import tabs from "./tabs"
import catalog from "./catalog"

$(() => {
  header();
  carousel();
  pluso();
  tabs();
  catalog();
});
