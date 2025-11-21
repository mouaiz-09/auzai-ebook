import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./Styles/UI.css";
import Alert from "./ALert";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
/*-----icons------ */
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
/*-----icons------ */
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Dialogs({ titel, Dz }) {
  const [open, setOpen] = React.useState(false);
  const [Clipboard, SetClipboard] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function Cpoy() {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => SetClipboard(true))
      .catch((err) => console.error("خطأ:", err));

    setTimeout(() => {
      SetClipboard(false);
    }, 3000);
  }
  /*------------sher---------------------- */
  const openWin = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const { bookText, bookTitle, bookUrl } = Dz;
  console.log(Dz);

  const shareWeb = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: bookTitle,
          text: bookText,
          url: bookUrl,
        });
      } catch (e) {
        console.log(e);
      }
    } else alert("الميزة غير مدعومة في المتصفح");
  };
  /*------------sher---------------------- */

  return (
    <React.Fragment>
      <Button className="  DwBtn" onClick={handleClickOpen} variant="contained">
        {titel}
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          مشاركة الكتاب
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="SherDialog">
            <Alert type={"success"} text={"تم النسخ بنجاح"} open={Clipboard} />
            <div className="LinkCpy">
              <input
                style={{ padding: "10px" }}
                disabled
                value={window.location.href}
              />
              <Button
                onClick={Cpoy}
                style={{ marginLeft: "5px" }}
                variant="contained"
                startIcon={<ContentCopyIcon />}
              >
                نسخ الرابط
              </Button>
            </div>

            <div className="SherMedai">
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button startIcon={<ShareIcon />} onClick={shareWeb} />
                <Button
                  startIcon={<FacebookIcon />}
                  onClick={() =>
                    openWin(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        bookUrl
                      )}`
                    )
                  }
                />
                <Button
                  startIcon={<TwitterIcon />}
                  onClick={() =>
                    openWin(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        bookTitle + " — " + bookText
                      )}&url=${encodeURIComponent(bookUrl)}`
                    )
                  }
                />
                <Button
                  startIcon={<WhatsAppIcon />}
                  onClick={() =>
                    openWin(
                      `https://api.whatsapp.com/send?text=${encodeURIComponent(
                        bookTitle + " - " + bookText + "\n" + bookUrl
                      )}`
                    )
                  }
                />
              </ButtonGroup>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            startIcon={<DoNotDisturbIcon />}
            fullWidth
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            اغلاق
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
