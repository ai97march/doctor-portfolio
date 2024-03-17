import React from "react";
import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../Header/Header";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import css from "./Calendar.module.scss";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";

const Calendar = () => {
  //   // const theme = useTheme();
  //   // const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <>
      <section className={`paddings ${css.wrapper}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`innerWidth ${css.container}`}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${css.heading} bottomPaddings`}
          >
            <span className="primaryText">CITA</span>
          </motion.div>
          <Box m="20px">
            <Box display="flex" justifyContent="space-between">
              {/* CALENDAR SIDEBAR */}
              <Box
                flex="1 1 20%"
                backgroundColor="#1F2A40" //{colors.primary[400]}
                p="15px"
                borderRadius="4px"
              >
                <Typography variant="h5">Events</Typography>
                <List>
                  {currentEvents.map((event) => (
                    <ListItem
                      key={event.id}
                      sx={{
                        backgroundColor: "#4cceac", //colors.greenAccent[500],
                        margin: "10px 0",
                        borderRadius: "2px",
                      }}
                    >
                      <ListItemText
                        primary={event.title}
                        secondary={
                          <Typography>
                            {formatDate(event.start, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* CALENDAR */}
              <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                  themeSystem="bootstrap5"
                  height="75vh"
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                  ]}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  select={handleDateClick}
                  eventClick={handleEventClick}
                  eventsSet={(events) => setCurrentEvents(events)}
                  initialEvents={[
                    {
                      id: "12315",
                      title: "All-day event",
                      date: "2023-11-10",
                    },
                    {
                      id: "5123",
                      title: "Timed event",
                      date: "2023-11-12",
                    },
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Calendar;
