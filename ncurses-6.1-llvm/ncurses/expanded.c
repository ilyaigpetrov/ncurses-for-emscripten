/* generated by MKexpanded.sh */
#define NEED_NCURSES_CH_T 1
#include <curses.priv.h>

#ifndef CUR
#define CUR SP_TERMTYPE
#endif

#if NCURSES_EXPANDED
 void
_nc_toggle_attr_on (attr_t *S, attr_t at)
{
 { if (((int)((((unsigned long)(at) & ((chtype)((((1U) << 8) - 1U)) << ((0) + 8))) >> 8))) > 0) { (*S) = ((*S) & ALL_BUT_COLOR) | (attr_t) (at); } else { (*S) |= (attr_t) (at); } if ((_nc_tracing & (0x1000))) _tracef ("new attribute is %s", _traceattr((*S)));};
}

 void
_nc_toggle_attr_off (attr_t *S, attr_t at)
{
 { if (((int)((((unsigned long)(at) & ((chtype)((((1U) << 8) - 1U)) << ((0) + 8))) >> 8))) > 0) { (*S) &= ~(at|((chtype)((((1U) << 8) - 1U)) << ((0) + 8))); } else { (*S) &= ~(at); } if ((_nc_tracing & (0x1000))) _tracef ("new attribute is %s", _traceattr((*S)));};
}

 int
_nc_DelCharCost_sp (SCREEN *sp, int count)
{
 return (((cur_term)->type. Strings[105] != 0) ? sp->_dch_cost : (((cur_term)->type. Strings[21] != 0) ? (sp->_dch1_cost * count) : 1000000));
}

 int
_nc_InsCharCost_sp (SCREEN *sp, int count)
{
 return (((cur_term)->type. Strings[108] != 0) ? sp->_ich_cost : (((cur_term)->type. Strings[31] && (cur_term)->type. Strings[42]) ? sp->_smir_cost + sp->_rmir_cost + (sp->_ip_cost * count) : (((cur_term)->type. Strings[52] != 0) ? ((sp->_ich1_cost + sp->_ip_cost) * count) : 1000000)));
}

 void
_nc_UpdateAttrs_sp (SCREEN *sp, chtype c)
{
 if (!(((chtype)((*((sp)->_current_attr))) & (chtype)((chtype)((~(1U - 1U))) << ((0) + 8))) == ((chtype)(c) & (chtype)((chtype)((~(1U - 1U))) << ((0) + 8))))) { vidputs_sp(sp, ((chtype)(c) & (chtype)((chtype)((~(1U - 1U))) << ((0) + 8))), _nc_outch_sp); };
}

#if NCURSES_SP_FUNCS
 int
_nc_DelCharCost (int count)
{
 return _nc_DelCharCost_sp (SP, count);
}

 int
_nc_InsCharCost (int count)
{
 return _nc_InsCharCost_sp(SP, count);
}

 void
_nc_UpdateAttrs (chtype c)
{
 _nc_UpdateAttrs_sp(SP,c);
}
#endif
#else /* ! NCURSES_EXPANDED */
NCURSES_EXPORT(void) _nc_expanded (void) { }
#endif /* NCURSES_EXPANDED */
