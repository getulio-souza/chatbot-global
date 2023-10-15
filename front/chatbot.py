# import random

# introMessage = {
#   "hello": ["Olá, tudo bem? escolha uma opção abaixo para iniciar a sua navegação:"] 
# }

# ##EDUCATION

# optionPath = {
#   'I': ["Sou estudante e quero saber mais sobre cursos"],
#   'II': ["Sou profissional e estou em busca de novas oportunidades"],
# }

# courses = {
#   1: ["Front-End"],
#   2: ["Back-End"],
#   3: ["Full-Stack"],
# }

# frontEndMessage = {
#   "Bem vindo à formação Front End. Aqui você terá a oportunidade de aprender a desenvolver layout fantásticos com os mais modernos e atuais frameworks do mercado. Selecione uma linguagem de programação do seu interesse:"
# }

# frontEndCourses = {  
#   1: ["Javascript"],
#   2: ["Angular"],
#   3: ["React"],
#   4: ["Vue "],
# }

# backEndMessage = {
#   "Bem vindo à formação BackEnd. Aqui você terá a oportunidade de aprender a criar APIs e estruturas robustas com os mais modernos e atuais frameworks do mercado. Selecione uma linguagem de programação do seu interesse:"
# }

# backEndCourses = {  
#   1: ["Java"],
#   2: ["C#"],
#   3: ["Python"],
#   4: ["Node"],
# }

# ##WORK

# workMessage = {
#   "Bem vindo à BeDev. Chegou a hora de conquistar aquela tão sonhada vaga como programador no mercado de trabalho. Nossas vagas atendem tanto profissionais em início de carreira quanto aqueles mais experientes. Tem espaço para todo mundo!" 

#   "Agora fala pra gente, qual é o seu nível para que possamos te direcionar melhor aqui?"
# }

# workLevels = {
#   1: ["Junior"],
#   2: ["Pleno"],
#   3: ["Senior"]
# }

# # workOption = [workMessage, workLevels]


# def get_response(user_input):
#   user_input = user_input.lower()

#   match user_input:
#     case "ola" | "olá" | "oi" | "bom dia" | "boa tarde" | "boa noite":
#       return random.choice(introMessage["hello"])
    
#     #study
#     case 'I':
#       return random.choice(optionPath['I'])  
        
#     case 1:
#       return random.choice(courses[1])
    
#     case 2:
#       return random.choice(courses[2])
    
#     case 3:
#       return random.choice(courses[3])
    
#     #work
#     case "II":
#       return random.choice(optionPath["II"])
    
#     case 1:
#       return random.choice(workMessage)
    
#     case 2:
#       return random.choice(courses[2])
    
#     case 3:
#       return random.choice(courses[3])
  
#   # get_response("hello")
#   # get_response("1")
#   # get_response("2")


